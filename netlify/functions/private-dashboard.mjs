const defaultData = {
  masterChecklist:[
    "Marriage license: assign one named person to carry, protect and return it after the ceremony.",
    "Cards + gifts: assign one named person to secure and transport them from City Park Pavilion.",
    "Timeline coordination: Nessa owns ceremony flow; Tammy owns reception setup/flow; DJ owns MC/music cues.",
    "Emergency kit: assign one person and keep it accessible, not buried in décor boxes.",
    "Dress bustle: choose the person who knows how to bustle Melinda’s dress before the reception begins.",
    "Family photo shot list: keep a printed copy with Nessa/photographer so the 4:05–4:35 photo window stays on time.",
    "Cleanup oversight: Tammy/reception team checks every labeled décor zone, cards/gifts and personal items before final venue clear.",
    "Vendor tips/payments: couple-only responsibility; amounts are never shown on coordinator, DJ, officiant or vendor-directory views."
  ],
  note: "Private day-of binder. Keep passwords, private addresses, personal phone numbers and other sensitive details in Netlify environment variables rather than browser code.",
  vendors:{
    title:"Wedding Vendor Directory",
    summary:"One private place for the full wedding-team roster. Payment amounts are deliberately excluded here; only Cory & Melinda can see money details when they use the separate couple access code.",
    vendors:[
      {role:"Ceremony Coordinator + Content",name:"Nessa Dover · Peaks and Promises Photography",status:"Confirmed",arrival:"Target 1:50 PM / venue access 2:00 PM",contactKey:"nessa",notes:"Ceremony coordination, content creation, lineup and ceremony-photo cue support."},
      {role:"Violinist",name:"Vio",status:"Confirmed",arrival:"Target 2:20 PM for music check",contactKey:"vio",notes:"Ceremony musician; final arrival time to reconfirm."},
      {role:"Guitarist",name:"Gio",status:"Confirmed",arrival:"Target 2:20 PM for music check",contactKey:"gio",notes:"Ceremony musician; final arrival time to reconfirm."},
      {role:"Officiant",name:"Bertram Generlette · Cory’s dad",status:"Confirmed",arrival:"By 3:00 PM",contactKey:"bertram",notes:"Traditional vows; family joining; mother rose presentation; final blessing."},
      {role:"Photographer",name:"Olivia M. Photography / O.M Creative LLC",status:"Confirmed",arrival:"Per final 5-hour coverage plan",contactKey:"photographer",notes:"Invoice on file shows 09/26/2026; couple should confirm correction to wedding date 09/28/2026."},
      {role:"Reception Coordinator / Setup / Cleanup",name:"Tammy Murrie · Colorado Acclaimed Weddings",status:"Confirmed",arrival:"Reception setup before guests",contactKey:"tammy",notes:"Receives décor boxes, stages reception, brings/stages cake, oversees cleanup."},
      {role:"DJ / MC",name:"Michael Lancaster · Colorado DJ",status:"Confirmed",arrival:"Setup target approximately 1.5 hours before reception program",contactKey:"dj",notes:"Use the current private DJ sheet, not the obsolete timing printed in the older contract."},
      {role:"Bartender",name:"Alfredo Junior",status:"Confirmed",arrival:"Before 5:00 PM cocktail hour",contactKey:"bartender",notes:"Bar setup + Something Blue / Something Old service plan."},
      {role:"Magician",name:"Name/contact still needed",status:"Booked / details incomplete",arrival:"Confirm cocktail-hour/reception set time",contactKey:"magician",notes:"Add exact name, contact and performance window."},
      {role:"Hair",name:"Sara D Hair",status:"Confirmed",arrival:"Bride prep schedule",contactKey:"hair",notes:"Bridal hair, two bridesmaid services and one flower-girl service on invoice."},
      {role:"Makeup",name:"Christina",status:"Details incomplete",arrival:"Confirm start time",contactKey:"makeup",notes:"Business name, contact, services and start time still need to be added."},
      {role:"Italian Dinner",name:"Vendor name/contact still needed",status:"Menu planned / vendor details incomplete",arrival:"Target hot delivery 5:30–5:45 PM",contactKey:"italian",notes:"Grilled salmon, mashed potatoes, fettuccine Alfredo with Parmesan-crusted chicken, Caesar salad."},
      {role:"Jamaican Dinner",name:"Not yet secured",status:"Needs vendor",arrival:"Before dinner service",contactKey:"jamaican",notes:"Planned jerk chicken + rice and peas."},
      {role:"Cocktail-Hour Hors d’oeuvres",name:"Vendor/delivery still unresolved",status:"Needs vendor / delivery plan",arrival:"Target 4:40–4:50 PM",contactKey:"horsdoeuvres",notes:"Finalize menu, vendor and handoff location."}
    ],
    actionItems:[
      "Add missing business/contact information for Christina, magician, Italian food, Jamaican food and hors d’oeuvres.",
      "Confirm exact Vio + Gio arrival times and contact method.",
      "Confirm photographer invoice/event date is corrected from 09/26/2026 to the wedding date 09/28/2026.",
      "Finalize Jamaican caterer, cocktail-hour hors d’oeuvres and hot-food holding/serving plan.",
      "Add private contacts in Netlify WEDDING_VENDOR_CONTACTS rather than committing phone numbers or emails to GitHub."
    ]
  },
  bride: {
    title: "Bride Day-of Guide · Melinda",
    summary: "Bride-only timeline, personal reminders and the recovered floral-binder guide. Getting-ready location: 6005 Nelson St, Arvada, CO. Keep this address out of all guest-facing pages.",
    timeline: [
      {time:"7:30 AM",item:"Breakfast + hydrate",note:"Eat before hair and makeup starts. Set out water, snacks and medications/personal essentials."},
      {time:"8:00 AM",item:"Hair + makeup begins",note:"Sara D Hair is paid in full. Makeup artist: Christina; contact/time still needs final confirmation."},
      {time:"11:30 AM",item:"Lunch + reset",note:"Real food, water, restroom, then protect hair/makeup."},
      {time:"12:30 PM",item:"Detail / getting-ready photos",note:"Dress, shoes, jewelry, invitation suite, Daughter charms, bouquet details."},
      {time:"1:15 PM",item:"Get dressed + final beauty touch-ups",note:"Leave cushion instead of rushing."},
      {time:"1:45 PM",item:"Private-item check",note:"Daughter Pandora charms, bouquet, phone, charger, touch-up kit, comfortable shoes, water."},
      {time:"2:00 PM",item:"Depart 6005 Nelson St, Arvada",note:"Use about a 50–60 minute planning buffer and recheck Flagstaff Mountain traffic/parking that day."},
      {time:"2:50 PM",item:"Arrive near Sunrise Amphitheater",note:"Stay out of guest sightline; restroom and final touch-ups before lineup."},
      {time:"3:15 PM",item:"Processional lineup",note:"Nessa takes over the lineup and confirms music cues."},
      {time:"3:30 PM",item:"Ceremony begins",note:""},
      {time:"4:05–4:35 PM",item:"Family + wedding-party photos",note:"Then leave for City Park Pavilion."},
      {time:"~5:30 PM",item:"Arrive / freshen up at reception",note:"Target depends on Monday traffic."},
      {time:"5:50 PM",item:"Reception entrance lineup",note:"Wedding party first, then Cory & Melinda."},
      {time:"6:00 PM",item:"Grand entrance",note:"Couple entrance song/cue is on the private DJ sheet."}
    ],
    payments:[
      "Nessa Dover — $125 still due",
      "Tammy Murrie — $450 due day-of",
      "Alfredo Junior — $200 due day-of",
      "Known remaining day-of total currently documented: $775",
      "Vio, Gio, magician and DJ — paid in full"
    ],
    reminders:[
      "Eat breakfast and lunch even if you are nervous.",
      "Pack Daughter charms, bouquet, touch-up kit, water, phone charger and comfortable travel shoes. Traditional vows will be led by Bertram; no personal vow cards are needed.",
      "Tammy will bring the couple-picked-up cake to City Park Pavilion.",
      "Getting-ready address: 6005 Nelson St, Arvada, CO. Share only with the wedding team / people who need it; do not place it on guest-facing pages.",
      "Sunday rehearsal: meet at Chautauqua Park at 4:30 PM, then Sunrise Amphitheater around 6:00 PM.",
      "Honeymoon: Costa Rica. Flight is at 5:00 AM the morning after the wedding; confirm airport, check-in and departure-from-lodging time during wedding week.",
      "Confirm Christina’s makeup arrival/start time and final services.",
      "Confirm Olivia M. Photography invoice/event date is corrected from 09/26/2026 to the wedding date 09/28/2026.",
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
    summary: "A low-stress groom plan with ceremony responsibilities, family items and enough mountain-travel buffer. Getting-ready location: 6005 Nelson St, Arvada, CO. Keep this address private from guests.",
    timeline:[
      {time:"8:30 AM",item:"Breakfast + easy morning",note:"Hydrate and keep the morning calm."},
      {time:"11:30 AM",item:"Lunch",note:"Do not skip it."},
      {time:"12:30 PM",item:"Shower + get dressed",note:"Suit, shoes, accessories and boutonniere."},
      {time:"1:15 PM",item:"Groom details / photos",note:"Confirm ring handoff and Daughter-charm plan with Melinda/Nessa."},
      {time:"1:50 PM",item:"Load car + final check",note:"Phone, water and emergency kit."},
      {time:"2:00 PM",item:"Depart 6005 Nelson St, Arvada",note:"Recheck route to Flagstaff Mountain and parking conditions."},
      {time:"2:50 PM",item:"Arrive Sunrise Amphitheater",note:"Meet Nessa and Bertram before guest seating is complete."},
      {time:"3:05 PM",item:"Ceremony check",note:"Vio/Gio cues, rings, traditional-vow plan, Daughter charms and mother escort."},
      {time:"3:15 PM",item:"Wedding party lineup",note:"Cory will escort his mother during the processional."},
      {time:"3:30 PM",item:"Ceremony begins",note:""},
      {time:"4:05–4:35 PM",item:"Photos",note:"Depart for Denver immediately after required portraits."},
      {time:"5:50 PM",item:"Reception entrance lineup",note:"Be ready for the couple entrance; song details stay on the DJ sheet."},
      {time:"6:00 PM",item:"Grand entrance",note:""},
      {time:"6:05 PM",item:"Private couple music moment",note:"Song/playback details stay on the DJ sheet."}
    ],
    payments:[
      "Nessa Dover — $125 still due",
      "Tammy Murrie — $450 due day-of",
      "Alfredo Junior — $200 due day-of",
      "Known remaining day-of total currently documented: $775",
      "Vio, Gio, magician and DJ — paid in full"
    ],
    reminders:[
      "Eat, hydrate and keep your phone charged.",
      "Confirm ring handoff and review the traditional repeat-after-me vows with Bertram at rehearsal.",
      "Be ready to escort your mother in the processional.",
      "Confirm Daughter charms are with the couple/coordinator before ceremony.",
      "Check in with Bertram, Nessa, Vio and Gio before guests are fully seated.",
      "Phone on silent before processional.",
      "Confirm Olivia M. Photography event-date correction has been handled before wedding week.",
      "Sunday rehearsal: meet at Chautauqua Park at 4:30 PM, then Sunrise Amphitheater around 6:00 PM.",
      "Honeymoon: Costa Rica. Flight is at 5:00 AM the next morning; confirm airport, check-in, bags and departure-from-lodging time before wedding day."
    ]
  },
  ceremony: {
    title:"Ceremony Coordinator · Nessa Dover",
    summary:"Nessa Dover · Peaks and Promises Photography · ceremony coordination + content creation. Sunrise Amphitheater reservation: 2:00–5:00 PM; ceremony starts 3:30 PM.",
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
      "Optional opening prayer / reading if retained",
      "Rose presentation to Patricia Generlette and Patricia Roberts — current working placement is before the vows; confirm at rehearsal because the older binder placed it after the kiss",
      "Declaration of intent — traditional I Do questions",
      "Traditional repeat-after-me vows — no personal vows",
      "Ring exchange",
      "Cord of Three Strands — optional item from the earlier binder; confirm at rehearsal whether it remains",
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
      "Sunrise Amphitheater parking is approximately 10 regular + 3 ADA spaces and is not guaranteed; Flagstaff Road vehicle-length limit is 30 feet.",
      "Keep 5:00 PM hard-clear deadline visible to setup/strike team."
    ],
    vendors:[
      {role:"Ceremony Coordinator + Content",name:"Nessa Dover · Peaks and Promises Photography",arrival:"1:50 PM",status:"Confirmed",contactKey:"nessa"},
      {role:"Violinist",name:"Vio",arrival:"Target 2:20 PM",status:"Confirmed",contactKey:"vio"},
      {role:"Guitarist",name:"Gio",arrival:"Target 2:20 PM",status:"Confirmed",contactKey:"gio"},
      {role:"Officiant",name:"Bertram Generlette · Cory’s dad",arrival:"By 3:00 PM",status:"Confirmed",contactKey:"bertram"},
      {role:"Photographer",name:"Olivia M. Photography / O.M Creative LLC",arrival:"Per final coverage plan",status:"Confirmed",contactKey:"photographer",notes:"Couple is confirming the invoice date discrepancy separately."}
    ]
  },
  reception: {
    title:"Reception Coordinator · Tammy Murrie",
    summary:"Tammy Murrie · Colorado Acclaimed Weddings · reception setup/cleanup. Early arrivals may enter around 4:45 PM; official cocktail hour 5:00 PM; entrance 6:00 PM; dinner 6:20 PM.",
    timeline:[
      {time:"2:00 PM",item:"Reception setup underway",note:"Guest tables, sweetheart table, welcome area, cake/dessert, bar, buffet, kids area, signs and lighting."},
      {time:"4:30 PM",item:"Full-room check",note:"Table signs, guestbook, camera/audio-message links, candles, bar signage, seating/table finder."},
      {time:"4:40–4:50 PM",item:"Cocktail hors d’oeuvres target arrival",note:"Delivery/vendor still needs to be finalized."},
      {time:"4:45 PM",item:"Early guest arrival window",note:"Open if setup/bar team is ready."},
      {time:"5:00 PM",item:"Official cocktail hour",note:"Bar + hors d’oeuvres + magician/guest entertainment as scheduled."},
      {time:"5:30–5:45 PM",item:"Italian hot-food delivery target",note:"Better than 5:00 for a 6:20 dinner; receive, hold hot and stage buffet."},
      {time:"5:30 PM",item:"Check couple ETA",note:"Adjust entrance only if mountain traffic is heavy."},
      {time:"5:50 PM",item:"Wedding-party entrance lineup",note:"DJ confirms the private entrance-song cues; Tammy confirms people/order."},
      {time:"6:00 PM",item:"Grand entrance",note:"DJ owns the private entrance-song cues; Tammy owns lineup and release."},
      {time:"6:05 PM",item:"Private couple music moment",note:"DJ manages the private track and microphones; no traditional first dance."},
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
      "Confirm DJ has the private couple-song playback/microphone plan before guests arrive.",
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
      {role:"Reception Coordinator / Setup / Cleanup",name:"Tammy Murrie · Colorado Acclaimed Weddings",arrival:"Setup before guests",status:"Confirmed",contactKey:"tammy"},
      {role:"Bartender",name:"Alfredo Junior",arrival:"Before 5:00 PM",status:"Confirmed",contactKey:"bartender"},
      {role:"DJ / MC",name:"Michael Lancaster · Colorado DJ",arrival:"Setup target about 1.5 hrs before reception program",status:"Confirmed",contactKey:"dj"},
      {role:"Magician",name:"Name/contact still needed",arrival:"Confirm cocktail/reception set time",status:"Details incomplete",contactKey:"magician"},
      {role:"Photographer",name:"Olivia M. Photography / O.M Creative LLC",arrival:"Per final 5-hour coverage",status:"Confirmed",contactKey:"photographer"},
      {role:"Hair",name:"Sara D Hair",arrival:"Bride prep",status:"Confirmed",contactKey:"hair"},
      {role:"Makeup",name:"Christina",arrival:"Confirm",status:"Details incomplete",contactKey:"makeup"},
      {role:"Italian Food",name:"Vendor name/contact still needed",arrival:"Target 5:30–5:45 PM",status:"Details incomplete",contactKey:"italian"},
      {role:"Jamaican Food",name:"Not yet secured",arrival:"Before 6:00 PM",status:"Needs vendor",contactKey:"jamaican"},
      {role:"Cocktail-Hour Hors d’oeuvres",name:"Vendor/delivery still unresolved",arrival:"Target 4:40–4:50 PM",status:"Needs vendor / delivery plan",contactKey:"horsdoeuvres"}
    ],
  },
  dj:{
    title:"Print Sheet · DJ / MC",
    summary:"Reception cue sheet for Michael Lancaster / Colorado DJ. Current reception timing supersedes the older contract’s obsolete ceremony/start times. Entrance songs and the First Song are private DJ/team information and should not be announced or displayed on guest pages before their cues.",
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
    introductions:[
      "Shalee Adams — Maid / Matron of Honor",
      "Michael Berghini — Best Man",
      "Adrian Chandler — Groomsman, with Danielle Hedges and Amber Antenor — Groomswomen / Cory’s sisters",
      "Jonathan Roberts — Bridesman / Melinda’s brother, with Miah Smith and Londyn Smith — Bridesmaids / daughters",
      "Shiloah Antenor — Junior Bridesmaid, with Isaac Antenor — Ring Bearer",
      "Camden Adams — Flower Girl",
      "Moriah Antenor — Flower Girl",
      "Elise Hedges — Flower Girl",
      "Final announcement: Cory & Melinda — couple entrance"
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
    summary:"Detailed speaking and cue sheet for Cory’s dad, Bertram Generlette. The binder establishes the ceremony elements and sequence; the full sentences below are an expanded speaking draft built around those elements. The current ceremony uses traditional vows rather than personal vows. The family joining moment centers Miah and Londyn and the Daughter Pandora charms. The Cord of Three Strands remains optional until confirmed at rehearsal.",
    speaking:[
      {heading:"Opening / welcome",text:"Suggested speaking prompt: ‘Good afternoon, family and friends. We are gathered here in this beautiful place to celebrate Cory and Melinda as they enter marriage surrounded by the people they love most. Today is not only about two people choosing one another; it is also about honoring the families who shaped them and celebrating the family they are continuing to build together.’ Pause, look to the couple, and keep the opening warm and brief."},
      {heading:"Optional prayer or reading",text:"If Cory and Melinda keep an opening prayer or reading, introduce it here. If they decide not to include one, move directly into the rose presentation. Keep this marked as a rehearsal decision."},
      {heading:"Rose presentation to the mothers",text:"Current working placement: before the vows. Confirm at rehearsal because the older binder placed the roses after the kiss. Suggested transition: ‘Before Cory and Melinda make their promises to one another, they would like to pause and honor two women whose love and guidance helped bring them to this moment.’ Invite Cory and Melinda to present roses to Patricia Generlette and Patricia Roberts. Suggested close: ‘These roses are a simple thank-you for the love, lessons and family that each of you has given them, and a symbol of two families being joined today.’ Allow a photo pause before everyone returns to position."},
      {heading:"Words about marriage / transition to promises",text:"Suggested binder-style bridge: ‘Marriage is more than a single ceremony or a single promise. It is the choice to keep showing up, to listen, to laugh, to forgive, to grow, and to make a home together in all the ordinary days that follow this extraordinary one.’ Then turn to Cory and Melinda for the declaration of intent."},
      {heading:"Declaration of intent — I Do",text:"Ask Cory: ‘Cory, do you take Melinda to be your wife, to share your life with her, to love and support her, to honor and cherish her, through the joys and challenges of life, for as long as you both shall live?’ Cory answers: ‘I do.’ Ask Melinda the same question, substituting Cory’s name and husband. Melinda answers: ‘I do.’"},
      {heading:"Traditional vows — repeat after me",text:"There are no personal vows. Lead Cory first: ‘I, Cory, take you, Melinda, to be my wife; to have and to hold from this day forward; for better, for worse; for richer, for poorer; in sickness and in health; to love and to cherish; for as long as we both shall live.’ Then lead Melinda with the same traditional vow: ‘I, Melinda, take you, Cory, to be my husband…’ Pause naturally between phrases so each person can repeat comfortably."},
      {heading:"Ring exchange",text:"Suggested transition: ‘The wedding ring is an outward symbol of an inward promise — a circle without end, representing the commitment you make today.’ Have the rings presented. Cory repeats: ‘Melinda, I give you this ring as a symbol of my love and my commitment to you. With this ring, I choose you today and every day.’ Melinda repeats the corresponding words to Cory."},
      {heading:"Cord of Three Strands — optional / confirm at rehearsal",text:"If retained from the earlier binder, introduce it as a symbol of Cory, Melinda and their faith woven together. Suggested wording: ‘A cord of three strands is not quickly broken. As these strands are woven together, may your marriage be strengthened by your love for one another and by the faith that guides your home.’ Give the couple time to complete the action. If they remove this element, skip directly to the family joining ceremony."},
      {heading:"Family joining ceremony — Miah and Londyn",text:"Invite Miah and Londyn forward. Suggested framing: ‘Today also celebrates a family. Cory and Melinda’s promises do not stop with one another; this moment recognizes Miah and Londyn and the love, trust, laughter and memories that make the four of them a family.’ Then step back and let Cory and Melinda speak directly to the girls in their own words. After they speak, cue the Daughter Pandora charms: ‘Cory and Melinda have chosen a small keepsake for each of you — a charm that says Daughter — as a reminder that you are not simply standing beside them today; you are part of the promises and the family being celebrated here.’ Pause for hugs/photos, then have Miah and Londyn return to position."},
      {heading:"Pronouncement",text:"Suggested wording: ‘Cory and Melinda, you have declared your intentions, made your vows, exchanged rings, and celebrated the family you are building in the presence of everyone gathered here. By the authority entrusted to me, it is my great joy to pronounce you married.’"},
      {heading:"The kiss",text:"Cue clearly and simply: ‘Cory, you may kiss your bride.’ Pause and let Nessa/photography capture the moment before moving on."},
      {heading:"Final blessing",text:"Suggested closing blessing: ‘May your home be filled with laughter, patience and peace. May you continue choosing one another through every season, may Miah and Londyn always know the strength of the family surrounding them, and may all four of you leave this place carrying the love that brought you here today.’"},
      {heading:"Presentation + recessional cue",text:"Suggested presentation: ‘Family and friends, it is my honor to present Cory and Melinda!’ Hold for applause, then step aside so the recessional begins cleanly. Recessional music cue: This Will Be (An Everlasting Love)."}
    ],
    processional:[
      "Bertram enters first and takes his place",
      "Cory escorts his mother, Patricia Generlette, then takes his place",
      "Shalee Adams — Maid / Matron of Honor",
      "Michael Berghini — Best Man",
      "Adrian Chandler with Danielle Hedges + Amber Antenor",
      "Jonathan Roberts with Miah Smith + Londyn Smith",
      "Isaac Antenor + Shiloah Antenor",
      "Camden Adams — Flower Girl",
      "Moriah Antenor — Flower Girl",
      "Elise Hedges — Flower Girl",
      "Melinda — Bride"
    ],
    music:[
      {cue:"Guest seating / prelude",song:"Birds of a Feather · 360 · Espresso · Positions · Ocean Eyes + compatible additions",who:"Vio + Gio / ceremony music plan"},
      {cue:"Processional Part 1",song:"Into You — Tamia",who:"Cory; Shalee; Michael; Adrian/Danielle/Amber; Jonathan/Miah/Londyn"},
      {cue:"Processional Part 2",song:"Stand by Me",who:"Isaac/Shiloah; Camden; Moriah; Elise"},
      {cue:"Bride entrance",song:"Kissing You",who:"Melinda"},
      {cue:"Recessional",song:"This Will Be (An Everlasting Love)",who:"Cory & Melinda + wedding party"}
    ],
    reminders:[
      "Ceremony starts at 3:30 PM.",
      "No personal vows — use the traditional repeat-after-me vows in this speaking sheet.",
      "Rose presentation currently uses a before-the-vows working placement and names both mothers: Patricia Generlette and Patricia Roberts. Confirm placement at rehearsal; the older binder placed it after the kiss.",
      "Family joining gifts: one Daughter Pandora charm for Miah and one for Londyn.",
      "Coordinate pauses with Nessa so photography/content creation can capture roses, charms, rings and the kiss without interrupting the ceremony.",
      "Confirm at rehearsal whether the optional Cord of Three Strands stays in the ceremony.",
      "Recessional: This Will Be (An Everlasting Love)."
    ]
  }
};

function loadVendorContacts(){
  if(!process.env.WEDDING_VENDOR_CONTACTS) return {};
  try{return JSON.parse(process.env.WEDDING_VENDOR_CONTACTS)}catch{return {}}
}
function hydrateVendorLists(data,contacts){
  Object.values(data).forEach(section=>{
    if(!section || typeof section!=='object' || !Array.isArray(section.vendors)) return;
    section.vendors=section.vendors.map(v=>{
      const extra=v.contactKey ? (contacts[v.contactKey]||{}) : {};
      return {...v,...extra};
    });
  });
}

export default async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', {status:405});
  let body={};
  try{body=await req.json();}catch{}
  const teamExpected=process.env.WEDDING_PRIVATE_PASSCODE;
  const coupleExpected=process.env.WEDDING_COUPLE_PASSCODE;
  if(!teamExpected && !coupleExpected) return Response.json({error:'Private dashboard not configured'}, {status:503});
  const isCouple=Boolean(coupleExpected && body.code===coupleExpected);
  const isTeam=Boolean(teamExpected && body.code===teamExpected);
  if(!body.code || (!isCouple && !isTeam)) return Response.json({error:'Unauthorized'}, {status:401});
  let data=JSON.parse(JSON.stringify(defaultData));
  if(process.env.WEDDING_PRIVATE_DATA){try{data=JSON.parse(process.env.WEDDING_PRIVATE_DATA)}catch{}}
  hydrateVendorLists(data,loadVendorContacts());
  data.accessLevel=isCouple?'couple':'team';
  if(!isCouple){
    if(data.bride) delete data.bride.payments;
    if(data.groom) delete data.groom.payments;
  }
  return Response.json(data,{headers:{'cache-control':'no-store'}});
};
