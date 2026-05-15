export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  detailImages: string[];
  tags: string[];
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "convite-1-ano-tomas",
    title: "Convite 1 ano do Tomás",
    category: "Convite",
    description: "",
    coverImage: "/assets/uploads/convite-toma-s-1.jpg",
    detailImages: [],
    tags: ["convite"],
  },
  {
    id: "convite-festa-25-anos",
    title: "Convite Festa 25 anos",
    category: "Convite",
    description: "",
    coverImage: "/assets/uploads/convite-25-1.jpg",
    detailImages: [],
    tags: ["convite"],
  },
  {
    id: "convite-casamento-rd",
    title: "Convite Casamento R & D",
    category: "Convite",
    description: "",
    coverImage: "/assets/uploads/rd-1.jpg",
    detailImages: [],
    tags: ["convite"],
  },
  {
    id: "cartao-visita-bioanalitica",
    title: "Cartão de visita Bioanalítica",
    category: "Cartão de Visita",
    description: "",
    coverImage: "/assets/uploads/cartoes-de-visita-bio-2.jpg",
    detailImages: [],
    tags: ["cartão de visita"],
  },
  {
    id: "cartao-visita-augusto-batista",
    title: "Cartão de visita Augusto Batista Bento e Filhos",
    category: "Cartão de Visita",
    description: "",
    coverImage: "/assets/uploads/cartoes-de-visita-1.jpg",
    detailImages: [],
    tags: ["cartão de visita"],
  },
  {
    id: "personalizacao-tshirt-katsu",
    title: "Personalização t-shirt Katsu",
    category: "Personalização",
    description: "",
    coverImage: "/assets/uploads/t-shirt-katsu-1.jpg",
    detailImages: [],
    tags: ["personalização"],
  },
  {
    id: "personalizacao-sweatshirt-katsu",
    title: "Sweatshirt personalizada Katsu",
    category: "Personalização",
    description: "",
    coverImage: "/assets/uploads/sweat-k-1.jpg",
    detailImages: [],
    tags: ["personalização"],
  },
  {
    id: "tote-bag-bioanalitica",
    title: "Tote Bag Bioanalítica",
    category: "Personalização",
    description: "",
    coverImage: "/assets/uploads/tote-bio-1.jpg",
    detailImages: [],
    tags: ["personalização"],
  },
];
