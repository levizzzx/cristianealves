import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Sparkles,
  Waves,
  Flower2,
  Phone,
  MessageCircle,
  HeartHandshake,
  ShieldCheck,
  Leaf,
  Clock,
} from "lucide-react";
import cristianeAsset from "@/assets/cristiane-alves.png";
import espacoAsset from "@/assets/espaco.jpg";

const WHATSAPP_URL =
  "https://wa.me/5511959979677?text=Ol%C3%A1%2C+gostaria+de+agendar+um+atendimento";
const PHONE_URL = "tel:+5511959979677";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Cristiane Alves Estética | Depilação, Limpeza de Pele e Drenagem" },
      {
        name: "description",
        content:
          "Agende seu horário com Cristiane Alves. Especialista em depilação com cera quente, limpeza de pele e drenagem linfática. Atendimento personalizado.",
      },
      {
        property: "og:title",
        content: "Cristiane Alves Estética | Depilação, Limpeza de Pele e Drenagem",
      },
      {
        property: "og:description",
        content:
          "Agende seu horário com Cristiane Alves. Especialista em depilação com cera quente, limpeza de pele e drenagem linfática. Atendimento personalizado.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Cristiane Alves Estética & Bem-Estar",
          telephone: "+55 11 95997-9677",
          description:
            "Especialista em depilação com cera quente, limpeza de pele e drenagem linfática. Atendimento personalizado.",
        }),
      },
    ],
  }),
});

function useRevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const services = [
  {
    icon: Sparkles,
    title: "Depilação com Cera Quente",
    description:
      "Método suave, higiênico e com técnica que minimiza o desconforto, deixando a pele macia e lisa.",
  },
  {
    icon: Flower2,
    title: "Limpeza de Pele",
    description:
      "Remoção profunda de impurezas, cravos e células mortas, devolvendo o viço e a saúde da pele facial.",
  },
  {
    icon: Waves,
    title: "Drenagem Linfática",
    description:
      "Massagem especializada para redução de inchaço, retenção de líquidos, melhora da circulação e relaxamento corporal.",
  },
];

const differentials = [
  {
    icon: HeartHandshake,
    title: "Atendimento personalizado",
    description: "Cada sessão é pensada para as suas necessidades, com escuta e cuidado humanizado.",
  },
  {
    icon: ShieldCheck,
    title: "Biossegurança rigorosa",
    description: "Materiais descartáveis e higienização rigorosa em todos os procedimentos.",
  },
  {
    icon: Leaf,
    title: "Produtos de alta qualidade",
    description: "Cosméticos selecionados para o seu tipo de pele, potencializando os resultados.",
  },
];

