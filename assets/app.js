const products = {
  p1: {
    id:'p1', code:'OBJ / 01', passport:'HB-P1-001', name:'Skyline Duffel', price:71, category:'luggage', badge:'BESTSELLER',
    image:'assets/products/p1-olive-skyline-duffel.png', cardImage:'assets/products/p1-olive-skyline-duffel.jpg', images:['assets/products/p1-olive-skyline-duffel.png','assets/products/alt-white-duffel.png'],
    colors:[{name:'Olive',hex:'#5a6b3f'},{name:'Midnight',hex:'#0b1240'},{name:'Silver',hex:'#9a9ea8'}], sizes:['35L','45L','55L'],
    subtitle:'Hand-drawn skyline travel bag', kicker:'Signature travel duffel',
    description:'Our hero carry. Hand-drawn skyline print on water-repellent canvas, leather-trim handles and a vault-grade zipper.',
    specs:[['Material','Water-repellent canvas'],['Capacity','35–55L'],['Weight','1.4 kg'],['Warranty','Lifetime zipper'],['Colors','Olive / Midnight / Silver'],['Sizes','35L / 45L / 55L']],
    mood:{label:'Adventurous / Grounded',quiet:58,urban:40,trip:70},
    passportData:{material:'Water-repellent canvas / leather trim',service:'Handle + zipper service path',care:'Wipe canvas after wet trips',role:'Signature carry'},
    pack:['3 shirts', '2 trousers', 'Shoes', 'Wash kit', 'Jacket', 'Book'],
    blueprint:[{label:'WATER-REPELLENT CANVAS',x:'8%',y:'20%'},{label:'LEATHER-TRIM HANDLE',x:'62%',y:'12%'},{label:'VAULT-GRADE ZIPPER',x:'70%',y:'62%'},{label:'HAND-DRAWN SKYLINE PRINT',x:'10%',y:'55%'}],
    dimensions:[{label:'50 cm',axis:'width',x:'20%',y:'92%',w:'60%'},{label:'30 cm',axis:'height',x:'4%',y:'20%',h:'60%'}],
    playlists:{
      focused:{name:'City Skyline',description:'Steady rhythm for city-to-city moves.',tracks:[['Rooftop Line','03:24'],['Grid Walk','03:58'],['Overlook','04:10'],['Departure Sketch','03:41']]},
      electric:{name:'Night Skyline',description:'Bright pulse for evening departures.',tracks:[['Neon Outline','03:15'],['Skyward','03:47'],['Fast Lanes','03:29'],['City Current','04:02']]},
      slow:{name:'Quiet Skyline',description:'A calm view for slower travel days.',tracks:[['Morning Haze','04:05'],['Still Rooftop','03:52'],['Wide Window','04:18'],['Soft Horizon','03:44']]}
    }
  },
  p2: {
    id:'p2', code:'OBJ / 02', passport:'HB-P2-002', name:'Metropolitan Duffel', price:77, category:'luggage', badge:'NEW',
    image:'assets/products/p2-navy-metropolitan-duffel.png', cardImage:'assets/products/p2-navy-metropolitan-duffel.jpg', images:['assets/products/p2-navy-metropolitan-duffel.png','assets/products/alt-steel-duffel.png'],
    colors:[{name:'Navy',hex:'#0b1240'},{name:'Ice',hex:'#bfe8f5'}], sizes:['40L','50L'],
    subtitle:'Cabin-friendly city duffel', kicker:'Cityscape travel object',
    description:'Midnight navy with an ice-blue cityscape and contrast webbing handles. Cabin-friendly with shoulder strap.',
    specs:[['Material','Tech canvas'],['Capacity','40–50L'],['Weight','1.5 kg'],['Warranty','Lifetime zipper'],['Colors','Navy / Ice'],['Sizes','40L / 50L']],
    mood:{label:'Composed / Cosmopolitan',quiet:64,urban:74,trip:55},
    passportData:{material:'Tech canvas / webbing handles',service:'Strap + zipper service path',care:'Spot-clean as needed',role:'City travel'},
    pack:['Laptop', '3 shirts', 'Trousers', 'Shoes', 'Wash kit', 'Cables'],
    blueprint:[{label:'TECH CANVAS SHELL',x:'8%',y:'18%'},{label:'CONTRAST WEBBING HANDLE',x:'60%',y:'10%'},{label:'SHOULDER STRAP D-RING',x:'68%',y:'60%'},{label:'LIFETIME ZIPPER',x:'10%',y:'70%'}],
    dimensions:[{label:'52 cm',axis:'width',x:'20%',y:'92%',w:'60%'},{label:'32 cm',axis:'height',x:'4%',y:'20%',h:'60%'}],
    playlists:{
      focused:{name:'Metro Focus',description:'Clean tempo for cabin-friendly travel.',tracks:[['Platform 3','03:30'],['Ice Line','03:56'],['Navy Transit','04:03'],['Clear Signal','03:22']]},
      electric:{name:'Metro Night',description:'Cityscape energy after dark.',tracks:[['Blue District','03:41'],['Ice Voltage','03:19'],['Fast Metro','03:53'],['After Hours','04:07']]},
      slow:{name:'Metro Window',description:'Unhurried motion through the city.',tracks:[['Cloud Cover','04:12'],['Steel Calm','03:48'],['Slow Platform','04:22'],['Ice Light','03:39']]}
    }
  },
  p3: {
    id:'p3', code:'OBJ / 03', passport:'HB-P3-003', name:'Voyager Duffel', price:75, category:'luggage', badge:null,
    image:'assets/products/p3-navy-voyager-duffel.png', cardImage:'assets/products/p3-navy-voyager-duffel.jpg', images:['assets/products/p3-navy-voyager-duffel.png','assets/products/p2-navy-metropolitan-duffel.png'],
    colors:[{name:'Navy',hex:'#0b1240'},{name:'Sky',hex:'#8fd4ec'}], sizes:['40L','50L'],
    subtitle:'Nautical line-art duffel', kicker:'Voyage-ready travel object',
    description:'Nautical line-art print across deep navy canvas. Travel duffel for overhead bins and boat decks alike.',
    specs:[['Material','Canvas + leather trim'],['Capacity','40–50L'],['Weight','1.45 kg'],['Warranty','Lifetime zipper'],['Colors','Navy / Sky'],['Sizes','40L / 50L']],
    mood:{label:'Nautical / Unhurried',quiet:70,urban:35,trip:66},
    passportData:{material:'Canvas + leather trim',service:'Trim + zipper service path',care:'Air dry after coastal use',role:'Voyage carry'},
    pack:['3 shirts', 'Trousers', 'Swim shorts', 'Wash kit', 'Sandals', 'Sunglasses'],
    blueprint:[{label:'NAUTICAL LINE-ART PRINT',x:'8%',y:'20%'},{label:'LEATHER TRIM DETAIL',x:'62%',y:'12%'},{label:'DECK-READY BASE',x:'66%',y:'66%'},{label:'LIFETIME ZIPPER',x:'10%',y:'62%'}],
    dimensions:[{label:'51 cm',axis:'width',x:'20%',y:'92%',w:'60%'},{label:'31 cm',axis:'height',x:'4%',y:'20%',h:'60%'}],
    playlists:{
      focused:{name:'Voyager Log',description:'Measured sound for coastal movement.',tracks:[['Nautical Line','03:33'],['Harbor Watch','04:01'],['Deck Focus','03:27'],['Compass Set','03:49']]},
      electric:{name:'Open Water',description:'Forward energy for departures by sea or sky.',tracks:[['Tide Voltage','03:20'],['Wake','03:44'],['Open Route','04:06'],['Bright Coast','03:31']]},
      slow:{name:'Slow Tide',description:'A drifting soundtrack for unhurried voyages.',tracks:[['Low Tide','04:15'],['Salt Air','03:57'],['Still Harbor','04:24'],['Evening Sail','03:46']]}
    }
  },
  p4: {
    id:'p4', code:'OBJ / 04', passport:'HB-P4-004', name:'SMART Duffel — Ivory', price:143, category:'system', badge:'SMART',
    image:'assets/products/p4-smart-duffel-ivory.png', cardImage:'assets/products/p4-smart-duffel-ivory.jpg', images:['assets/products/p4-smart-duffel-ivory.png','assets/products/alt-white-duffel.png','assets/products/p2-navy-metropolitan-duffel.png'],
    colors:[{name:'Ivory',hex:'#f6f7f9'},{name:'Navy',hex:'#0b1240'}], sizes:['45L'],
    subtitle:'The bag that thinks', kicker:'Flagship smart object',
    description:'The bag that thinks. Fast-charge core, reactive RGB trim, touch media strip and smart check-in panel.',
    specs:[['Material','Tech canvas DWR'],['Capacity','45L'],['Weight','1.8 kg'],['Warranty','Lifetime + 2yr electronics'],['Colors','Ivory / Navy'],['Sizes','45L']],
    mood:{label:'Technical / Alert',quiet:50,urban:60,trip:72},
    passportData:{material:'Tech canvas DWR / electronics core',service:'Battery + port diagnostics',care:'Charge core every 30 days',role:'Flagship smart carry'},
    pack:['Laptop', 'Power bank', 'Cables', '3 shirts', 'Wash kit', 'Charger'],
    blueprint:[{label:'TECH CANVAS DWR SHELL',x:'8%',y:'18%'},{label:'FAST-CHARGE CORE',x:'62%',y:'12%'},{label:'REACTIVE RGB TRIM',x:'70%',y:'58%'},{label:'SMART CHECK-IN PANEL',x:'10%',y:'62%'}],
    dimensions:[{label:'48 cm',axis:'width',x:'20%',y:'92%',w:'60%'},{label:'30 cm',axis:'height',x:'4%',y:'20%',h:'60%'}],
    playlists:{
      focused:{name:'Core Online',description:'Clean electronic focus for the bag that thinks.',tracks:[['Charge State','03:19'],['Ivory Circuit','03:52'],['System Ready','03:36'],['Signal Lock','04:00']]},
      electric:{name:'Full Power',description:'Bright reactive energy matching the RGB trim.',tracks:[['100 Percent','03:06'],['Trim Light','03:34'],['Live Feed','03:48'],['Fast Sync','03:22']]},
      slow:{name:'Standby Mode',description:'Ambient calm while the core stays charged.',tracks:[['Idle Glow','04:28'],['Soft Port','03:55'],['Quiet Battery','04:14'],['Low Draw','03:41']]}
    }
  },
  p5: {
    id:'p5', code:'OBJ / 05', passport:'HB-P5-005', name:'Steel Weekender', price:66, category:'luggage', badge:null,
    image:'assets/products/p5-steel-blue-weekender.png', cardImage:'assets/products/p5-steel-blue-weekender.jpg', images:['assets/products/p5-steel-blue-weekender.png','assets/products/alt-steel-duffel.png'],
    colors:[{name:'Steel Blue',hex:'#4a6b8a'},{name:'Tan',hex:'#8e6b4a'}], sizes:['38L','48L'],
    subtitle:'Vintage-washed weekender', kicker:'Classic weekend object',
    description:'Vintage-washed canvas with full-grain leather handles and antique-brass crossbody strap.',
    specs:[['Material','Washed canvas'],['Capacity','38–48L'],['Weight','1.3 kg'],['Warranty','Lifetime zipper'],['Colors','Steel Blue / Tan'],['Sizes','38L / 48L']],
    mood:{label:'Vintage / Relaxed',quiet:66,urban:30,trip:48},
    passportData:{material:'Washed canvas / brass hardware',service:'Strap + buckle service path',care:'Condition leather twice a year',role:'Weekend carry'},
    pack:['2 shirts', 'Trousers', 'Wash kit', 'Jacket', 'Boots'],
    blueprint:[{label:'VINTAGE-WASHED CANVAS',x:'8%',y:'20%'},{label:'FULL-GRAIN LEATHER HANDLE',x:'60%',y:'10%'},{label:'ANTIQUE-BRASS STRAP',x:'68%',y:'62%'},{label:'LIFETIME ZIPPER',x:'10%',y:'66%'}],
    dimensions:[{label:'46 cm',axis:'width',x:'20%',y:'92%',w:'60%'},{label:'29 cm',axis:'height',x:'4%',y:'20%',h:'60%'}],
    playlists:{
      focused:{name:'Weekend Plan',description:'Grounded rhythm for short escapes.',tracks:[['Steel Blue','03:28'],['Brass Buckle','03:51'],['Weekend Line','04:04'],['Vintage Wash','03:35']]},
      electric:{name:'Fast Getaway',description:'Energy for a quick weekend exit.',tracks:[['Quick Pack','03:12'],['Antique Voltage','03:39'],['Last Minute','03:47'],['Steel Drive','04:00']]},
      slow:{name:'Slow Weekend',description:'A relaxed soundtrack for unhurried escapes.',tracks:[['Tan Leather','04:19'],['Sunday Wash','03:58'],['Quiet Buckle','04:11'],['Soft Denim','03:43']]}
    }
  },
  p6: {
    id:'p6', code:'OBJ / 06', passport:'HB-P6-006', name:'Midnight Rolltop', price:60, category:'carry', badge:'SALE',
    image:'assets/products/p6-midnight-rolltop.png', cardImage:'assets/products/p6-midnight-rolltop.jpg', images:['assets/products/p6-midnight-rolltop.png','assets/products/alt-black-backpack.png'],
    colors:[{name:'Midnight',hex:'#0b1240'},{name:'Charcoal',hex:'#14163a'}], sizes:['18L','24L'],
    subtitle:'Roll-top commuter backpack', kicker:'Daily commuter object',
    description:'Roll-top commuter with padded 16" laptop sleeve, magnetic buckle and hidden anti-theft zip.',
    specs:[['Material','Ballistic nylon'],['Capacity','18–24L'],['Weight','0.9 kg'],['Warranty','Lifetime zipper'],['Colors','Midnight / Charcoal'],['Sizes','18L / 24L']],
    mood:{label:'Efficient / Urban',quiet:55,urban:80,trip:24},
    passportData:{material:'Ballistic nylon',service:'Zip + buckle service path',care:'Wipe daily-use grime weekly',role:'Daily commute'},
    pack:['Laptop', 'Notebook', 'Cables', 'Water bottle', 'Umbrella'],
    blueprint:[{label:'BALLISTIC NYLON SHELL',x:'8%',y:'16%'},{label:'PADDED SHOULDER STRAPS',x:'62%',y:'10%'},{label:'16" LAPTOP SLEEVE',x:'66%',y:'52%'},{label:'HIDDEN ANTI-THEFT ZIP',x:'10%',y:'66%'}],
    dimensions:[{label:'48 cm',axis:'height',x:'4%',y:'14%',h:'68%'},{label:'32 cm',axis:'width',x:'18%',y:'92%',w:'60%'}],
    playlists:{
      focused:{name:'Commute Focus',description:'Steady tempo for the daily roll-top ride.',tracks:[['Roll and Go','03:17'],['Magnetic Line','03:45'],['Midnight Commute','03:58'],['Sleeve Mode','03:29']]},
      electric:{name:'City Sprint',description:'Fast energy for catching the next train.',tracks:[['Platform Rush','03:08'],['Buckle Up','03:31'],['Anti-Theft','03:44'],['Charcoal Pulse','03:20']]},
      slow:{name:'Late Commute',description:'A softer pace for the evening ride home.',tracks:[['Rolled Down','04:06'],['Quiet Buckle','03:49'],['Charcoal Hour','04:17'],['Soft Magnet','03:52']]}
    }
  },
  p7: {
    id:'p7', code:'OBJ / 07', passport:'HB-P7-007', name:'Heritage Backpack', price:69, category:'carry', badge:null,
    image:'assets/products/p7-heritage-backpack.png', cardImage:'assets/products/p7-heritage-backpack.jpg', images:['assets/products/p7-heritage-backpack.png','assets/products/alt-black-backpack-art.png'],
    colors:[{name:'Olive',hex:'#5a6b3f'},{name:'Tan',hex:'#8e6b4a'}], sizes:['20L','28L'],
    subtitle:'Waxed canvas heritage pack', kicker:'Heritage travel object',
    description:'Waxed canvas, dual cargo pockets and leather buckle straps. Built like luggage from another era.',
    specs:[['Material','Waxed canvas'],['Capacity','20–28L'],['Weight','1.1 kg'],['Warranty','Lifetime zipper'],['Colors','Olive / Tan'],['Sizes','20L / 28L']],
    mood:{label:'Rugged / Timeless',quiet:60,urban:42,trip:36},
    passportData:{material:'Waxed canvas / leather buckles',service:'Buckle + strap service path',care:'Re-wax canvas yearly',role:'Heritage carry'},
    pack:['Laptop', 'Notebook', 'Wash kit', 'Jacket', 'Water bottle'],
    blueprint:[{label:'WAXED CANVAS SHELL',x:'8%',y:'16%'},{label:'LEATHER BUCKLE STRAP',x:'62%',y:'10%'},{label:'DUAL CARGO POCKETS',x:'66%',y:'54%'},{label:'LIFETIME ZIPPER',x:'10%',y:'68%'}],
    dimensions:[{label:'46 cm',axis:'height',x:'4%',y:'14%',h:'68%'},{label:'30 cm',axis:'width',x:'18%',y:'92%',w:'60%'}],
    playlists:{
      focused:{name:'Old World Carry',description:'Grounded sound for heritage travel.',tracks:[['Waxed Canvas','03:26'],['Leather Buckle','03:54'],['Field Notes','04:02'],['Cargo Pocket','03:33']]},
      electric:{name:'New Ground',description:'Forward energy for modern movement.',tracks:[['Olive Voltage','03:14'],['Buckle Strap','03:41'],['Fast Trail','03:53'],['Tan Current','03:25']]},
      slow:{name:'Slow Trail',description:'A patient soundtrack for older-era travel.',tracks:[['Dust Road','04:21'],['Canvas Hour','03:56'],['Leather Desk','04:09'],['Soft Buckle','03:47']]}
    }
  },
  p8: {
    id:'p8', code:'OBJ / 08', passport:'HB-P8-008', name:'City Sling', price:38, category:'carry', badge:'SALE',
    image:'assets/products/p8-grey-sling.png', cardImage:'assets/products/p8-grey-sling.jpg', images:['assets/products/p8-grey-sling.png','assets/products/alt-black-crossbody.png'],
    colors:[{name:'Grey',hex:'#7d818c'},{name:'Navy',hex:'#0b1240'}], sizes:['One Size'],
    subtitle:'Compact essentials sling', kicker:'Fast-access city object',
    description:'Compact crossbody for essentials — phone, wallet, keys, charger.',
    specs:[['Material','Canvas + leather'],['Capacity','4L'],['Weight','0.35 kg'],['Warranty','Lifetime zipper'],['Colors','Grey / Navy'],['Sizes','One Size']],
    mood:{label:'Electric / Immediate',quiet:28,urban:88,trip:14},
    passportData:{material:'Canvas + leather',service:'Strap replacement path',care:'Spot-clean weekly',role:'Essential carry'},
    pack:['Phone', 'Wallet', 'Keys', 'Earbuds', 'Cards'],
    blueprint:[{label:'CANVAS + LEATHER SHELL',x:'8%',y:'20%'},{label:'ADJUSTABLE CROSSBODY STRAP',x:'60%',y:'12%'},{label:'QUICK-ACCESS ZIP',x:'66%',y:'60%'}],
    dimensions:[{label:'24 cm',axis:'width',x:'20%',y:'92%',w:'55%'},{label:'17 cm',axis:'height',x:'6%',y:'25%',h:'50%'}],
    playlists:{
      focused:{name:'Close Carry',description:'Minimal sound for essentials-only movement.',tracks:[['No Excess','02:48'],['One Pocket','03:22'],['Clear Route','03:19'],['Fast Entry','02:57']]},
      electric:{name:'Street Voltage',description:'High pulse for compressed city movement.',tracks:[['Signal Green','03:05'],['Corner Speed','03:32'],['Neon Crosswalk','03:18'],['Afterimage','03:49']]},
      slow:{name:'Pocket Afternoon',description:'A low-key soundtrack for drifting through a city.',tracks:[['Side Street','03:50'],['Museum Hour','04:18'],['Soft Concrete','03:45'],['No Reservation','04:02']]}
    }
  },
  p9: {
    id:'p9', code:'OBJ / 09', passport:'HB-P9-009', name:'Aero Gym Duffel', price:55, category:'luggage', badge:'SALE',
    image:'assets/products/p1-olive-skyline-duffel.png', cardImage:'assets/products/p1-olive-skyline-duffel.jpg', images:['assets/products/p1-olive-skyline-duffel.png','assets/products/alt-white-duffel.png'],
    colors:[{name:'Olive',hex:'#5a6b3f'},{name:'Black',hex:'#14163a'}], sizes:['30L','40L'],
    subtitle:'Lightweight gym-to-office duffel', kicker:'Everyday performance object',
    description:'Lightweight gym-to-office duffel with ventilated shoe garage and wet pocket.',
    specs:[['Material','Poly canvas'],['Capacity','30–40L'],['Weight','1.0 kg'],['Warranty','Lifetime zipper'],['Colors','Olive / Black'],['Sizes','30L / 40L']],
    mood:{label:'Active / Unfussy',quiet:40,urban:62,trip:38},
    passportData:{material:'Poly canvas',service:'Zip + vent service path',care:'Air out after gym use',role:'Performance carry'},
    pack:['Gym kit', 'Shoes', 'Towel', 'Wash kit', 'Water bottle'],
    blueprint:[{label:'POLY CANVAS SHELL',x:'8%',y:'20%'},{label:'VENTILATED SHOE GARAGE',x:'62%',y:'12%'},{label:'WET POCKET',x:'68%',y:'62%'},{label:'LIFETIME ZIPPER',x:'10%',y:'66%'}],
    dimensions:[{label:'44 cm',axis:'width',x:'20%',y:'92%',w:'58%'},{label:'27 cm',axis:'height',x:'4%',y:'22%',h:'56%'}],
    playlists:{
      focused:{name:'Gym Focus',description:'Efficient tempo for gym-to-office days.',tracks:[['Rep Count','03:10'],['Shoe Garage','03:36'],['Wet Pocket','03:22'],['Reset','03:48']]},
      electric:{name:'Aero Push',description:'High energy for a fast session.',tracks:[['Full Send','02:59'],['Aero Line','03:14'],['Sweat Voltage','03:27'],['Last Set','03:05']]},
      slow:{name:'Cool Down',description:'A gentle wind-down soundtrack.',tracks:[['Stretch Room','04:02'],['Quiet Locker','03:44'],['Slow Breath','04:15'],['Recovery','03:38']]}
    }
  },
  p10: {
    id:'p10', code:'OBJ / 10', passport:'HB-P10-010', name:'Transit Daypack', price:53, category:'carry', badge:'NEW',
    image:'assets/products/p6-midnight-rolltop.png', cardImage:'assets/products/p6-midnight-rolltop.jpg', images:['assets/products/p6-midnight-rolltop.png','assets/products/alt-black-backpack.png'],
    colors:[{name:'Midnight',hex:'#0b1240'},{name:'Ice',hex:'#bfe8f5'}], sizes:['16L','22L'],
    subtitle:'Minimal commuter daypack', kicker:'Transit-ready object',
    description:'Minimal daypack with quick-access top pocket, USB pass-through and luggage pass-through strap.',
    specs:[['Material','Recycled nylon'],['Capacity','16–22L'],['Weight','0.75 kg'],['Warranty','Lifetime zipper'],['Colors','Midnight / Ice'],['Sizes','16L / 22L']],
    mood:{label:'Minimal / Punctual',quiet:52,urban:76,trip:20},
    passportData:{material:'Recycled nylon',service:'Strap + zip service path',care:'Wipe weekly',role:'Transit carry'},
    pack:['Laptop', 'Notebook', 'Cables', 'Water bottle'],
    blueprint:[{label:'RECYCLED NYLON SHELL',x:'8%',y:'16%'},{label:'QUICK-ACCESS TOP POCKET',x:'62%',y:'10%'},{label:'USB PASS-THROUGH',x:'66%',y:'50%'},{label:'LUGGAGE PASS-THROUGH STRAP',x:'10%',y:'70%'}],
    dimensions:[{label:'42 cm',axis:'height',x:'4%',y:'14%',h:'64%'},{label:'28 cm',axis:'width',x:'18%',y:'92%',w:'55%'}],
    playlists:{
      focused:{name:'Quick Access',description:'Minimal rhythm for the daily transit hop.',tracks:[['Top Pocket','03:11'],['Pass-Through','03:34'],['Ice Line','03:20'],['Sync Complete','03:42']]},
      electric:{name:'Fast Transit',description:'Bright energy for a quick city hop.',tracks:[['USB Ready','03:03'],['Ice Voltage','03:27'],['Quick Hop','03:15'],['Charge On','03:36']]},
      slow:{name:'Slow Transit',description:'A calmer pace for the last leg home.',tracks:[['Soft Ice','04:08'],['Minimal Line','03:51'],['Quiet Pass','04:01'],['Evening Hop','03:47']]}
    }
  },
  p11: {
    id:'p11', code:'OBJ / 11', passport:'HB-P11-011', name:'Voyager Smart Edition', price:154, category:'system', badge:'SMART',
    image:'assets/products/p3-navy-voyager-duffel.png', cardImage:'assets/products/p3-navy-voyager-duffel.jpg', images:['assets/products/p3-navy-voyager-duffel.png','assets/products/p2-navy-metropolitan-duffel.png','assets/products/p4-smart-duffel-ivory.png'],
    colors:[{name:'Navy',hex:'#0b1240'},{name:'Sky',hex:'#8fd4ec'}], sizes:['45L'],
    subtitle:'Voyager, upgraded', kicker:'Connected travel object',
    description:'The Voyager, upgraded. Integrated power bank, GPS tracker pocket and reactive trim lighting.',
    specs:[['Material','Tech canvas DWR'],['Capacity','45L'],['Weight','1.85 kg'],['Warranty','Lifetime + 2yr electronics'],['Colors','Navy / Sky'],['Sizes','45L']],
    mood:{label:'Connected / Composed',quiet:56,urban:58,trip:74},
    passportData:{material:'Tech canvas DWR / electronics core',service:'Battery + GPS diagnostics',care:'Charge core every 30 days',role:'Connected voyage'},
    pack:['Laptop', 'Power bank', 'GPS tag', '3 shirts', 'Wash kit', 'Cables'],
    blueprint:[{label:'TECH CANVAS DWR SHELL',x:'8%',y:'18%'},{label:'INTEGRATED POWER BANK',x:'62%',y:'12%'},{label:'GPS TRACKER POCKET',x:'68%',y:'58%'},{label:'REACTIVE TRIM LIGHTING',x:'10%',y:'62%'}],
    dimensions:[{label:'49 cm',axis:'width',x:'20%',y:'92%',w:'60%'},{label:'30 cm',axis:'height',x:'4%',y:'20%',h:'60%'}],
    playlists:{
      focused:{name:'Upgraded Log',description:'Controlled rhythm for the connected voyage.',tracks:[['GPS Lock','03:24'],['Power Route','03:49'],['Sky Signal','03:37'],['Compass Sync','04:03']]},
      electric:{name:'Voltage Voyage',description:'Reactive energy for the upgraded object.',tracks:[['Trim Voltage','03:11'],['Fast Sky','03:33'],['Live Trace','03:46'],['Bright Route','03:20']]},
      slow:{name:'Slow Signal',description:'Ambient calm while the tracker stays quiet.',tracks:[['Low Power','04:17'],['Soft Sky','03:59'],['Quiet Compass','04:22'],['Sky Drift','03:44']]}
    }
  },
  p12: {
    id:'p12', code:'OBJ / 12', passport:'HB-P12-012', name:'Compact Sling Mini', price:31, category:'carry', badge:'SALE',
    image:'assets/products/p8-grey-sling.png', cardImage:'assets/products/p8-grey-sling.jpg', images:['assets/products/p8-grey-sling.png','assets/products/alt-black-crossbody-front.png'],
    colors:[{name:'Grey',hex:'#7d818c'},{name:'Tan',hex:'#8e6b4a'}], sizes:['One Size'],
    subtitle:'The going-out sling', kicker:'Essential night-out object',
    description:'The going-out sling for nights when you only need the essentials.',
    specs:[['Material','Canvas'],['Capacity','2.5L'],['Weight','0.28 kg'],['Warranty','Lifetime zipper'],['Colors','Grey / Tan'],['Sizes','One Size']],
    mood:{label:'Electric / Social',quiet:22,urban:84,trip:10},
    passportData:{material:'Canvas',service:'Strap replacement path',care:'Spot-clean after use',role:'Night-out carry'},
    pack:['Phone', 'Wallet', 'Keys', 'Lip balm'],
    blueprint:[{label:'CANVAS SHELL',x:'8%',y:'20%'},{label:'ADJUSTABLE STRAP',x:'60%',y:'12%'},{label:'SINGLE-ZIP ACCESS',x:'66%',y:'58%'}],
    dimensions:[{label:'20 cm',axis:'width',x:'20%',y:'92%',w:'52%'},{label:'14 cm',axis:'height',x:'6%',y:'28%',h:'44%'}],
    playlists:{
      focused:{name:'Night Prep',description:'Minimal build-up for the going-out sling.',tracks:[['Small Bag','02:44'],['Keys Down','03:02'],['Lip and Phone','02:51'],['Ready to Go','03:09']]},
      electric:{name:'Going Out',description:'High pulse for a night on the move.',tracks:[['Grey Voltage','02:58'],['Tan Line','03:14'],['Fast Exit','02:47'],['Night Signal','03:21']]},
      slow:{name:'Late Night Walk',description:'A low-key soundtrack for the walk home.',tracks:[['Streetlight','03:52'],['Quiet Sling','03:38'],['Soft Tan','04:01'],['Last Call','03:29']]}
    }
  },
  p13: {
    id:'p13', code:'OBJ / 13', passport:'HB-P13-013', name:'Metropolitan XL', price:88, category:'luggage', badge:null,
    image:'assets/products/p2-navy-metropolitan-duffel.png', cardImage:'assets/products/p2-navy-metropolitan-duffel.jpg', images:['assets/products/p2-navy-metropolitan-duffel.png','assets/products/alt-steel-duffel.png'],
    colors:[{name:'Navy',hex:'#0b1240'},{name:'Ice',hex:'#bfe8f5'}], sizes:['60L','70L'],
    subtitle:'Two-week capacity duffel', kicker:'Extended travel object',
    description:'Two-week capacity Metropolitan with compression straps and separate shoe compartment.',
    specs:[['Material','Tech canvas'],['Capacity','60–70L'],['Weight','2.1 kg'],['Warranty','Lifetime zipper'],['Colors','Navy / Ice'],['Sizes','60L / 70L']],
    mood:{label:'Expansive / Composed',quiet:62,urban:66,trip:90},
    passportData:{material:'Tech canvas',service:'Compression + zipper service',care:'Air after long trips',role:'Extended travel'},
    pack:['6 shirts', '3 trousers', 'Shoes', 'Wash kit', 'Jacket', 'Compression cubes'],
    blueprint:[{label:'TECH CANVAS SHELL',x:'8%',y:'18%'},{label:'COMPRESSION STRAPS',x:'62%',y:'10%'},{label:'SEPARATE SHOE COMPARTMENT',x:'68%',y:'62%'},{label:'LIFETIME ZIPPER',x:'10%',y:'68%'}],
    dimensions:[{label:'70 cm',axis:'width',x:'18%',y:'92%',w:'64%'},{label:'38 cm',axis:'height',x:'4%',y:'16%',h:'64%'}],
    playlists:{
      focused:{name:'Long Metro',description:'Steady rhythm for two-week capacity travel.',tracks:[['Compression Set','03:31'],['Shoe Bay','03:57'],['Ice Line XL','04:05'],['Full Load','03:40']]},
      electric:{name:'Metro Overdrive',description:'Energy for ambitious packing and long trips.',tracks:[['Extra Day','03:20'],['One More Layer','03:41'],['Zip Pressure','03:18'],['Still Fits','03:52']]},
      slow:{name:'Slow XL',description:'A patient soundtrack for the long haul.',tracks:[['Wide Load','04:23'],['Soft Compression','04:02'],['Quiet Ice','04:16'],['Steel Rest','03:49']]}
    }
  },
  p14: {
    id:'p14', code:'OBJ / 14', passport:'HB-P14-014', name:'Trailhead Backpack', price:65, category:'carry', badge:null,
    image:'assets/products/p7-heritage-backpack.png', cardImage:'assets/products/p7-heritage-backpack.jpg', images:['assets/products/p7-heritage-backpack.png','assets/products/alt-black-backpack-art.png'],
    colors:[{name:'Olive',hex:'#5a6b3f'},{name:'Charcoal',hex:'#14163a'}], sizes:['24L','32L'],
    subtitle:'Weekend-trail ready pack', kicker:'Trail-ready object',
    description:'Weekend-trail ready: hydration sleeve, top-load main and weatherproof base.',
    specs:[['Material','Ripstop nylon'],['Capacity','24–32L'],['Weight','1.05 kg'],['Warranty','Lifetime zipper'],['Colors','Olive / Charcoal'],['Sizes','24L / 32L']],
    mood:{label:'Rugged / Ready',quiet:58,urban:24,trip:50},
    passportData:{material:'Ripstop nylon',service:'Base + strap service path',care:'Rinse base after trail use',role:'Trail carry'},
    pack:['Hydration bottle', 'Rain shell', 'Wash kit', 'Trail snacks', 'First-aid kit'],
    blueprint:[{label:'RIPSTOP NYLON SHELL',x:'8%',y:'16%'},{label:'HYDRATION SLEEVE',x:'62%',y:'10%'},{label:'TOP-LOAD MAIN COMPARTMENT',x:'66%',y:'52%'},{label:'WEATHERPROOF BASE',x:'10%',y:'70%'}],
    dimensions:[{label:'50 cm',axis:'height',x:'4%',y:'14%',h:'68%'},{label:'32 cm',axis:'width',x:'18%',y:'92%',w:'58%'}],
    playlists:{
      focused:{name:'Trailhead Focus',description:'Grounded tempo for weekend trails.',tracks:[['Ripstop Line','03:22'],['Hydration Check','03:47'],['Base Camp','03:35'],['Trail Ready','03:14']]},
      electric:{name:'Trail Push',description:'Energy for the climb.',tracks:[['Switchback','03:05'],['Ridge Line','03:29'],['Fast Ascent','03:18'],['Summit Push','03:41']]},
      slow:{name:'Slow Trail',description:'A patient soundtrack for the way down.',tracks:[['Quiet Descent','04:11'],['Soft Base','03:54'],['Evening Camp','04:19'],['Trail Rest','03:47']]}
    }
  },
  p15: {
    id:'p15', code:'OBJ / 15', passport:'HB-P15-015', name:'HABÄNE 01 — Lunar Edition', price:176, category:'system', badge:'PREBOOK',
    image:'assets/products/p4-smart-duffel-ivory.png', cardImage:'assets/products/p4-smart-duffel-ivory.jpg', images:['assets/products/p4-smart-duffel-ivory.png','assets/products/alt-white-duffel.png','assets/products/alt-steel-duffel.png'],
    colors:[{name:'Lunar',hex:'#e8eaef'},{name:'Eclipse',hex:'#0b1240'}], sizes:['45L'],
    subtitle:'Numbered first drop', kicker:'Limited flagship object',
    description:'Our first numbered drop. 300 pieces, each laser-etched with its own Nº. Lunar-grey tech canvas, brass hardware, full smart core — and it never restocks.',
    specs:[['Material','Lunar tech canvas + brass'],['Capacity','45L'],['Weight','1.75 kg'],['Warranty','Lifetime + 2yr electronics'],['Colors','Lunar / Eclipse'],['Sizes','45L']],
    mood:{label:'Rare / Precise',quiet:66,urban:56,trip:68},
    passportData:{material:'Lunar tech canvas + brass',service:'Numbered unit diagnostics',care:'Charge core every 30 days',role:'Limited flagship'},
    pack:['Laptop', 'Power bank', 'GPS tag', '3 shirts', 'Wash kit', 'Charger'],
    blueprint:[{label:'LUNAR TECH CANVAS',x:'8%',y:'18%'},{label:'BRASS HARDWARE',x:'62%',y:'10%'},{label:'LASER-ETCHED Nº PLATE',x:'68%',y:'58%'},{label:'FULL SMART CORE',x:'10%',y:'62%'}],
    dimensions:[{label:'48 cm',axis:'width',x:'20%',y:'92%',w:'60%'},{label:'30 cm',axis:'height',x:'4%',y:'20%',h:'60%'}],
    playlists:{
      focused:{name:'Numbered Unit',description:'Precise rhythm for a limited first drop.',tracks:[['Lunar Line','03:29'],['Brass Etch','03:52'],['Unit 01','03:36'],['Eclipse Set','04:04']]},
      electric:{name:'First Drop',description:'Bright energy for a release that never restocks.',tracks:[['Lunar Voltage','03:10'],['Etched Fast','03:33'],['Rare Signal','03:21'],['Drop Night','03:47']]},
      slow:{name:'Eclipse Hour',description:'Ambient calm for the numbered edition.',tracks:[['Lunar Glow','04:20'],['Quiet Brass','03:58'],['Soft Eclipse','04:12'],['Last Unit','03:44']]}
    }
  }
};

