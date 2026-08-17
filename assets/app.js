const products = {
  p1: {
    id:'p1', code:'OBJ / 01', passport:'HB-P1-001', name:'Skyline Duffel', price:71, category:'luggage', badge:'Flagship',
    image:'assets/products/p1-olive-skyline-duffel.png', cardImage:'assets/products/p1-olive-skyline-duffel.jpg', images:['assets/products/p1-olive-skyline-duffel.png','assets/products/alt-white-duffel.png','assets/products/p2-navy-metropolitan-duffel.png','assets/products/p3-navy-voyager-duffel.png','assets/products/alt-steel-duffel.png'],
    colors:[{name:'Olive',hex:'#5a6b3f'},{name:'Midnight',hex:'#0b1240'},{name:'Silver',hex:'#9a9ea8'}], sizes:['35L','45L','55L'],
    subtitle:'Hand-drawn skyline travel bag', kicker:'Signature travel duffel',
    description:'Our hero carry. Hand-drawn skyline print on water-repellent canvas, leather-trim handles and a vault-grade zipper.',
    specs:[['Material','Water-repellent canvas'],['Capacity','35–55L'],['Weight','1.4 kg'],['Warranty','Lifetime zipper'],['Colors','Olive / Midnight / Silver'],['Sizes','35L / 45L / 55L']],
    mood:{label:'Adventurous / Grounded',quiet:58,urban:40,trip:70},
    passportData:{material:'Water-repellent canvas / leather trim',service:'Handle + zipper service path',care:'Wipe canvas after wet trips',role:'Signature carry'},
    pack:['3 shirts', '2 trousers', 'Shoes', 'Essentials', 'Jacket', 'Book'],
    blueprint:[{label:'WATER-REPELLENT CANVAS',x:'8%',y:'20%'},{label:'LEATHER-TRIM HANDLE',x:'62%',y:'12%'},{label:'VAULT-GRADE ZIPPER',x:'70%',y:'62%'},{label:'HAND-DRAWN SKYLINE PRINT',x:'10%',y:'55%'}],
    dimensions:[{label:'50 cm',axis:'width',x:'20%',y:'92%',w:'60%'},{label:'30 cm',axis:'height',x:'4%',y:'20%',h:'60%'}],
    playlists:{
      focused:{name:'City Skyline',description:'Steady rhythm for city-to-city moves.',tracks:[['Rooftop Line','03:24'],['Grid Walk','03:58'],['Overlook','04:10'],['Departure Sketch','03:41']]},
      electric:{name:'Night Skyline',description:'Bright pulse for evening departures.',tracks:[['Neon Outline','03:15'],['Skyward','03:47'],['Fast Lanes','03:29'],['City Current','04:02']]},
      slow:{name:'Quiet Skyline',description:'A calm view for slower travel days.',tracks:[['Morning Haze','04:05'],['Still Rooftop','03:52'],['Wide Window','04:18'],['Soft Horizon','03:44']]}
    }
  },
  p2: {
    id:'p2', code:'OBJ / 02', passport:'HB-P2-002', name:'Metropolitan Duffel', price:77, category:'luggage', badge:'City object',
    image:'assets/products/p2-navy-metropolitan-duffel.png', cardImage:'assets/products/p2-navy-metropolitan-duffel.jpg', images:['assets/products/p2-navy-metropolitan-duffel.png','assets/products/alt-steel-duffel.png','assets/products/p1-olive-skyline-duffel.png','assets/products/p3-navy-voyager-duffel.png','assets/products/alt-white-duffel.png'],
    colors:[{name:'Navy',hex:'#0b1240'},{name:'Ice',hex:'#bfe8f5'}], sizes:['40L','50L'],
    subtitle:'Cabin-friendly city duffel', kicker:'Cityscape travel object',
    description:'Midnight navy with an ice-blue cityscape and contrast webbing handles. Cabin-friendly with shoulder strap.',
    specs:[['Material','Tech canvas'],['Capacity','40–50L'],['Weight','1.5 kg'],['Warranty','Lifetime zipper'],['Colors','Navy / Ice'],['Sizes','40L / 50L']],
    mood:{label:'Composed / Cosmopolitan',quiet:64,urban:74,trip:55},
    passportData:{material:'Tech canvas / webbing handles',service:'Strap + zipper service path',care:'Spot-clean as needed',role:'City travel'},
    pack:['Laptop', '3 shirts', 'Trousers', 'Shoes', 'Essentials', 'Cables'],
    blueprint:[{label:'TECH CANVAS SHELL',x:'8%',y:'18%'},{label:'CONTRAST WEBBING HANDLE',x:'60%',y:'10%'},{label:'SHOULDER STRAP D-RING',x:'68%',y:'60%'},{label:'LIFETIME ZIPPER',x:'10%',y:'70%'}],
    dimensions:[{label:'52 cm',axis:'width',x:'20%',y:'92%',w:'60%'},{label:'32 cm',axis:'height',x:'4%',y:'20%',h:'60%'}],
    playlists:{
      focused:{name:'Metro Focus',description:'Clean tempo for cabin-friendly travel.',tracks:[['Platform 3','03:30'],['Ice Line','03:56'],['Navy Transit','04:03'],['Clear Signal','03:22']]},
      electric:{name:'Metro Night',description:'Cityscape energy after dark.',tracks:[['Blue District','03:41'],['Ice Voltage','03:19'],['Fast Metro','03:53'],['After Hours','04:07']]},
      slow:{name:'Metro Window',description:'Unhurried motion through the city.',tracks:[['Cloud Cover','04:12'],['Steel Calm','03:48'],['Slow Platform','04:22'],['Ice Light','03:39']]}
    }
  },
  p3: {
    id:'p3', code:'OBJ / 03', passport:'HB-P3-003', name:'Voyager Duffel', price:75, category:'luggage', badge:'Travel kit',
    image:'assets/products/p3-navy-voyager-duffel.png', cardImage:'assets/products/p3-navy-voyager-duffel.jpg', images:['assets/products/p3-navy-voyager-duffel.png','assets/products/p2-navy-metropolitan-duffel.png','assets/products/alt-white-duffel.png','assets/products/p1-olive-skyline-duffel.png','assets/products/alt-steel-duffel.png'],
    colors:[{name:'Navy',hex:'#0b1240'},{name:'Sky',hex:'#8fd4ec'}], sizes:['40L','50L'],
    subtitle:'Nautical line-art duffel', kicker:'Voyage-ready travel object',
    description:'Nautical line-art print across deep navy canvas. Travel duffel for overhead bins and boat decks alike.',
    specs:[['Material','Canvas + leather trim'],['Capacity','40–50L'],['Weight','1.45 kg'],['Warranty','Lifetime zipper'],['Colors','Navy / Sky'],['Sizes','40L / 50L']],
    mood:{label:'Nautical / Unhurried',quiet:70,urban:35,trip:66},
    passportData:{material:'Canvas + leather trim',service:'Trim + zipper service path',care:'Air dry after coastal use',role:'Voyage carry'},
    pack:['3 shirts', 'Trousers', 'Swim shorts', 'Essentials', 'Sandals', 'Sunglasses'],
    blueprint:[{label:'NAUTICAL LINE-ART PRINT',x:'8%',y:'20%'},{label:'LEATHER TRIM DETAIL',x:'62%',y:'12%'},{label:'DECK-READY BASE',x:'66%',y:'66%'},{label:'LIFETIME ZIPPER',x:'10%',y:'62%'}],
    dimensions:[{label:'51 cm',axis:'width',x:'20%',y:'92%',w:'60%'},{label:'31 cm',axis:'height',x:'4%',y:'20%',h:'60%'}],
    playlists:{
      focused:{name:'Voyager Log',description:'Measured sound for coastal movement.',tracks:[['Nautical Line','03:33'],['Harbor Watch','04:01'],['Deck Focus','03:27'],['Compass Set','03:49']]},
      electric:{name:'Open Water',description:'Forward energy for departures by sea or sky.',tracks:[['Tide Voltage','03:20'],['Wake','03:44'],['Open Route','04:06'],['Bright Coast','03:31']]},
      slow:{name:'Slow Tide',description:'A drifting soundtrack for unhurried voyages.',tracks:[['Low Tide','04:15'],['Salt Air','03:57'],['Still Harbor','04:24'],['Evening Sail','03:46']]}
    }
  },
  p4: {
    id:'p4', code:'OBJ / 04', passport:'HB-P4-004', name:'SMART Duffel — Ivory', price:143, category:'system', badge:'Tech layer',
    image:'assets/products/p4-smart-duffel-ivory.png', cardImage:'assets/products/p4-smart-duffel-ivory.jpg', images:['assets/products/p4-smart-duffel-ivory.png','assets/products/alt-white-duffel.png','assets/products/p2-navy-metropolitan-duffel.png','assets/products/p1-olive-skyline-duffel.png','assets/products/alt-steel-duffel.png'],
    colors:[{name:'Ivory',hex:'#f6f7f9'},{name:'Navy',hex:'#0b1240'}], sizes:['45L'],
    subtitle:'The bag that thinks', kicker:'Flagship smart object',
    description:'The bag that thinks. Fast-charge core, reactive RGB trim, touch media strip and smart check-in panel.',
    specs:[['Material','Tech canvas DWR'],['Capacity','45L'],['Weight','1.8 kg'],['Warranty','Lifetime + 2yr electronics'],['Colors','Ivory / Navy'],['Sizes','45L']],
    mood:{label:'Technical / Alert',quiet:50,urban:60,trip:72},
    passportData:{material:'Tech canvas DWR / electronics core',service:'Battery + port diagnostics',care:'Charge core every 30 days',role:'Flagship smart carry'},
    pack:['Laptop', 'Power bank', 'Cables', '3 shirts', 'Essentials', 'Charger'],
    blueprint:[{label:'TECH CANVAS DWR SHELL',x:'8%',y:'18%'},{label:'FAST-CHARGE CORE',x:'62%',y:'12%'},{label:'REACTIVE RGB TRIM',x:'70%',y:'58%'},{label:'SMART CHECK-IN PANEL',x:'10%',y:'62%'}],
    dimensions:[{label:'48 cm',axis:'width',x:'20%',y:'92%',w:'60%'},{label:'30 cm',axis:'height',x:'4%',y:'20%',h:'60%'}],
    playlists:{
      focused:{name:'Core Online',description:'Clean electronic focus for the bag that thinks.',tracks:[['Charge State','03:19'],['Ivory Circuit','03:52'],['System Ready','03:36'],['Signal Lock','04:00']]},
      electric:{name:'Full Power',description:'Bright reactive energy matching the RGB trim.',tracks:[['100 Percent','03:06'],['Trim Light','03:34'],['Live Feed','03:48'],['Fast Sync','03:22']]},
      slow:{name:'Standby Mode',description:'Ambient calm while the core stays charged.',tracks:[['Idle Glow','04:28'],['Soft Port','03:55'],['Quiet Battery','04:14'],['Low Draw','03:41']]}
    }
  },
  p5: {
    id:'p5', code:'OBJ / 05', passport:'HB-P5-005', name:'Steel Weekender', price:66, category:'luggage', badge:'Extended',
    image:'assets/products/p5-steel-blue-weekender.png', cardImage:'assets/products/p5-steel-blue-weekender.jpg', images:['assets/products/p5-steel-blue-weekender.png','assets/products/alt-steel-duffel.png','assets/products/p2-navy-metropolitan-duffel.png','assets/products/p1-olive-skyline-duffel.png','assets/products/alt-white-duffel.png'],
    colors:[{name:'Steel Blue',hex:'#4a6b8a'},{name:'Tan',hex:'#8e6b4a'}], sizes:['38L','48L'],
    subtitle:'Vintage-washed weekender', kicker:'Classic weekend object',
    description:'Vintage-washed canvas with full-grain leather handles and antique-brass crossbody strap.',
    specs:[['Material','Washed canvas'],['Capacity','38–48L'],['Weight','1.3 kg'],['Warranty','Lifetime zipper'],['Colors','Steel Blue / Tan'],['Sizes','38L / 48L']],
    mood:{label:'Vintage / Relaxed',quiet:66,urban:30,trip:48},
    passportData:{material:'Washed canvas / brass hardware',service:'Strap + buckle service path',care:'Condition leather twice a year',role:'Weekend carry'},
    pack:['2 shirts', 'Trousers', 'Essentials', 'Jacket', 'Boots'],
    blueprint:[{label:'VINTAGE-WASHED CANVAS',x:'8%',y:'20%'},{label:'FULL-GRAIN LEATHER HANDLE',x:'60%',y:'10%'},{label:'ANTIQUE-BRASS STRAP',x:'68%',y:'62%'},{label:'LIFETIME ZIPPER',x:'10%',y:'66%'}],
    dimensions:[{label:'46 cm',axis:'width',x:'20%',y:'92%',w:'60%'},{label:'29 cm',axis:'height',x:'4%',y:'20%',h:'60%'}],
    playlists:{
      focused:{name:'Weekend Plan',description:'Grounded rhythm for short escapes.',tracks:[['Steel Blue','03:28'],['Brass Buckle','03:51'],['Weekend Line','04:04'],['Vintage Wash','03:35']]},
      electric:{name:'Fast Getaway',description:'Energy for a quick weekend exit.',tracks:[['Quick Pack','03:12'],['Antique Voltage','03:39'],['Last Minute','03:47'],['Steel Drive','04:00']]},
      slow:{name:'Slow Weekend',description:'A relaxed soundtrack for unhurried escapes.',tracks:[['Tan Leather','04:19'],['Sunday Wash','03:58'],['Quiet Buckle','04:11'],['Soft Denim','03:43']]}
    }
  },
  p6: {
    id:'p6', code:'OBJ / 06', passport:'HB-P6-006', name:'Midnight Rolltop', price:60, category:'carry', badge:'Daily system',
    image:'assets/products/p6-midnight-rolltop.png', cardImage:'assets/products/p6-midnight-rolltop.jpg', images:['assets/products/p6-midnight-rolltop.png','assets/products/alt-black-backpack.png','assets/products/p7-heritage-backpack.png','assets/products/alt-black-backpack-art.png','assets/products/p8-grey-sling.png'],
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
    id:'p7', code:'OBJ / 07', passport:'HB-P7-007', name:'Heritage Backpack', price:69, category:'carry', badge:'Module',
    image:'assets/products/p7-heritage-backpack.png', cardImage:'assets/products/p7-heritage-backpack.jpg', images:['assets/products/p7-heritage-backpack.png','assets/products/alt-black-backpack-art.png','assets/products/p6-midnight-rolltop.png','assets/products/alt-black-backpack.png','assets/products/p8-grey-sling.png'],
    colors:[{name:'Olive',hex:'#5a6b3f'},{name:'Tan',hex:'#8e6b4a'}], sizes:['20L','28L'],
    subtitle:'Waxed canvas heritage pack', kicker:'Heritage travel object',
    description:'Waxed canvas, dual cargo pockets and leather buckle straps. Built like luggage from another era.',
    specs:[['Material','Waxed canvas'],['Capacity','20–28L'],['Weight','1.1 kg'],['Warranty','Lifetime zipper'],['Colors','Olive / Tan'],['Sizes','20L / 28L']],
    mood:{label:'Rugged / Timeless',quiet:60,urban:42,trip:36},
    passportData:{material:'Waxed canvas / leather buckles',service:'Buckle + strap service path',care:'Re-wax canvas yearly',role:'Heritage carry'},
    pack:['Laptop', 'Notebook', 'Essentials', 'Jacket', 'Water bottle'],
    blueprint:[{label:'WAXED CANVAS SHELL',x:'8%',y:'16%'},{label:'LEATHER BUCKLE STRAP',x:'62%',y:'10%'},{label:'DUAL CARGO POCKETS',x:'66%',y:'54%'},{label:'LIFETIME ZIPPER',x:'10%',y:'68%'}],
    dimensions:[{label:'46 cm',axis:'height',x:'4%',y:'14%',h:'68%'},{label:'30 cm',axis:'width',x:'18%',y:'92%',w:'60%'}],
    playlists:{
      focused:{name:'Old World Carry',description:'Grounded sound for heritage travel.',tracks:[['Waxed Canvas','03:26'],['Leather Buckle','03:54'],['Field Notes','04:02'],['Cargo Pocket','03:33']]},
      electric:{name:'New Ground',description:'Forward energy for modern movement.',tracks:[['Olive Voltage','03:14'],['Buckle Strap','03:41'],['Fast Trail','03:53'],['Tan Current','03:25']]},
      slow:{name:'Slow Trail',description:'A patient soundtrack for older-era travel.',tracks:[['Dust Road','04:21'],['Canvas Hour','03:56'],['Leather Desk','04:09'],['Soft Buckle','03:47']]}
    }
  },
  p8: {
    id:'p8', code:'OBJ / 08', passport:'HB-P8-008', name:'City Sling', price:38, category:'carry', badge:'Space system',
    image:'assets/products/p8-grey-sling.png', cardImage:'assets/products/p8-grey-sling.jpg', images:['assets/products/p8-grey-sling.png','assets/products/alt-black-crossbody.png','assets/products/alt-black-crossbody-front.png','assets/products/p6-midnight-rolltop.png','assets/products/p7-heritage-backpack.png'],
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
  }
};

