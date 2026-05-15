import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "../content/contact.static";
import RotatingInfoMessage from "./RotatingInfoMessage";

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const routerState = useRouterState();
  const navigate = useNavigate();
  const currentPath = routerState.location.pathname;

  const handleServicosClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Navigate to home with offerings hash
    navigate({ to: "/", hash: "offerings" });
  };

  const navLinks = [
    { path: "/#offerings", label: "Serviços", onClick: handleServicosClick },
    { path: "/portfolio", label: "Portfólio" },
    { path: "/about", label: "Sobre nós" },
    { path: "/contact", label: "Contactos" },
  ];

  const infoMessages = [
    "Ateliê, Papelaria e Gráfica em Tomar",
    `2ª a 6ª ${CONTACT_INFO.hours.weekdays} • Sábados ${CONTACT_INFO.hours.saturday}`,
  ];

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top Info Bar - Salmon/Pink */}
      <div className="w-full" style={{ backgroundColor: "#f18c94" }}>
        <div className="container">
          <RotatingInfoMessage messages={infoMessages} />
        </div>
      </div>

      {/* Main Navigation Row - White */}
      <div
        className={`w-full bg-white ${mobileMenuOpen ? "border-b border-border/20" : ""}`}
      >
        <div className="container flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/assets/Coral logo sem fundo-03.png"
              alt="Coral Ateliê - Gráfica e Papelaria"
              className="h-16 w-auto max-w-[180px] object-contain md:h-20 md:max-w-[220px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-1">
            {navLinks.map((link) =>
              link.onClick ? (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={link.onClick}
                  className="rounded-md px-4 py-2 text-sm font-medium transition-colors text-header-blue/80 hover:text-header-blue cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-header-blue font-semibold"
                      : "text-header-blue/80 hover:text-header-blue"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden rounded-md p-2 text-header-blue hover:bg-muted/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="border-t border-border/20 bg-white md:hidden">
            <div className="container space-y-1 py-4">
              {navLinks.map((link) =>
                link.onClick ? (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={link.onClick}
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors text-header-blue/80 hover:text-header-blue hover:bg-muted/30 cursor-pointer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-header-blue font-semibold bg-muted/50"
                        : "text-header-blue/80 hover:text-header-blue hover:bg-muted/30"
                    }`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
