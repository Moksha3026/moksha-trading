export const SITE_URL = "https://www.mokshaexport.com";

export const NAV_LINKS = [
  { href: "#products", label: "Products" },
  { href: "#printing", label: "Printing" },
  { href: "#process", label: "How it works" },
  { href: "#exports", label: "Exports" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

export const CREDENTIALS = [
  "IEC EXPORT LICENSE",
  "5,000+ TEES EXPORTED",
  "NO MINIMUM ORDER",
  "QC BEFORE DISPATCH",
];

export const PRINTING_METHODS = [
  {
    name: "Screen",
    desc: "Multi-colour plastisol & water-based inks. Our best unit cost once volumes get serious.",
    photoSrc: "/images/printing-screen.jpg",
    photoAlt: "Screen printing a design onto fabric by hand",
  },
  {
    name: "DTF",
    desc: "Full colour on any fabric or garment shade. Mixed batches and one-off pieces welcome.",
    photoSrc: "/images/printing-dtf.jpg",
    photoAlt: "Heat-press applying a DTF transfer to a garment",
  },
  {
    name: "Digital",
    desc: "DTG photographic detail with a soft hand feel. Built for POD and e-commerce sellers.",
    photoSrc: "/images/printing-digital.jpg",
    photoAlt: "Digital printer applying artwork directly onto fabric",
  },
  {
    name: "HD",
    desc: "Raised, high-opacity finish for premium retail labels, sports names and numbers.",
    photoSrc: "/images/printing-hd.jpg",
    photoAlt: "Close-up of a print being applied to a t-shirt in a workshop",
  },
];

export type ProductPhoto = { src: string; alt: string };

export type Product = {
  photoSrc: string;
  photoAlt: string;
  title: string;
  meta: string[];
  /** Extra shots shown in the lightbox. Omitted while a category still
      runs on a single stock image. */
  gallery?: ProductPhoto[];
};

export const PRODUCTS: Product[] = [
  {
    photoSrc: "/images/stock-tee-hanger.jpg",
    photoAlt: "Plain black cotton T-shirt on a hanger",
    title: "Cotton T-shirts",
    meta: ["COMBED / BIO-WASH", "ROUND & POLO NECK"],
    gallery: [
      { src: "/images/stock-tee-hanger.jpg", alt: "Plain black cotton T-shirt on a hanger" },
      { src: "/images/stock-tee-man.jpg", alt: "Man wearing a plain white cotton T-shirt" },
      { src: "/images/stock-tee-woman.jpg", alt: "Woman wearing a plain white cotton T-shirt" },
      { src: "/images/stock-tee-kid.jpg", alt: "Child wearing a plain white cotton T-shirt" },
      { src: "/images/stock-tee-folded.jpg", alt: "Folded white and black cotton T-shirts" },
    ],
  },
  {
    photoSrc: "/images/own-sports-polo-flat.jpg",
    photoAlt: "Navy sublimated sports polo laid flat, showing the printed yoke and knitted collar",
    title: "Sports T-shirts",
    meta: ["DRY-FIT POLYESTER", "TEAM KITS"],
    // Photographed from our own production runs.
    gallery: [
      {
        src: "/images/own-sports-polo-flat.jpg",
        alt: "Navy sublimated sports polo laid flat, showing the printed yoke and knitted collar",
      },
      {
        src: "/images/own-sports-polo-back.jpg",
        alt: "Back of a navy sports polo with cut-and-sew side panels",
      },
      {
        src: "/images/own-sports-sublimation.jpg",
        alt: "All-over sublimation print across the body of a blue sports polo",
      },
      {
        src: "/images/own-detail-shoulder.jpg",
        alt: "Shoulder seam where the printed yoke meets the sleeve",
      },
      {
        src: "/images/own-detail-gradient.jpg",
        alt: "Sublimated line gradient running from orange through teal",
      },
      {
        src: "/images/own-detail-collar.jpg",
        alt: "Knitted contrast collar and button placket stitching",
      },
    ],
  },
  {
    photoSrc: "/images/stock-jeans-stack.jpg",
    photoAlt: "Folded blue denim jeans stacked",
    title: "Jeans",
    meta: ["DENIM", "CUSTOM WASHES"],
    gallery: [
      { src: "/images/stock-jeans-stack.jpg", alt: "Folded blue denim jeans stacked" },
      { src: "/images/stock-jeans-folded.jpg", alt: "Stack of jeans in several indigo washes" },
      { src: "/images/stock-jeans-detail.jpg", alt: "Denim stitching and pocket detail" },
      { src: "/images/stock-jeans-worn.jpg", alt: "Jeans worn with a plain T-shirt" },
    ],
  },
  {
    photoSrc: "/images/stock-trouser-cream.jpg",
    photoAlt: "Cream wide-leg trousers worn with a jacket",
    title: "Pants & trousers",
    meta: ["TWILL / CARGO", "JOGGERS"],
    gallery: [
      { src: "/images/stock-trouser-cream.jpg", alt: "Cream wide-leg trousers worn with a jacket" },
      { src: "/images/stock-trouser-pocket.jpg", alt: "Side pocket and waistband detail on light trousers" },
    ],
  },
  {
    photoSrc: "/images/stock-shirt-hanger.jpg",
    photoAlt: "White button-down shirt on a hanger",
    title: "Shirts & uniforms",
    meta: ["CORPORATE", "EVENT MERCH"],
  },
];

export const PROCESS_STEPS = [
  {
    label: "STEP 01",
    title: "Share your specification",
    desc: "Garment, fabric, quantity, artwork and destination. One message is enough.",
  },
  {
    label: "STEP 02",
    title: "Quote & method",
    desc: "We match your order to the right unit in our network and quote the method that fits.",
  },
  {
    label: "STEP 03",
    title: "Sample approval",
    desc: "Physical or photo sample sent to you and signed off before bulk starts.",
  },
  {
    label: "STEP 04",
    title: "We supervise & check",
    desc: "We follow the run and inspect stitch, print and measurement before it leaves.",
  },
  {
    label: "STEP 05",
    title: "Export & dispatch",
    desc: "Documentation, packing list and freight coordinated by us, to your door.",
  },
];

export const EXPORT_FACTS = [
  { label: "IMPORT / EXPORT CODE", value: "Licensed for garments" },
  { label: "DOCUMENTATION", value: "Invoice, packing list, HS coding" },
  { label: "FREIGHT", value: "Air & sea, coordinated by us" },
];

export const FAQS = [
  {
    q: "Do you really have no minimum order quantity?",
    a: "Correct. We place your order with the unit in our network that suits it, so a single sample and a full bulk run go through the same process. Unit price improves with volume.",
  },
  {
    q: "Which print method suits my artwork?",
    a: "Send the artwork and the garment you have in mind — we'll recommend screen, DTF, digital or HD based on colour count, fabric and quantity, and explain the cost difference before you commit.",
  },
  {
    q: "Do you manufacture yourself?",
    a: "No — we are a trading firm with direct relationships with manufacturers. That lets us pick the right unit for each order instead of forcing every job through one factory. You deal only with us: sourcing, sampling, QC, export paperwork and delivery.",
  },
  {
    q: "Can you produce under my own brand label?",
    a: "Yes. Woven or printed labels, neck prints, hang tags and custom packaging can all be applied to your specification.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes. We hold an Import/Export licence for garments and have already delivered 5,000+ T-shirts to international buyers. Documentation and freight are handled by us, door to door.",
  },
  {
    q: "How do I start?",
    a: "Send your specification through the enquiry form or email Mokshatrading30@gmail.com with garment, quantity, artwork and destination country.",
  },
];

export const PRODUCT_OPTIONS = [
  "Cotton T-shirts",
  "Sports T-shirts",
  "Jeans",
  "Pants & trousers",
  "Shirts & uniforms",
  "Other / mixed",
];

export const METHOD_OPTIONS = [
  "Not sure — advise me",
  "Screen printing",
  "DTF",
  "Digital / DTG",
  "HD printing",
];

export const CONTACT = {
  email: "Mokshatrading30@gmail.com",
  location: "Ahmedabad, Gujarat, India",
  phoneDisplay: "+91 79903 02150",
  whatsappHref: "https://wa.me/917990302150",
};

/* Ribbon of what we actually make and how we print it. Two rows so they can
   travel in opposite directions; every entry restates a capability already
   stated elsewhere on the page. */
export const CAPABILITY_ROWS: string[][] = [
  [
    "Cotton T-shirts",
    "Sports polos",
    "Team kits",
    "Jeans",
    "Pants & trousers",
    "Shirts & uniforms",
    "Event merch",
    "Corporate wear",
  ],
  [
    "Screen print",
    "DTF",
    "Digital / DTG",
    "HD print",
    "Sublimation",
    "No minimum order",
    "QC before dispatch",
    "IEC export licensed",
    "Air & sea freight",
  ],
];