const state = {
  activeProduct:'p1',
  pdpQty:1,
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
let lenisInstance=null;
const lock=v=>{document.body.classList.toggle('is-locked',v);if(lenisInstance){v?lenisInstance.stop():lenisInstance.start()}};
function toast(message){const el=$('[data-toast]');el.textContent=message;el.classList.add('is-visible');clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove('is-visible'),2200)}

if($$('[data-footer-time]').length){
  const updateFooterTime=()=>{
    const text=new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
    $$('[data-footer-time]').forEach(el=>el.textContent=text);
  };
  updateFooterTime();
  setInterval(updateFooterTime,1000);
}

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
  const limit=grid.dataset.limit?parseInt(grid.dataset.limit,10):Infinity;
  const list=Object.values(products).slice(0,limit);
  const total=list.length;
  grid.innerHTML=list.map((p,index)=>`<article class="product-card" data-category="${p.category}" data-product-card="${p.id}">
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
  const others=Object.values(products).filter(p=>p.id!==id).sort(()=>.5-Math.random()).slice(0,5);
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
  state.pdpQty=1;
  const qtyValue=$('[data-qty-value]'); if(qtyValue) qtyValue.textContent=state.pdpQty;
  $('[data-dialog-price]').textContent=money(p.price);
  document.title=`${p.name} — HABÄNE`;
  const swatches=$('[data-product-swatches]');
  if(swatches) swatches.innerHTML=p.colors.map((c,i)=>`<button type="button" class="${i===0?'is-active':''}" style="background:${c.hex}" aria-label="${c.name}"></button>`).join('');
  const shape=$('[data-product-shape]'); shape.src=p.image; shape.alt=p.name;
  const gallery=$('[data-pdp-gallery]');
  if(gallery){
    const gallerySet=p.images&&p.images.length?p.images:[p.image];
    gallery.innerHTML=gallerySet.map((src,i)=>`<button type="button" class="${i===0?'is-active':''}" data-gallery-thumb="${src}" aria-label="${p.name} angle ${i+1}"><img src="${src}" alt="${p.name} view ${i+1}" loading="lazy" /></button>`).join('');
    $$('[data-gallery-thumb]',gallery).forEach(btn=>btn.onclick=()=>{
      shape.src=btn.dataset.galleryThumb;
      $$('[data-gallery-thumb]',gallery).forEach(b=>b.classList.remove('is-active'));
      btn.classList.add('is-active');
      btn.scrollIntoView({behavior:'smooth',inline:'nearest',block:'nearest'});
    });
  }
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
  const p=products[state.activeProduct]; const count=state.packSelected.size; const usage=Math.min(100,Math.round((count/Math.max(4,p.pack.length))*100));
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

function addToCart(id,qty=1){const item=state.cart.find(i=>i.id===id);item?item.qty+=qty:state.cart.push({id,qty});updateCart();toast(`${products[id].name} added`)}
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

function syncSoundArt(){const art=$('[data-sound-art]');if(art) art.classList.toggle('is-playing',state.audio.playing);const btn=$('[data-playlist-play]');if(btn) btn.classList.toggle('is-playing',state.audio.playing);const toggle=$('[data-audio-toggle]');if(toggle) toggle.textContent=state.audio.playing?'Ⅱ':'▶'}

// --- Real, license-free ambient playback engine (Web Audio synthesis) ---
let audioCtx=null;
function getAudioCtx(){
  if(!audioCtx) audioCtx=new (window.AudioContext||window.webkitAudioContext)();
  if(audioCtx.state==='suspended') audioCtx.resume();
  return audioCtx;
}
const moodScales={
  focused:[261.63,293.66,329.63,392.00,440.00],
  electric:[329.63,392.00,440.00,493.88,587.33,659.25],
  slow:[220.00,246.94,261.63,329.63,369.99]
};
const moodPatterns={
  focused:[0,2,4,2,1,2,4,3],
  electric:[0,3,2,4,5,3,2,4],
  slow:[0,2,0,3,0,2,0,1]
};
let synthTimer=null, synthGain=null, synthNodes=[];
function playSynthNote(ctx,freq,time,dur,gainVal,type){
  const osc=ctx.createOscillator(), g=ctx.createGain();
  osc.type=type||'sine'; osc.frequency.value=freq;
  osc.connect(g); g.connect(synthGain);
  g.gain.setValueAtTime(0,time);
  g.gain.linearRampToValueAtTime(gainVal,time+.06);
  g.gain.exponentialRampToValueAtTime(.0008,time+dur);
  osc.start(time); osc.stop(time+dur+.05);
  synthNodes.push(osc);
}
function stopSynth(){
  if(synthTimer){clearInterval(synthTimer);synthTimer=null}
  if(synthGain){try{const ctx=getAudioCtx();synthGain.gain.cancelScheduledValues(ctx.currentTime);synthGain.gain.linearRampToValueAtTime(0,ctx.currentTime+.35)}catch(e){}}
  const nodes=synthNodes; synthNodes=[];
  setTimeout(()=>nodes.forEach(n=>{try{n.stop()}catch(e){}}),400);
}
function startSynth(mood){
  stopSynth();
  const ctx=getAudioCtx();
  synthGain=ctx.createGain(); synthGain.gain.value=.0001; synthGain.connect(ctx.destination);
  synthGain.gain.linearRampToValueAtTime(.9, ctx.currentTime+.6);
  const scale=moodScales[mood]||moodScales.focused;
  const pattern=moodPatterns[mood]||moodPatterns.focused;
  const stepDur=mood==='electric'?.24:mood==='slow'?.58:.38;
  const leadType=mood==='electric'?'sawtooth':mood==='slow'?'sine':'triangle';
  let step=0;
  const schedule=()=>{
    const now=ctx.currentTime;
    if(step%4===0){
      const root=scale[0];
      playSynthNote(ctx,root,now,stepDur*4.3,.09,'sine');
      playSynthNote(ctx,root*1.5,now,stepDur*4.3,.065,'sine');
    }
    for(let i=0;i<4;i++){
      const t=now+i*stepDur;
      const degree=pattern[(step+i)%pattern.length];
      const note=scale[degree%scale.length];
      playSynthNote(ctx,note,t,stepDur*.88,mood==='electric'?.3:.24,leadType);
      if(i===0) playSynthNote(ctx,note/2,t,stepDur*1.6,.16,'sine');
    }
    step+=4;
  };
  schedule();
  synthTimer=setInterval(schedule,Math.max(60,stepDur*4*1000-50));
}
function playBrandChimeTone(){
  try{
    const ctx=getAudioCtx();
    const notes=[523.25,659.25,783.99,1046.5];
    const g=ctx.createGain(); g.gain.value=.0001; g.connect(ctx.destination);
    const now=ctx.currentTime;
    g.gain.linearRampToValueAtTime(.45,now+.02);
    g.gain.exponentialRampToValueAtTime(.0005,now+1.8);
    notes.forEach((f,i)=>{
      const osc=ctx.createOscillator(); osc.type='sine'; osc.frequency.value=f;
      osc.connect(g); osc.start(now+i*.09); osc.stop(now+i*.09+1.4);
    });
  }catch(e){}
}
function playBrandChime(onDone){
  let done=false;
  const finish=()=>{ if(!done){ done=true; if(onDone) onDone(); } };
  try{
    const sound=new Audio('assets/audio/brand-sound.mp3');
    sound.volume=1.0;
    sound.onended=finish;
    sound.onerror=finish;
    const p=sound.play();
    if(p&&p.catch) p.catch(()=>finish());
  }catch(e){ finish(); }
  setTimeout(finish,2200);
}

function startPlaylist(){
  const p=products[state.activeProduct], playlist=p.playlists[state.playlistMood];state.audio.playing=true;state.audio.progress=0;state.audio.trackIndex=0;
  $('[data-playlist-name]').textContent=playlist.tracks[0][0];syncSoundArt();
  startSynth(state.playlistMood);
  clearInterval(state.audio.timer);state.audio.timer=setInterval(()=>{if(!state.audio.playing)return;state.audio.progress+=.7;if(state.audio.progress>=100){state.audio.progress=0;state.audio.trackIndex=(state.audio.trackIndex+1)%playlist.tracks.length;$('[data-playlist-name]').textContent=playlist.tracks[state.audio.trackIndex][0]}const soundProgress=$('[data-sound-progress]');if(soundProgress)soundProgress.style.width=`${state.audio.progress}%`},700);
}
function stopAudio(){clearInterval(state.audio.timer);state.audio.playing=false;stopSynth();syncSoundArt()}

if($('[data-product-grid]')) createProductCards();
updateCart(); updateCompare();
if($('[data-matcher-group]')) recommend();
if($('[data-product-name]')){
  const requestedId=new URLSearchParams(location.search).get('id');
  openProduct(products[requestedId]?requestedId:'p1');
}

if($('[data-announcement-close]')) $('[data-announcement-close]').onclick=()=>{$('[data-announcement]').classList.add('is-hidden');document.documentElement.style.setProperty('--announcement-h','0px')};

$$('.desktop-nav a').forEach(a=>{
  a.innerHTML=a.textContent.split('').map((ch,i)=>`<span class="letter" style="--i:${i}">${ch===' '?'&nbsp;':ch}</span>`).join('');
});

(function(){
  const header=$('[data-header]');
  if(!header) return;
  const iconNavy=$$('.brand__icon--navy',header), iconWhite=$$('.brand__icon--white',header);
  const wordNavy=$$('.brand__wordmark--navy',header), wordWhite=$$('.brand__wordmark--white',header);
  const desktopNav=$('.desktop-nav',header);
  const iconButtons=$$('.icon-button',header);
  const categoryMenuBtn=$('.category-menu-btn',header);
  const regionBtn=$('.region-button',header);
  const prebookBtn=$('.prebook-button',header);
  const prebookLabel=prebookBtn?$('.prebook-button__label',prebookBtn):null;
  const prebookIcon=prebookBtn?$('.prebook-button__icon',prebookBtn):null;
  const prebookIsLogin=!!(prebookBtn&&prebookLabel&&prebookIcon);
  const menuBtn=$('.menu-button',header);
  const menuSpans=menuBtn?$$('span',menuBtn):[];
  const divider=$('.brand__divider',header);
  let prebookNaturalWidthCache=0;
  function getPrebookNaturalWidth(){
    if(!prebookBtn) return 0;
    if(!prebookNaturalWidthCache){
      const prevW=prebookBtn.style.width;
      prebookBtn.style.width='auto';
      const w=prebookBtn.getBoundingClientRect().width;
      prebookBtn.style.width=prevW;
      if(w>0) prebookNaturalWidthCache=Math.max(w,78);
    }
    return prebookNaturalWidthCache||86;
  }
  const lerp=(a,b,t)=>a+(b-a)*t;
  const rgb=(a,b,t)=>`rgb(${Math.round(lerp(a[0],b[0],t))},${Math.round(lerp(a[1],b[1],t))},${Math.round(lerp(a[2],b[2],t))})`;
  const rgba=(a,b,t)=>`rgba(${Math.round(lerp(a[0],b[0],t))},${Math.round(lerp(a[1],b[1],t))},${Math.round(lerp(a[2],b[2],t))},${lerp(a[3],b[3],t).toFixed(3)})`;
  const MIDNIGHT=[10,15,90], WHITE=[255,255,255], AURORA=[54,216,255], MIDNIGHT_DEEP=[6,9,53];
  const actionsEl=$('.header-actions',header);
  let cleared=true;
  function clearMorph(){
    if(cleared) return;
    [header,actionsEl,desktopNav,regionBtn,prebookBtn,prebookLabel,prebookIcon,menuBtn,divider,categoryMenuBtn,...iconButtons,...iconNavy,...iconWhite,...wordNavy,...wordWhite,...menuSpans].forEach(el=>{if(el) el.removeAttribute('style')});
    cleared=true;
  }
  function applyHeaderMorph(t){
    if(t<=0.001){
      clearMorph();
      return;
    }
    cleared=false;
    const vw=document.documentElement.clientWidth;
    const gap=14;
    const wFull=vw-gap*2;
    const wCondTarget=405;
    const wCond=Math.min(wCondTarget,vw*0.96);
    const w=lerp(wFull,wCond,t);
    const sideGap=(vw-w)/2;
    header.style.display='flex';
    header.style.justifyContent='space-between';
    header.style.alignItems='center';
    header.style.left=`${sideGap}px`;
    header.style.right=`${sideGap}px`;
    header.style.width=`${w}px`;
    header.style.height=`${lerp(80,58,t)}px`;
    header.style.padding=`0 ${lerp(28,16,t)}px 0 ${lerp(28,18,t)}px`;
    header.style.gap=`${lerp(14,6,t)}px`;
    header.style.borderRadius=`14px`;
    header.style.background=rgba([246,247,250,.6],[20,32,150,.72],t);
    header.style.backdropFilter=`blur(${lerp(14,18,t)}px)`;
    header.style.webkitBackdropFilter=header.style.backdropFilter;
    header.style.filter=`drop-shadow(0 ${lerp(0,22,t)}px ${lerp(0,26,t)}px rgba(6,9,53,${lerp(0,.4,t).toFixed(3)}))`;
    header.style.transform=header.classList.contains('is-menu-open')?'translateY(-8px)':'';
    if(actionsEl){
      actionsEl.style.display='flex';
      actionsEl.style.alignItems='center';
      actionsEl.style.flexShrink='0';
      actionsEl.style.gap=`${lerp(10,6,t)}px`;
    }
    iconNavy.concat(wordNavy).forEach(el=>el.style.opacity=1-t);
    iconWhite.concat(wordWhite).forEach(el=>el.style.opacity=t);
    iconNavy.forEach(el=>el.style.height=`${lerp(22,18,t)}px`);
    iconWhite.forEach(el=>el.style.height=`${lerp(22,18,t)}px`);
    wordNavy.forEach(el=>el.style.height=`${lerp(14,12,t)}px`);
    wordWhite.forEach(el=>el.style.height=`${lerp(14,12,t)}px`);
    if(desktopNav){
      desktopNav.style.opacity=1-t;
      desktopNav.style.maxWidth=`${lerp(600,0,t)}px`;
      desktopNav.style.pointerEvents=t>.5?'none':'auto';
    }
    iconButtons.forEach(btn=>{
      btn.style.width=btn.style.height=`${lerp(42,34,t)}px`;
      btn.style.color=rgb(MIDNIGHT,WHITE,t);
      btn.style.flexShrink='0';
    });
    if(regionBtn){
      regionBtn.style.width=regionBtn.style.height=`${lerp(34,28,t)}px`;
      regionBtn.style.flexShrink='0';
    }
    if(categoryMenuBtn){
      const fadeT=Math.min(1,t/0.35);
      categoryMenuBtn.style.opacity=1-fadeT;
      categoryMenuBtn.style.width=categoryMenuBtn.style.height=`${Math.max(0,lerp(42,0,t))}px`;
      categoryMenuBtn.style.marginLeft=`${lerp(4,0,t)}px`;
      categoryMenuBtn.style.overflow='hidden';
      categoryMenuBtn.style.pointerEvents=t>.2?'none':'auto';
      if(t>=0.35){
        categoryMenuBtn.style.display='none';
      }else{
        categoryMenuBtn.style.display='';
      }
    }
    if(divider){
      divider.style.marginLeft=`${lerp(22,8,t)}px`;
      divider.style.height=`${lerp(24,16,t)}px`;
    }
    if(prebookBtn&&prebookIsLogin){
      const naturalW=getPrebookNaturalWidth();
      prebookBtn.style.display='inline-flex';
      prebookBtn.style.width=`${lerp(naturalW,34,t)}px`;
      prebookBtn.style.height=`${lerp(36,34,t)}px`;
      prebookBtn.style.flexShrink='0';
      prebookBtn.style.background=rgba([...AURORA,1],[...AURORA,0],t);
      prebookBtn.style.color=rgb(MIDNIGHT_DEEP,WHITE,t);
      prebookLabel.style.opacity=1-t;
      prebookIcon.style.opacity=t;
    }else if(prebookBtn){
      const naturalW=getPrebookNaturalWidth();
      const fadeT=Math.min(1,t/0.35);
      prebookBtn.style.opacity=1-fadeT;
      prebookBtn.style.width=`${Math.max(0,lerp(naturalW,0,t))}px`;
      prebookBtn.style.height='36px';
      prebookBtn.style.flexShrink='0';
      prebookBtn.style.borderRadius='999px';
      prebookBtn.style.paddingLeft=prebookBtn.style.paddingRight=`${lerp(16,0,t)}px`;
      prebookBtn.style.marginLeft=`${lerp(4,0,t)}px`;
      prebookBtn.style.pointerEvents=t>.2?'none':'auto';
      if(t>=0.35){
        prebookBtn.style.display='none';
      }else{
        prebookBtn.style.display='';
      }
    }
    if(menuBtn){
      menuBtn.style.opacity=t;
      menuBtn.style.transform=`scale(${lerp(.55,1,t)})`;
      menuBtn.style.borderColor=rgba([10,15,90,.16],[255,255,255,.3],t);
      menuBtn.style.pointerEvents=t>.5?'auto':'none';
      menuBtn.style.margin='0';
      menuBtn.style.width=menuBtn.style.height=`${lerp(38,34,t)}px`;
      menuBtn.style.flexShrink='0';
      menuBtn.style.display='grid';
      menuSpans.forEach(sp=>sp.style.background=rgb(MIDNIGHT,WHITE,t));
    }
  }
  let targetT=0,currentT=0,rafId=null;
  function loop(){
    const factor=targetT<currentT?0.14:0.06;
    currentT+=(targetT-currentT)*factor;
    if(Math.abs(targetT-currentT)<0.0015) currentT=targetT;
    applyHeaderMorph(currentT);
    if(currentT!==targetT){ rafId=requestAnimationFrame(loop); } else { rafId=null; }
  }
  let isCondensed=false;
  function triggerIconSettle(){
    const els=[regionBtn,prebookBtn,menuBtn,...iconButtons].filter(Boolean);
    els.forEach(el=>{
      el.classList.remove('is-settling');
      void el.offsetWidth;
      el.classList.add('is-settling');
    });
    setTimeout(()=>els.forEach(el=>el.classList.remove('is-settling')),1850);
  }
  function requestUpdate(){
    if(window.innerWidth<=900){ clearMorph(); targetT=0; currentT=0; isCondensed=false; if(rafId){cancelAnimationFrame(rafId);rafId=null} return; }
    targetT=Math.min(1,Math.max(0,scrollY/10));
    if(targetT>=1&&!isCondensed){ isCondensed=true; triggerIconSettle(); if(typeof closeCategoryMenu==='function') closeCategoryMenu(); }
    else if(targetT<1&&isCondensed){ isCondensed=false; }
    if(!rafId) rafId=requestAnimationFrame(loop);
  }
  window.addEventListener('scroll',requestUpdate,{passive:true});
  window.addEventListener('resize',()=>{ prebookNaturalWidthCache=0; requestUpdate(); });
  requestUpdate();
  window.headerMorphUpdate=requestUpdate;
})();

function positionMobileMenu(){
  const header=$('[data-header]'), menu=$('[data-mobile-menu]');
  if(!header||!menu) return;
  const rect=header.getBoundingClientRect();
  menu.style.setProperty('--menu-top',`${Math.round(rect.bottom)+10}px`);
  menu.style.setProperty('--menu-right',`${Math.round(document.documentElement.clientWidth-rect.right)}px`);
}
function openMobileMenu(){
  positionMobileMenu();
  $('[data-mobile-menu]').classList.add('is-open');
  $('[data-mobile-menu]').setAttribute('aria-hidden','false');
  $('[data-menu-open]').classList.add('is-active');
  $('[data-header]').classList.add('is-menu-open');
  $('[data-scrim]').classList.add('is-visible');
  lock(true);
  if(window.headerMorphUpdate) window.headerMorphUpdate();
}
function closeMobileMenu(){
  $('[data-mobile-menu]').classList.remove('is-open');
  $('[data-mobile-menu]').setAttribute('aria-hidden','true');
  $('[data-menu-open]').classList.remove('is-active');
  $('[data-header]').classList.remove('is-menu-open');
  $('[data-scrim]').classList.remove('is-visible');
  lock(false);
  if(window.headerMorphUpdate) window.headerMorphUpdate();
}
if($('[data-menu-open]')) $('[data-menu-open]').onclick=()=>{$('[data-mobile-menu]').classList.contains('is-open')?closeMobileMenu():openMobileMenu()};
if($('[data-menu-close]')) $('[data-menu-close]').onclick=closeMobileMenu;
if($('[data-scrim]')) $('[data-scrim]').addEventListener('click',()=>{if($('[data-mobile-menu]') && $('[data-mobile-menu]').classList.contains('is-open'))closeMobileMenu()});
window.addEventListener('resize',()=>{if($('[data-mobile-menu]') && $('[data-mobile-menu]').classList.contains('is-open'))positionMobileMenu()});
$$('[data-social]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();toast(`${a.dataset.social} coming soon`)}));
$$('[data-pdp-sound-more]').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();toast('More options coming soon')}));

// --- PDP sound: Play swaps the teaser card for the real Spotify player in place,
// so only one player is ever visible. Spotify's own iframe must render its own UI
// (cross-origin — we can neither restyle it nor drive its audio from our page),
// hence the swap rather than stacking a second player underneath.
(function(){
  const card=$('[data-pdp-sound-card]');
  const wrap=$('[data-pdp-sound-embed-wrap]');
  const playBtn=$('[data-pdp-sound-play]');
  if(!card||!wrap||!playBtn) return;
  playBtn.addEventListener('click',()=>{
    wrap.innerHTML=`<iframe src="https://open.spotify.com/embed/track/${playBtn.dataset.soundUri}?utm_source=generator&theme=0" width="100%" height="152" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" title="HABÄNE soundtrack on Spotify"></iframe>`;
    card.classList.add('is-hidden');
    wrap.classList.add('is-open');
  });
})();
$$('.mobile-menu a').forEach(a=>a.onclick=()=>{$('[data-mobile-menu]').classList.remove('is-open');lock(false)});

