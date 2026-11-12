/* eslint-disable @next/next/no-img-element */
// Animated PonyABC sensory-room scene (mirrors the ponyabc.co.uk sensory banner):
// Pony taps a card with the pen, music notes rise, and the floor lamp + wall
// wash cycle through colours. Layers are the PonyABC ChatGPT-made PNGs on the
// ponyabc.co.uk Shopify CDN. Decorative only (aria-hidden).
const CDN = "https://ponyabc.co.uk/cdn/shop/files/";
const COLOURS = ["red", "green", "blue", "purple", "pink", "orange"] as const;

export default function SensoryScene() {
  return (
    <div className="mk-sn" aria-hidden="true">
      <img src={`${CDN}pa-b-sensory-bg.png`} alt="" width={1536} height={1024} className="mk-sn__bg" fetchPriority="high" />
      <div className="mk-sn__light">
        {COLOURS.map((c) => (
          <span key={c} className={`mk-sn__lt mk-sn__lt--${c}`} />
        ))}
      </div>
      <div className="mk-sn__lamp">
        {COLOURS.map((c) => (
          <img key={c} src={`${CDN}pa-b-sensory-globe-${c}.png`} alt="" width={400} height={400} className={`mk-sn__globe mk-sn__cy mk-sn__cy--${c}`} />
        ))}
      </div>
      <div className="mk-sn__c mk-sn__c--elephant">
        <div className="mk-sn__m"><img src={`${CDN}pa-b-sensory-elephant.png`} alt="" width={553} height={515} /></div>
      </div>
      <div className="mk-sn__c mk-sn__c--bunny">
        <div className="mk-sn__m"><img src={`${CDN}pa-b-sensory-bunny.png`} alt="" width={452} height={641} /></div>
      </div>
      <div className="mk-sn__c mk-sn__c--pony">
        <div className="mk-sn__m"><img src={`${CDN}pa-b-sensory-pony.png`} alt="" width={800} height={790} /></div>
      </div>
      <div className="mk-sn__notes">
        <span className="mk-sn__note mk-sn__note--1">♪</span>
        <span className="mk-sn__note mk-sn__note--2">♫</span>
        <span className="mk-sn__note mk-sn__note--3">♪</span>
      </div>
    </div>
  );
}
