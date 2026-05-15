import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Users } from "lucide-react";
import Section, { SectionHeader } from "../components/Section";
import WorkshopCalendar from "../components/WorkshopCalendar";
import { WORKSHOPS_INTRO } from "../content/siteCopy.pt-PT";
import { workshops } from "../content/workshops.static";

export default function WorkshopsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {WORKSHOPS_INTRO.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {WORKSHOPS_INTRO.description}
          </p>
        </div>
      </Section>

      {/* Workshops List */}
      <Section>
        <SectionHeader
          title="Próximos workshops"
          description="Explore as nossas atividades criativas e inscreva-se"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop) => (
            <div
              key={workshop.title}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {workshop.difficulty}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold">{workshop.title}</h3>
              <p className="mb-4 flex-1 text-muted-foreground">
                {workshop.description}
              </p>
              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{workshop.audience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{workshop.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Calendar */}
      <Section className="bg-muted/20">
        <SectionHeader
          title="Calendário de Workshops"
          description="Veja os próximos workshops programados e clique num dia destacado para ver os detalhes"
        />
        <WorkshopCalendar />
      </Section>

      {/* CTA */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-border bg-card p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Interessado nos nossos workshops?
          </h2>
          <p className="text-lg text-muted-foreground">
            Entre em contacto connosco para saber mais sobre datas, preços e
            inscrições.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Entrar em contacto
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
