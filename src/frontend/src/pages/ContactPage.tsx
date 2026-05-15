import {
  Clock,
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Section from "../components/Section";
import { CONTACT_INFO } from "../content/contact.static";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-b from-muted/50 to-background">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Contactos e Localização
          </h1>
          <p className="text-xl text-muted-foreground">
            Visite-nos em Tomar ou entre em contacto connosco
          </p>
        </div>
      </Section>

      {/* Contact Info */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Address */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-semibold">Morada</h2>
              <p className="mb-2 text-muted-foreground">
                {CONTACT_INFO.address.street}
              </p>
              <p className="mb-4 text-muted-foreground">
                {CONTACT_INFO.address.city}
              </p>
              <a
                href={CONTACT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Ver no Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Hours */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-semibold">Horário</h2>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-medium">
                    {CONTACT_INFO.hours.weekdays}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-medium">
                    {CONTACT_INFO.hours.saturday}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-medium">
                    {CONTACT_INFO.hours.sunday}
                  </span>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-semibold">
                Telefone / WhatsApp
              </h2>
              <a
                href={`tel:+351${CONTACT_INFO.phone}`}
                className="text-lg text-muted-foreground hover:text-foreground"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-semibold">Email</h2>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-lg text-muted-foreground hover:text-foreground"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            {/* Instagram */}
            <div className="rounded-xl border border-border bg-card p-8 md:col-span-2">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <Instagram className="h-6 w-6" />
              </div>
              <h2 className="mb-4 text-2xl font-semibold">Redes Sociais</h2>
              <a
                href={CONTACT_INFO.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground"
              >
                {CONTACT_INFO.social.instagram.handle}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Google Maps */}
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-center">
            Como chegar
          </h2>
          <div className="overflow-hidden rounded-xl border border-border shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=Tv.+Brites+Gon%C3%A7alves+2,+2300-519+Tomar,+Portugal&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Coral Ateliê"
            />
          </div>
        </div>
      </Section>

      {/* Additional Info */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Estamos aqui para ajudar
          </h2>
          <p className="text-lg text-muted-foreground">
            Seja para um projeto de design, impressão, compra de materiais ou
            inscrição em workshops, a nossa equipa está pronta para o atender.
            Visite-nos em Tomar ou entre em contacto através dos meios acima.
          </p>
        </div>
      </Section>
    </>
  );
}
