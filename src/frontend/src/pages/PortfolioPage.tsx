import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import Section, { SectionHeader } from "../components/Section";
import { PORTFOLIO_PROJECTS } from "../content/portfolio.static";

export default function PortfolioPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);

  const openLightbox = (images: string[], index: number) => {
    setLightboxImages(images);
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setLightboxImages([]);
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % lightboxImages.length);
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length,
    );
  };

  const convites = PORTFOLIO_PROJECTS.filter((p) => p.tags.includes("convite"));
  const cartoesVisita = PORTFOLIO_PROJECTS.filter((p) =>
    p.tags.includes("cartão de visita"),
  );
  const personalizacoes = PORTFOLIO_PROJECTS.filter((p) =>
    p.tags.includes("personalização"),
  );

  const renderProjectCard = (
    project: (typeof PORTFOLIO_PROJECTS)[0],
    idx: number,
    sectionKey: string,
    allImages: string[],
    imageIdx: number,
  ) => (
    <button
      type="button"
      key={project.id}
      data-ocid={`portfolio.${sectionKey}.item.${idx + 1}`}
      onClick={() => openLightbox(allImages, imageIdx)}
      className="group relative overflow-hidden rounded-lg bg-muted/30 transition-all hover:shadow-lg hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {/* Image Container */}
      <div className="relative w-full overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-105 max-h-72"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg font-semibold px-4 py-2 bg-black/40 rounded-lg backdrop-blur-sm">
            Clique para ver
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-4 text-left">
        <div className="mb-2">
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary">
            {project.category}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {project.title}
        </h3>
      </div>
    </button>
  );

  // Build a flat list of all images for global lightbox navigation per section
  const conviteImages = convites.map((p) => p.coverImage);
  const cartaoImages = cartoesVisita.map((p) => p.coverImage);
  const personalizacaoImages = personalizacoes.map((p) => p.coverImage);

  const currentImage =
    lightboxIndex !== null ? lightboxImages[lightboxIndex] : null;

  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-gradient-to-b from-muted/30 to-background !pt-12 md:!pt-16 !pb-2 md:!pb-3">
        <SectionHeader
          title="Portfólio"
          description="Conheça alguns dos nossos trabalhos."
        />
      </Section>

      {/* Convites Section */}
      <Section className="!pt-3 md:!pt-4">
        {/* Section separator */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest px-2">
            Convites
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {convites.map((project, idx) =>
            renderProjectCard(project, idx, "convite", conviteImages, idx),
          )}
        </div>
      </Section>

      {/* Cartões de Visita Section */}
      {cartoesVisita.length > 0 && (
        <Section className="!pt-4 md:!pt-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest px-2">
              Cartões de Visita
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {cartoesVisita.map((project, idx) =>
              renderProjectCard(project, idx, "cartao", cartaoImages, idx),
            )}
          </div>
        </Section>
      )}

      {/* Personalizações Section */}
      {personalizacoes.length > 0 && (
        <Section className="!pt-4 md:!pt-6">
          {/* Section separator */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest px-2">
              Personalizações
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {personalizacoes.map((project, idx) =>
              renderProjectCard(
                project,
                idx,
                "personalizacao",
                personalizacaoImages,
                idx,
              ),
            )}
          </div>
        </Section>
      )}

      {/* Lightbox */}
      {currentImage && lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          {/* Backdrop close */}
          <button
            type="button"
            aria-label="Fechar lightbox"
            className="absolute inset-0 w-full h-full cursor-default"
            onClick={closeLightbox}
          />

          {/* Close button */}
          <button
            type="button"
            data-ocid="portfolio.lightbox.close_button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Fechar"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous arrow */}
          {lightboxImages.length > 1 && (
            <button
              type="button"
              data-ocid="portfolio.lightbox.pagination_prev"
              onClick={goPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
              aria-label="Imagem anterior"
            >
              <ChevronLeft className="w-7 h-7 text-white" />
            </button>
          )}

          {/* Next arrow */}
          {lightboxImages.length > 1 && (
            <button
              type="button"
              data-ocid="portfolio.lightbox.pagination_next"
              onClick={goNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
              aria-label="Próxima imagem"
            >
              <ChevronRight className="w-7 h-7 text-white" />
            </button>
          )}

          <img
            src={currentImage}
            alt="Imagem ampliada"
            className="relative z-10 max-w-full max-h-full object-contain rounded-lg"
            style={{ maxWidth: "calc(100% - 120px)" }}
          />

          {/* Dot indicators */}
          {lightboxImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {lightboxImages.map((imgSrc, i) => (
                <button
                  key={imgSrc}
                  type="button"
                  aria-label={`Ir para imagem ${i + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${i === lightboxIndex ? "bg-white w-4" : "bg-white/40"}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
}