if($('[data-matcher-group]')){
  $$('[data-matcher-group]').forEach(group=>$$('button',group).forEach(btn=>btn.onclick=()=>{$$('button',group).forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');state.matcher[group.dataset.matcherGroup]=btn.dataset.value;recommend()}));
  if($('[data-match-open]')) $('[data-match-open]').onclick=e=>location.href=`product.html?id=${e.currentTarget.dataset.matchId||'p1'}`;
}

function applyShopCategoryFilter(category){
  const filterBtns=$$('[data-filter]');
  const productCards=$$('[data-product-card]');
  if(!filterBtns.length) return;
  const targetCategory=category||'all';
  filterBtns.forEach(btn=>btn.classList.toggle('is-active',btn.dataset.filter===targetCategory));
  productCards.forEach(card=>{
    const matches=targetCategory==='all'||card.dataset.category===targetCategory;
    card.classList.toggle('is-hidden',!matches);
  });
}

if($('[data-product-grid]')){
  $$('[data-filter]').forEach(btn=>btn.onclick=()=>{
    applyShopCategoryFilter(btn.dataset.filter);
    const url=new URL(location.href);
    if(btn.dataset.filter==='all') url.searchParams.delete('category');
    else url.searchParams.set('category',btn.dataset.filter);
    history.replaceState(null,'',url.toString());
  });
  if($('[data-sort]')) $('[data-sort]').onclick=()=>{const grid=$('[data-product-grid]');$$('[data-product-card]',grid).reverse().forEach(card=>grid.appendChild(card));toast('Product order reversed')};
  const initialCategory=new URLSearchParams(location.search).get('category');
  if(initialCategory) applyShopCategoryFilter(initialCategory);
}

document.addEventListener('click',e=>{
  const shopLink=e.target.closest('a[href*="shop.html?category="]');
  // Links marked data-nav-category (header dropdown / mobile menu) are global
  // navigation and must actually load shop.html, not be swallowed by the
  // in-page filter below.
  if(shopLink&&!shopLink.hasAttribute('data-nav-category')&&$('[data-product-grid]')){
    const url=new URL(shopLink.href,location.origin);
    const cat=url.searchParams.get('category');
    if(cat){
      e.preventDefault();
      applyShopCategoryFilter(cat);
      history.pushState(null,'',shopLink.href);
      window.scrollTo({top:0,behavior:'smooth'});
    }
  }
});

(function initCookieConsent(){
  const CONSENT_KEY='habane_cookie_consent';
  function getConsent(){
    try{ const raw=localStorage.getItem(CONSENT_KEY); return raw?JSON.parse(raw):null; }catch(e){ return null; }
  }
  function saveConsent(prefs){ localStorage.setItem(CONSENT_KEY,JSON.stringify(prefs)); }

  const card=document.createElement('aside');
  card.setAttribute('data-cookie-consent','');
  card.className='cookie-consent';
  card.innerHTML=`
    <div class="cookie-consent__panel" data-cookie-panel="main">
      <h3 class="cookie-consent__title">We value your privacy</h3>
      <p class="cookie-consent__text">We use cookies to ensure this website functions correctly. With your consent, we also use optional cookies for convenience features and analytics (Google Analytics) to understand how visitors use our site and improve your experience. If you are under 16, please ask a parent or legal guardian before consenting to optional cookies.</p>
      <div class="cookie-consent__links"><a href="privacy.html">Privacy Policy</a><span>|</span><a href="cookie-policy.html">Cookie Policy</a><span>|</span><a href="impressum.html">Imprint</a></div>
      <div class="cookie-consent__actions">
        <button type="button" class="cookie-consent__btn cookie-consent__btn--primary" data-cookie-action="accept-all">Accept all</button>
        <button type="button" class="cookie-consent__btn cookie-consent__btn--secondary" data-cookie-action="accept-necessary">Accept only necessary items</button>
        <button type="button" class="cookie-consent__btn cookie-consent__btn--text" data-cookie-action="open-settings">Adjust settings</button>
      </div>
    </div>
    <div class="cookie-consent__panel is-hidden" data-cookie-panel="settings">
      <h3 class="cookie-consent__title">Cookie settings</h3>
      <div class="cookie-toggle-row">
        <div class="cookie-toggle-row__head">
          <span class="cookie-toggle-row__label">Necessary</span>
          <label class="cookie-toggle is-locked"><input type="checkbox" checked disabled /><span class="cookie-toggle__track"><span class="cookie-toggle__thumb"></span></span></label>
        </div>
        <p class="cookie-toggle-row__desc">Required for cart, session and storing your consent choice. Cannot be disabled.</p>
      </div>
      <div class="cookie-toggle-row">
        <div class="cookie-toggle-row__head">
          <span class="cookie-toggle-row__label">Functional</span>
          <label class="cookie-toggle"><input type="checkbox" data-cookie-toggle="functional" /><span class="cookie-toggle__track"><span class="cookie-toggle__thumb"></span></span></label>
        </div>
        <p class="cookie-toggle-row__desc">Remembers convenience features like your product comparison list. Optional.</p>
      </div>
      <div class="cookie-toggle-row">
        <div class="cookie-toggle-row__head">
          <span class="cookie-toggle-row__label">Analytics</span>
          <label class="cookie-toggle"><input type="checkbox" data-cookie-toggle="analytics" /><span class="cookie-toggle__track"><span class="cookie-toggle__thumb"></span></span></label>
        </div>
        <p class="cookie-toggle-row__desc">Google Analytics (_ga, _gid) helps us understand site usage. Optional.</p>
      </div>
      <div class="cookie-toggle-row">
        <div class="cookie-toggle-row__head">
          <span class="cookie-toggle-row__label">Marketing</span>
          <label class="cookie-toggle"><input type="checkbox" data-cookie-toggle="marketing" /><span class="cookie-toggle__track"><span class="cookie-toggle__thumb"></span></span></label>
        </div>
        <p class="cookie-toggle-row__desc">Used for advertising and retargeting campaigns, if and when active. No marketing cookies are currently set.</p>
      </div>
      <div class="cookie-consent__actions">
        <button type="button" class="cookie-consent__btn cookie-consent__btn--primary" data-cookie-action="confirm-settings">Confirm my choices</button>
        <button type="button" class="cookie-consent__btn cookie-consent__btn--text" data-cookie-action="back">← Back</button>
      </div>
    </div>
  `;
  document.body.appendChild(card);

  function switchPanel(name){
    card.querySelectorAll('[data-cookie-panel]').forEach(p=>{
      p.classList.toggle('is-hidden',p.getAttribute('data-cookie-panel')!==name);
    });
  }
  const OPTIONAL_CATEGORIES=['functional','analytics','marketing'];
  function closeCard(){
    card.classList.remove('is-open');
  }
  function applyConsent(prefs){
    saveConsent(prefs);
    // Hook point: only initialize the matching third-party script once its
    // category is true, e.g. if(prefs.analytics) loadGoogleAnalytics();
  }

  card.addEventListener('click',(e)=>{
    const btn=e.target.closest('[data-cookie-action]');
    if(!btn) return;
    const action=btn.dataset.cookieAction;
    if(action==='accept-all'){
      applyConsent({necessary:true,functional:true,analytics:true,marketing:true});
      closeCard();
      toast('All cookies accepted');
    } else if(action==='accept-necessary'){
      applyConsent({necessary:true,functional:false,analytics:false,marketing:false});
      closeCard();
      toast('Only necessary cookies active');
    } else if(action==='open-settings'){
      switchPanel('settings');
    } else if(action==='back'){
      switchPanel('main');
    } else if(action==='confirm-settings'){
      const prefs={necessary:true};
      OPTIONAL_CATEGORIES.forEach(cat=>{
        const input=card.querySelector(`[data-cookie-toggle="${cat}"]`);
        prefs[cat]=!!(input&&input.checked);
      });
      applyConsent(prefs);
      closeCard();
      toast('Cookie preferences saved');
    }
  });

  if(!getConsent()){
    requestAnimationFrame(()=>card.classList.add('is-open'));
  }
})();

$$('[data-tab]').forEach(btn=>btn.onclick=()=>activateTab(btn.dataset.tab));
$$('[data-scene-option]').forEach(btn=>btn.onclick=()=>setScene(btn.dataset.sceneOption));
document.body.addEventListener('click',e=>{const btn=e.target.closest('.swatches button');if(!btn)return;$$('.swatches button').forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active')});
$$('[data-mood]').forEach(btn=>btn.onclick=()=>{state.playlistMood=btn.dataset.mood;renderPlaylist();if(state.audio.playing)startSynth(state.playlistMood)});
if($('[data-product-name]')){
  const qtyDec=$('[data-qty-dec]'),qtyInc=$('[data-qty-inc]'),qtyValueEl=$('[data-qty-value]'),addToBagBox=$('.add-to-bag-box');
  function refreshQty(){
    if(qtyValueEl) qtyValueEl.textContent=state.pdpQty;
  }
  function syncPdpCartState(){
    const item=state.cart.find(i=>i.id===state.activeProduct);
    if(item&&item.qty>0){
      state.pdpQty=item.qty;
      if(addToBagBox) addToBagBox.classList.add('is-added');
    }else{
      state.pdpQty=1;
      if(addToBagBox) addToBagBox.classList.remove('is-added');
    }
    refreshQty();
  }
  syncPdpCartState();
  if($('[data-dialog-add]')) $('[data-dialog-add]').onclick=()=>{
    addToCart(state.activeProduct,1);
    syncPdpCartState();
  };
  if(qtyDec) qtyDec.onclick=()=>{
    state.pdpQty--;
    if(state.pdpQty<=0){
      state.cart=state.cart.filter(i=>i.id!==state.activeProduct);
      updateCart();
      syncPdpCartState();
    }else{
      const item=state.cart.find(i=>i.id===state.activeProduct);
      if(item){ item.qty=state.pdpQty; updateCart(); }
      refreshQty();
    }
  };
  if(qtyInc) qtyInc.onclick=()=>{
    state.pdpQty++;
    const item=state.cart.find(i=>i.id===state.activeProduct);
    if(item){ item.qty=state.pdpQty; updateCart(); }
    refreshQty();
  };
  if($('[data-dialog-checkout]')) $('[data-dialog-checkout]').onclick=()=>{addToCart(state.activeProduct);openCheckout()};
  if($('[data-passport-save]')) $('[data-passport-save]').onclick=()=>toast('Product passport saved to demo account');
}
$$('[data-accordion-toggle]').forEach(toggle=>toggle.onclick=()=>{
  const panel=toggle.nextElementSibling;
  const open=toggle.getAttribute('aria-expanded')==='true';
  toggle.setAttribute('aria-expanded',String(!open));
  panel.style.maxHeight=open?'0px':panel.scrollHeight+'px';
});

if($('[data-cart-open]')) $('[data-cart-open]').onclick=()=>openDrawer('cart');
if($('[data-cart-close]')) $('[data-cart-close]').onclick=closeDrawer;
if($('[data-compare-close]')) $('[data-compare-close]').onclick=closeDrawer;
if($('[data-scrim]')) $('[data-scrim]').onclick=closeDrawer;
if($('[data-checkout]')) $('[data-checkout]').onclick=()=>openCheckout();

if($('main') && 'IntersectionObserver' in window){
  const revealTargets=$$('main > section:not(.hero-carousel)');
  revealTargets.forEach(el=>el.classList.add('reveal'));
  const revealObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('is-revealed'); revealObserver.unobserve(entry.target); }
    });
  },{threshold:0,rootMargin:'0px 0px -4% 0px'});
  revealTargets.forEach(el=>revealObserver.observe(el));
}