const state = {
  activeProduct:'p1',
  cart:JSON.parse(localStorage.getItem('habane_cart')||'[]'),
  compare:JSON.parse(localStorage.getItem('habane_compare')||'[]'),
  matcher:{duration:'short',mode:'air',mood:'focused'},
  packSelected:new Set(),
  playlistMood:'focused',
  audio:{playing:false,timer:null,progress:0,trackIndex:0}
};

const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const money=n=>new Intl.NumberFormat('de-DE',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
const lock=v=>document.body.classList.toggle('is-locked',v);
function toast(message){const el=$('[data-toast]');el.textContent=message;el.classList.add('is-visible');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('is-visible'),2200)}

const blogPosts=[
  {slug:'art-of-packing-light',tag:'PACKING',date:'12 JUL 2026',readTime:'4 min read',image:'assets/products/p1-olive-skyline-duffel.jpg',
    title:'The art of packing light, without leaving anything behind.',
    excerpt:'Three trips, one carry-on. How a tighter packing logic changes the way you move through an airport.',
    body:['Packing light isn’t about owning less — it’s about knowing exactly what earns its place in the bag. Every object in the HABÄNE system was designed around that idea: modular compartments, compression points, and a shape that forces a decision at the zipper rather than at the check-in counter.','Start with the base layer: two days of clothing, repeatable and neutral. Add the wildcard — one item that only makes sense for this specific trip. Everything else is negotiable.','The result isn’t a smaller trip. It’s a faster one — through security, across a platform, into a taxi — because the bag was never fighting you in the first place.']},
  {slug:'inside-the-workshop',tag:'CRAFT',date:'02 JUL 2026',readTime:'5 min read',image:'assets/products/p2-navy-metropolitan-duffel.jpg',
    title:'Inside the workshop: what a lifetime zipper actually means.',
    excerpt:'A close look at the vault-grade hardware and stitching decisions that sit behind every HABÄNE warranty.',
    body:['A zipper fails in one of three ways: the teeth, the pull, or the tape it’s sewn to. Most warranties only cover one of those. Ours covers all three, because a bag that’s otherwise perfect is useless the moment its zipper gives out on a jet bridge.','Vault-grade hardware means oversized teeth, a reinforced pull with a secondary stitch point, and tape sewn with a box-and-cross pattern rather than a single straight line. It costs more per unit. It also means the zipper is very rarely the reason an object comes back to us.','This is the part of the object nobody photographs. It’s also the part that decides whether it survives ten trips or two hundred.']},
  {slug:'five-cities-metropolitan',tag:'FIELD NOTES',date:'24 JUN 2026',readTime:'6 min read',image:'assets/products/p2-navy-metropolitan-duffel.jpg',
    title:'Five cities that are made for the Metropolitan Duffel.',
    excerpt:'Cabin-friendly, city-first — a short list of departures where this object earns its name.',
    body:['Some objects are built for a single kind of trip. The Metropolitan was built for the 48-hour city loop: one cabin bag, no checked luggage, a schedule dense enough that you don’t want to think about logistics twice.','Tokyo, for the way it rewards a bag that fits in a coin locker. Lisbon, for hills that punish anything with bad straps. Amsterdam, for a city built at bicycle scale. New York, obviously. And Berlin, where the Metropolitan was first sketched, on a napkin, on a train that was eleven minutes late.','None of this is a rule. It’s just where the object has quietly proven itself, trip after trip.']},
  {slug:'carry-vs-luggage',tag:'GUIDE',date:'15 JUN 2026',readTime:'4 min read',image:'assets/products/p6-midnight-rolltop.png',
    title:'Carry or luggage? How to actually decide.',
    excerpt:'A short framework for choosing between the carry and luggage categories — before you fall for the wrong bag.',
    body:['The honest answer is: it’s rarely about capacity. Most people who buy luggage for a 3-day trip end up filling it anyway, because empty space invites more packing, not less.','Ask instead: does this trip involve more than one mode of movement? A carry object — duffel, backpack, sling — is built for trips where you’re walking with the bag more than wheeling it. Luggage is built for the opposite: long transfers, hard floors, one main haul from door to gate.','If you’re still unsure, our matcher on the homepage will ask you three questions and get there faster than this article will.']},
  {slug:'science-of-a-lifetime-zipper',tag:'CRAFT',date:'03 JUN 2026',readTime:'3 min read',image:'assets/products/p3-navy-voyager-duffel.jpg',
    title:'Why we test every zipper to 20,000 cycles.',
    excerpt:'The unglamorous engineering behind a claim we make on every single product page.',
    body:['Twenty thousand cycles is roughly what a well-used travel bag sees over a decade of regular trips. We test to that number before a zipper ever ships on a HABÄNE object, and we test it under load, not just open-and-close in a vacuum.','It’s a slow, repetitive, unglamorous part of the process. It’s also the reason we can put "lifetime zipper" on a product page without a line of small print underneath it.']},
  {slug:'airport-to-boarding-in-8-minutes',tag:'FIELD NOTES',date:'21 MAY 2026',readTime:'5 min read',image:'assets/products/p4-smart-duffel-ivory.jpg',
    title:'Field notes: airport to boarding gate in eight minutes.',
    excerpt:'What actually changes when your carry-on is built around the security line instead of around you.',
    body:['Eight minutes, door of the taxi to seated at the gate, security included. It only works with a specific kind of preparation: laptop sleeve that opens flat without unpacking anything else, no loose cables, one liquids pouch you can see through without opening.','The SMART Duffel’s check-in panel and dedicated laptop compartment exist because of exactly this kind of trip — the one where you’re not touring, you’re moving, and every extra motion at the tray table costs you time you don’t have.','It’s a small, specific kind of design problem. Most luggage ignores it entirely.']}
];
function renderBlogGrid(filter){
  const grid=$('[data-blog-grid]'); if(!grid) return;
  const list=filter&&filter!=='all'?blogPosts.filter(p=>p.tag===filter):blogPosts;
  grid.innerHTML=list.map(p=>`<article class="blog-card">
    <a class="blog-card__media" href="blog-post.html?slug=${p.slug}"><span class="blog-card__tag">${p.tag}</span><img src="${p.image}" alt="${p.title}" loading="lazy"></a>
    <div class="blog-card__body">
      <span class="blog-card__meta">${p.date} · ${p.readTime}</span>
      <h3><a href="blog-post.html?slug=${p.slug}">${p.title}</a></h3>
      <p>${p.excerpt}</p>
      <a class="blog-card__link" href="blog-post.html?slug=${p.slug}">Read the story <span>→</span></a>
    </div>
  </article>`).join('');
}
if($('[data-blog-grid]')){
  renderBlogGrid('all');
  $$('[data-blog-filter]').forEach(btn=>btn.onclick=()=>{
    $$('[data-blog-filter]').forEach(b=>b.classList.remove('is-active'));
    btn.classList.add('is-active');
    renderBlogGrid(btn.dataset.blogFilter);
  });
}
if($('[data-blog-post]')){
  const slug=new URLSearchParams(location.search).get('slug');
  const post=blogPosts.find(p=>p.slug===slug)||blogPosts[0];
  $('[data-blog-post-tag]').textContent=post.tag;
  $('[data-blog-post-date]').textContent=`${post.date} · ${post.readTime}`;
  $('[data-blog-post-title]').textContent=post.title;
  $('[data-blog-post-image]').src=post.image;
  $('[data-blog-post-image]').alt=post.title;
  $('[data-blog-post-body]').innerHTML=post.body.map(para=>`<p>${para}</p>`).join('');
  document.title=`${post.title} — HABÄNE Journal`;
  const others=blogPosts.filter(p=>p.slug!==post.slug).slice(0,3);
  const moreEl=$('[data-blog-post-more]');
  if(moreEl) moreEl.innerHTML=others.map(p=>`<article class="blog-card">
    <a class="blog-card__media" href="blog-post.html?slug=${p.slug}"><span class="blog-card__tag">${p.tag}</span><img src="${p.image}" alt="${p.title}" loading="lazy"></a>
    <div class="blog-card__body">
      <span class="blog-card__meta">${p.date} · ${p.readTime}</span>
      <h3><a href="blog-post.html?slug=${p.slug}">${p.title}</a></h3>
      <a class="blog-card__link" href="blog-post.html?slug=${p.slug}">Read the story <span>→</span></a>
    </div>
  </article>`).join('');
}

