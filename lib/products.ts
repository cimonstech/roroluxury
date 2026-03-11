export type ProductCategory =
  | "Chandelier"
  | "Wall Sconces"
  | "Floor Lamp"
  | "Table Lamp";

export type FilterCategory = "Lighting" | "Switches & Sockets" | "Track Systems";

export interface ProductCards {
  finish: string;
  atmosphere: string;
  craftsmanship: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: ProductCategory;
  filterCategory: FilterCategory;
  description: string;
  longDescription: string;
  image: string;
  heroPin?: { x: number; y: number };
  finish?: string;
  dimensions?: string;
  idealFor?: string;
  useCaseImage?: string;
  useCaseImages?: string[];
  useCaseText?: string;
  cards?: ProductCards;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "lumiere-royale",
    name: "Lumière Royale",
    category: "Chandelier",
    filterCategory: "Lighting",
    description: "A grand crystal centrepiece for exceptional spaces.",
    longDescription:
      "The Lumière Royale commands every room it enters. Cascading crystal formations catch and scatter light in all directions, creating an atmosphere that is both dramatic and intimate. Designed for ceilings that deserve a crown.",
    image: "/products/Chandelier.webp",
    heroPin: { x: 0, y: 0 },
    finish: "Polished crystal, brass",
    dimensions: "Ø 80cm × H 65cm",
    idealFor: "Entry halls, dining rooms, grand living spaces",
    useCaseImage: "/room-light.jpg",
    useCaseText: "Where ceilings become canvases and light becomes art.",
    cards: {
      finish:
        "Polished chrome frame, hand-strung crystal formations that scatter light in every direction.",
      atmosphere:
        "Designed for ceilings that deserve a crown. The kind of piece guests remember long after they leave.",
      craftsmanship:
        "Each crystal is individually placed. No two are identical. Built to outlast trends and lifetimes.",
    },
  },
  {
    id: 2,
    slug: "aurele-twin",
    name: "Aurèle Twin",
    category: "Wall Sconces",
    filterCategory: "Lighting",
    description: "Paired golden sconces that command any wall.",
    longDescription:
      "The Aurèle Twin brings warmth and symmetry to any wall. Each sconce is a study in restraint — clean lines, a burnished finish, and a glow that flatters every space it touches. Sold as a pair.",
    image: "/products/wall-sconces.webp",
    heroPin: { x: 0, y: 0 },
    finish: "Burnished brass",
    dimensions: "W 25cm × H 40cm each",
    idealFor: "Hallways, bedrooms, flanking mirrors",
    useCaseImages: [
      "/products/wall-sconces-usecase.webp",
      "/products/wall-sconces-usecase-2.webp",
    ],
    useCaseText: "First impressions deepen. Every passage, illuminated.",
    cards: {
      finish:
        "Burnished brass body with a satin diffuser that softens light beautifully.",
      atmosphere:
        "Two lights, one intention — to make every wall feel considered and complete.",
      craftsmanship:
        "Solid brass construction. Wired for longevity. Designed to age with grace.",
    },
  },
  {
    id: 3,
    slug: "solene-arc",
    name: "Solène Arc",
    category: "Floor Lamp",
    filterCategory: "Lighting",
    description: "A sculptural floor lamp of quiet authority.",
    longDescription:
      "Solène Arc is as much sculpture as it is light source. Its sweeping silhouette brings movement to still rooms, while its warm directed glow creates intimacy in open spaces. A statement piece that never shouts.",
    image: "/products/floor-lamp.webp",
    heroPin: { x: 0, y: 0 },
    finish: "Matte black, brushed brass",
    dimensions: "H 180cm × Base Ø 35cm",
    idealFor: "Reading nooks, living rooms, beside seating",
    useCaseImages: [
      "/products/floor-lamp-usecase.webp",
      "/products/floor-lamp-usecase-2.webp",
    ],
    useCaseText: "Quiet evenings, lit perfectly.",
    cards: {
      finish:
        "Matte black powder-coated steel with a weighted marble base.",
      atmosphere:
        "A floor lamp that doubles as sculpture. Presence without noise.",
      craftsmanship:
        "Precision-bent steel arm, hand-finished base. Every curve is intentional.",
    },
  },
  {
    id: 4,
    slug: "elara-noir",
    name: "Élara Noir",
    category: "Table Lamp",
    filterCategory: "Lighting",
    description: "Refined table lamp. Understated. Unforgettable.",
    longDescription:
      "Élara Noir is the art of subtlety perfected. Sitting quietly on any surface, it fills its corner with a glow that is warm without being loud. The kind of lamp guests notice without knowing why.",
    image: "/products/table-lamp.webp",
    heroPin: { x: 0, y: 0 },
    finish: "Matte black ceramic",
    dimensions: "H 45cm × Base Ø 20cm",
    idealFor: "Bedside tables, desks, console tables",
    useCaseImages: [
      "/products/table-lamp-usecase.webp",
      "/products/table-lamp-usecase-2.webp",
    ],
    useCaseText: "The glow that makes every corner feel considered.",
    cards: {
      finish:
        "Ebony ceramic base with a hand-stitched ivory linen shade.",
      atmosphere:
        "The kind of lamp that makes every quiet evening feel like it was designed that way.",
      craftsmanship:
        "Ceramic thrown by hand. Shade fitted by hand. Nothing about it is accidental.",
    },
  },
];