if($('[data-search-open]')) $('[data-search-open]').onclick=openSearch;
if($('[data-search-close]')) $('[data-search-close]').onclick=closeSearch;
if($('[data-search-form]')) $('[data-search-form]').onsubmit=e=>{e.preventDefault();const term=$('#site-search').value.trim().toLowerCase();const matches=Object.values(products).filter(p=>`${p.name} ${p.subtitle} ${p.category} ${p.description}`.toLowerCase().includes(term));renderSearchResults(matches.length?matches:Object.values(products).slice(0,6))};
if($('#site-search')) $('#site-search').addEventListener('input',e=>{const term=e.target.value.trim().toLowerCase();renderSearchResults(Object.values(products).filter(p=>`${p.name} ${p.subtitle} ${p.category}`.toLowerCase().includes(term)))});

if($('[data-audio-toggle]')) $('[data-audio-toggle]').onclick=()=>{state.audio.playing=!state.audio.playing;syncSoundArt();if(state.audio.playing)startSynth(state.playlistMood);else stopSynth()};
if($('[data-audio-close]')) $('[data-audio-close]').onclick=stopAudio;

document.addEventListener('click',e=>{
  const speakerBtn=e.target.closest('[data-footer-speaker]');
  if(speakerBtn){
    speakerBtn.classList.add('is-playing');
    playBrandChime(()=>speakerBtn.classList.remove('is-playing'));
  }
});
if($('[data-newsletter-form]')) $('[data-newsletter-form]').onsubmit=e=>{e.preventDefault();$('[data-newsletter-status]').textContent='You are inside the movement.';e.target.reset()};

