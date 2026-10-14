/* ============================================================
   ART INVENTORY — the ONE file to edit when something sells
   or gets a price.

   status:  'available'  → green badge, appears on Available Works page
            'sold'       → terracotta badge
            'commission' → no badge (murals / commissioned work)
   price:   a number like 450 → shows "$450"
            null → shows "Inquire for pricing"
   NOTE: never list past sale prices here — current asking prices only.
   ============================================================ */
window.ART = [
  {
    "file": "mixed/chameleon-rainbow.jpg",
    "title": "Rainbow Chameleon",
    "category": "Fine Art",
    "status": "sold",
    "price": null,
    "description": "A rainbow-colored chameleon curls its tail above a branch, with bright dotted patterns standing out against a black background."
  },
  {
    "file": "mixed/chameleon-copper-leaves.jpg",
    "title": "Copper Chameleon",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A multicolored chameleon peers between copper-colored leaves against a vivid green background."
  },
  {
    "file": "mixed/panda-pair-climbing.jpg",
    "title": "Climbing Pandas",
    "category": "Fine Art",
    "status": "available",
    "price": 250,
    "description": "Two pandas appear at different heights among tall bamboo stems and pointed leaves against black.",
    "dimensions": "11 × 17 in",
    "materials": "Cardboard and acrylic on canvas"
  },
  {
    "file": "mixed/panda-triptych-wall.jpg",
    "title": "Panda Trio",
    "category": "Fine Art",
    "status": "available",
    "price": 400,
    "description": "Three red-background panda artworks form a wall grouping, linked by their layered bamboo motifs. Offered together as a three-piece set.",
    "aliases": [
      "Panda Triptych"
    ],
    "materials": "Acrylic and cardboard on canvas"
  },
  {
    "file": "mixed/lemur-teal.jpg",
    "title": "Lemur on Teal",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A yellow-eyed lemur looks forward through tall bamboo forms against a bright teal background."
  },
  {
    "file": "mixed/sifaka-lemur-turquoise.jpg",
    "title": "Sifaka",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A white-furred lemur with a dark face peeks from the base of tall bamboo against turquoise."
  },
  {
    "file": "mixed/lemur-pair-blue.jpg",
    "title": "Lemurs on Blue",
    "category": "Fine Art",
    "status": "sold",
    "price": null,
    "description": "Two lemur faces peer between slender bamboo stems at opposite ends of a deep blue scene.",
    "soldPrice": 500,
    "dimensions": "16 × 24 in",
    "materials": "Cardboard and acrylic on canvas"
  },
  {
    "file": "mixed/lemur-faces-teal.jpg",
    "title": "Peekaboo Lemurs",
    "category": "Fine Art",
    "status": "available",
    "price": 500,
    "description": "Two wide-eyed lemurs peek through an overlapping lattice of bamboo against teal green.",
    "dimensions": "16 × 24 in",
    "materials": "Cardboard and acrylic on canvas"
  },
  {
    "file": "mixed/lemur-green.jpg",
    "title": "Lemur on Green",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A dark-faced lemur with bright yellow eyes emerges from layered bamboo against green."
  },
  {
    "file": "mixed/deer-bamboo-blue.jpg",
    "title": "Deer in Bamboo",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A deer's face appears between tall, slender bamboo forms against a deep blue background."
  },
  {
    "file": "mixed/deer-flowers.jpg",
    "title": "Deer & Flowers",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A deer peers through a dense arrangement of raised flower stems and curled blossoms against blue."
  },
  {
    "file": "mixed/giraffes-turquoise.jpg",
    "title": "Giraffes on Turquoise",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "Two giraffe heads angle toward one another against a swirling turquoise background."
  },
  {
    "file": "mixed/koi-fish.jpg",
    "title": "Koi",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "Colorful koi curve among long green water plants against a flowing turquoise background."
  },
  {
    "file": "mixed/red-horse-painting.jpg",
    "title": "Red Horse",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A crimson horse faces forward, its dark mane and mottled body standing out against warm orange-brown tones."
  },
  {
    "file": "mixed/horse-study-painting.jpg",
    "title": "Horse Study",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A horse lowers its head in a softly textured study of gray, brown and cream."
  },
  {
    "file": "mixed/gold-horse-abstract.jpg",
    "title": "Klimpt Art",
    "category": "Fine Art",
    "status": "available",
    "price": 150,
    "description": "A stylized horse's head fills a gold-colored composition of bright geometric blocks and dotted patterns."
  },
  {
    "file": "mixed/tree-spirit-painting.jpg",
    "title": "Tree Spirit",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A figure sits within a branching tree, surrounded by green foliage above a network of exposed roots."
  },
  {
    "file": "mixed/horse-stable-cardboard.jpg",
    "title": "Stable Window",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A horse looks over a stable door framed by ridged siding, with a dark window behind its pale mane."
  },
  {
    "file": "mixed/bastet-cat-gold.jpg",
    "title": "Bastet",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A seated black cat with a decorative collar appears before layered pyramids against a gold-colored background."
  },
  {
    "file": "mixed/cave-horse-framed.jpg",
    "title": "Cave Horse",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A dark-outlined horse crosses a rusty orange field marked with rough lines and mottled textures."
  },
  {
    "file": "mixed/cave-aurochs-framed.jpg",
    "title": "Aurochs",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "Horned animals overlap across a rusty orange background, with sweeping black outlines and pale patterned bodies."
  },
  {
    "file": "mixed/cat-face-purple.jpg",
    "title": "Cat Face I",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A close-up cat face pairs vivid blue eyes with purple, black and warm brown markings."
  },
  {
    "file": "mixed/cat-face-red.jpg",
    "title": "Cat Face II",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "Yellow-green eyes shine from a close-up cat face painted in saturated red and orange."
  },
  {
    "file": "mixed/cat-face-blue.jpg",
    "title": "Cat Face III",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "A black-and-white cat faces forward with yellow eyes, a red nose and sharply contrasting whiskers."
  },
  {
    "file": "mixed/cat-face-teal-eyes.jpg",
    "title": "Cat Face IV",
    "category": "Fine Art",
    "status": "available",
    "price": null,
    "description": "Turquoise-green eyes stand out from a dark cat face accented with purple, pink and tan."
  },
  {
    "file": "mixed/mural-sunflower.jpg",
    "title": "Sunflower Mural",
    "category": "Murals",
    "status": "commission",
    "price": null,
    "description": "An oversized sunflower spreads red-orange and yellow petals around a densely patterned circular center on a teal wall."
  },
  {
    "file": "mixed/mural-bamboo.jpg",
    "title": "Bamboo Mural",
    "category": "Murals",
    "status": "commission",
    "price": null,
    "description": "Tall green bamboo stems and sweeping dark leaves rise across a warm beige wall."
  },
  {
    "file": "boxes/shadowbox-miniature-town.jpg",
    "title": "Restaurantville",
    "dimensions": "12 × 20 in",
    "materials": "Cardboard, wood, metal, rocks, plants, tiger lilies, plastic, watercolor, oil pastel, acrylic, glue, cellophane, and markers",
    "aliases": [
      "The Little Town"
    ],
    "soldPrice": 550,
    "category": "Shadow Boxes",
    "status": "sold",
    "price": null,
    "description": "Miniature buildings and colorful storefront signs crowd a narrow town scene, with greenery tucked between the structures."
  },
  {
    "file": "boxes/shadowbox-mountain-village.jpg",
    "title": "Mountain Village",
    "category": "Shadow Boxes",
    "status": "available",
    "price": 200,
    "dimensions": "8 × 8 in",
    "materials": "Cardboard, wood, metal, rocks, plants, tiger lilies, plastic, watercolor, oil pastel, acrylic, glue, cellophane, and markers",
    "description": "Miniature houses sit among stones and purple flowers beneath layered mountain silhouettes. A pale wooden frame contains the village scene."
  },
  {
    "file": "boxes/shadowbox-coastal-village.jpg",
    "title": "Coastal Village",
    "category": "Shadow Boxes",
    "status": "sold",
    "price": null,
    "soldPrice": 400,
    "description": "Pale miniature buildings rise among green foliage and small orange flowers. Blue sky and layered hills form the backdrop inside a wooden frame.",
    "dimensions": "12 × 18 in",
    "materials": "Cardboard, wood, metal, rocks, plants, tiger lilies, plastic, watercolor, oil pastel, acrylic, glue, cellophane, and markers"
  },
  {
    "file": "boxes/shadowbox-farm-animals.jpg",
    "title": "Touch of Italy",
    "category": "Shadow Boxes",
    "status": "sold",
    "price": null,
    "aliases": [
      "The Farm"
    ],
    "soldPrice": 200,
    "materials": "Cardboard, wood, metal, rocks, plants, tiger lilies, plastic, watercolor, oil pastel, acrylic, glue, cellophane, and markers",
    "description": "Miniature buildings and farm animals nestle among green foliage and dark stones. Mountain silhouettes rise behind the scene inside a warm-toned wooden frame."
  },
  {
    "file": "boxes/shadowbox-halloween.jpg",
    "title": "Halloween",
    "category": "Shadow Boxes",
    "status": "sold",
    "price": null,
    "soldPrice": 350,
    "dimensions": "Approximately 16 × 24 in",
    "materials": "Pens, plastic, acrylic paint, markers, glue, Styrofoam, rubber spray paint, glass, laminate, and wood",
    "description": "Eyes, skeletal hands, bones and orange pumpkins fill a dark shadow box around a framed eye image. A large black spider stretches across the blue-and-black scene."
  },
  {
    "file": "boxes/shadowbox-dinosaurs.jpg",
    "title": "Dinosaur World",
    "category": "Shadow Boxes",
    "status": "sold",
    "price": null,
    "soldPrice": 200,
    "dimensions": "12 × 6 × 18 in",
    "materials": "Plastic, rock, cardboard, glue, acorns, tiger lilies, and plants",
    "description": "Dinosaur figures stand on layered rock ledges among green plants and orange flowers. Corrugated cardboard forms ridges behind the scene inside a pale wooden frame."
  },
  {
    "file": "boxes/shadowbox-tiger-parlor.jpg",
    "title": "Monatiger",
    "category": "Shadow Boxes",
    "status": "available",
    "price": 100,
    "materials": "Wood, plastic, acrylic paint, rock, rubber, suede, watercolor, laminate, and cardboard",
    "description": "A tiger figurine faces a gold-framed tiger portrait in a red miniature room. A potted tree, floor lamp and another tiger picture complete the scene.",
    "dimensions": "6 × 3 in",
    "aliases": [
      "Mona Tiger"
    ]
  },
  {
    "file": "boxes/shadowbox-pig-bedroom.jpg",
    "title": "The Pig's Bedroom",
    "category": "Shadow Boxes",
    "status": "available",
    "price": 100,
    "materials": "Wood, plastic, acrylic paint, rock, rubber, suede, watercolor, laminate, and cardboard",
    "description": "A sleeping piglet rests on a purple cushion in a pink miniature room. A framed pig portrait, a small lamp, a potted tree and a rounded stone surround it."
  },
  {
    "file": "boxes/shadowbox-horse-red-barn.jpg",
    "title": "Red Barn",
    "category": "Shadow Boxes",
    "status": "sold",
    "price": null,
    "soldPrice": 150,
    "dimensions": "3 × 8 in",
    "materials": "Tiger lilies, wood, acrylic, watercolor pens, and porcelain rocks",
    "description": "A horse stands behind a miniature fence with a red barn pictured in the background. Dried plants and stones cover the foreground inside a red wooden frame."
  },
  {
    "file": "boxes/shadowbox-horse-gold-barn.jpg",
    "title": "Farm Life",
    "category": "Shadow Boxes",
    "status": "sold",
    "price": null,
    "aliases": [
      "Gold Barn"
    ],
    "soldPrice": 100,
    "dimensions": "3 × 6 in",
    "materials": "Tiger lilies, wood, acrylic, watercolor pens, and porcelain rocks",
    "description": "A spotted horse stands beside a miniature fence in front of a red-roofed barn picture. Dried plants, green foliage and small vessels fill the scene inside a gold-colored frame."
  },
  {
    "file": "boxes/shadowbox-cat-and-mouse-red.jpg",
    "title": "Cat & Mouse in Red",
    "category": "Shadow Boxes",
    "status": "available",
    "price": 100,
    "dimensions": "3 × 6 in",
    "materials": "Yarn, wood, acrylic, laminate, leather, and watercolor",
    "description": "Two miniature mice sit beside yellow cheese pieces and green yarn in a red shadow box. A cat peers through an opening in the fish-patterned backdrop."
  },
  {
    "file": "boxes/shadowbox-cat-and-mouse-green.jpg",
    "title": "Cat & Mouse in Green",
    "category": "Shadow Boxes",
    "status": "available",
    "price": 100,
    "description": "A cat's face peers from a blue patterned backdrop behind a pink mouse, cheese pieces and a loose coil of yarn inside a green frame.",
    "dimensions": "3 × 6 in",
    "materials": "Yarn, wood, acrylic, laminate, leather, and watercolor"
  },
  {
    "file": "boxes/shadowbox-honeybee-hive.jpg",
    "title": "The Hive",
    "category": "Shadow Boxes",
    "status": "available",
    "price": 65,
    "description": "A large bee rests against an open honeycomb pattern above rounded hive forms inside a gold-colored shadow box.",
    "dimensions": "3 × 2.5 × 2.5 in",
    "materials": "Cardboard, acrylic paint, brass, and wood"
  },
  {
    "file": "boxes/shadowbox-buddha-gemstones.jpg",
    "title": "Buddha & Gems",
    "category": "Shadow Boxes",
    "status": "available",
    "price": 80,
    "description": "A small seated Buddha figure rests before rows of round translucent stones, with polished stones arranged at its feet.",
    "dimensions": "2 × 2.5 in",
    "materials": "Wood, glass, brass, and different types of rocks/gems"
  },
  {
    "file": "boxes/shadowbox-asian-garden.jpg",
    "title": "Enlightenment",
    "category": "Shadow Boxes",
    "status": "available",
    "price": 200,
    "description": "A dark elephant, miniature towers and layered plant forms fill a garden scene framed in pink and cream.",
    "dimensions": "6 × 8 in",
    "materials": "Bark, velvet, tiger lilies, succulents, plastic, watercolor, acrylic, rocks, wood, brass"
  },
  {
    "file": "pets/terrier-before-after.jpg",
    "title": null,
    "category": "Pet Portraits",
    "status": "sold",
    "price": null,
    "alt": "White dog on a car seat, reference photo above its painted portrait",
    "soldPrice": 400,
    "description": "A white dog's reference photo appears above its painted portrait, echoing its relaxed pose on a dark car seat."
  },
  {
    "file": "boxes/elephant-tree-shadowbox.jpg",
    "title": "Bonsai",
    "category": "Shadow Boxes",
    "status": "sold",
    "price": null,
    "soldPrice": 100,
    "alt": "Black elephant figurine beneath a painted tree, with stones inside a wooden shadow box",
    "description": "A dark elephant figurine stands beneath a spreading tree image, with smooth dark stones lining the base of the wooden box."
  },
  {
    "file": "boxes/the-village.jpg",
    "title": "The Village",
    "dimensions": "22 × 40 in",
    "materials": "Cardboard, wood, metal, rocks, plants, tiger lilies, plastic, watercolor, oil pastel, acrylic, glue, cellophane, and markers",
    "category": "Shadow Boxes",
    "status": "available",
    "price": 1500,
    "alt": "The Village: tall shadow box filled with miniature houses, flowers and a red airplane overhead",
    "description": "Rows of colorful miniature buildings, flowers and pathways fill a tall village scene beneath a small red airplane."
  },
  {
    "file": "mixed/napoleon-dynamite.jpg",
    "title": "Napoleon Dynamite",
    "category": "Fine Art",
    "status": "available",
    "price": 1000,
    "alt": "Napoleon Dynamite: an orange dog facing a green dinosaur in a framed scene",
    "description": "An orange dog faces a green dinosaur pictured in a frame, bringing the two animals nose to nose."
  },
  {
    "file": "mixed/lemurs-bamboo-green.jpg",
    "title": "Madagascar",
    "category": "Fine Art",
    "status": "sold",
    "price": null,
    "alt": "Three ring-tailed lemurs among raised bamboo stems on a green painted background",
    "soldPrice": 350,
    "description": "Three ring-tailed lemurs peek and climb among raised bamboo stems against a streaked green background."
  },
  {
    "file": "mixed/couch-potato.jpg",
    "title": "Couch Potato",
    "category": "Fine Art",
    "status": "available",
    "price": 1000,
    "alt": "Couch Potato: a cheetah reclining on a green and cream striped couch beneath a lantern",
    "description": "A spotted cat reclines on a green-and-cream striped sofa beneath a glowing wall lantern.",
    "dimensions": "2 × 3 ft (24 × 36 in)",
    "materials": "Pastel chalk, acrylic, oil, pens, markers, and watercolor on canvas"
  },
  {
    "file": "pets/emma-portrait.jpg",
    "title": "Lounging",
    "category": "Pet Portraits",
    "price": 750,
    "status": "available",
    "alt": "Long-haired gray cat reclining on orange bedding in front of white closet doors",
    "description": "A long-haired gray cat reclines on orange bedding in front of pale closet doors.",
    "materials": "Chalk pastel, watercolor, acrylic, oil, markers, and canvas"
  },
  {
    "file": "pets/bell-before-after.jpg",
    "title": "Bell",
    "category": "Pet Portraits",
    "status": "sold",
    "price": null,
    "soldPrice": 550,
    "dimensions": "Approximately 16 × 18 in",
    "materials": "Acrylic and oil on canvas",
    "description": "A gray lop-eared rabbit wears a pink bow in a reference photo paired with its dark-background portrait."
  },
  {
    "file": "pets/red-heeler-before-after.jpg",
    "title": "Cooper",
    "category": "Pet Portraits",
    "status": "sold",
    "price": null,
    "soldPrice": 800,
    "dimensions": "36 × 42 in",
    "materials": "Watercolor, oil pastel, felt pens, acrylic, and chalk on canvas",
    "description": "A red heeler's reclining pose is carried from a reference photo into a portrait with bold, textured markings.",
    "aliases": [
      "Red Heeler"
    ]
  },
  {
    "file": "pets/angie-before-after.jpg",
    "title": "Angie",
    "category": "Pet Portraits",
    "status": "sold",
    "price": null,
    "soldPrice": 450,
    "dimensions": "12 × 16 in",
    "materials": "Oil pastels, markers, acrylic, and watercolor on canvas",
    "description": "A pale orange cat's reference photo accompanies a portrait placing the seated cat among colorful flowers beneath a blue sky."
  },
  {
    "file": "pets/cheryl-before-after.jpg",
    "title": "Cheryl's Horse",
    "category": "Pet Portraits",
    "status": "sold",
    "price": null,
    "soldPrice": 400,
    "dimensions": "12 × 20 in",
    "materials": "Acrylic and oil on canvas",
    "description": "A horse's broad white blaze is echoed in a textured portrait beside its beachside reference photo."
  },
  {
    "file": "pets/tova-before-after.jpg",
    "title": "Tova",
    "category": "Pet Portraits",
    "status": "sold",
    "price": null,
    "soldPrice": 150,
    "dimensions": "8 × 10 in",
    "materials": "Acrylic on canvas",
    "description": "A green parrot's bright orange beak and layered feathers carry from a reference photo into a vivid blue-background portrait. One of Stephanie's early pieces."
  },
  {
    "file": "pets/angel-before-after.jpg",
    "title": "Angel",
    "category": "Pet Portraits",
    "status": "sold",
    "price": null,
    "soldPrice": 400,
    "dimensions": "Approximately 20 × 24 in",
    "materials": "Oil and acrylic on canvas",
    "description": "A tan-and-white dog in a dark harness stands in a reference photo beside its full-body portrait."
  },
  {
    "file": "pets/marlo-before-after.jpg",
    "title": "Charlie",
    "aliases": [
      "Marlo"
    ],
    "category": "Pet Portraits",
    "status": "sold",
    "price": null,
    "soldPrice": 200,
    "dimensions": "10 × 12 in",
    "materials": "Oil pastel on canvas",
    "description": "A dachshund's close-up reference photo accompanies a portrait using blue, orange and brown shapes to capture its face."
  },
  {
    "file": "pets/lauren-before-after.jpg",
    "title": "Lauren's Spaniel",
    "category": "Pet Portraits",
    "status": "sold",
    "price": null,
    "soldPrice": 300,
    "dimensions": "11 × 17 in",
    "materials": "Oil pastel and acrylic on canvas",
    "description": "A cream-colored dog's round dark eyes and soft ears are echoed in a close-up portrait beside its reference photo."
  },
  {
    "file": "pets/lauren-pug-before-after.jpg",
    "title": "Mr. T",
    "aliases": [
      "Lauren's Pug",
      "Lauren's Pub"
    ],
    "category": "Pet Portraits",
    "status": "sold",
    "price": null,
    "soldPrice": 300,
    "dimensions": "11 × 17 in",
    "materials": "Oil, acrylic, and oil pastel on canvas",
    "description": "A black pug wears a small hat and bright patterned scarf in a portrait paired with its reference photo."
  },
  {
    "file": "pets/paul-pups-before-after.jpg",
    "title": "Paul's Pups",
    "category": "Pet Portraits",
    "status": "sold",
    "price": null,
    "soldPrice": 400,
    "materials": "Acrylic on canvas",
    "description": "Two small dogs appear in separate reference photos alongside their individual painted portraits. The two pieces sold together as a set."
  },
  {
    "file": "pets/orange-tabby-portrait.jpg",
    "title": "The Orange Tabby",
    "aliases": [
      "Orange Tabby"
    ],
    "category": "Pet Portraits",
    "status": "sold",
    "price": null,
    "soldPrice": 600,
    "dimensions": "24 × 30 in",
    "materials": "Oil pastel, chalk, acrylic, oil, watercolor pens, fine-tip pens, and pastel chalk",
    "description": "An orange-and-white cat reclines with its fluffy tail curved along the foreground."
  }
];

