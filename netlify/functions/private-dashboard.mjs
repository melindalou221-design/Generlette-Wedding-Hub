const defaultData = {
  note: "Private day-of binder. Keep passwords, private addresses, personal phone numbers and other sensitive details in Netlify environment variables rather than browser code.",
  bride: {
    title: "Bride Day-of Guide · Melinda",
    summary: "Bride-only timeline, personal reminders and the recovered floral-binder guide. The exact private getting-ready address stays server-side; the dashboard refers to it only as the Arvada getting-ready location.",
    timeline: [
      {time:"7:30 AM",item:"Breakfast + hydrate",note:"Eat before hair and makeup starts. Set out water, snacks and medications/personal essentials."},
      {time:"8:00 AM",item:"Hair + makeup begins",note:"Sara D Hair is paid in full. Makeup artist: Christina; contact/time still needs final confirmation."},
      {time:"11:30 AM",item:"Lunch + reset",note:"Real food, water, restroom, then protect hair/makeup."},
      {time:"12:30 PM",item:"Detail / getting-ready photos",note:"Dress, shoes, jewelry, invitation suite, Daughter charms, bouquet details."},
      {time:"1:15 PM",item:"Get dressed + final beauty touch-ups",note:"Leave cushion instead of rushing."},
      {time:"1:45 PM",item:"Private-item check",note:"Vows, Daughter Pandora charms, bouquet, phone, charger, touch-up kit, comfortable shoes, water."},
      {time:"2:00 PM",item:"Depart Arvada getting-ready location",note:"Use about a 50–60 minute planning buffer and recheck Flagstaff Mountain traffic/parking that day."},
      {time:"2:50 PM",item:"Arrive near Sunrise Amphitheater",note:"Stay out of guest sightline; restroom and final touch-ups before lineup."},
      {time:"3:15 PM",item:"Processional lineup",note:"Nessa takes over the lineup and confirms music cues."},
      {time:"3:30 PM",item:"Ceremony begins",note:""},
      {time:"4:05–4:35 PM",item:"Family + wedding-party photos",note:"Then leave for City Park Pavilion."},
      {time:"~5:30 PM",item:"Arrive / freshen up at reception",note:"Target depends on Monday traffic."},
      {time:"5:50 PM",item:"Reception entrance lineup",note:"Wedding party first, then Cory & Melinda."},
      {time:"6:00 PM",item:"Grand entrance",note:"Cory & Melinda enter to Lil Boo Thang."}
    ],
    reminders:[
      "Eat breakfast and lunch even if you are nervous.",
      "Pack vows, Daughter charms, bouquet, touch-up kit, water, phone charger and comfortable travel shoes.",
      "Tammy will bring the couple-picked-up cake to City Park Pavilion.",
      "Do not put the private getting-ready address in public pages or source code.",
      "Confirm Christina’s makeup arrival/start time and final services.",
      "Use the included Wedding Flower Ordering Guide as the controlling count sheet for bouquets, flower-girl corsages and boutonnières; recheck counts against the final wedding-party roster before purchasing."
    ],
    florals:{
      title:"Bride Floral Binder",
      sourceNote:"Recovered from the latest Bridal Bouquet Complete Guide and wedding floral collection boards created September 2, 2026.",
      visualAssets:[
        {label:"Bridal Bouquet Complete Guide · prep, styling + exact bridal recipe",file:"bridal-bouquet-guide.jpg",path:"/images/bridal-bouquet-guide.jpg",status:"Included"},
        {label:"Wedding Flower Ordering Guide · corrected stem counts + buy list",file:"wedding-flower-ordering-guide.jpg",path:"/images/wedding-flower-ordering-guide.jpg",status:"Included"}
      ],
      bouquetOrder:[
        ["White roses","8 stems","Exact bridal bouquet recipe"],
        ["Ivory spray roses","4 stems","Exact bridal bouquet recipe"],
        ["White hydrangea","2 stems","Exact bridal bouquet recipe"],
        ["Blue hydrangea","2 stems","Exact bridal bouquet recipe"],
        ["White stock or lisianthus","4 stems","Exact bridal bouquet recipe"],
        ["White mums","3 stems","Exact bridal bouquet recipe"],
        ["Blush spray roses","2 stems","Exact bridal bouquet recipe"],
        ["White orchid stems","2 stems","Exact bridal bouquet recipe"],
        ["Hanging green amaranthus","5 stems","Exact bridal bouquet recipe"],
        ["White astilbe","5 stems","Exact bridal bouquet recipe"],
        ["Light blue delphinium","3 stems","Exact bridal bouquet recipe"]
      ],
      prep:[
        "Day before: use clean buckets, cool water and floral preservative; hydrate flowers at least 4–6 hours, preferably overnight.",
        "Hydrangea: strip leaves below waterline, recut sharply and hydrate deeply; the latest guide uses alum on the freshly cut bottom 1/2 inch before water.",
        "Keep all flowers cool, out of direct sun and away from fruit.",
        "Build bouquet 2–4 hours before the ceremony; keep stems in water until final wrapping.",
        "Gently loosen tight rose center petals by hand; remove bruised/guard petals; handle orchids by the stem."
      ],
      assembly:[
        "Start with the largest hydrangea as the center and spiral stems outward.",
        "Add white roses at varied heights, then stock/lisianthus/mums for texture.",
        "Add spray roses in small groups, then blue accents and greenery.",
        "Build the orchid and hanging-amaranthus cascade last so the waterfall shape stays intentional.",
        "Fill holes, check the front/profile, then bind tightly with floral tape, 2–3 strong rubber bands, and another smooth tape layer.",
        "Finish with 5–6 yards of 2.5–3 inch navy organza ribbon; overlap the handle wrap neatly and leave long flowing tails. Add pearl strand if desired."
      ],
      wearables:[
        "Current ordering guide covers: bridal bouquet ×1, maid-of-honor bouquet ×1, bridesmaid bouquet ×4, junior-bridesmaid bouquet ×1, flower-girl corsage ×3 and boutonnière ×4.",
        "Flower-girl corsage recipe per piece: 1 ivory spray-rose bloom, 1 blush spray-rose bloom, 1 small blue-hydrangea floret cluster, 1 small white filler cluster, plus ribbon loop or wristlet.",
        "Boutonnière recipe per piece: 1 ivory spray-rose bloom or 1 small white-rose bloom, 1 small blue-hydrangea floret cluster, 1 small white filler cluster and 1 greenery tip.",
        "Ordering guide buy totals include 34 white roses, 13 ivory spray-rose stems, 9 blush spray-rose stems, 8 white hydrangea, 8 blue hydrangea, 12 light-blue delphinium, 18 white stock/lisianthus, 12 white mums, 4 white orchid stems, 14 hanging green amaranthus, 12 white astilbe, 6–8 airy-white-filler stems, 6–8 soft-greenery/eucalyptus stems and 20–22 yards navy organza ribbon.",
        "Use the included Wedding Flower Ordering Guide image as the controlling visual reference when shopping and assembling personals."
      ]
    }
  },
  groom: {
    title: "Groom Day-of Guide · Cory",
    summary: "A low-stress groom plan with ceremony responsibilities, family items and enough mountain-travel buffer.",
    timeline:[
      {time:"8:30 AM",item:"Breakfast + easy morning",note:"Hydrate and keep the morning calm."},
      {time:"11:30 AM",item:"Lunch",note:"Do not skip it."},
      {time:"12:30 PM",item:"Shower + get dressed",note:"Suit, shoes, accessories, boutonniere, vows."},
      {time:"1:15 PM",item:"Groom details / photos",note:"Confirm ring handoff and Daughter-charm plan with Melinda/Nessa."},
      {time:"1:50 PM",item:"Load car + final check",note:"Phone, vows, water, emergency kit."},
      {time:"2:00 PM",item:"Depart Arvada getting-ready location",note:"Recheck route to Flagstaff Mountain and parking conditions."},
      {time:"2:50 PM",item:"Arrive Sunrise Amphitheater",note:"Meet Nessa and Bertram before guest seating is complete."},
      {time:"3:05 PM",item:"Ceremony check",note:"Vio/Gio cues, rings, vows, Daughter charms, mother escort."},
      {time:"3:15 PM",item:"Wedding party lineup",note:"Cory will escort his mother during the processional."},
      {time:"3:30 PM",item:"Ceremony begins",note:""},
      {time:"4:05–4:35 PM",item:"Photos",note:"Depart for Denver immediately after required portraits."},
      {time:"5:50 PM",item:"Reception entrance lineup",note:"Be ready for Lil Boo Thang cue."},
      {time:"6:00 PM",item:"Grand entrance",note:""},
      {time:"6:05 PM",item:"First Song",note:"Sing Heartbeat with Melinda using the backing track."}
    ],
    reminders:[
      "Eat, hydrate and keep your phone charged.",
      "Confirm vows and ring handoff.",
      "Be ready to escort your mother in the processional.",
      "Confirm Daughter charms are with the couple/coordinator before ceremony.",
      "Check in with Bertram, Nessa, Vio and Gio before guests are fully seated.",
      "Phone on silent before processional."
    ]
  },
  ceremony: {
    title:"Ceremony Coordinator · Nessa Dover",
    summary:"Nessa Dover · Peaks and Promises Photography · ceremony coordination + content creation. $125 still due. Sunrise Amphitheater reservation: 2:00–5:00 PM; ceremony starts 3:30 PM.",
    timeline:[
      {time:"1:50 PM",item:"Nessa staged nearby",note:"Venue rental access starts at 2:00."},
      {time:"2:00 PM",item:"Venue access + ceremony setup",note:"Signs, reserved seating, florals, roses, Daughter charms, ceremony supplies."},
      {time:"2:20 PM",item:"Vio + Gio arrival / music check",note:"Confirm all processional song transitions and recessional cue."},
      {time:"2:35 PM",item:"Photo/content + setup check",note:"Confirm photographer/content positions do not block guest sightlines."},
      {time:"2:45 PM",item:"Guest arrival",note:"Parking is limited; keep guest path clear."},
      {time:"3:00 PM",item:"Prelude playlist / live music begins",note:"Birds of a Feather, 360, Espresso, Positions, Ocean Eyes + compatible additions."},
      {time:"3:15 PM",item:"Wedding party lineup",note:"Use exact person-by-person order below."},
      {time:"3:27 PM",item:"Final seating + quiet venue",note:"Hold entrances until Nessa signals."},
      {time:"3:30 PM",item:"Processional begins",note:""},
      {time:"~4:00–4:05 PM",item:"Recessional",note:"This Will Be (An Everlasting Love)."},
      {time:"4:05–4:35 PM",item:"Family + wedding-party photos",note:"Release other guests to Denver immediately."},
      {time:"4:35 PM",item:"Couple/wedding party depart",note:"Reception transition."},
      {time:"4:40 PM",item:"Strike ceremony items",note:"Leave no décor/trash behind."},
      {time:"5:00 PM",item:"Reservation ends / site clear",note:"Hard clear."}
    ],
    processional:[
      "Officiant — Bertram Generlette enters and takes place",
      "Cory escorts his mother, then takes his place",
      "Shalee Adams — Maid/Matron of Honor",
      "Michael Berghini — Best Man",
      "Adrian Chandler with Danielle Hedges and Amber Antenor",
      "Jonathan Roberts with Miah Smith and Londyn Smith",
      "Isaac Antenor with Shiloah Antenor",
      "Camden Adams — Flower Girl",
      "Moriah Antenor — Flower Girl",
      "Elise Hedges — Flower Girl",
      "Melinda — Bride"
    ],
    music:[
      {cue:"Guest seating / prelude",song:"Birds of a Feather · 360 · Espresso · Positions · Ocean Eyes + compatible songs",who:"Vio + Gio / ceremony music plan"},
      {cue:"Processional Part 1",song:"Into You — Tamia",who:"Cory; Shalee; Michael; Adrian/Danielle/Amber; Jonathan/Miah/Londyn"},
      {cue:"Processional Part 2",song:"Stand by Me",who:"Isaac/Shiloah; Camden; Moriah; Elise"},
      {cue:"Bride entrance",song:"Kissing You",who:"Melinda"},
      {cue:"Recessional",song:"This Will Be (An Everlasting Love)",who:"Cory & Melinda + wedding party"}
    ],
    ceremonyOrder:[
      "Welcome by Bertram Generlette",
      "Rose presentation to mothers — REHEARSAL CONFIRMATION: older binder placed this after the kiss; Melinda recalled it earlier, before vows. Current speaking sheet stages it before vows unless the couple changes it.",
      "Personal vows — Cory & Melinda",
      "Ring exchange",
      "Cord of Three Strands — previously requested in the officiant binder; confirm at rehearsal whether it is still included",
      "Family joining ceremony — Cory and Melinda speak directly to Miah and Londyn and give each a Pandora charm that says Daughter",
      "Pronouncement",
      "Kiss",
      "Final blessing / introduction",
      "Recessional"
    ],
    setup:[
      "No open flames or generators at Sunrise Amphitheater.",
      "Confirm $5 OSMP permit / ParkMobile zone 24700 parking messaging is visible.",
      "Stage roses for mothers where they can be reached without crossing the ceremony space.",
      "Stage both Daughter Pandora charms and any presentation boxes before guests arrive.",
      "If Cord of Three Strands remains in the ceremony, stage the cord/table and confirm Bertram’s transition language.",
      "Have vows, rings, tissues, water and marriage-license plan accounted for.",
      "Pit-latrine restrooms only; no changing rooms.",
      "Keep 5:00 PM hard-clear deadline visible to setup/strike team."
    ],
    vendors:[
      {role:"Ceremony Coordinator + Content",name:"Nessa Dover · Peaks and Promises Photography",arrival:"1:50 PM",payment:"$125 due",phone:"Store contact privately"},
      {role:"Violinist",name:"Vio",arrival:"Target 2:20 PM",payment:"Paid in full",phone:"Store contact privately"},
      {role:"Guitarist",name:"Gio",arrival:"Target 2:20 PM",payment:"Paid in full",phone:"Store contact privately"},
      {role:"Officiant",name:"Bertram Generlette · Cory’s dad",arrival:"By 3:00 PM",payment:"Family",phone:"Store contact privately"},
      {role:"Photographer",name:"Olivia M. Photography / O.M Creative LLC",arrival:"Per final coverage plan",payment:"Paid in full",phone:"303-214-8912 · omphoto88@gmail.com"}
    ]
  },
  reception: {
    title:"Reception Coordinator · Tammy Murrie",
    summary:"Tammy Murrie · Colorado Acclaimed Weddings · reception setup/cleanup. $450 due day-of. Early arrivals may enter around 4:45 PM; official cocktail hour 5:00 PM; entrance 6:00 PM; dinner 6:20 PM.",
    timeline:[
      {time:"2:00 PM",item:"Reception setup underway",note:"Guest tables, sweetheart table, welcome area, cake/dessert, bar, buffet, kids area, signs and lighting."},
      {time:"4:30 PM",item:"Full-room check",note:"Table signs, guestbook, camera/audio-message links, candles, bar signage, seating/table finder."},
      {time:"4:40–4:50 PM",item:"Cocktail hors d’oeuvres target arrival",note:"Delivery/vendor still needs to be finalized."},
      {time:"4:45 PM",item:"Early guest arrival window",note:"Open if setup/bar team is ready."},
      {time:"5:00 PM",item:"Official cocktail hour",note:"Bar + hors d’oeuvres + magician/guest entertainment as scheduled."},
      {time:"5:30–5:45 PM",item:"Italian hot-food delivery target",note:"Better than 5:00 for a 6:20 dinner; receive, hold hot and stage buffet."},
      {time:"5:30 PM",item:"Check couple ETA",note:"Adjust entrance only if mountain traffic is heavy."},
      {time:"5:50 PM",item:"Wedding-party entrance lineup",note:"DJ confirms Rock With You and Lil Boo Thang cues."},
      {time:"6:00 PM",item:"Grand entrance",note:"Wedding party to Rock With You; Cory & Melinda announced and enter to Lil Boo Thang."},
      {time:"6:05 PM",item:"First Song",note:"Cory & Melinda sing Heartbeat; no traditional first dance."},
      {time:"6:15 PM",item:"Dinner blessing + remarks",note:"Frank Roberts, Melinda’s dad."},
      {time:"6:20 PM",item:"Dinner begins",note:"Italian buffet + Jamaican food if secured."},
      {time:"6:55–7:00 PM",item:"Toasts",note:"Shalee Adams → Michael Berghini → Miah & Londyn together."},
      {time:"7:30 PM",item:"Cake + dessert",note:"Tammy brings cake from the couple’s pickup to the venue and stages it."},
      {time:"7:40 PM",item:"Open dancing",note:""},
      {time:"9:30 PM",item:"Late-night snack",note:"Menu still finalizing; Passport secret reveal."},
      {time:"10:30 PM",item:"Private couple moment / last song",note:"Begin guest send-off staging."},
      {time:"10:40 PM",item:"Glow-stick send-off",note:""},
      {time:"11:00 PM",item:"Venue clear",note:"Final cleanup/vendor sweep."}
    ],
    setup:[
      "Reception design: romantic ivory + soft blue with navy and gold accents; warm LED candlelight; elegant, airy and conversation-friendly.",
      "Assigned tables, not assigned individual seats.",
      "Confirm Signature Drinks signage: Something Blue — Blue Skies; Something Old — Old Fashioned.",
      "Confirm kids table, dessert area, guestbook, disposable-camera and Messages of Love links/QRs are visible.",
      "Confirm First Song audio/backing track and microphone setup before guests arrive.",
      "Stage glow sticks before the final hour without announcing them too early.",
      "Decor will be packed in labeled boxes by setup zone. Suggested labels: Sweetheart Table; Welcome + Seating Chart; Guest Tables; Cake + Dessert; Bar + Signs; Buffet; Kids Table; Emergency/Extras.",
      "As the wedding gets closer, add real setup photos to the coordinator binder so Tammy can match each boxed décor zone exactly.",
      "Photo booth is not currently planned; do not reserve setup space or décor for one unless the plan changes."
    ],
    decor:{
      guestTables:[
        "8 round guest tables.",
        "Per table: 5 bud vases; 2–3 blue hobnail LED candle holders; 1 floating LED candle cylinder.",
        "Flowers per table: 2 white roses; 1–2 white spray roses; 1–2 white carnations; baby’s-breath accents; 1–2 blue delphinium; 1 calla lily on every other table.",
        "Menu cards, dusty/soft-blue napkins, gold flatware and chargers.",
        "Keep arrangements low and conversation-friendly."
      ],
      sweetheart:[
        "Use the included FINAL Sweetheart Table Mockup as the primary reference until an actual rehearsal/setup photo is added.",
        "Gold ‘Mr & Mrs’ tabletop sign — not ‘The Generlettes’.",
        "Ivory/champagne textured linen with gold place-setting accents and gold Chiavari chairs.",
        "Hydrangea-forward florals: white + soft-blue hydrangeas, white roses and baby’s breath; only a few light-blue delphinium stems for airy height.",
        "Keep floral arrangements low enough for easy conversation and photographs.",
        "Use a light, airy eucalyptus/greenery garland across the front — less greenery than the earlier mockup.",
        "Weave soft warm-gold vine fairy lights through the front greenery for the main romantic glow.",
        "Use a restrained candle mix: a few floating LED candle cylinders plus small gold/clear votives. Do not overcrowd the tabletop with candles.",
        "No light-wall/fairy-light backdrop behind the table; all fairy lights belong on the front greenery/table décor.",
        "Final setup photo will replace/supplement the mockup once Cory & Melinda stage the actual décor before the wedding."
      ],
      welcome:[
        "Welcome sign and thank-you message at the entrance.",
        "Seating chart / Find My Table prompt.",
        "Guestbook plus Disposable Camera and Messages of Love QR/link cards.",
        "Card box / gift area positioned nearby but not blocking guest flow.",
        "Use 3 bud vases, 1 floating LED cylinder, 2 blue hobnail LED candles and simple greenery as the binder’s gift/welcome-table base."
      ],
      cake:[
        "2 white calla lilies; 2–3 white anthuriums; 2 hydrangea stems; 4–5 bud vases; 3 LED candles; soft blue draping; cake stand.",
        "Tammy receives/transports the cake from the couple’s pickup plan and sets it at the venue."
      ],
      buffet:[
        "2–3 long food tables; 6–8 small bud vases total; 6 blue hobnail LED candles; 6 floating LED cylinders; minimal greenery runners; food labels/menu signage.",
        "Avoid large arrangements that interfere with serving."
      ],
      inspirationImages:[
        {label:"Something Blue sign",path:"/images/something-blue.jpg"},
        {label:"Something Old sign",path:"/images/something-old.jpg"},
        {label:"Desserts sign",path:"/images/desserts-sign.jpg"},
        {label:"Kids Table sign",path:"/images/kids-sign.png"}
      ],
      visualAssets:[
        {label:"Reception vision + guest-table reference",file:"decor-reception-vision.jpg",path:"/images/decor-reception-vision.jpg",status:"Included"},
        {label:"Welcome area + seating chart reference",file:"decor-welcome-seating.jpg",path:"/images/decor-welcome-seating.jpg",status:"Included"},
        {label:"FINAL sweetheart-table mockup · hydrangeas + gold vine fairy lights",file:"decor-sweetheart-table.png",path:"/images/decor-sweetheart-table.png",status:"Included"},
        {label:"Reception shopping list + layout reference",file:"decor-reception-shopping-list.jpg",path:"/images/decor-reception-shopping-list.jpg",status:"Included"},
        {label:"Final actual sweetheart-table setup photo · add closer to wedding",file:"final-sweetheart-setup.jpg",status:"Take a real photo after staging the decorations and add it here for Tammy."}
      ]
    },
    food:[
      {item:"Italian dinner",detail:"Grilled salmon · mashed potatoes · fettuccine Alfredo with Parmesan-crusted chicken · Caesar salad",status:"Target hot delivery 5:30–5:45 PM"},
      {item:"Jamaican dinner",detail:"Jerk chicken · rice and peas",status:"Vendor still needs to be secured"},
      {item:"Cocktail-hour hors d’oeuvres",detail:"Menu/delivery still unresolved",status:"Target delivery 4:40–4:50 PM"},
      {item:"Cake",detail:"Picked up by Cory & Melinda; Tammy brings it to City Park Pavilion",status:"Confirm pickup/storage/transport plan"}
    ],
    vendors:[
      {role:"Reception Coordinator / Setup / Cleanup",name:"Tammy Murrie · Colorado Acclaimed Weddings",arrival:"Setup before guests",payment:"$450 due day-of",phone:"Store contact privately"},
      {role:"Bartender",name:"Alfredo Junior",arrival:"Before 5:00 PM",payment:"$200 due day-of",phone:"Store contact privately"},
      {role:"DJ / MC",name:"Michael Lancaster · Colorado DJ",arrival:"Contract says setup 1.5 hrs before event start",payment:"Paid in full",phone:"303-503-1100"},
      {role:"Magician",name:"Name/contact still needed",arrival:"Confirm cocktail/reception set time",payment:"Paid in full",phone:"Store contact privately"},
      {role:"Photographer",name:"Olivia M. Photography / O.M Creative LLC",arrival:"Per final 5-hour coverage",payment:"Paid in full",phone:"303-214-8912 · omphoto88@gmail.com"},
      {role:"Hair",name:"Sara D Hair",arrival:"Bride prep",payment:"Paid in full",phone:"817-360-3491 · sara.debusk@yahoo.com"},
      {role:"Makeup",name:"Christina",arrival:"Confirm",payment:"Confirm",phone:"Contact still needed"},
      {role:"Italian Food",name:"Vendor name/contact still needed",arrival:"Target 5:30–5:45 PM",payment:"Confirm",phone:"Store contact privately"},
      {role:"Jamaican Food",name:"Not yet secured",arrival:"Before 6:00 PM",payment:"TBD",phone:"TBD"}
    ],
    payments:[
      "Nessa Dover — $125 still due",
      "Tammy Murrie — $450 due day-of",
      "Alfredo Junior — $200 due day-of",
      "Known remaining day-of total currently documented: $775",
      "Vio, Gio, magician and DJ — paid in full"
    ]
  },
  dj:{
    title:"Print Sheet · DJ / MC",
    summary:"Reception cue sheet for Michael Lancaster / Colorado DJ. DJ is paid in full. Current reception timing supersedes the older contract’s obsolete ceremony/start times.",
    timeline:[
      {time:"Before 4:30 PM",item:"Sound + uplight setup complete",note:"Contract provides DJ/MC, sound equipment, microphones and 12 uplights; setup term was 1.5 hours before event start."},
      {time:"5:00 PM",item:"Cocktail hour music",note:"Keep volume conversational."},
      {time:"5:50 PM",item:"Line up wedding party / confirm names",note:"Tammy coordinates physical lineup; DJ confirms pronunciation/order."},
      {time:"6:00 PM",item:"Wedding-party entrance",note:"Play Rock With You — Michael Jackson."},
      {time:"Immediately after party",item:"Announce Cory & Melinda",note:"Play Lil Boo Thang for couple entrance."},
      {time:"6:05 PM",item:"First Song",note:"Heartbeat — Carrie Underwood. Cory & Melinda sing live with original track as backing; lower lead vocal slightly if the playback setup allows. No traditional first dance."},
      {time:"6:15 PM",item:"Hand mic to Frank Roberts",note:"Dinner blessing + brief father-of-the-bride remarks."},
      {time:"6:20 PM",item:"Dinner music",note:"Background level; coordinate buffet release with Tammy."},
      {time:"6:55–7:00 PM",item:"Formal toasts",note:"Shalee Adams → Michael Berghini → Miah & Londyn together."},
      {time:"7:30 PM",item:"Cake / dessert transition",note:"Announce only when Tammy confirms cake area ready."},
      {time:"7:40 PM",item:"Open dance floor",note:"No mother-son or father-daughter dance; no traditional first dance."},
      {time:"9:30 PM",item:"Late-night snack announcement",note:"Do not name food until final menu is confirmed."},
      {time:"10:30 PM",item:"Private couple moment / last song",note:"Coordinate with Tammy before moving guests toward send-off."},
      {time:"10:40 PM",item:"Glow-stick send-off",note:"Final public cue."}
    ],
    reminders:[
      "Wedding party reception entrance song: Rock With You — Michael Jackson.",
      "Couple entrance: Lil Boo Thang.",
      "First Song: Heartbeat — Carrie Underwood, sung by Cory & Melinda.",
      "No traditional first dance. No mother-son or father-daughter dance.",
      "Confirm exact pronunciation and entrance grouping before 5:50 PM.",
      "Keep speeches under about five minutes each where possible.",
      "Do not use the old DJ-contract ceremony timing; current ceremony is at Sunrise Amphitheater at 3:30 PM and reception guest flow starts around 5:00 PM."
    ]
  },
  officiant:{
    title:"Print Sheet · Officiant · Bertram Generlette",
    summary:"Speaking/cue outline for Cory’s dad, Bertram. This uses the couple’s newest family-joining plan. Final rose placement and Cord of Three Strands should be confirmed at rehearsal.",
    speaking:[
      {heading:"Welcome",text:"Welcome everyone, acknowledge the families gathered, and briefly name the joy of Cory and Melinda choosing marriage and family together."},
      {heading:"Rose presentation to mothers",text:"Current working placement: before personal vows. Invite Cory and Melinda to honor their mothers with roses and a brief expression of gratitude. NOTE: older binder placed this after the kiss; confirm final placement at rehearsal."},
      {heading:"Personal vows",text:"Invite Cory and Melinda to share their personal vows to one another."},
      {heading:"Ring exchange",text:"Transition to the rings and guide the couple through their ring promises."},
      {heading:"Cord of Three Strands",text:"This was added to the prior officiant binder. If still included, explain that the three strands symbolize Cory, Melinda and God / faith woven together in marriage, then guide the couple through the action. Confirm at rehearsal whether this remains in the final ceremony."},
      {heading:"Family joining with Miah + Londyn",text:"Invite Miah and Londyn forward. Introduce this as a promise not only between Cory and Melinda, but a celebration of the family they are building. Cory and Melinda speak directly to each daughter, then give each a Pandora charm that says Daughter. Pause for the moment before transitioning back to the marriage ceremony."},
      {heading:"Pronouncement",text:"After vows, rings and family elements are complete, pronounce Cory and Melinda married."},
      {heading:"Kiss",text:"Invite the couple to seal the marriage with a kiss."},
      {heading:"Final introduction",text:"Present Cory and Melinda to the guests and cue the recessional."}
    ],
    processional:[
      "Bertram enters first and takes place",
      "Cory escorts his mother",
      "Shalee Adams",
      "Michael Berghini",
      "Adrian Chandler with Danielle Hedges + Amber Antenor",
      "Jonathan Roberts with Miah Smith + Londyn Smith",
      "Isaac Antenor + Shiloah Antenor",
      "Camden Adams",
      "Moriah Antenor",
      "Elise Hedges",
      "Melinda"
    ],
    reminders:[
      "Ceremony start: 3:30 PM.",
      "Family joining gifts: one Daughter Pandora charm for Miah and one for Londyn.",
      "Coordinate all pauses with Nessa so photographers/content creation can capture the moment without interrupting it.",
      "Recessional song: This Will Be (An Everlasting Love).",
      "Confirm at rehearsal: exact rose-presentation placement and whether Cord of Three Strands remains included."
    ]
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