document.addEventListener('keydown',e=>{if(e.key==='Escape'){if($('[data-search-overlay]').classList.contains('is-open'))closeSearch();else if($('[data-cart-drawer]').classList.contains('is-open')||$('[data-compare-drawer]').classList.contains('is-open'))closeDrawer();else if($('[data-mobile-menu]').classList.contains('is-open'))closeMobileMenu()}});

if($$('[data-region]').length){
  const regionBtns=$$('[data-region]');
  let regionName='Germany';
  function setRegion(code,loc){
    const cleanCode=(code||'DE').toUpperCase().replace(/[^A-Z]/g,'').slice(0,2)||'DE';
    try{ regionName=new Intl.DisplayNames([loc||'en'],{type:'region'}).of(cleanCode)||cleanCode; }catch(e){ regionName=cleanCode; }
    const flagSrc=`https://flagcdn.com/w40/${cleanCode.toLowerCase()}.png`;
    regionBtns.forEach(btn=>{
      const img=btn.querySelector('img');
      if(img){ img.src=flagSrc; img.alt=regionName; }
      else{ btn.innerHTML=`<img src="${flagSrc}" alt="${regionName}" width="20" height="15" style="border-radius:2px;object-fit:cover;display:block" onerror="this.onerror=null;this.style.display='none';this.parentElement.textContent='🌍';" />`; }
      btn.setAttribute('aria-label',`Shipping region: ${regionName}`);
    });
    $$('[data-menu-region]').forEach(el=>el.textContent=regionName);
  }
  const loc=navigator.language||'en-US';
  let fallbackCode=(loc.split('-')[1]||'DE').toUpperCase();
  if(!fallbackCode||fallbackCode.length!==2) fallbackCode='DE';
  setRegion(fallbackCode,loc);
  fetch('https://get.geojs.io/v1/ip/geo.json',{signal:AbortSignal.timeout?AbortSignal.timeout(4000):undefined})
    .then(r=>r.ok?r.json():Promise.reject())
    .then(data=>{ if(data&&data.country_code) setRegion(data.country_code,loc); })
    .catch(()=>{ setRegion('DE','de-DE'); });
  regionBtns.forEach(btn=>btn.onclick=()=>toast(`Shipping region set to ${regionName}`));
}
if($('[data-prebook]')){
  if($('[data-product-name]')) $('[data-prebook]').onclick=()=>{addToCart(state.activeProduct);openCheckout()};
  else $('[data-prebook]').onclick=()=>toast('Pre-booking opens soon — join the movement to get notified.');
}

