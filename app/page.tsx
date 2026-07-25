import Image from "next/image";
import { KurmiMap } from "@/components/kurmi-map";

const WARDS = [
  "Abong",
  "Ashuku Akwento",
  "Baissa",
  "Bente",
  "Bissaula",
  "Boko",
  "Didan",
  "Njuwande",
  "Nyido",
  "Tosso",
];

const SERVICES = [
  { n: "01", title: "Civil Registration", desc: "Birth, marriage and death certificates, and indigene letters from the council secretariat at Baissa." },
  { n: "02", title: "Agriculture & Forestry", desc: "Extension services for cocoa, coffee, oil palm and kolanut farmers, and stewardship of forest reserves." },
  { n: "03", title: "Primary Healthcare", desc: "Ward health posts, immunisation drives and maternal care across the ten wards." },
  { n: "04", title: "Primary Education", desc: "Support for schools, teachers and pupils in every community." },
  { n: "05", title: "Revenue & Permits", desc: "Produce levies, market rates and business permits for traders and cooperatives." },
  { n: "06", title: "Works & Rural Roads", desc: "Feeder roads, culverts and public buildings that keep forest communities connected." },
];

const PROJECTS = [
  { title: "Baissa–Bissaula road rehabilitation", status: "Ongoing", detail: "Regrading the southern feeder route towards the border communities." },
  { title: "Cocoa nursery & seedling programme", status: "Ongoing", detail: "Improved seedlings distributed to smallholder farmers." },
  { title: "Rural health post upgrades", status: "Planned", detail: "Solar power and equipment for ward-level clinics." },
  { title: "Community water schemes", status: "Planned", detail: "Gravity-fed and borehole water points for upland villages." },
];

const CROPS = ["Cocoa", "Coffee", "Oil palm", "Kolanut", "Banana & plantain", "Maize", "Cassava", "Timber (regulated)"];

function Illu({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image src={src} alt={alt} width={width} height={height} unoptimized className={className} />
  );
}

