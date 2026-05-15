import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  Coins,
  Lightbulb,
  Newspaper,
  Palette,
  Printer,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useEffect } from "react";
import HomeHeroVideo from "../components/HomeHeroVideo";
import Section, { SectionHeader } from "../components/Section";
import { SITE_COPY } from "../content/siteCopy.pt-PT";

export default function HomePage() {
  const routerState = useRouterState();
  const hash = routerState.location.hash;

  // Scroll to offerings section when hash is present
  useEffect(() => {
    if (hash === "offerings") {
      // Small delay to ensure the DOM is ready
      setTimeout(() => {
        const offeringsSection = document.getElementById("offerings");
        if (offeringsSection) {
          offeringsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [hash]);

  const offerings = [
    {
      icon: Palette,
      title: "Design Gráfico",
      description:
        "Do conceito à arte final e impressão. Criamos identidades visuais únicas.",
      link: "/graphic-design",
    },
    {
      icon: Printer,
      title: "Impressões e Cópias",
      description:
        "Serviços de impressão profissional com acabamentos de qualidade.",
      link: "/graphic-design",
    },
    {
      icon: ShoppingBag,
      title: "Papelaria e Livraria",
      description:
        "Produtos de papelaria, presentes e materiais de artes visuais.",
      link: "/contact",
    },
    {
      icon: Sparkles,
      title: "Ilustrações e Personalizações",
      description:
        "Criações artísticas personalizadas e ilustrações únicas para os seus projetos.",
      link: "/contact",
    },
    {
      icon: Lightbulb,
      title: "Workshops",
      description:
        "Atividades de artes manuais, cerâmica, pintura e muito mais.",
      link: "/workshops",
    },
    {
      icon: Newspaper,
      title: "Jornais e Revistas",
      description: "Venda de jornais e revistas para a comunidade local.",
      link: "/contact",
    },
    {
      icon: Coins,
      title: "Mais serviços",
      description: "Jogos Santa Casa, Payshop e outros serviços do dia a dia.",
      link: "/contact",
    },
  ];

  return (
    <>
      {/* Hero Video Section */}
      <HomeHeroVideo />

      {/* About Section */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {SITE_COPY.home.about.title}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {SITE_COPY.home.about.description}
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            Saber mais sobre nós
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Offerings Grid */}
      <Section
        id="offerings"
        className="bg-muted/30 scroll-mt-32 !pt-12 md:!pt-16"
      >
        <SectionHeader
          title={SITE_COPY.home.offerings.title}
          description={SITE_COPY.home.offerings.description}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            return (
              <Link
                key={offering.title}
                to={offering.link}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{offering.title}</h3>
                <p className="text-muted-foreground">{offering.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Saber mais
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl space-y-8 rounded-2xl border border-border bg-card p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Pronto para criar algo especial?
          </h2>
          <p className="text-lg text-muted-foreground">
            Entre em contacto connosco para discutir o seu projeto ou visite-nos
            em Tomar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Entrar em contacto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
