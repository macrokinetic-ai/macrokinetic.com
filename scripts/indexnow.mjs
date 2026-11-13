// Submit every URL in the live sitemap to IndexNow (Bing, Yandex and others).
// Run manually after a production deploy:  npm run indexnow
// Optional: npm run indexnow -- --dry-run   (lists URLs, submits nothing)
//
// The key file public/<KEY>.txt must be live at https://www.macrokinetic.com/<KEY>.txt
// before submitting, or IndexNow rejects the request (403).

const HOST = "www.macrokinetic.com";
const KEY = "389d77772c7ce4e79f5e8c2260a30451";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const dryRun = process.argv.includes("--dry-run");

async function main() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status} ${SITEMAP_URL}`);
  const xml = await res.text();
  const urlList = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)]
    .map((m) => m[1])
    .filter((u) => new URL(u).host === HOST);
  if (urlList.length === 0) throw new Error("No URLs found in sitemap.");

  console.log(`Found ${urlList.length} URLs in ${SITEMAP_URL}`);
  urlList.forEach((u) => console.log(`  ${u}`));
  if (dryRun) {
    console.log("Dry run: nothing submitted.");
    return;
  }

  const keyRes = await fetch(KEY_LOCATION);
  const keyText = keyRes.ok ? (await keyRes.text()).trim() : "";
  if (keyText !== KEY) {
    throw new Error(`Key file not live or wrong at ${KEY_LOCATION} (status ${keyRes.status}). Deploy first.`);
  }

  const submit = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
  });
  const body = await submit.text();
  console.log(`IndexNow response: ${submit.status} ${submit.statusText}${body ? ` ${body}` : ""}`);
  // 200 = accepted, 202 = accepted, key validation pending.
  if (submit.status !== 200 && submit.status !== 202) process.exit(1);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