function productPhoto(product,extraClass,src){return `<img class="product-photo${extraClass?' '+extraClass:''}" src="${src||product.image}" alt="${product.name}" loading="lazy">`}
function createProductCards(){
  const grid=$('[data-product-grid]');
  const total=Object.keys(products).length;
  grid.innerHTML=Object.values(products).map((p,index)=>`<article class="product-card" data-category="${p.category}" data-product-card="${p.id}">
    <div class="product-card__media">${p.badge?`<span class="product-badge">${p.badge}</span>`:''}<button class="product-favourite" type="button" aria-label="Save ${p.name}">♡</button>${productPhoto(p,null,p.cardImage)}<div class="product-code"><span>${p.code}</span><span>${String(index+1).padStart(2,'0')} / ${String(total).padStart(2,'0')}</span></div></div>
    <div class="product-card__body"><div><h3>${p.name}</h3><p>${p.subtitle}</p></div><strong>${money(p.price)}</strong></div>
    <div class="product-card__actions"><button type="button" data-experience="${p.id}">Experience object</button><button type="button" data-card-add="${p.id}" aria-label="Add ${p.name} to bag">+</button></div>
  </article>`).join('');
  bindDynamicButtons();
}

function bindDynamicButtons(){
  $$('[data-experience]').forEach(btn=>btn.onclick=()=>location.href=`product.html?id=${btn.dataset.experience}`);
  $$('[data-card-add]').forEach(btn=>btn.onclick=()=>addToCart(btn.dataset.cardAdd));
  $$('.product-favourite').forEach(btn=>btn.onclick=()=>{btn.classList.toggle('is-saved');btn.textContent=btn.classList.contains('is-saved')?'♥':'♡';toast(btn.classList.contains('is-saved')?'Saved to your movement list':'Removed from movement list')});
  $$('[data-product-card] .product-card__media').forEach(media=>{
    const card=media.closest('[data-product-card]');
    media.onclick=e=>{if(e.target.closest('.product-favourite'))return;location.href=`product.html?id=${card.dataset.productCard}`};
  });
}

