export interface Product {
  id: number;
  slug: string;
  name: string;
  category: "Chandelier" | "Wall Sconces" | "Floor Lamp" | "Table Lamp";
  description: string;
  longDescription: string;
  image: string;
  heroPin?: { x: number; y: number };
}

export const products: Product[] = [
  {
    id: 1,
    slug: "lumiere-royale",
    name: "Lumière Royale",
    category: "Chandelier",
    description: "A grand crystal centrepiece for exceptional spaces.",
    longDescription:
      "The Lumière Royale commands every room it enters. Cascading crystal formations catch and scatter light in all directions, creating an atmosphere that is both dramatic and intimate. Designed for ceilings that deserve a crown.",
    image: "/products/Chandelier.webp",
    heroPin: { x: 0, y: 0 },
  },
  {
    id: 2,
    slug: "aurele-twin",
    name: "Aurèle Twin",
    category: "Wall Sconces",
    description: "Paired golden sconces that command any wall.",
    longDescription:
      "The Aurèle Twin brings warmth and symmetry to any wall. Each sconce is a study in restraint — clean lines, a burnished finish, and a glow that flatters every space it touches. Sold as a pair.",
    image: "/products/wall-sconces.webp",
    heroPin: { x: 0, y: 0 },
  },
  {
    id: 3,
    slug: "solene-arc",
    name: "Solène Arc",
    category: "Floor Lamp",
    description: "A sculptural floor lamp of quiet authority.",
    longDescription:
      "Solène Arc is as much sculpture as it is light source. Its sweeping silhouette brings movement to still rooms, while its warm directed glow creates intimacy in open spaces. A statement piece that never shouts.",
    image: "/products/floor-lamp.webp",
    heroPin: { x: 0, y: 0 },
  },
  {
    id: 4,
    slug: "elara-noir",
    name: "Élara Noir",
    category: "Table Lamp",
    description: "Refined table lamp. Understated. Unforgettable.",
    longDescription:
      "Élara Noir is the art of subtlety perfected. Sitting quietly on any surface, it fills its corner with a glow that is warm without being loud. The kind of lamp guests notice without knowing why.",
    image: "/products/table-lamp.webp",
    heroPin: { x: 0, y: 0 },
  },
];
