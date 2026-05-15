import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import type { PortfolioProject } from "../content/portfolio.static";

interface PortfolioDetailModalProps {
  project: PortfolioProject | null;
  open: boolean;
  onClose: () => void;
}

export default function PortfolioDetailModal({
  project,
  open,
  onClose,
}: PortfolioDetailModalProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Reset lightbox state when modal closes
  useEffect(() => {
    if (!open) {
      setLightboxImage(null);
    }
  }, [open]);

  if (!project) return null;

  const handleImageClick = (image: string) => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const handleModalClose = () => {
    setLightboxImage(null);
    onClose();
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleModalClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold pr-8">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              <Badge variant="secondary" className="mt-2">
                {project.category}
              </Badge>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            {/* Cover Image */}
            <div className="relative w-full overflow-hidden rounded-lg bg-muted/30">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Sobre o Projeto</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              {project.tags.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Serviços</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Detail Images Gallery */}
            {project.detailImages.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Galeria do Projeto</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {project.detailImages.map((image) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => handleImageClick(image)}
                      className="relative w-full overflow-hidden rounded-lg bg-muted/30 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer group"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - detalhe`}
                        className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">
                          Clique para ampliar
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute inset-0 w-full h-full cursor-default"
            aria-label="Fechar lightbox"
          />
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white z-10"
            aria-label="Fechar"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <img
            src={lightboxImage}
            alt="Imagem ampliada"
            className="relative z-10 max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
}