function renderRelated(id){
  const rel=$('[data-related-products]'); if(!rel) return;
  const others=Object.values(products).filter(p=>p.id!==id).sort(()=>.5-Math.random()).slice(0,4);
  rel.innerHTML=others.map(p=>`<article class="product-card" data-product-card="${p.id}">
    <div class="product-card__media">${p.badge?`<span class="product-badge">${p.badge}</span>`:''}${productPhoto(p,null,p.cardImage)}</div>
    <div class="product-card__body"><div><h3>${p.name}</h3><p>${p.subtitle}</p></div><strong>${money(p.price)}</strong></div>
  </article>`).join('');
  $$('[data-related-products] .product-card').forEach(card=>card.onclick=()=>location.href=`product.html?id=${card.dataset.productCard}`);
}

function openProduct(id){
  const p=products[id]; if(!p)return;
  state.activeProduct=id; state.packSelected=new Set(); state.playlistMood='focused';
  $$('[data-product-code]').forEach(el=>el.textContent=p.code);
  $('[data-product-kicker]').textContent=p.kicker;
  $('[data-product-name]').textContent=p.name;
  $('[data-product-description]').textContent=p.description;
  if($('[data-product-accordion]')){
    const spec=label=>{const s=p.specs.find(([k])=>k.toLowerCase()===label.toLowerCase());return s?s[1]:''};
    $('[data-accordion-details]').textContent=`${p.description} Built for ${p.passportData.role.toLowerCase()}, weighing ${spec('Weight')} with ${spec('Warranty').toLowerCase()}.`;
    $('[data-accordion-materials]').textContent=`${p.passportData.material}. Available in ${spec('Colors')}, sized ${spec('Sizes')}.`;
    $('[data-accordion-care]').textContent=`${p.passportData.service}. ${p.passportData.care}.`;
    if($('[data-accordion-care-faq]')) $('[data-accordion-care-faq]').textContent=`${p.passportData.service}. ${p.passportData.care}.`;
    $$('[data-accordion-panel]').forEach(panel=>panel.style.maxHeight='0px');
    $$('[data-accordion-toggle]').forEach(toggle=>toggle.setAttribute('aria-expanded','false'));
  }
  $('[data-product-price]').textContent=money(p.price);
  $('[data-dialog-price]').textContent=money(p.price);
  document.title=`${p.name} — HABÄNE`;
  const swatches=$('[data-product-swatches]');
  if(swatches) swatches.innerHTML=p.colors.map((c,i)=>`<button type="button" class="${i===0?'is-active':''}" style="background:${c.hex}" aria-label="${c.name}"></button>`).join('');
  const shape=$('[data-product-shape]'); shape.src=p.image; shape.alt=p.name;
  $('[data-product-specs]').innerHTML=p.specs.map(([k,v])=>`<div><small>${k}</small><b>${v}</b></div>`).join('');
  $('[data-product-mood-label]').textContent=p.mood.label;
  $('[data-dna-quiet]').style.width=`${p.mood.quiet}%`;
  $('[data-dna-urban]').style.width=`${p.mood.urban}%`;
  $('[data-dna-trip]').style.width=`${p.mood.trip}%`;
  $('[data-passport-id]').textContent=p.passport;
  $('[data-passport-material]').textContent=p.passportData.material;
  $('[data-passport-service]').textContent=p.passportData.service;
  $('[data-passport-care]').textContent=p.passportData.care;
  $('[data-passport-role]').textContent=p.passportData.role;
  renderPackItems(); renderPlaylist(); activateTab('overview'); setScene('airport'); renderBlueprint(p); syncSoundArt(); renderRelated(id);
}
function renderBlueprint(p){
  const el=$('[data-blueprint]'); if(!el) return;
  const callouts=(p.blueprint||[]).map(b=>{
    const side=parseFloat(b.x)<50?' blueprint-callout--left':'';
    return `<span class="blueprint-callout${side}" style="left:${b.x};top:${b.y}">${b.label}</span>`;
  }).join('');
  const dims=(p.dimensions||[]).map(d=>{
    const sizeStyle=d.axis==='width'?`width:${d.w}`:`height:${d.h}`;
    return `<div class="blueprint-dim blueprint-dim--${d.axis}" style="left:${d.x};top:${d.y};${sizeStyle}"><span class="blueprint-dim__line"></span>${d.label}</div>`;
  }).join('');
  el.innerHTML=callouts+dims;
}