/* ---- helpers (no need to edit below) ---- */

function artPriceLabel(piece) {
  if (typeof piece.price === 'number' && piece.price > 0) return '$' + piece.price.toLocaleString('en-US');
  return 'Price on request';
}

/* Adds Sold/Available badges + price/inquire line to any gallery page */
function injectBadges() {
  var byFile = {};
  window.ART.forEach(function (p) { byFile[p.file] = p; });
  document.querySelectorAll('.art-card img').forEach(function (img) {
    var src = img.getAttribute('src') || '';
    var key = src.replace('assets/img/', '');
    var piece = byFile[key];
    if (!piece || !['available', 'sold'].includes(piece.status)) return;
    var card = img.closest('.art-card');
    if (!card || card.querySelector('.badge')) return; /* already badged (shop page) */
    var badge = document.createElement('span');
    badge.className = 'badge ' + piece.status;
    badge.textContent = piece.status === 'sold' ? 'Sold' : 'Available';
    card.style.position = 'relative';
    card.insertBefore(badge, card.firstChild);
    if (piece.status === 'available') {
      var cap = card.querySelector('figcaption');
      if (cap) {
        var line = document.createElement('span');
        line.className = 'price-line';
        line.innerHTML = artPriceLabel(piece) +
          ' · <a href="commission.html?v=collector-20260911&piece=' + encodeURIComponent(piece.title) + '">Ask about this piece →</a>';
        cap.appendChild(document.createElement('br'));
        cap.appendChild(line);
      }
    }
  });
}

