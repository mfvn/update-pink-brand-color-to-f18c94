import Section, { SectionHeader } from "../components/Section";

export default function ProjectsPage() {
  const projectCategories = [
    {
      title: "Identidade visual",
      description:
        "Criação de logotipos, manuais de marca e sistemas visuais completos.",
    },
    {
      title: "Design editorial",
      description:
        "Catálogos, revistas, livros e materiais impressos com design cuidado.",
    },
    {
      title: "Impressão personalizada",
      description:
        "Convites, cartões, papelaria corporativa e produtos personalizados.",
    },
    {
      title: "Workshops criativos",
      description:
        "Projetos desenvolvidos em workshops de artes manuais e cerâmica.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Projetos
          </h1>
          <p className="text-xl text-muted-foreground">
            Conheça alguns dos nossos trabalhos em design gráfico, impressão e
            criatividade.
          </p>
        </div>
      </Section>

      {/* Categories Grid */}
      <Section>
        <SectionHeader
          title="Áreas de atuação"
          description="Desenvolvemos projetos personalizados em diversas áreas criativas"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {projectCategories.map((category) => (
            <div
              key={category.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <h3 className="mb-3 text-2xl font-semibold">{category.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Coming Soon Section */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-2xl space-y-6 rounded-2xl border border-border bg-card p-8 text-center md:p-12">
          <h2 className="text-3xl font-bold tracking-tight">
            Portfólio em breve
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos a preparar uma galeria completa dos nossos projetos.
            Entretanto, visite-nos em Tomar ou entre em contacto para conhecer o
            nosso trabalho.
          </p>
        </div>
      </Section>
    </>
  );
}