function activateTab(tab){$$('[data-tab]').forEach(b=>b.classList.toggle('is-active',b.dataset.tab===tab));$$('[data-panel]').forEach(p=>p.classList.toggle('is-active',p.dataset.panel===tab))}
function renderPackItems(){
  const p=products[state.activeProduct];
  $('[data-pack-items]').innerHTML=p.pack.map((item,i)=>`<button type="button" data-pack-item="${i}">${item}</button>`).join('');
  $('[data-pack-used]').textContent='0'; $('[data-capacity-fill]').style.width='0%'; $('[data-capacity-message]').textContent='Select items to test the fit.';
  $$('[data-pack-item]').forEach(btn=>btn.onclick=()=>{const i=Number(btn.dataset.packItem);state.packSelected.has(i)?state.packSelected.delete(i):state.packSelected.add(i);btn.classList.toggle('is-active');updateCapacity()});
}
function updateCapacity(){
  const p=products[state.activeProduct]; const count=state.packSelected.size; const usage=Math.min(100,Math.round((count/Math.max(4,p.pack.length))*95));
  $('[data-pack-used]').textContent=usage; $('[data-capacity-fill]').style.width=`${usage}%`;
  $('[data-capacity-message]').textContent=usage<45?'Room remains for the unexpected.':usage<80?'Balanced for this object.':'Near capacity—consider a larger object or remove one layer.';
}
function renderPlaylist(){
  const p=products[state.activeProduct], list=p.playlists[state.playlistMood];
  if($('[data-playlist-name]')) $('[data-playlist-name]').textContent=list.name;
  if($('[data-playlist-description]')) $('[data-playlist-description]').textContent=list.description;
  if($('[data-track-list]')) $('[data-track-list]').innerHTML=list.tracks.map(([name,time])=>`<li><b>${name}</b><span>${time}</span></li>`).join('');
  if($('[data-mood-selector]')) $$('[data-mood]', $('[data-mood-selector]')).forEach(b=>b.classList.toggle('is-active',b.dataset.mood===state.playlistMood));
}
function setScene(scene){
  const el=$('[data-scene]'); el.className=`product-scene product-scene--${scene}`;
  $('[data-scene-label]').textContent=scene==='airport'?'AIRPORT / 05:42':scene==='night'?'NIGHT CITY / 23:14':'QUIET HOTEL / 08:20';
  $$('[data-scene-option]').forEach(b=>b.classList.toggle('is-active',b.dataset.sceneOption===scene));
}

