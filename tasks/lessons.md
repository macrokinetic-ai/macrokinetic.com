# Lessons

## 2026-11-16 — PonyABC email sent from the wrong address
- What happened: a reply to Caroline (Derbyshire) was drafted with the Gmail connector, which always sets From = benny@macrokinetic.com. Changing From in Gmail web did not save (no body edit afterwards), Chrome was then blocked, and the email went out from macrokinetic.com.
- Rule: any PonyABC email (to anyone, including replies) must leave from benny@ponyabc.co.uk.
  1. Never treat a connector draft as ready for PonyABC. After creating it, switch From to benny@ponyabc.co.uk in Gmail web AND make a body edit so Gmail saves, then confirm `sender` with get_draft before telling Benny it is ready.
  2. If the From change cannot be confirmed, the first line of the message to Benny must say, in bold, that the draft is NOT ready to send and From must be changed — not a note at the end.
