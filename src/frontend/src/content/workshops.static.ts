export interface Workshop {
  title: string;
  description: string;
  difficulty: string;
  audience: string;
  duration: string;
}

export const workshops: Workshop[] = [
  {
    title: "Introdução à Cerâmica",
    description:
      "Aprenda as técnicas básicas de modelagem em cerâmica e crie as suas próprias peças únicas. Trabalhe com argila e descubra o prazer de criar com as mãos.",
    difficulty: "Iniciante",
    audience: "Adultos e jovens (14+)",
    duration: "3 horas",
  },
  {
    title: "Pintura em Aguarela",
    description:
      "Explore as técnicas de aguarela e aprenda a criar composições vibrantes e expressivas. Ideal para quem quer começar ou aperfeiçoar as suas habilidades.",
    difficulty: "Todos os níveis",
    audience: "Adultos",
    duration: "2.5 horas",
  },
  {
    title: "Encadernação Artesanal",
    description:
      "Crie os seus próprios cadernos e diários usando técnicas tradicionais de encadernação. Aprenda a trabalhar com papel, linha e capa.",
    difficulty: "Iniciante",
    audience: "Todos os públicos (12+)",
    duration: "3 horas",
  },
  {
    title: "Caligrafia Moderna",
    description:
      "Descubra a arte da caligrafia moderna e aprenda a criar lettering elegante para convites, cartões e projetos pessoais.",
    difficulty: "Iniciante",
    audience: "Adultos e jovens (14+)",
    duration: "2 horas",
  },
  {
    title: "Serigrafia Básica",
    description:
      "Aprenda a técnica de impressão serigráfica e crie as suas próprias estampas em tecido e papel. Ideal para projetos criativos e personalizados.",
    difficulty: "Intermédio",
    audience: "Adultos",
    duration: "4 horas",
  },
  {
    title: "Ilustração para Crianças",
    description:
      "Workshop criativo onde as crianças exploram diferentes técnicas de ilustração e dão vida às suas histórias através do desenho.",
    difficulty: "Iniciante",
    audience: "Crianças (6-12 anos)",
    duration: "2 horas",
  },
];