function recommend(){
  const {duration,mode,mood}=state.matcher;
  let id='p1';
  if(duration==='long') id='p13';
  else if(mode==='city'&&mood==='electric') id='p12';
  else if(mode==='city') id='p6';
  else if(mode==='rail'&&duration==='medium') id='p6';
  else if(mood==='slow'&&duration==='short') id='p6';
  else if(duration==='medium'&&mode==='air') id='p1';
  const p=products[id];
  $('[data-match-code]').textContent=p.code; $('[data-match-name]').textContent=p.name; $('[data-match-price]').textContent=money(p.price);
  $('[data-match-reason]').textContent=`Best for ${duration==='short'?'short':duration==='medium'?'medium-length':'extended'}, ${mood} ${mode} travel.`;
  const s=$('[data-match-shape]');s.src=p.image;s.alt=p.name; $('[data-match-open]').dataset.matchId=id;
}

function addToCart(id){const item=state.cart.find(i=>i.id===id);item?item.qty++:state.cart.push({id,qty:1});updateCart();toast(`${products[id].name} added`)}
function updateCart(){
  localStorage.setItem('habane_cart',JSON.stringify(state.cart));
  const count=state.cart.reduce((a,b)=>a+b.qty,0), subtotal=state.cart.reduce((a,b)=>a+products[b.id].price*b.qty,0);
  $$('[data-cart-count]').forEach(el=>el.textContent=count);
  const items=$('[data-cart-items]'), summary=$('[data-cart-summary]');
  if(!count){items.innerHTML='<div class="empty-state"><span>00</span><h3>Your movement system is empty.</h3><button type="button" data-empty-shop>Explore the ten objects →</button></div>';summary.hidden=true;$('[data-cart-progress]').style.width='0%';$('[data-cart-progress-label]').textContent='Add €250 for complimentary EU delivery.';$('[data-empty-shop]').onclick=()=>{closeDrawer();location.hash='shop'};return}
  items.innerHTML=state.cart.map(item=>{const p=products[item.id];return `<article class="cart-item"><div class="cart-item__image">${productPhoto(p)}</div><div><h3>${p.name}</h3><p>${p.colors[0].name} / ${p.sizes[0]}</p><div class="cart-item__qty"><button data-dec="${p.id}">−</button><span>${item.qty}</span><button data-inc="${p.id}">+</button></div></div><div class="cart-item__end"><strong>${money(p.price*item.qty)}</strong><button data-remove="${p.id}">Remove</button></div></article>`}).join('');
  summary.hidden=false;$('[data-cart-subtotal]').textContent=money(subtotal);$('[data-cart-progress]').style.width=`${Math.min(100,subtotal/250*100)}%`;$('[data-cart-progress-label]').textContent=subtotal>=250?'Complimentary EU delivery unlocked.':`Add ${money(250-subtotal)} for complimentary EU delivery.`;
  $$('[data-inc]',items).forEach(b=>b.onclick=()=>{state.cart.find(i=>i.id===b.dataset.inc).qty++;updateCart()});
  $$('[data-dec]',items).forEach(b=>b.onclick=()=>{const i=state.cart.find(x=>x.id===b.dataset.dec);i.qty--;if(i.qty<1)state.cart=state.cart.filter(x=>x.id!==i.id);updateCart()});
  $$('[data-remove]',items).forEach(b=>b.onclick=()=>{state.cart=state.cart.filter(i=>i.id!==b.dataset.remove);updateCart()});
}
function addCompare(id){if(state.compare.includes(id)){openDrawer('compare');return}if(state.compare.length>=3){toast('Compare up to three objects');return}state.compare.push(id);updateCompare();openDrawer('compare')}
function updateCompare(){
  localStorage.setItem('habane_compare',JSON.stringify(state.compare));
  $$('[data-compare-count]').forEach(el=>el.textContent=state.compare.length);
  const wrap=$('[data-compare-content]');
  if(!state.compare.length){wrap.innerHTML='<div class="compare-empty"><h3>No objects selected.</h3><p>Add up to three objects from any product experience.</p></div>';return}
  const rows=['Price','Material','Capacity','Weight','Warranty'];
  const selected=state.compare.map(id=>products[id]);
  wrap.innerHTML=`<div class="compare-table" style="--compare-count:${selected.length}"><div class="label">Object</div>${selected.map(p=>`<div class="compare-product"><h3>${p.name}</h3><button data-compare-remove="${p.id}">Remove</button></div>`).join('')}${rows.map((label,row)=>`<div class="label">${label}</div>${selected.map(p=>`<div>${row===0?money(p.price):(p.specs.find(s=>s[0]===label)||['','—'])[1]}</div>`).join('')}`).join('')}</div>`;
  $$('[data-compare-remove]',wrap).forEach(b=>b.onclick=()=>{state.compare=state.compare.filter(id=>id!==b.dataset.compareRemove);updateCompare()});
}

