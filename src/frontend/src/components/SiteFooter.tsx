import { Link } from "@tanstack/react-router";
import { Heart, MapPin } from "lucide-react";
import { SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";
import { CONTACT_INFO } from "../content/contact.static";

export default function SiteFooter() {
  const appIdentifier =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "coral-atelie";
  const caffeineUrl = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`;

  return (
    <footer className="text-white" style={{ backgroundColor: "#f18c94" }}>
      <div className="container py-12">
        {/* Top: Brand + Two columns */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/assets/Coral logo sem fundo-07.png"
                alt="Coral Ateliê"
                className="h-24 w-auto max-w-[320px] object-contain md:h-32"
              />
            </Link>
            <p className="text-sm text-white/90">
              Gráfica e papelaria em Tomar, Portugal
            </p>
          </div>

          {/* Left column: Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Navegação
            </h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/about"
                className="text-sm text-white/90 transition-colors hover:text-white"
              >
                Sobre Nós
              </Link>
              <Link
                to="/graphic-design"
                className="text-sm text-white/90 transition-colors hover:text-white"
              >
                Serviços
              </Link>
              <Link
                to="/contact"
                className="text-sm text-white/90 transition-colors hover:text-white"
              >
                Contactos
              </Link>
            </nav>
          </div>

          {/* Right column: Legal, Location, Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
              Informações
            </h3>
            <div className="flex flex-col gap-3">
              {/* Privacy Policy - same tab */}
              <Link
                to="/privacy-policy"
                className="text-sm text-white/90 transition-colors hover:text-white"
              >
                Política de privacidade
              </Link>

              {/* Terms & Conditions - same tab */}
              <Link
                to="/terms"
                className="text-sm text-white/90 transition-colors hover:text-white"
              >
                Termos e Condições
              </Link>

              {/* Location */}
              <a
                href={CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-white"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                Localização
              </a>

              {/* Social */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={CONTACT_INFO.social.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/90 transition-colors hover:text-white"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
                <a
                  href={CONTACT_INFO.social.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-white/90 transition-colors hover:text-white"
                >
                  <SiTiktok className="h-5 w-5" />
                </a>
                <a
                  href={CONTACT_INFO.social.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-white/90 transition-colors hover:text-white"
                >
                  <SiYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/20 pt-6 flex flex-col items-center gap-2 text-center text-xs text-white/60 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Coral Ateliê. Todos os direitos
            reservados.
          </p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="h-3 w-3 fill-white/80 text-white/80" />{" "}
            usando{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