if($('[data-hero-carousel]')){
  const heroSlidesData=[
    {eyebrow:'01 / SIGNATURE CARRY',heading:'Travel<br><em>Intelligently.</em>',sub:'Fifteen objects engineered as one coherent movement system.'},
    {eyebrow:'02 / CITY TO CITY',heading:'Travel<br><em>Intelligently.</em>',sub:'Water-repellent canvas, vault-grade hardware, lifetime service paths.'},
    {eyebrow:'03 / DEPARTURE READY',heading:'Travel<br><em>Intelligently.</em>',sub:'Modular systems that adapt from a weekend to a full departure.'}
  ];
  const heroSlides=$$('[data-hero-slide]');
  const heroThumbs=$$('[data-hero-thumb]');
  const heroThumbsIndex=$('[data-hero-thumbs-index]');
  let heroIndex=0,heroTimer,heroFadeTimer;
  function replayHeroReveal(){
    const content=$('.hero-carousel__content'); if(!content) return;
    content.classList.remove('is-revealed');
    void content.offsetWidth;
    content.classList.add('is-revealed');
  }
  function showHero(i,skipSlideAnim){
    const prevSlide=heroSlides[heroIndex];
    heroThumbs[heroIndex].classList.remove('is-active');
    heroIndex=(i+heroSlides.length)%heroSlides.length;
    const nextSlide=heroSlides[heroIndex];
    heroThumbs[heroIndex].classList.add('is-active');
    if(heroThumbsIndex){
      heroThumbsIndex.textContent=String(heroIndex+1).padStart(2,'0');
      heroThumbsIndex.classList.remove('is-changing');
      void heroThumbsIndex.offsetWidth;
      heroThumbsIndex.classList.add('is-changing');
    }
    const d=heroSlidesData[heroIndex];
    $('[data-hero-eyebrow]').textContent=d.eyebrow;
    $('[data-hero-heading]').innerHTML=d.heading;
    $('[data-hero-sub]').textContent=d.sub;
    if(!skipSlideAnim) replayHeroReveal();
    if(prevSlide!==nextSlide){
      if(skipSlideAnim){
        clearTimeout(heroFadeTimer);
        heroSlides.forEach(s=>{s.style.transition='none';s.style.opacity='';s.style.zIndex=''});
        nextSlide.style.transform='translateX(0)';
        nextSlide.style.opacity='0';
        nextSlide.style.zIndex='2';
        prevSlide.style.zIndex='1';
        void nextSlide.offsetWidth;
        nextSlide.style.transition='opacity .4s ease';
        nextSlide.style.opacity='1';
        prevSlide.classList.remove('is-active');
        heroFadeTimer=setTimeout(()=>{
          nextSlide.classList.add('is-active');
          heroSlides.forEach(s=>{s.style.transition='';s.style.transform='';s.style.opacity='';s.style.zIndex=''});
        },420);
      } else {
        prevSlide.classList.remove('is-active');
        prevSlide.classList.add('is-leaving');
        nextSlide.classList.add('is-active');
        setTimeout(()=>prevSlide.classList.remove('is-leaving'),1050);
      }
    }
  }
  function nextHero(){showHero(heroIndex+1)}
  function restartHeroTimer(){clearInterval(heroTimer);heroTimer=setInterval(nextHero,6000)}
  heroThumbs.forEach((thumb,i)=>{
    thumb.onclick=()=>{showHero(i);restartHeroTimer()};
    thumb.addEventListener('mouseenter',()=>{clearInterval(heroTimer);showHero(i,true)});
    thumb.addEventListener('focus',()=>{clearInterval(heroTimer);showHero(i,true)});
  });
  const heroThumbsWrap=$('[data-hero-thumbs]');
  if(heroThumbsWrap){
    heroThumbsWrap.addEventListener('mouseleave',restartHeroTimer);
    heroThumbsWrap.addEventListener('focusout',restartHeroTimer);
  }
  const initialImg=heroSlides[heroIndex]&&$('img',heroSlides[heroIndex]);
  if(initialImg&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    initialImg.classList.add('is-intro');
    setTimeout(replayHeroReveal,850);
  } else {
    replayHeroReveal();
  }
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches) restartHeroTimer();
}

// --- Smooth scroll (Lenis — the same engine veonn.framer.website runs) ---
// Native-scroll-based (calls window.scrollTo under the hood), so
// position:sticky, anchor links and the IntersectionObserver reveal below
// all keep working untouched. Off for touch (native momentum is already
// great) and prefers-reduced-motion.
if(window.Lenis && !matchMedia('(prefers-reduced-motion: reduce)').matches && !matchMedia('(pointer: coarse)').matches){
  lenisInstance=new Lenis({
    duration:1.2,
    easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),
    wheelMultiplier:1,
    autoRaf:true
  });
  $$('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.length<2) return;
      const target=$(href);
      if(!target) return;
      e.preventDefault();
      lenisInstance.scrollTo(target,{offset:-parseFloat(getComputedStyle(target).scrollMarginTop||0)});
    });
  });
}

