import { Heart, Lightbulb, Sparkles, Users } from "lucide-react";
import Section, { SectionHeader } from "../components/Section";
import { ABOUT_COPY } from "../content/siteCopy.pt-PT";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Paixão pela criatividade",
      description:
        "Acreditamos no poder da criatividade para transformar ideias em realidade.",
    },
    {
      icon: Lightbulb,
      title: "Qualidade e atenção ao detalhe",
      description:
        "Cada projeto é tratado com cuidado, desde o conceito até à execução final.",
    },
    {
      icon: Users,
      title: "Comunidade e colaboração",
      description:
        "Criamos um espaço onde artistas e criativos se encontram e colaboram.",
    },
    {
      icon: Sparkles,
      title: "Inovação e tradição",
      description:
        "Combinamos técnicas tradicionais com abordagens contemporâneas.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="py-6 md:py-8 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-3xl space-y-3 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {ABOUT_COPY.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {ABOUT_COPY.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            {ABOUT_COPY.story.title}
          </h2>
          <div className="space-y-3 text-lg leading-relaxed text-muted-foreground">
            <p className="text-justify">{ABOUT_COPY.story.paragraph1}</p>
            <p className="text-justify">{ABOUT_COPY.story.paragraph2}</p>
            <p className="text-justify">{ABOUT_COPY.story.paragraph3}</p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-6 md:py-8 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            A Fundadora
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-full md:w-72">
              <img
                src="/assets/uploads/eu-1.jpg"
                alt="Carolina Narciso — Fundadora do Coral Ateliê"
                className="w-full rounded-2xl object-cover shadow-md"
              />
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p className="text-justify">
                Carolina Narciso natural da cidade de Tomar, licenciada em Arte
                e Design pela Escola Superior de Educação de Coimbra e mestre em
                Design Editorial pela Escola Superior de Tecnologia de Tomar.
              </p>
              <p className="text-justify">
                Ao longo do seu percurso, complementou a formação académica com
                várias especializações na área do marketing e trabalhou durante
                6 anos em design, comunicação digital e estratégias online.
                Apesar da forte ligação ao universo digital e ao e-commerce, o
                sonho de criar um espaço físico que unisse papelaria e estúdio
                de design sempre esteve presente.
              </p>
              <p className="text-justify">
                O Coral Ateliê ganha vida pela sua paixão por criar, comunicar e
                entregar o melhor do seu mundo à comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-6 md:py-8 bg-muted/30">
        <div className="container">
          <div className="mb-6 space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {ABOUT_COPY.values.title}
            </h2>
            {ABOUT_COPY.values.description && (
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {ABOUT_COPY.values.description}
              </p>
            )}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="pt-14 pb-10 md:pt-16 md:pb-12">
        <div className="container mx-auto max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">
            {ABOUT_COPY.expect.title}
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p className="text-justify">{ABOUT_COPY.expect.paragraph1}</p>
            <p className="text-justify">{ABOUT_COPY.expect.paragraph2}</p>
          </div>
        </div>
      </section>
    </>
  );
}
