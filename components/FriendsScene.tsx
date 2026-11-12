/* eslint-disable @next/next/no-img-element */
// Pony & friends playground (mirrors the ponyabc.co.uk homepage scene):
// Pony swings, Lion & Elephant seesaw, Puppy slides, Kitten/Bunny peek,
// Piglet leans, Turtle counts, Chick floats by in a balloon. Decorative.
const CDN = "https://ponyabc.co.uk/cdn/shop/files/";
const BG = `${CDN}pa-play-bg.png`;

export default function FriendsScene() {
  const front = { backgroundImage: `url('${BG}')` };
  return (
    <div className="mk-fr" aria-hidden="true">
      <img className="mk-fr__bg" src={BG} alt="" width={1672} height={941} loading="lazy" />
      <div className="mk-fr__balloon"><img src={`${CDN}pa-friends-balloon.png`} alt="" width={400} height={400} loading="lazy" /></div>
      <img className="mk-fr__l mk-fr__l--seesaw" src={`${CDN}pa-play-seesaw.png`} alt="" width={760} height={507} loading="lazy" />
      <img className="mk-fr__l mk-fr__l--pony" src={`${CDN}pa-play-pony-swing.png`} alt="" width={560} height={840} loading="lazy" />
      <div className="mk-fr__front mk-fr__front--beam" style={front} />
      <img className="mk-fr__l mk-fr__l--puppy" src={`${CDN}pa-play-puppy.png`} alt="" width={330} height={330} loading="lazy" />
      <img className="mk-fr__l mk-fr__l--turtle" src={`${CDN}pa-play-turtle.png`} alt="" width={320} height={480} loading="lazy" />
      <img className="mk-fr__l mk-fr__l--kitten" src={`${CDN}pa-play-kitten.png`} alt="" width={300} height={450} loading="lazy" />
      <div className="mk-fr__front mk-fr__front--kitten" style={front} />
      <img className="mk-fr__l mk-fr__l--bunny" src={`${CDN}pa-play-bunny.png`} alt="" width={290} height={435} loading="lazy" />
      <div className="mk-fr__front mk-fr__front--bunny" style={front} />
      <img className="mk-fr__l mk-fr__l--piglet" src={`${CDN}pa-play-piglet.png`} alt="" width={470} height={470} loading="lazy" />
      <img className="mk-fr__l mk-fr__l--daisy" src={`${CDN}pa-play-daisy.png`} alt="" width={210} height={315} loading="lazy" />
      <div className="mk-fr__front mk-fr__front--daisy" style={front} />
    </div>
  );
}