function openDrawer(type){const drawer=$(`[data-${type}-drawer]`);drawer.classList.add('is-open');drawer.setAttribute('aria-hidden','false');$('[data-scrim]').classList.add('is-visible');lock(true)}
function closeDrawer(){$$('[data-cart-drawer],[data-compare-drawer]').forEach(d=>{d.classList.remove('is-open');d.setAttribute('aria-hidden','true')});$('[data-scrim]').classList.remove('is-visible');lock(false)}
function openSearch(){$('[data-search-overlay]').classList.add('is-open');$('[data-search-overlay]').setAttribute('aria-hidden','false');lock(true);renderSearchResults(Object.values(products).slice(0,6));setTimeout(()=>$('#site-search').focus(),350)}
function closeSearch(){$('[data-search-overlay]').classList.remove('is-open');$('[data-search-overlay]').setAttribute('aria-hidden','true');lock(false)}
function renderSearchResults(list){$('[data-search-results]').innerHTML=list.slice(0,6).map(p=>`<button type="button" data-search-product="${p.id}"><small>${p.code} / ${p.category}</small><b>${p.name}</b><span>${money(p.price)}</span></button>`).join('');$$('[data-search-product]').forEach(b=>b.onclick=()=>location.href=`product.html?id=${b.dataset.searchProduct}`)}

function syncSoundArt(){const art=$('[data-sound-art]');if(art) art.classList.toggle('is-playing',state.audio.playing);const btn=$('[data-playlist-play]');if(btn) btn.classList.toggle('is-playing',state.audio.playing)}
function startPlaylist(){
  const p=products[state.activeProduct], playlist=p.playlists[state.playlistMood];state.audio.playing=true;state.audio.progress=0;state.audio.trackIndex=0;
  $('[data-audio-product]').textContent=p.name;$('[data-audio-track]').textContent=playlist.tracks[0][0];$('[data-audio-bar]').classList.add('is-visible');$('[data-audio-bar]').setAttribute('aria-hidden','false');$('[data-audio-toggle]').textContent='Ⅱ';syncSoundArt();
  clearInterval(state.audio.timer);state.audio.timer=setInterval(()=>{if(!state.audio.playing)return;state.audio.progress+=.7;if(state.audio.progress>=100){state.audio.progress=0;state.audio.trackIndex=(state.audio.trackIndex+1)%playlist.tracks.length;$('[data-audio-track]').textContent=playlist.tracks[state.audio.trackIndex][0]}$('[data-audio-progress]').style.width=`${state.audio.progress}%`;const soundProgress=$('[data-sound-progress]');if(soundProgress)soundProgress.style.width=`${state.audio.progress}%`;const seconds=Math.floor(state.audio.progress*2.4);$('[data-audio-time]').textContent=`${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`},700);
}
function stopAudio(){clearInterval(state.audio.timer);state.audio.playing=false;$('[data-audio-bar]').classList.remove('is-visible');$('[data-audio-bar]').setAttribute('aria-hidden','true');syncSoundArt()}

if($('[data-product-grid]')) createProductCards();
updateCart(); updateCompare();
if($('[data-matcher-group]')) recommend();
if($('[data-product-name]')){
  const requestedId=new URLSearchParams(location.search).get('id');
  openProduct(products[requestedId]?requestedId:'p1');
}

$('[data-announcement-close]').onclick=()=>{$('[data-announcement]').classList.add('is-hidden');document.documentElement.style.setProperty('--announcement-h','0px')};
window.addEventListener('scroll',()=>{$('[data-header]').classList.toggle('is-condensed',scrollY>60)},{passive:true});

