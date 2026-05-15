import {
  BookOpen,
  FileImage,
  FileText,
  Gift,
  Image,
  Mail,
  Palette,
  Printer,
} from "lucide-react";

export interface Service {
  icon: typeof Palette;
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: Palette,
    title: "Logótipos e identidade visual",
    description:
      "Criação de logótipos únicos e desenvolvimento completo de identidade visual que representa a essência do seu negócio.",
  },
  {
    icon: FileText,
    title: "Cartões de visita",
    description:
      "Design e impressão de cartões de visita profissionais com acabamentos de qualidade que causam impacto.",
  },
  {
    icon: FileImage,
    title: "Ilustrações",
    description:
      "Ilustrações personalizadas para diversos fins: editorial, publicitário, decorativo e muito mais.",
  },
  {
    icon: BookOpen,
    title: "Catálogos e editorial",
    description:
      "Design e paginação de catálogos, brochuras, revistas e outros materiais editoriais com layout profissional.",
  },
  {
    icon: Mail,
    title: "Convites",
    description:
      "Convites personalizados para eventos, casamentos, batizados e celebrações especiais com design único.",
  },
  {
    icon: Image,
    title: "Flyers e cartazes",
    description:
      "Materiais promocionais impactantes: flyers, cartazes e posters para eventos, campanhas e comunicação visual.",
  },
  {
    icon: Gift,
    title: "Brindes personalizados",
    description:
      "Personalização de brindes corporativos e promocionais: canetas, cadernos, t-shirts, canecas e muito mais.",
  },
  {
    icon: Printer,
    title: "Papelaria corporativa",
    description:
      "Papel timbrado, envelopes, pastas, blocos de notas e outros materiais de papelaria com design profissional.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Briefing",
    description:
      "Começamos por compreender as suas necessidades, objetivos e visão. Discutimos ideias, referências e expectativas para o projeto.",
  },
  {
    title: "Conceito",
    description:
      "Desenvolvemos propostas criativas alinhadas com o briefing. Apresentamos opções de design para discussão e feedback.",
  },
  {
    title: "Revisões",
    description:
      "Refinamos o design com base no seu feedback. Ajustamos detalhes até alcançar o resultado perfeito.",
  },
  {
    title: "Arte final",
    description:
      "Preparamos os ficheiros finais para impressão ou uso digital. Garantimos qualidade técnica e conformidade com os padrões.",
  },
  {
    title: "Impressão",
    description:
      "Se necessário, imprimimos o seu projeto no nosso espaço com acabamentos profissionais. Entrega rápida e qualidade garantida.",
  },
];
