import Section from "../components/Section";
import {
  PRIVACY_POLICY_LAST_UPDATED,
  privacyPolicySections,
} from "../content/legal.static";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Política de privacidade
          </h1>
          <p className="text-lg text-muted-foreground">
            Regulamento Geral sobre a Proteção de Dados (RGPD)
          </p>
          <p className="text-sm text-muted-foreground">
            Última atualização: {PRIVACY_POLICY_LAST_UPDATED}
          </p>
        </div>
      </Section>

      {/* Content */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-sm text-muted-foreground">
            <p>
              O Coral Ateliê está comprometido com a proteção da sua privacidade
              e com o cumprimento do Regulamento Geral sobre a Proteção de Dados
              (RGPD – Regulamento (UE) 2016/679). Esta política explica como
              recolhemos, utilizamos e protegemos os seus dados pessoais.
            </p>
          </div>

          <div className="space-y-8">
            {privacyPolicySections.map((section) => (
              <article key={section.title} className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-muted/30 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Para exercer os seus direitos ou colocar questões sobre esta
              política, contacte-nos em{" "}
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