// --- Guest checkout (no account required) ---
function ensureCheckoutModal(){
  if($('[data-checkout-modal]')) return;
  document.body.insertAdjacentHTML('beforeend',`
    <div class="checkout-modal" data-checkout-modal aria-hidden="true">
      <div class="checkout-modal__scrim" data-checkout-close></div>
      <div class="checkout-modal__card" data-lenis-prevent role="dialog" aria-modal="true" aria-label="Guest checkout">
        <button type="button" class="checkout-modal__close" data-checkout-close aria-label="Close checkout">×</button>
        <div data-checkout-step="form">
          <p class="checkout-modal__eyebrow">GUEST CHECKOUT · NO ACCOUNT NEEDED</p>
          <h3>Complete your order</h3>
          <div class="checkout-modal__summary" data-checkout-summary></div>
          <form data-checkout-form>
            <label>Full name<input type="text" name="name" required /></label>
            <label>Email<input type="email" name="email" required /></label>
            <label>Shipping address<input type="text" name="address" required /></label>
            <div class="checkout-modal__row">
              <label>City<input type="text" name="city" required /></label>
              <label>Postal code<input type="text" name="postcode" required /></label>
            </div>
            <button type="submit" class="button button--primary checkout-modal__submit" data-checkout-submit>Place order <span data-checkout-total>— €0</span></button>
            <p class="checkout-modal__note">No account required. VISA / MASTERCARD / PAYPAL / KLARNA.</p>
          </form>
        </div>
        <div data-checkout-step="success" hidden>
          <p class="checkout-modal__eyebrow">ORDER CONFIRMED</p>
          <h3>You're on the move.</h3>
          <p class="checkout-modal__confirm">A confirmation has been sent to <b data-checkout-email></b>. Order <b data-checkout-order-id></b>.</p>
          <button type="button" class="button button--primary" data-checkout-done>Continue browsing</button>
        </div>
      </div>
    </div>`);
  const modal=$('[data-checkout-modal]');
  $$('[data-checkout-close]',modal).forEach(el=>el.onclick=closeCheckout);
  $('[data-checkout-form]',modal).addEventListener('submit',e=>{
    e.preventDefault();
    if(!state.cart.length) return;
    const email=e.target.email.value;
    $('[data-checkout-email]',modal).textContent=email;
    $('[data-checkout-order-id]',modal).textContent='HB-'+Math.random().toString(36).slice(2,8).toUpperCase();
    modal.querySelector('[data-checkout-step="form"]').hidden=true;
    modal.querySelector('[data-checkout-step="success"]').hidden=false;
    state.cart=[]; updateCart();
    e.target.reset();
  });
  $('[data-checkout-done]',modal).onclick=closeCheckout;
}
function openCheckout(){
  ensureCheckoutModal();
  const modal=$('[data-checkout-modal]');
  const subtotal=state.cart.reduce((a,b)=>a+products[b.id].price*b.qty,0);
  const summary=$('[data-checkout-summary]',modal), submit=$('[data-checkout-submit]',modal);
  if(!state.cart.length){
    summary.innerHTML='<p class="checkout-modal__empty">Your bag is empty — add an object before checking out.</p>';
    submit.disabled=true;
  } else {
    summary.innerHTML=state.cart.map(i=>`<div class="checkout-modal__line"><span>${products[i.id].name} × ${i.qty}</span><b>${money(products[i.id].price*i.qty)}</b></div>`).join('');
    submit.disabled=false;
  }
  $('[data-checkout-total]',modal).textContent=`— ${money(subtotal)}`;
  modal.querySelector('[data-checkout-step="form"]').hidden=false;
  modal.querySelector('[data-checkout-step="success"]').hidden=true;
  closeDrawer();
  modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); lock(true);
}
function closeCheckout(){
  const modal=$('[data-checkout-modal]'); if(!modal) return;
  modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); lock(false);
}

// --- Login (optional — guest checkout always available) ---
function ensureLoginModal(){
  if($('[data-login-modal]')) return;
  document.body.insertAdjacentHTML('beforeend',`
    <div class="login-modal" data-login-modal aria-hidden="true">
      <div class="login-modal__scrim" data-login-close></div>
      <div class="login-modal__card" data-lenis-prevent role="dialog" aria-modal="true" aria-label="Log in">
        <button type="button" class="login-modal__close" data-login-close aria-label="Close login">×</button>
        <p class="login-modal__eyebrow">WELCOME BACK</p>
        <h3>Log in</h3>
        <form data-login-form>
          <label>Email<input type="email" name="email" required /></label>
          <label>Password<input type="password" name="password" required /></label>
          <button type="submit" class="button button--primary login-modal__submit">Log in</button>
        </form>
        <div class="login-modal__divider"><span>or</span></div>
        <button type="button" class="login-modal__guest" data-login-guest>Continue as guest <span>↗</span></button>
        <p class="login-modal__note">No account needed to shop or check out — <a href="#" data-login-guest-inline>skip straight to guest checkout</a>.</p>
      </div>
    </div>`);
  const modal=$('[data-login-modal]');
  $$('[data-login-close]',modal).forEach(el=>el.onclick=closeLogin);
  $('[data-login-form]',modal).addEventListener('submit',e=>{e.preventDefault();closeLogin();toast('Logged in — welcome back.');e.target.reset()});
  const guest=()=>{closeLogin();openCheckout()};
  $('[data-login-guest]',modal).onclick=guest;
  $('[data-login-guest-inline]',modal).onclick=e=>{e.preventDefault();guest()};
}
function openLogin(){
  ensureLoginModal();
  const modal=$('[data-login-modal]');
  closeDrawer();
  modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); lock(true);
}
function closeLogin(){
  const modal=$('[data-login-modal]'); if(!modal) return;
  modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); lock(false);
}

// --- Trusted Origin Scrolling Ribbon (Placed Above Footer) ---
(function initOriginRibbon(){
  if(document.querySelector('.origin-ribbon')) return;
  const footer=document.querySelector('.site-footer, footer');
  if(!footer) return;
  const ribbonHTML=`
  <section class="origin-ribbon" aria-label="Trusted Origin">
    <div class="origin-ribbon__header">
      <span class="origin-ribbon__line"></span>
      <h4 class="origin-ribbon__title">TRUSTED ORIGIN. BUILT WITH PURPOSE.</h4>
      <span class="origin-ribbon__line"></span>
    </div>
    <div class="origin-ribbon__track-wrap">
      <div class="origin-ribbon__track">
        <div class="origin-badge">
          <span class="origin-badge__head">DEVELOPED AT</span>
          <div class="origin-badge__content">
            <svg class="origin-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M20 5L35 31H5L20 5Z"/><path d="M20 12L29 27H11L20 12Z"/><circle cx="20" cy="21" r="2.5" fill="currentColor"/></svg>
            <div class="origin-badge__text">
              <strong>TH OWL</strong>
              <small>Lemgo, Germany</small>
            </div>
          </div>
        </div>
        <div class="origin-divider"></div>

        <div class="origin-badge">
          <span class="origin-badge__head">ALUMNI OF</span>
          <div class="origin-badge__content">
            <svg class="origin-icon" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="4" fill="#ffffff"/><path d="M10 30L30 10M30 10H16M30 10V24" stroke="#060935" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 10L19 19" stroke="#060935" stroke-width="3.5" stroke-linecap="round"/></svg>
            <div class="origin-badge__text">
              <strong>THE MIGRANT ACCELERATOR</strong>
              <small>TMA Alumni</small>
            </div>
          </div>
        </div>
        <div class="origin-divider"></div>

        <div class="origin-badge">
          <span class="origin-badge__head">&nbsp;</span>
          <div class="origin-badge__content">
            <svg class="origin-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 14C10 8 15 6 20 10C25 6 30 8 30 14C30 26 26 34 20 34C14 34 10 26 10 14Z" stroke-linecap="round"/><circle cx="15.5" cy="16" r="3.5"/><circle cx="24.5" cy="16" r="3.5"/><circle cx="15.5" cy="16" r="1.2" fill="currentColor"/><circle cx="24.5" cy="16" r="1.2" fill="currentColor"/><path d="M18.5 20L20 22.5L21.5 20" stroke-linecap="round"/></svg>
            <div class="origin-badge__text">
              <strong>TH OWL ORIGINS</strong>
              <small>Innovation Network</small>
            </div>
          </div>
        </div>
        <div class="origin-divider"></div>

        <div class="origin-badge">
          <span class="origin-badge__head">DEVELOPED IN</span>
          <div class="origin-badge__content">
            <svg class="origin-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="20" cy="20" r="18"/><path d="M13 28V20L20 13L27 20V28H13Z"/><path d="M20 13V9M17 9H23"/><path d="M17 28V23H23V28"/><circle cx="20" cy="18" r="2"/></svg>
            <div class="origin-badge__text">
              <strong>LEMGO</strong>
              <small>North Rhine-Westphalia</small>
            </div>
          </div>
        </div>
        <div class="origin-divider"></div>

        <div class="origin-badge">
          <span class="origin-badge__head">DESIGNED IN</span>
          <div class="origin-badge__content">
            <svg class="origin-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M18 6L22 4L26 5L28 8L26 11L30 13L32 17L30 21L34 25L32 29L28 32L26 36L22 35L19 32L15 34L12 30L14 26L10 24L8 20L11 16L9 12L13 9L15 11L18 6Z"/></svg>
            <div class="origin-badge__text">
              <strong>GERMANY</strong>
              <small>HABÄNE Studio</small>
            </div>
          </div>
        </div>
        <div class="origin-divider"></div>

        <div class="origin-badge">
          <span class="origin-badge__head">DEVELOPED AT</span>
          <div class="origin-badge__content">
            <svg class="origin-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M20 5L35 31H5L20 5Z"/><path d="M20 12L29 27H11L20 12Z"/><circle cx="20" cy="21" r="2.5" fill="currentColor"/></svg>
            <div class="origin-badge__text">
              <strong>TH OWL</strong>
              <small>Lemgo, Germany</small>
            </div>
          </div>
        </div>
        <div class="origin-divider"></div>

        <div class="origin-badge">
          <span class="origin-badge__head">ALUMNI OF</span>
          <div class="origin-badge__content">
            <svg class="origin-icon" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="4" fill="#ffffff"/><path d="M10 30L30 10M30 10H16M30 10V24" stroke="#060935" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 10L19 19" stroke="#060935" stroke-width="3.5" stroke-linecap="round"/></svg>
            <div class="origin-badge__text">
              <strong>THE MIGRANT ACCELERATOR</strong>
              <small>TMA Alumni</small>
            </div>
          </div>
        </div>
        <div class="origin-divider"></div>

        <div class="origin-badge">
          <span class="origin-badge__head">&nbsp;</span>
          <div class="origin-badge__content">
            <svg class="origin-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 14C10 8 15 6 20 10C25 6 30 8 30 14C30 26 26 34 20 34C14 34 10 26 10 14Z" stroke-linecap="round"/><circle cx="15.5" cy="16" r="3.5"/><circle cx="24.5" cy="16" r="3.5"/><circle cx="15.5" cy="16" r="1.2" fill="currentColor"/><circle cx="24.5" cy="16" r="1.2" fill="currentColor"/><path d="M18.5 20L20 22.5L21.5 20" stroke-linecap="round"/></svg>
            <div class="origin-badge__text">
              <strong>TH OWL ORIGINS</strong>
              <small>Innovation Network</small>
            </div>
          </div>
        </div>
        <div class="origin-divider"></div>

        <div class="origin-badge">
          <span class="origin-badge__head">DEVELOPED IN</span>
          <div class="origin-badge__content">
            <svg class="origin-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="20" cy="20" r="18"/><path d="M13 28V20L20 13L27 20V28H13Z"/><path d="M20 13V9M17 9H23"/><path d="M17 28V23H23V28"/><circle cx="20" cy="18" r="2"/></svg>
            <div class="origin-badge__text">
              <strong>LEMGO</strong>
              <small>North Rhine-Westphalia</small>
            </div>
          </div>
        </div>
        <div class="origin-divider"></div>

        <div class="origin-badge">
          <span class="origin-badge__head">DESIGNED IN</span>
          <div class="origin-badge__content">
            <svg class="origin-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M18 6L22 4L26 5L28 8L26 11L30 13L32 17L30 21L34 25L32 29L28 32L26 36L22 35L19 32L15 34L12 30L14 26L10 24L8 20L11 16L9 12L13 9L15 11L18 6Z"/></svg>
            <div class="origin-badge__text">
              <strong>GERMANY</strong>
              <small>HABÄNE Studio</small>
            </div>
          </div>
        </div>
        <div class="origin-divider"></div>
      </div>
    </div>
  </section>`;
  footer.insertAdjacentHTML('beforebegin',ribbonHTML);
})();

