import type { ReactNode } from "react";
import ScrollToTop from "./ScrollToTop";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import VirtualAssistant from "./VirtualAssistant";

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <VirtualAssistant />
    </div>
  );
}
