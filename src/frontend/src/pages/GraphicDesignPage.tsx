import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Section, { SectionHeader } from "../components/Section";
import { processSteps, services } from "../content/graphicDesign.static";
import { GRAPHIC_DESIGN_INTRO } from "../content/siteCopy.pt-PT";

export default function GraphicDesignPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {GRAPHIC_DESIGN_INTRO.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {GRAPHIC_DESIGN_INTRO.description}
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <SectionHeader
          title="Os nossos serviços"
          description="Soluções completas de design gráfico para o seu negócio"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-muted/30">
        <SectionHeader
          title="O nosso processo"
          description="Do conceito à impressão, acompanhamos cada etapa do seu projeto"
        />
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            {processSteps.map((step, stepIdx) => (
              <div key={step.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    {stepIdx + 1}
                  </div>
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold tracking-tight">
            Porquê escolher-nos?
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Experiência em design gráfico e impressão",
              "Atenção personalizada a cada projeto",
              "Prazos cumpridos e qualidade garantida",
              "Impressão profissional no local",
              "Acabamentos de alta qualidade",
              "Preços competitivos e transparentes",
            ].map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-muted/30 to-background">
        <div className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-border bg-card p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Tem um projeto em mente?
          </h2>
          <p className="text-lg text-muted-foreground">
            Entre em contacto connosco para um orçamento personalizado e sem
            compromisso.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Pedir orçamento
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