$$('[data-login-open]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();openLogin()}));

// --- Category quick-menu (beside login) ---
function ensureCategoryMenu(){
  if($('[data-category-menu]')) return $('[data-category-menu]');
  document.body.insertAdjacentHTML('beforeend',`
    <div class="category-menu" data-category-menu aria-hidden="true">
      <a href="shop.html?category=luggage" class="category-menu__link" data-nav-category>Luggage <i>→</i></a>
      <a href="shop.html?category=carry" class="category-menu__link" data-nav-category>Carry <i>→</i></a>
      <a href="shop.html?category=system" class="category-menu__link" data-nav-category>System <i>→</i></a>
      <a href="shop.html?category=accessory" class="category-menu__link" data-nav-category>Accessories <i>→</i></a>
      <button type="button" class="category-menu__join" data-join-open>Join community <span>→</span></button>
    </div>`);
  return $('[data-category-menu]');
}
function positionCategoryMenu(btn,menu){
  const header=$('[data-header]');
  const b=btn.getBoundingClientRect();
  // Start the panel ABOVE the navbar's bottom edge so its top slides behind the
  // bar (the panel sits at a lower z-index). That hides the seam and the header's
  // rounded corners, making the panel look like it grows out of the navbar.
  const h=header?header.getBoundingClientRect():b;
  // Overlap the bar's bottom edge by 1px so subpixel rounding can never leave a
  // hairline gap between the two surfaces.
  menu.style.setProperty('--cm-top',`${Math.round(h.bottom)-1}px`);
  // Align the panel's right edge flush with the navbar's, clamped within the bar.
  const mw=menu.offsetWidth||180;
  let left=b.left+b.width/2-mw/2;
  left=Math.max(h.left,Math.min(left,h.right-mw));
  menu.style.setProperty('--cm-left',`${Math.round(left)}px`);
}
function positionCategoryMenuOnResize(){
  const menu=$('[data-category-menu]'), btn=$('[data-category-menu-open]');
  if(menu&&btn&&menu.classList.contains('is-open')) positionCategoryMenu(btn,menu);
}
function closeCategoryMenu(){
  const menu=$('[data-category-menu]');
  const header=$('[data-header]');
  if(header) header.classList.remove('is-category-open');
  if(!menu) return;
  menu.classList.remove('is-open');
  menu.setAttribute('aria-hidden','true');
}
$$('[data-category-menu-open]').forEach(btn=>btn.addEventListener('click',e=>{
  e.stopPropagation();
  const menu=ensureCategoryMenu();
  const willOpen=!menu.classList.contains('is-open');
  closeCategoryMenu();
  if(willOpen){
    positionCategoryMenu(btn,menu);
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden','false');
    const header=$('[data-header]');
    if(header) header.classList.add('is-category-open');
  }
}));
document.addEventListener('click',e=>{
  // Choosing a category closes the panel and lets the link navigate.
  if(e.target.closest('[data-category-menu] a')) { closeCategoryMenu(); return; }
  if(!e.target.closest('[data-category-menu]') && !e.target.closest('[data-category-menu-open]')) closeCategoryMenu();
});
window.addEventListener('resize',()=>{
  const menu=$('[data-category-menu]');
  const btn=$('[data-category-menu-open]');
  if(menu && btn && menu.classList.contains('is-open')) positionCategoryMenu(btn,menu);
});
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeCategoryMenu(); });

// --- Join community + downloadable membership passport ---
function renderPassport(canvas,{name,email,country}){
  const ctx=canvas.getContext('2d');
  const W=canvas.width,H=canvas.height;
  ctx.clearRect(0,0,W,H);
  const grad=ctx.createLinearGradient(0,0,W,H);
  grad.addColorStop(0,'#0A0F5A');
  grad.addColorStop(1,'#060935');
  ctx.fillStyle=grad;
  ctx.fillRect(0,0,W,H);
  ctx.strokeStyle='rgba(255,255,255,.25)';
  ctx.lineWidth=2;
  ctx.strokeRect(16,16,W-32,H-32);
  ctx.fillStyle='#36D8FF';
  ctx.font='700 22px Arial';
  ctx.fillText('HABÄNE', 48, 66);
  ctx.fillStyle='rgba(255,255,255,.55)';
  ctx.font='400 12px Arial';
  ctx.fillText('MOVEMENT PASSPORT', 48, 88);
  ctx.strokeStyle='rgba(255,255,255,.18)';
  ctx.beginPath();ctx.moveTo(48,110);ctx.lineTo(W-48,110);ctx.stroke();
  const memberId='HB-'+Math.random().toString(36).slice(2,8).toUpperCase();
  const issueDate=new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
  function field(label,value,y){
    ctx.fillStyle='rgba(255,255,255,.45)';
    ctx.font='700 10px Arial';
    ctx.fillText(label.toUpperCase(), 48, y);
    ctx.fillStyle='#fff';
    ctx.font='600 22px Arial';
    ctx.fillText(value||'—', 48, y+28);
  }
  field('Member name', name, 165);
  field('Member ID', memberId, 235);
  field('Country', country, 305);
  field('Issued', issueDate, 375);
  ctx.fillStyle='rgba(255,255,255,.4)';
  ctx.font='400 11px Arial';
  ctx.fillText(email||'', 48, H-40);
  ctx.textAlign='right';
  ctx.fillText('habane.de', W-48, H-40);
  ctx.textAlign='left';
}
function ensureJoinModal(){
  if($('[data-join-modal]')) return;
  document.body.insertAdjacentHTML('beforeend',`
    <div class="join-modal" data-join-modal aria-hidden="true">
      <div class="join-modal__scrim" data-join-close></div>
      <div class="join-modal__card" data-lenis-prevent role="dialog" aria-modal="true" aria-label="Join the HABÄNE community">
        <button type="button" class="join-modal__close" data-join-close aria-label="Close">×</button>
        <div data-join-panel="form">
          <p class="join-modal__eyebrow">HABÄNE COMMUNITY</p>
          <h3>Join the movement</h3>
          <form data-join-form>
            <label>Full name<input type="text" name="name" required /></label>
            <label>Email<input type="email" name="email" required /></label>
            <label>Country<input type="text" name="country" required /></label>
            <button type="submit" class="button button--primary join-modal__submit">Generate my passport</button>
          </form>
        </div>
        <div data-join-panel="passport" class="is-hidden">
          <p class="join-modal__eyebrow">WELCOME TO HABÄNE</p>
          <h3>Your passport is ready</h3>
          <canvas data-passport-canvas width="900" height="560"></canvas>
          <div class="join-modal__passport-actions">
            <button type="button" class="button button--primary join-modal__submit" data-passport-download>Download passport</button>
            <button type="button" class="login-modal__guest" data-join-done>Done <span>↗</span></button>
          </div>
        </div>
      </div>
    </div>`);
  const modal=$('[data-join-modal]');
  $$('[data-join-close]',modal).forEach(el=>el.onclick=closeJoin);
  $('[data-join-form]',modal).addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(e.target);
    const details={name:(data.get('name')||'').trim(),email:(data.get('email')||'').trim(),country:(data.get('country')||'').trim()};
    renderPassport($('[data-passport-canvas]',modal),details);
    $('[data-join-panel="form"]',modal).classList.add('is-hidden');
    $('[data-join-panel="passport"]',modal).classList.remove('is-hidden');
  });
  $('[data-passport-download]',modal).onclick=()=>{
    const canvas=$('[data-passport-canvas]',modal);
    const link=document.createElement('a');
    link.download='habane-passport.png';
    link.href=canvas.toDataURL('image/png');
    link.click();
    toast('Passport downloaded');
  };
  $('[data-join-done]',modal).onclick=closeJoin;
}
function openJoin(){
  ensureJoinModal();
  closeCategoryMenu();
  const modal=$('[data-join-modal]');
  $('[data-join-panel="form"]',modal).classList.remove('is-hidden');
  $('[data-join-panel="passport"]',modal).classList.add('is-hidden');
  $('[data-join-form]',modal).reset();
  modal.classList.add('is-open'); modal.setAttribute('aria-hidden','false'); lock(true);
}
function closeJoin(){
  const modal=$('[data-join-modal]'); if(!modal) return;
  modal.classList.remove('is-open'); modal.setAttribute('aria-hidden','true'); lock(false);
}
document.addEventListener('click',e=>{
  const trigger=e.target.closest('[data-join-open]');
  if(trigger){ e.preventDefault(); openJoin(); }
});