/* Renders the Available Works page, grouped by category */
function renderShop(containerId) {
  var root = document.getElementById(containerId);
  if (!root) return;
  var groups = {};
  window.ART.forEach(function (p) {
    if (p.status !== 'available') return;
    (groups[p.category] = groups[p.category] || []).push(p);
  });
  var order = ['Fine Art', 'Shadow Boxes', 'Pet Portraits', 'Murals'];
  var any = false;
  order.forEach(function (cat) {
    var pieces = groups[cat];
    if (!pieces || !pieces.length) return;
    any = true;
    var h = document.createElement('h2');
    h.textContent = cat;
    root.appendChild(h);
    var grid = document.createElement('section');
    grid.className = 'gallery';
    pieces.forEach(function (p) {
      var fig = document.createElement('figure');
      fig.className = 'art-card';
      fig.style.position = 'relative';
      fig.innerHTML =
        '<span class="badge available">Available</span>' +
        '<a href="assets/img/' + p.file + '" target="_blank">' +
        '<img src="assets/img/' + p.file + '" alt="' + (p.alt || p.title) + '" loading="lazy"></a>' +
        '<figcaption><strong>' + p.title + '</strong><br>' +
        (p.description ? '<span class="art-description">' + p.description + '</span><br>' : '') +
        (p.dimensions ? 'Size: ' + p.dimensions + '<br>' : '') +
        (p.materials ? '<span class="art-materials">Materials: ' + p.materials + '</span><br>' : '') +
        '<span class="price-line">' + artPriceLabel(p) +
        ' · <a href="commission.html?v=collector-20260911&piece=' + encodeURIComponent(p.title) + '">Ask about this piece →</a></span></figcaption>';
      grid.appendChild(fig);
    });
    root.appendChild(grid);
  });
  if (!any) {
    root.innerHTML = '<p class="page-note">Everything has found a home! Commissions are always open — <a href="commission.html?v=collector-20260911">start one here</a>.</p>';
  }
}

document.addEventListener('DOMContentLoaded', injectBadges);
