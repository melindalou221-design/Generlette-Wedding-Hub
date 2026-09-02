const defaultData = {
  note: "Structure is live. Add the real vendor names, phone numbers, private getting-ready address, and final coordinator details through Netlify environment variables after the GitHub repository is private again.",
  bride: {
    title: "Bride Timeline · Melinda",
    summary: "A calm getting-ready timeline designed around an 8:00 AM hair/makeup start, a 3:30 PM ceremony, and enough travel/parking buffer for Flagstaff Mountain.",
    timeline: [
      {time:"7:30 AM",item:"Breakfast + hydrate",note:"Eat before hair and makeup gets busy."},
      {time:"8:00 AM",item:"Hair + makeup begins",note:"Keep water, snacks, lip color and touch-up kit nearby."},
      {time:"11:30 AM",item:"Lunch + reset",note:"Real food, restroom, water."},
      {time:"12:30 PM",item:"Details + getting-ready photos",note:"Dress, shoes, jewelry, bouquet, invitation details."},
      {time:"1:15 PM",item:"Final hair/makeup + get dressed",note:"Build in extra time instead of rushing."},
      {time:"1:50 PM",item:"Load car + final restroom",note:"Bouquet, vows, phone, water, emergency kit."},
      {time:"2:00 PM",item:"Depart private getting-ready location",note:"Target arrival around 2:50 PM; route should be rechecked day-of."},
      {time:"2:50 PM",item:"Arrive near Sunrise Amphitheater",note:"Stay out of guest sightline; final touch-ups."},
      {time:"3:15 PM",item:"Processional lineup",note:"Coordinator confirms everyone is present."},
      {time:"3:30 PM",item:"Ceremony begins",note:"You made it."}
    ],
    reminders:["Eat breakfast and lunch even if you are nervous.","Bring vows, rings only if assigned, bouquet, touch-up kit, water and comfortable shoes for travel.","Keep the private getting-ready address out of the public guest app.","Coordinator should confirm mountain parking/traffic before departure."]
  },
  groom: {
    title: "Groom Timeline · Cory",
    summary: "A simple groom timeline with enough cushion to arrive before guests and help the ceremony start on time.",
    timeline:[
      {time:"8:30 AM",item:"Breakfast + easy morning",note:"Hydrate and keep the morning low-stress."},
      {time:"11:30 AM",item:"Lunch",note:"Do not skip it."},
      {time:"12:30 PM",item:"Shower + get dressed",note:"Suit, shoes, accessories, vows."},
      {time:"1:15 PM",item:"Groom details + photos",note:"Rings only if assigned to you."},
      {time:"1:50 PM",item:"Load car + final check",note:"Phone, vows, water, emergency items."},
      {time:"2:00 PM",item:"Depart private getting-ready location",note:"Recheck route to Flagstaff Mountain."},
      {time:"2:50 PM",item:"Arrive Sunrise Amphitheater",note:"Meet coordinator/officiant before guests are fully seated."},
      {time:"3:05 PM",item:"Final ceremony check",note:"Rings, officiant, processional, music cues."},
      {time:"3:15 PM",item:"Wedding party lineup",note:"Coordinator takes over."},
      {time:"3:30 PM",item:"Ceremony begins",note:""}
    ],
    reminders:["Eat and hydrate.","Confirm vows and ring handoff.","Keep phone on silent once guests arrive.","Coordinator should confirm the reception transition plan before the processional starts."]
  },
  ceremony: {
    title:"Ceremony Coordinator · Sunrise Amphitheater",
    summary:"Reservation window is 2:00–5:00 PM. The goal is a clean 3:30 PM start and a fast photo/strike transition so the couple and guests can get to Denver.",
    timeline:[
      {time:"1:50 PM",item:"Coordinator staged nearby",note:"Do not begin venue setup before rental access."},
      {time:"2:00 PM",item:"Venue access + setup begins",note:"Signage, florals, reserved seating, ceremony essentials."},
      {time:"2:25 PM",item:"Violinist arrival / setup",note:"Confirm processional and recessional cues; no amplification assumptions unless approved."},
      {time:"2:40 PM",item:"Ceremony setup check",note:"Parking signage, reserved rows, bouquets, tissues, water, license/rings plan."},
      {time:"2:45 PM",item:"Guest arrival",note:"Greeters guide parking and seating."},
      {time:"3:00 PM",item:"Violin prelude begins",note:"Seat late arrivals quietly."},
      {time:"3:15 PM",item:"Wedding party lines up",note:"Confirm every person and the music cue order."},
      {time:"3:27 PM",item:"Final seating + quiet venue",note:"Hold processional until coordinator signals."},
      {time:"3:30 PM",item:"Processional / ceremony begins",note:""},
      {time:"4:00 PM",item:"Target recessional",note:"Ceremony may run to about 4:05."},
      {time:"4:05 PM",item:"Family + wedding-party photos",note:"Release non-photo guests toward Denver immediately."},
      {time:"4:35 PM",item:"Couple wraps photos + departs",note:"Reception travel buffer starts now."},
      {time:"4:40 PM",item:"Strike ceremony items",note:"Leave no décor/trash behind."},
      {time:"5:00 PM",item:"Reservation ends / site clear",note:"Final sweep."}
    ],
    processional:["Cory’s parents escorted","Melinda’s mother escorted","Officiant","Cory","Groomsmen","Bridesmaids","Cory’s sisters","Miah & Londyn / daughters","Maid / Matron of Honor","Melinda"],
    setup:["No open flames or generators at Sunrise Amphitheater.","Parking is limited; confirm $5 OSMP permit / ParkMobile zone 24700 messaging is visible.","Confirm violinist cues before prelude begins.","Have marriage license, vows, rings plan, bouquets and rose-presentation flowers accounted for.","Remember the site has pit-latrine restrooms and no changing rooms.","Keep the 5:00 PM hard-clear deadline visible to the setup/strike team."],
    vendors:[{role:"Day-of Coordinator",name:"",arrival:"1:50 PM",phone:""},{role:"Violinist",name:"",arrival:"2:25 PM",phone:""},{role:"Officiant",name:"",arrival:"By 3:00 PM",phone:""},{role:"Photographer",name:"",arrival:"As contracted",phone:""},{role:"Florals / setup lead",name:"",arrival:"2:00 PM",phone:""}]
  },
  reception: {
    title:"Reception Coordinator · City Park Pavilion",
    summary:"Recommended guest flow: 5:00 PM cocktail hour, 6:00 PM grand entrance, 6:05 PM First Song and 6:20 PM dinner. This gives both guests and the couple a realistic Boulder-to-Denver travel cushion.",
    timeline:[
      {time:"2:00 PM",item:"Reception setup underway",note:"Tables, signage, bar, dessert, kids area, lighting and vendor load-in."},
      {time:"4:30 PM",item:"Full room check",note:"Place cards/table signs, bar signage, signature drinks, guestbook, camera/audio-message QR cards."},
      {time:"4:50 PM",item:"Guest arrival buffer",note:"Early arrivals may begin entering if venue/team is ready."},
      {time:"5:00 PM",item:"Cocktail hour starts",note:"Guests arriving from Boulder have a realistic landing window."},
      {time:"5:30 PM",item:"Coordinator checks couple ETA",note:"Hold entrance timing if mountain traffic is heavy."},
      {time:"5:50 PM",item:"Wedding party lineup",note:"Wedding party to “Rock With You”; couple to “Lil Boo Thang”."},
      {time:"6:00 PM",item:"Grand entrance",note:""},
      {time:"6:05 PM",item:"First Song",note:"Cory & Melinda sing “Heartbeat” with original track as backing; no traditional first dance."},
      {time:"6:15 PM",item:"Welcome + blessing",note:"Keep concise so dinner stays on time."},
      {time:"6:20 PM",item:"Dinner begins",note:""},
      {time:"7:00 PM",item:"Speeches + toasts",note:"Coordinate with catering before clearing."},
      {time:"7:35 PM",item:"Cake + dessert",note:""},
      {time:"7:45 PM",item:"Open dancing",note:""},
      {time:"9:30 PM",item:"Late-night snack",note:"Passport secret goes live."},
      {time:"10:30 PM",item:"Private couple moment / last song",note:"Coordinator quietly clears guests toward send-off."},
      {time:"10:40 PM",item:"Glow-stick send-off",note:""},
      {time:"11:00 PM",item:"Venue clear",note:"Final vendor sweep."}
    ],
    setup:["Confirm Signature Drinks signage: Something Blue — Blue Skies; Something Old — Old Fashioned.","Confirm kids table, dessert area, guestbook, disposable-camera and audio-message links/QRs are visible.","Assigned tables, not assigned individual seats.","Confirm First Song audio setup and backing-track level before guests arrive.","Stage glow sticks before the final hour without announcing them too early."],
    vendors:[{role:"Reception Coordinator",name:"",arrival:"Before setup",phone:""},{role:"Caterer",name:"",arrival:"Per contract",phone:""},{role:"Bartender / Bar",name:"",arrival:"Before 5:00 PM",phone:""},{role:"DJ / Audio",name:"",arrival:"Before sound check",phone:""},{role:"Photographer",name:"",arrival:"With couple / per contract",phone:""},{role:"Dessert / Cake",name:"",arrival:"Before guest arrival",phone:""}]
  }
};

export default async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', {status:405});
  let body={};
  try{body=await req.json();}catch{}
  const expected=process.env.WEDDING_PRIVATE_PASSCODE;
  if(!expected) return Response.json({error:'Private dashboard not configured'}, {status:503});
  if(!body.code || body.code!==expected) return Response.json({error:'Unauthorized'}, {status:401});
  let data=defaultData;
  if(process.env.WEDDING_PRIVATE_DATA){try{data=JSON.parse(process.env.WEDDING_PRIVATE_DATA)}catch{}}
  return Response.json(data,{headers:{'cache-control':'no-store'}});
};
