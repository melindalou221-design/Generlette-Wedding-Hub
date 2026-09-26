// Guest table lookup. The seating list lives server-side so the full guest list
// is never bundled into the public app — guests only get back the names that
// match what they type.
const tables = [
  {table:1, place:"Lookout Mountain", guests:["Crystal Marrero","Jen Marrero","Clarissa Romero","Plus One (Romero)","William"]},
  {table:2, place:"Pikes Peak", guests:["Amber Antenor","Nemy Antenor","Brooke Antenor","Isaac Antenor","Shiloah Antenor","Olive Antenor","Moriah Antenor"]},
  {table:3, place:"Mt Blue Sky", guests:["Danielle Hedges","Jeremy Hedges","Bailey Hedges","Elise Hedges","Madeline Hedges","Melissa Ashley"]},
  {table:4, place:"Durango & the Animas River", guests:["Frank Roberts","Martha Roberts","Kelly Reckel","Destiny Reckel","Michelle Reckel","Michelle’s Husband (Reckel)","Kid 1 (Reckel)"]},
  {table:5, place:"Red Rocks Amphitheatre", guests:["Ellen Gardner","Richard Gardner","Jackson Greenhaw","Jenny Tilghman","Jay Tilghman","Justin Tilghman","Patricia Roberts"]},
  {table:6, place:"National Sand Dunes", guests:["Bertram Generlette","Patricia Generlette","Angie Lee","Adrian","Jeremy Limerick"]},
  {table:7, place:"Garden of the Gods", guests:["Kristen Hill","Andrew Hill","Cooper","Shalee Adams","Cam Adams","Michael Berghini","Madyson Berghini"]},
  {table:8, place:"St. Mary’s Glacier", guests:["Dillon","Laura","Jonathan Roberts","Calee","Cameron"]},
  {table:9, place:"Royal Gorge", guests:["Brayden Roberts","Morgan Roberts","Sloane Roberts","Miah","Londyn","Steve Floyd","Julie"]}
];

const normalize = (value='') => value.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[’']/g,'');
const words = (value) => normalize(value).split(/[^a-z0-9]+/).filter(Boolean);

export default async (req) => {
  const q = normalize(new URL(req.url).searchParams.get('q') || '').trim();
  if (q.replace(/[^a-z0-9]/g,'').length < 2) return Response.json({matches:[]});
  const terms = words(q);
  const matches = [];
  for (const t of tables) {
    for (const name of t.guests) {
      const nameWords = words(name);
      const full = nameWords.join(' ');
      // Match "jer", "hedges", or "jeremy hed" — every typed word must start a word in the name.
      const hit = full.startsWith(terms.join(' ')) || terms.every(term => nameWords.some(w => w.startsWith(term)));
      if (hit) matches.push({name, table:t.table, place:t.place, image:`/images/table-signs/table-${t.table}.webp`});
    }
  }
  return Response.json({matches:matches.slice(0,12)}, {headers:{'cache-control':'public, max-age=300'}});
};

export const config = { path: '/api/find-table' };