function LandingPage() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#inicio" className="min-w-0">
            <span className="block truncate text-base font-bold tracking-tight sm:text-lg">
              Cristiane Alves
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
              Estética & Bem-Estar
            </span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-whatsapp px-4 text-sm font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.03] active:scale-95 sm:px-5"
          >
            <MessageCircle className="size-4" aria-hidden />
            <span className="hidden xs:inline sm:inline">Agendar</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-20%] hidden h-[480px] w-[480px] rounded-full bg-secondary/50 blur-3xl md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-20%] left-[-15%] hidden h-[380px] w-[380px] rounded-full bg-mint/60 blur-3xl md:block"
        />
        <div className="relative mx-auto max-w-6xl md:grid md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:pb-24 md:pt-20">
          {/* Foto de fundo do hero no mobile (fora do reveal p/ não zerar altura) */}
          <img
            src={cristianeAsset}
            alt="Cristiane Alves, esteticista, realizando atendimento em seu espaço de estética"
            width={1024}
            height={1536}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[60%_22%] md:hidden"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25 md:hidden"
          />
          {/* Imagem ao lado no desktop */}
          <div className="reveal relative hidden md:order-2 md:block">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-secondary via-mint to-secondary/60"
            />
            <img
              src={cristianeAsset}
              alt="Cristiane Alves, esteticista, realizando atendimento em seu espaço de estética"
              width={1024}
              height={1536}
              fetchPriority="high"
              className="relative aspect-[4/5] w-full rounded-[2.25rem] object-cover object-top shadow-[var(--shadow-lift)]"
            />
          </div>
          {/* Textos */}
          <div className="reveal relative z-10 flex min-h-[92svh] flex-col justify-end px-4 pb-14 pt-24 text-white md:order-1 md:min-h-0 md:px-0 md:pb-0 md:pt-0 md:text-foreground">
            <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md md:border-primary/30 md:bg-card md:text-primary md:backdrop-blur-0">
              Estética facial e corporal
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Cristiane Alves
              <span className="mt-2 block text-2xl font-bold text-white sm:text-3xl lg:text-4xl md:text-primary">
                Estética & Bem-Estar
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg md:text-muted-foreground">
              Seu momento de autocuidado começa aqui. Especialista em depilação
              com cera quente, drenagem linfática e limpeza de pele. Atendimento
              pensado para renovar sua autoestima, leveza e bem-estar.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full bg-whatsapp px-7 text-base font-bold text-whatsapp-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] active:translate-y-0"
              >
                <MessageCircle className="size-5" aria-hidden />
                Agendar pelo WhatsApp
              </a>
              <a
                href={PHONE_URL}
                className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border-2 border-white/50 bg-white/10 px-7 text-base font-bold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white/20 active:translate-y-0 md:border-primary/50 md:bg-card md:text-foreground md:hover:border-primary md:hover:bg-secondary/40"
              >
                <Phone className="size-5 text-white md:text-primary" aria-hidden />
                Ligar Agora
              </a>
            </div>
            <div className="mt-8 flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 md:text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-white md:text-primary" aria-hidden />
                Biossegurança rigorosa
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4 text-white md:text-primary" aria-hidden />
                Horários flexíveis
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Cuidado completo
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Serviços
            </h2>
            <p className="mt-4 text-muted-foreground">
              Procedimentos faciais e corporais realizados com técnica, higiene
              e atenção a cada detalhe.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="reveal group flex flex-col rounded-3xl border border-border bg-background p-7 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]"
              >
                <div className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-7" aria-hidden />
                </div>
                <h3 className="text-xl font-bold tracking-tight">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/40 px-5 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Quero agendar
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14">
          <div className="reveal relative order-2 md:order-1">
            <img
              src={espacoAsset}
              alt="Detalhe do espaço de atendimento de Cristiane Alves, com maca preparada, toalhas higienizadas e aromatizador"
              width={1200}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2.25rem] object-cover shadow-[var(--shadow-soft)]"
            />
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-lift)] sm:-right-6">
              <p className="text-2xl font-extrabold text-primary">100%</p>
              <p className="text-xs font-semibold text-muted-foreground">
                Atendimento personalizado
              </p>
            </div>
          </div>
          <div className="reveal order-1 md:order-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Conheça a profissional
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Sobre Cristiane Alves
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Cristiane Alves é especialista em estética facial e corporal, com
              atendimento acolhedor e focado em renovar a autoestima, a leveza e
              o bem-estar de cada cliente.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Cada sessão é conduzida com rigorosa biossegurança, atenção aos
              detalhes e uma escuta atenta às necessidades de quem procura um
              momento de cuidado verdadeiro consigo mesma.
            </p>
            <ul className="mt-8 space-y-4">
              {differentials.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-mint text-mint-foreground">
                    <item.icon className="size-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="espaco" className="bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Ambiente acolhedor
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Espaço & Atendimento
            </h2>
            <p className="mt-4 text-muted-foreground">
              Um ambiente preparado para você relaxar, com higienização rigorosa
              e cuidado em cada detalhe.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <figure className="reveal group overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <img
                src={cristianeAsset}
                alt="Cristiane Alves atendendo cliente em sessão de massagem corporal"
                width={1024}
                height={1536}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover object-[50%_20%] transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
            <figure className="reveal group overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <img
                src={espacoAsset}
                alt="Maca do espaço de estética com toalhas limpas, aromatizador e iluminação relaxante"
                width={1200}
                height={1600}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Contato / CTA final */}
      <section id="contato" className="relative overflow-hidden py-16 sm:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-secondary/40 via-background to-mint/40"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="reveal">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Agende seu Momento
            </h2>
            <p className="mt-4 text-muted-foreground sm:text-lg">
              Entre em contato para consultar horários disponíveis e agendar sua
              avaliação ou procedimento.
            </p>
          </div>
          <div className="reveal mt-10 grid gap-4 sm:grid-cols-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-24 items-center gap-4 rounded-3xl border border-border bg-card p-5 text-left shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-whatsapp text-whatsapp-foreground">
                <MessageCircle className="size-6" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  
                </span>
                <span className="block truncate font-bold">WhatsApp</span>
              </span>
            </a>
            <a
              href={PHONE_URL}
              className="flex min-h-24 items-center gap-4 rounded-3xl border border-border bg-card p-5 text-left shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <Phone className="size-6" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  
                </span>
                <span className="block truncate font-bold">Telefone</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
          <p className="text-lg font-bold tracking-tight">
            Cristiane Alves
            <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
              Estética & Bem-Estar
            </span>
          </p>
          <p className="text-sm text-muted-foreground">
            Depilação com cera quente · Limpeza de pele · Drenagem linfática
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cristiane Alves Estética. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