function SectionNumber({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="text-sm font-bold text-amber-600 dark:text-amber-400">{n}</span>
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
        {children}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white text-gray-900 dark:bg-[#0a100d] dark:text-gray-100">
      {/* Nav — sits on the dark hero */}
      <header className="sticky top-0 z-999 border-b border-white/10 bg-emerald-950/90 text-white backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-16">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-amber-400 font-bold text-emerald-950">KM</span>
            <span className="leading-tight">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-300">Taraba State</span>
              <span className="block text-sm font-bold">Kurmi LGA</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-emerald-100/80 md:flex">
            <a href="#land" className="hover:text-amber-300">The Land</a>
            <a href="#economy" className="hover:text-amber-300">Economy</a>
            <a href="#wards" className="hover:text-amber-300">Wards</a>
            <a href="#services" className="hover:text-amber-300">Services</a>
            <a href="#projects" className="hover:text-amber-300">Projects</a>
            <a href="#leadership" className="hover:text-amber-300">Leadership</a>
          </nav>
          <a href="#contact" className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-amber-300 focus:ring focus:ring-amber-200">
            Contact us
          </a>
        </div>
      </header>

      {/* Hero — full dark emerald, centered, map beneath */}
      <section id="top" className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
              The Forest Gateway of Taraba
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Kurmi Local Government Area
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-emerald-100/85">
              From the cocoa farms of Baissa to the border forests of Bissaula —
              a council serving ten wards of farming and forest communities on
              Nigeria&apos;s south-eastern frontier with Cameroon.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="#services" className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-amber-300 focus:ring focus:ring-amber-200">
                Explore services
              </a>
              <a href="#land" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300">
                About the land
              </a>
            </div>
          </div>

          {/* Map card */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6">
            <KurmiMap />
          </div>

          {/* Stat chips */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              ["10", "Wards"],
              ["Baissa", "Headquarters"],
              ["≈4,308 km²", "Land area"],
              ["Cameroon", "International border"],
            ].map(([v, l]) => (
              <div key={l} className="flex items-baseline gap-2 rounded-full border border-white/15 px-5 py-2.5">
                <span className="text-base font-extrabold text-amber-300">{v}</span>
                <span className="text-xs font-medium uppercase tracking-wide text-emerald-100/70">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 01 — The Land */}
      <section id="land" className="mx-auto max-w-6xl px-5 py-16 sm:px-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionNumber n="01">The Land</SectionNumber>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Rainforest, rivers and highland farms
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Kurmi is one of the most forested Local Government Areas in Taraba
              State, stretching from fertile lowland farms to hills along the
              Cameroon border. Its name — from the Hausa word for forest —
              tells the story of the land itself.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              The area is home to the Ndoro, Tigon, Kaka, Ichen and other
              communities, with Tiv and Fulani neighbours, living across ten
              wards administered from Baissa.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-emerald-50 p-6 sm:p-10 dark:bg-[#0e1712]">
            <Illu
              src="/illustrations/forest.svg"
              alt="Illustration of people among forest trees"
              width={871}
              height={689}
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>

        {/* Editorial fact columns */}
        <div className="mt-14 grid gap-8 border-t border-gray-200 pt-8 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
          {[
            ["01", "Headquarters", "Baissa — seat of the council and main market town."],
            ["02", "Frontier", "Shares an international boundary with the Republic of Cameroon."],
            ["03", "Forests", "Home to community forests and reserves rich in wildlife."],
            ["04", "People", "Ndoro, Tigon, Kaka and Ichen communities, among others."],
          ].map(([n, t, d]) => (
            <div key={t}>
              <span className="text-sm font-bold text-amber-600 dark:text-amber-400">{n}</span>
              <h3 className="mt-2 text-sm font-bold text-emerald-800 dark:text-emerald-300">{t}</h3>
              <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-300">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 02 — Economy */}
      <section id="economy" className="border-y border-amber-100 bg-amber-50/60 dark:border-white/10 dark:bg-[#12100a]">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-16 sm:py-24 md:grid-cols-2 md:items-center">
          <div className="order-2 flex items-center justify-center md:order-1">
            <Illu
              src="/illustrations/farming.svg"
              alt="Illustration of a farmer with produce"
              width={527}
              height={659}
              className="h-auto w-full max-w-xs"
            />
          </div>
          <div className="order-1 md:order-2">
            <SectionNumber n="02">The Economy</SectionNumber>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Cocoa country
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Kurmi&apos;s farmers grow some of Nigeria&apos;s finest cocoa and
              coffee, alongside oil palm, kolanut and food crops. The council
              supports cooperatives, seedling programmes and access to markets.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {CROPS.map((c) => (
                <span key={c} className="rounded-full border border-amber-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-amber-800 dark:border-amber-400/30 dark:bg-[#1a170e] dark:text-amber-300">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Wards */}
      <section id="wards" className="mx-auto max-w-6xl px-5 py-16 sm:px-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <SectionNumber n="03">Our Wards</SectionNumber>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ten wards, one forest home
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Every community — from the market squares of Baissa to the border
              villages of Bissaula — is represented at the council through its
              ward.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {WARDS.map((w) => (
                <span key={w} className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-400 dark:border-emerald-400/20 dark:bg-[#0e1712] dark:text-emerald-300">
                  {w}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Illu
              src="/illustrations/exploring.svg"
              alt="Illustration of a traveller exploring"
              width={960}
              height={673}
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* 04 — Services (numbered list rows) */}
      <section id="services" className="border-y border-gray-100 bg-gray-50 dark:border-white/10 dark:bg-[#0d1410]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-16 sm:py-24">
          <SectionNumber n="04">Services</SectionNumber>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            What the council does for residents
          </h2>
          <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200 dark:divide-white/10 dark:border-white/10">
            {SERVICES.map((s) => (
              <div key={s.n} className="group grid gap-2 py-6 transition sm:grid-cols-[4rem_16rem_1fr] sm:items-baseline sm:gap-6">
                <span className="text-sm font-bold text-amber-600 dark:text-amber-400">{s.n}</span>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-emerald-700 dark:text-gray-100 dark:group-hover:text-emerald-400">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Projects (timeline) */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-16 sm:px-16 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionNumber n="05">Projects</SectionNumber>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Development in motion
            </h2>
            <div className="mt-8 space-y-0">
              {PROJECTS.map((p, i) => (
                <div key={p.title} className="relative flex gap-5 pb-8 last:pb-0">
                  {/* timeline rail */}
                  {i < PROJECTS.length - 1 && (
                    <span className="absolute left-[7px] top-5 h-full w-0.5 bg-emerald-200 dark:bg-emerald-400/20" />
                  )}
                  <span className={`relative mt-1.5 size-4 flex-none rounded-full border-2 ${p.status === "Ongoing" ? "border-emerald-600 bg-emerald-500" : "border-amber-500 bg-amber-50 dark:bg-[#12100a]"}`} />
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{p.title}</h3>
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${p.status === "Ongoing" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300" : "bg-amber-100 text-amber-700 dark:bg-amber-400/15 dark:text-amber-300"}`}>
                        {p.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-emerald-50 p-6 sm:p-10 dark:bg-[#0e1712]">
            <Illu
              src="/illustrations/environment.svg"
              alt="Illustration of caring for the environment"
              width={886}
              height={654}
              className="h-auto w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* 06 — Leadership */}
      <section id="leadership" className="border-y border-gray-100 bg-gray-50 dark:border-white/10 dark:bg-[#0d1410]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-16 sm:py-24">
          <SectionNumber n="06">Leadership</SectionNumber>
          <div className="mt-8 grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex flex-col items-center gap-4 md:items-start">
              <span className="flex size-32 items-center justify-center rounded-2xl bg-emerald-950 text-5xl font-extrabold text-amber-400">
                MM
              </span>
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold">Hon. Moses Maihankali</h2>
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  Executive Chairman, Kurmi LGA
                </p>
              </div>
            </div>
            <blockquote className="border-l-4 border-amber-400 pl-6">
              <p className="max-w-2xl text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-200">
                &ldquo;Kurmi&apos;s wealth is its land and its people. Our
                administration is opening up the forest communities — with
                roads, farm support and honest service — so that no ward is
                left behind.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact — dark band with cards */}
      <section id="contact" className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Reach the council at Baissa
            </h2>
            <p className="mt-4 text-lg text-emerald-100/85">
              For certificates, permits, farm support or any council business,
              the secretariat is open to every resident.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              ["Visit", "LGA Secretariat, Baissa, Kurmi, Taraba State"],
              ["Call", "+234 (0) 800 000 0000"],
              ["Write", "info@kurmi.tr.gov.ng"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-sm font-bold text-amber-300">{t}</h3>
                <p className="mt-2 text-sm text-emerald-100/85">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-emerald-950 text-emerald-100/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:px-16 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-amber-400 font-bold text-emerald-950">KM</span>
            <div>
              <p className="font-bold text-white">Kurmi LGA</p>
              <p className="text-xs">Taraba State, Nigeria</p>
            </div>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} Kurmi Local Government Area. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
