import Section from "../components/Section";
import { TERMS_LAST_UPDATED, termsSections } from "../content/legal.static";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Termos e Condições
          </h1>
          <p className="text-lg text-muted-foreground">
            Condições de utilização do website e dos serviços do Coral Ateliê
          </p>
          <p className="text-sm text-muted-foreground">
            Última atualização: {TERMS_LAST_UPDATED}
          </p>
        </div>
      </Section>

      {/* Content */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm text-muted-foreground">
            <p>
              Ao utilizar o website do Coral Ateliê, o utilizador aceita os
              presentes Termos e Condições. Leia-os atentamente antes de
              utilizar os nossos serviços. Se tiver alguma dúvida, não hesite em
              contactar-nos.
            </p>
          </div>

          <div className="space-y-8">
            {termsSections.map((section) => (
              <article key={section.title} className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <div className="leading-relaxed text-muted-foreground whitespace-pre-line">
                  {section.content}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Para questões sobre estes Termos e Condições, contacte-nos em{" "}
              <a
                href="mailto:geral.coralatelie@gmail.com"
                className="font-medium text-primary hover:underline"
              >
                geral.coralatelie@gmail.com
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