(function announcementRotator(){
  const slides=$$('.announcement__slide');
  if(slides.length<2) return;
  let active=slides.findIndex(s=>s.classList.contains('is-active'));
  if(active<0) active=0;
  setInterval(()=>{
    const next=(active+1)%slides.length;
    slides[active].classList.remove('is-active');
    slides[active].classList.add('is-leaving');
    slides[next].classList.add('is-active');
    setTimeout(()=>slides[active].classList.remove('is-leaving'),500);
    active=next;
  },4200);
})();
function positionMobileMenu(){
  const header=$('[data-header]'), menu=$('[data-mobile-menu]');
  if(!header||!menu) return;
  const rect=header.getBoundingClientRect();
  menu.style.setProperty('--menu-top',`${Math.round(rect.bottom)+10}px`);
  menu.style.setProperty('--menu-right',`${Math.round(window.innerWidth-rect.right)}px`);
}
function openMobileMenu(){
  positionMobileMenu();
  $('[data-mobile-menu]').classList.add('is-open');
  $('[data-mobile-menu]').setAttribute('aria-hidden','false');
  $('[data-menu-open]').classList.add('is-active');
  $('[data-header]').classList.add('is-menu-open');
  $('[data-scrim]').classList.add('is-visible');
  lock(true);
}
function closeMobileMenu(){
  $('[data-mobile-menu]').classList.remove('is-open');
  $('[data-mobile-menu]').setAttribute('aria-hidden','true');
  $('[data-menu-open]').classList.remove('is-active');
  $('[data-header]').classList.remove('is-menu-open');
  $('[data-scrim]').classList.remove('is-visible');
  lock(false);
}
$('[data-menu-open]').onclick=()=>{$('[data-mobile-menu]').classList.contains('is-open')?closeMobileMenu():openMobileMenu()};
$('[data-menu-close]').onclick=closeMobileMenu;
$('[data-scrim]').addEventListener('click',()=>{if($('[data-mobile-menu]').classList.contains('is-open'))closeMobileMenu()});
window.addEventListener('resize',()=>{if($('[data-mobile-menu]').classList.contains('is-open'))positionMobileMenu()});
$$('[data-social]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();toast(`${a.dataset.social} coming soon`)}));
$$('.mobile-menu a').forEach(a=>a.onclick=()=>{$('[data-mobile-menu]').classList.remove('is-open');lock(false)});

if($('[data-matcher-group]')){
  $$('[data-matcher-group]').forEach(group=>$$('button',group).forEach(btn=>btn.onclick=()=>{$$('button',group).forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');state.matcher[group.dataset.matcherGroup]=btn.dataset.value;recommend()}));
  $('[data-match-open]').onclick=e=>location.href=`product.html?id=${e.currentTarget.dataset.matchId||'p1'}`;
}

if($('[data-product-grid]')){
  $$('[data-filter]').forEach(btn=>btn.onclick=()=>{$$('[data-filter]').forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');$$('[data-product-card]').forEach(card=>card.classList.toggle('is-hidden',btn.dataset.filter!=='all'&&card.dataset.category!==btn.dataset.filter))});
  $('[data-sort]').onclick=()=>{const grid=$('[data-product-grid]');$$('[data-product-card]',grid).reverse().forEach(card=>grid.appendChild(card));toast('Product order reversed')};
}

$$('[data-tab]').forEach(btn=>btn.onclick=()=>activateTab(btn.dataset.tab));
$$('[data-scene-option]').forEach(btn=>btn.onclick=()=>setScene(btn.dataset.sceneOption));
document.body.addEventListener('click',e=>{const btn=e.target.closest('.swatches button');if(!btn)return;$$('.swatches button').forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active')});
$$('[data-mood]').forEach(btn=>btn.onclick=()=>{state.playlistMood=btn.dataset.mood;renderPlaylist()});
if($('[data-product-name]')){
  $('[data-playlist-play]').onclick=()=>{
    if($('[data-audio-bar]').classList.contains('is-visible')){
      state.audio.playing=!state.audio.playing;
      $('[data-audio-toggle]').textContent=state.audio.playing?'Ⅱ':'▶';
      syncSoundArt();
    } else {
      startPlaylist();
    }
  };
  $('[data-dialog-add]').onclick=()=>{addToCart(state.activeProduct);openDrawer('cart')};
  $('[data-dialog-compare]').onclick=()=>addCompare(state.activeProduct);
  $('[data-passport-save]').onclick=()=>toast('Product passport saved to demo account');
}
$$('[data-accordion-toggle]').forEach(toggle=>toggle.onclick=()=>{
  const panel=toggle.nextElementSibling;
  const open=toggle.getAttribute('aria-expanded')==='true';
  toggle.setAttribute('aria-expanded',String(!open));
  panel.style.maxHeight=open?'0px':panel.scrollHeight+'px';
});

$('[data-cart-open]').onclick=()=>openDrawer('cart');$('[data-cart-close]').onclick=closeDrawer;$('[data-compare-close]').onclick=closeDrawer;$('[data-scrim]').onclick=closeDrawer;
$('[data-checkout]').onclick=()=>toast('Checkout is intentionally disabled in this prototype');

if(document.querySelector('.hero-carousel') && 'IntersectionObserver' in window){
  const revealTargets=$$('main > section:not(.hero-carousel)');
  revealTargets.forEach(el=>el.classList.add('reveal'));
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('is-revealed'); revealObserver.unobserve(entry.target); }
    });
  },{threshold:0,rootMargin:'0px 0px 400px 0px'});
  revealTargets.forEach(el=>revealObserver.observe(el));
}

$('[data-search-open]').onclick=openSearch;$('[data-search-close]').onclick=closeSearch;
$('[data-search-form]').onsubmit=e=>{e.preventDefault();const term=$('#site-search').value.trim().toLowerCase();const matches=Object.values(products).filter(p=>`${p.name} ${p.subtitle} ${p.category} ${p.description}`.toLowerCase().includes(term));renderSearchResults(matches.length?matches:Object.values(products).slice(0,6))};
$('#site-search').addEventListener('input',e=>{const term=e.target.value.trim().toLowerCase();renderSearchResults(Object.values(products).filter(p=>`${p.name} ${p.subtitle} ${p.category}`.toLowerCase().includes(term)))})

$('[data-audio-toggle]').onclick=()=>{state.audio.playing=!state.audio.playing;$('[data-audio-toggle]').textContent=state.audio.playing?'Ⅱ':'▶';syncSoundArt()};$('[data-audio-close]').onclick=stopAudio;
if($('[data-newsletter-form]')) $('[data-newsletter-form]').onsubmit=e=>{e.preventDefault();$('[data-newsletter-status]').textContent='You are inside the movement.';e.target.reset()};

document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('[data-search-overlay]').classList.contains('is-open'))closeSearch();else if($('[data-cart-drawer]').classList.contains('is-open')||$('[data-compare-drawer]').classList.contains('is-open'))closeDrawer();else if($('[data-mobile-menu]').classList.contains('is-open'))closeMobileMenu()}});

if($('[data-region]')){
  const regionBtn=$('[data-region]');
  let regionName='your region';
  function flagUrl(code){
    const points=code.toUpperCase().split('').map(c=>(0x1F1E6+(c.charCodeAt(0)-65)).toString(16)).join('-');
    return `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${points}.svg`;
  }
  function setRegion(code,loc){
    try{
      regionName=new Intl.DisplayNames([loc||'en'],{type:'region'}).of(code)||code;
    }catch(e){ regionName=code; }
    regionBtn.innerHTML=`<img src="${flagUrl(code)}" alt="" width="18" height="18" style="border-radius:50%;object-fit:cover" />`;
    regionBtn.setAttribute('aria-label',`Shipping region: ${regionName}`);
    $$('[data-menu-region]').forEach(el=>el.textContent=regionName);
  }
  const loc=navigator.language||'en-US';
  const fallbackCode=(loc.split('-')[1]||'US').toUpperCase();
  setRegion(fallbackCode,loc);
  fetch('https://get.geojs.io/v1/ip/geo.json',{signal:AbortSignal.timeout?AbortSignal.timeout(4000):undefined})
    .then(r=>r.ok?r.json():Promise.reject())
    .then(data=>{ if(data&&data.country_code) setRegion(data.country_code,loc); })
    .catch(()=>{});
  regionBtn.onclick=()=>toast(`Shipping to ${regionName}`);
}
if($('[data-prebook]')) $('[data-prebook]').onclick=()=>toast('Pre-booking opens soon — join the movement to get notified.');

if($('[data-hero-carousel]')){
  const heroSlidesData=[
    {eyebrow:'01 / SIGNATURE CARRY',heading:'TRAVEL<br><em>INTELLIGENTLY.</em>',sub:'Fifteen objects engineered as one coherent movement system.',cta:'Shop the collection',href:'#shop'},
    {eyebrow:'02 / CITY TO CITY',heading:'BUILT FOR<br><em>THE MOVE.</em>',sub:'Water-repellent canvas, vault-grade hardware, lifetime service paths.',cta:'Find your object',href:'#matcher'},
    {eyebrow:'03 / DEPARTURE READY',heading:'PACK ONCE.<br><em>MOVE OFTEN.</em>',sub:'Modular systems that adapt from a weekend to a full departure.',cta:'Explore ownership',href:'#ownership'}
  ];
  const heroSlides=$$('[data-hero-slide]');
  const heroDots=$$('[data-hero-dot]');
  let heroIndex=0,heroTimer;
  function showHero(i){
    heroSlides[heroIndex].classList.remove('is-active');
    heroDots[heroIndex].classList.remove('is-active');
    heroIndex=(i+heroSlides.length)%heroSlides.length;
    heroSlides[heroIndex].classList.add('is-active');
    heroDots[heroIndex].classList.add('is-active');
    const d=heroSlidesData[heroIndex];
    $('[data-hero-eyebrow]').textContent=d.eyebrow;
    $('[data-hero-heading]').innerHTML=d.heading;
    $('[data-hero-sub]').textContent=d.sub;
    const cta=$('[data-hero-cta]'); cta.href=d.href; cta.innerHTML=`${d.cta} <span>↗</span>`;
  }
  function nextHero(){showHero(heroIndex+1)}
  function restartHeroTimer(){clearInterval(heroTimer);heroTimer=setInterval(nextHero,6000)}
  $('[data-hero-prev]').onclick=()=>{showHero(heroIndex-1);restartHeroTimer()};
  $('[data-hero-next]').onclick=()=>{showHero(heroIndex+1);restartHeroTimer()};
  heroDots.forEach((dot,i)=>dot.onclick=()=>{showHero(i);restartHeroTimer()});
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches) restartHeroTimer();
}
