import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  ["Accueil", "#accueil"],
  ["La philosophie", "#philosophie"],
  ["Laila Tazi", "#laila-tazi"],
  ["Nos expériences ▾", "#experiences"],
  ["Notre écosystème", "#ecosysteme"],
  // ["REVEL", "#revel"],
  // ["SELMER", "#selmer"],
  ["Témoignages", "#temoignages"],
  ["Revue de presse", "#presse"],
  ["Blog", "#blog"],
  ["FAQ", "#faq"],
];

const footerNavItems = [
  ["La philosophie", "#philosophie"],
  ["Laila Tazi", "#laila-tazi"],
  ["Notre écosystème", "#ecosysteme"],
  ["Témoignages", "#temoignages"],
  ["Revue de presse", "#presse"],
  ["Blog", "#blog"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

const principles = [
  "La vie répond au mouvement",
  "Le lien remet la vie en mouvement",
  "Chacun est le leader de sa propre vie",
];

const experiences = [
  {
    name: "REVEL",
    eyebrow: "REVEL",
    title:
      "L’ère des conférences est terminée. L’ère des expériences commence.",
    text: [
      "REVEL est né de la conviction que le format traditionnel de la conférence ne suffit plus à provoquer une véritable transformation. Plus qu’un moment de transmission, chaque rencontre est pensée comme une expérience immersive dans laquelle le public devient pleinement acteur",
      "Chaque édition réunit des personnalités inspirantes, des entrepreneurs, des artistes et des experts qui partagent leur parcours avec authenticité. L’objectif n’est pas seulement de transmettre des connaissances, mais de permettre à chacun de retrouver son pouvoir d’action et de révéler le leader qui sommeille en lui.",
    ],
    image: "/assets/PHOTOS SECTIONS/6.webp",
  },
  {
    name: "SELMER",
    eyebrow: "SELMER",
    title:
      "Certains voyages nous montrent le monde. D’autres nous révèlent à nous-mêmes.",
    text: [
      "SELMER fait du voyage un temps de reconnexion à soi, aux autres et à la nature. Chaque expérience est pensée comme un véritable levier de transformation personnelle.",
      "SELMER propose aujourd’hui deux formats complémentaires.",
      "SELMER Group rassemble de petits groupes dans des voyages transformationnels où la dynamique collective favorise les prises de conscience et les changements durables.",
      "SELMER One to One offre une expérience entièrement personnalisée qui associe voyage, leadership, stratégie, posture, communication et accompagnement d’exception grâce à un écosystème de partenaires experts.",
    ],
    image: "/assets/PHOTOS SECTIONS/7.webp",
  },
];

const testimonials = [
  {
    quote:
      "REVEL n’est pas une simple conférence. J’ai vécu une expérience profonde, portée par les échanges, la musique et l’émotion. Je suis repartie avec un nouvel élan et l’envie de passer à l’action.",
    name: "Younes",
  },
  {
    quote:
      "Ce voyage m’a permis de ralentir, de me reconnecter à moi-même et de voir certaines étapes de ma vie avec plus de clarté. La force du groupe a rendu cette expérience encore plus enrichissante.",
    name: "Imane",
  },
  {
    quote:
      "J’ai particulièrement apprécié la personnalisation de l’expérience et la qualité de l’accompagnement. Chaque étape a été pensée en fonction de mon parcours et de ce que je souhaitais réellement transformer.",
    name: "Hiba",
  },
];

const blogPosts = [
  {
    category: "YALLAH À LA VIE",
    title: "Le Pas Magique : ce premier mouvement qui peut tout changer",
    excerpt:
      "Une décision, une prise de conscience ou un simple premier pas peut parfois ouvrir une nouvelle trajectoire.",
  },
  {
    category: "Leadership",
    title: "Et si le véritable leadership commençait par soi ?",
    excerpt:
      "Avant de guider les autres, il est essentiel d’apprendre à écouter son élan intérieur et à devenir le leader de sa propre vie.",
  },
  {
    category: "Voyage",
    title: "Quand le voyage devient une rencontre avec soi",
    excerpt:
      "Certains voyages nous montrent le monde. D’autres nous invitent à ralentir, à nous reconnecter et à nous redécouvrir.",
  },
];

const faqs = [
  [
    "Qu’est-ce que YALLAH À LA VIE ?",
    "YALLAH À LA VIE est une théorie contemporaine du mouvement vivant, fondée sur une conviction simple : toute transformation durable commence par un mouvement intérieur.",
  ],
  [
    "YALLAH À LA VIE est-elle une méthode de coaching ?",
    "Non. Il ne s’agit ni d’un slogan ni d’une méthode, mais d’une manière d’habiter pleinement sa vie et de retrouver son pouvoir d’action.",
  ],
  [
    "Quelle est la différence entre REVEL et SELMER ?",
    "REVEL propose des conférences immersives où la parole, la musique, le mouvement et l’émotion se rencontrent. SELMER transforme le voyage en une expérience de reconnexion et de transformation personnelle.",
  ],
  [
    "Quels sont les formats proposés par SELMER ?",
    "SELMER Group réunit de petits groupes autour d’un voyage transformationnel. SELMER One to One propose une expérience entièrement personnalisée, adaptée à votre parcours et à vos objectifs.",
  ],
  [
    "Comment choisir entre REVEL et SELMER ?",
    "Choisissez REVEL si vous recherchez l’énergie du collectif et une expérience immersive. SELMER est plus adapté si vous souhaitez vivre une expérience de voyage plus intime, en groupe restreint ou en accompagnement personnalisé.",
  ],
  [
    "Comment obtenir plus d’informations ?",
    "Remplissez le formulaire de contact en précisant l’expérience qui vous intéresse. L’équipe vous recontactera avec les informations adaptées à votre demande.",
  ],
  [
    "Proposez-vous des expériences pour les entreprises ou les institutions ?",
    "Oui, la vision de Laila Tazi s’adresse également aux entreprises, écoles et institutions. Contactez l’équipe afin d’échanger sur votre besoin.",
  ],
];

const pressImages = Array.from({ length: 8 }, (_, index) => ({
  src: `/assets/PHOTOS PRESSE/${index + 1}.webp`,
  alt: `Article de presse ${index + 1}`,
}));

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-[#be6b41]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-[#171412] md:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 text-base leading-8 text-[#5f5850] md:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f4ec] text-[#171412]">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 text-[#333333]">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between rounded-full border border-white/80 bg-white/95 px-4 shadow-2xl shadow-sky-950/15 backdrop-blur-xl lg:px-5">
          <Link
            href="#accueil"
            className="flex min-w-0 items-center gap-3 rounded-full pr-2 transition hover:bg-sky-50"
          >
            <Image
              src="/logo.webp"
              alt="YALLAH À LA VIE"
              width={56}
              height={56}
              priority
              className="size-14 object-contain"
            />
          </Link>
          <NavigationMenu className="hidden flex-none rounded-full bg-white px-3 py-2 text-[#333333] lg:flex">
            <NavigationMenuList className="gap-1">
              {navItems.map(([label, href]) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink
                    href={href}
                    className="rounded-full px-3 py-2 text-sm font-medium text-[#333333] hover:bg-sky-50 hover:text-[#171412] focus:bg-sky-50 focus:text-[#171412]"
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </header>

      <section
        id="accueil"
        style={{ backgroundImage: `url("/hero.png")` }}
        className="relative flex min-h-[92vh] items-end overflow-hidden bg-sky-100 px-5 pb-16 pt-32 text-[#171412] md:min-h-screen md:pb-24 lg:items-center lg:px-12 xl:px-20"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(224,242,254,0.96)_0%,rgba(224,242,254,0.76)_34%,rgba(224,242,254,0.24)_62%,rgba(224,242,254,0.02)_100%)]" />
        <AnimatedContent
          className="relative max-w-2xl text-left"
          distance={44}
          duration={0.9}
          threshold={0.05}
          delay={0.15}
        >
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/70 bg-white/70 px-4 py-2 text-sm font-semibold text-[#2f596c] shadow-xl shadow-sky-900/5 backdrop-blur">
            <Sparkles className="size-4 text-[#be6b41]" />
            Le leader de ta vie, c’est toi.
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] md:text-7xl lg:text-7xl">
            La vie répond au mouvement.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#35515d]">
            Une théorie contemporaine du mouvement vivant, incarnée par REVEL —
            les conférences immersives — et SELMER — les voyages
            transformateurs. Une invitation à retrouver votre élan et à devenir
            pleinement le leader de votre propre vie.
          </p>
        </AnimatedContent>
      </section>

      <section id="philosophie" className="px-5 py-24 md:py-32">
        <AnimatedContent distance={46} duration={0.8} threshold={0.2}>
          <SectionHeading
            eyebrow="La philosophie"
            title="YALLAH À LA VIE — Une manière d’habiter sa vie"
            text="YALLAH À LA VIE n’est ni un slogan ni une méthode. C’est une théorie contemporaine du mouvement vivant, fondée sur une conviction simple : toute transformation durable commence par un mouvement intérieur avant de se manifester à l’extérieur. Ce mouvement peut prendre la forme d’une décision, d’une prise de conscience, d’une autorisation que l’on s’accorde ou simplement d’un premier pas."
          />
        </AnimatedContent>
        <AnimatedContent distance={34} duration={0.85} threshold={0.16} delay={0.1}>
          <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className="rounded-lg border border-[#dfd4c2] bg-white/70 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#be6b41]/10"
              >
                <span className="text-sm font-bold text-[#be6b41]">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-2xl font-semibold leading-tight">
                  {principle}
                </h3>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </section>

      <section id="laila-tazi" className="bg-white px-5 py-24 md:py-32">
        <AnimatedContent
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center"
          distance={50}
          duration={0.85}
          threshold={0.18}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#ddd0bd]">
            <Image
              src="/assets/PHOTOS SECTIONS/2.webp"
              alt="Laila Tazi"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#be6b41]">
              Laila Tazi
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Une femme, une vision, une mission
            </h2>
            <div className="mt-9 grid gap-7 text-[#5f5850]">
              <div>
                <h3 className="text-xl font-semibold text-[#171412]">
                  De l’excellence à la quête de sens
                </h3>
                <p className="mt-3 leading-8">
                  Après plusieurs années au sein d’Estée Lauder – Clinique
                  France, Laila Tazi évolue dans un univers où l’excellence, le
                  leadership et la performance sont au cœur du quotidien. Elle
                  accompagne des équipes, révèle des talents et découvre combien
                  la beauté peut renforcer la confiance et l’accomplissement. Sa
                  quête de sens l’amène ensuite à explorer différentes approches
                  du développement humain et à fonder l’un des premiers centres
                  holistiques au Maroc.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#171412]">
                  Une épreuve devenue une mission
                </h3>
                <p className="mt-3 leading-8">
                  Une crise cardiaque, suivie d’une expérience de mort
                  imminente, bouleverse profondément ses certitudes et
                  transforme sa manière de vivre. Laila comprend alors que la
                  réussite ne prend tout son sens que lorsqu’elle reste
                  connectée à notre essence. De cette traversée naît la
                  conviction qui guide désormais son œuvre : le changement
                  commence par un mouvement intérieur et chacun peut devenir
                  pleinement le leader de sa propre vie.
                </p>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>

      <section id="ecosysteme" className="px-5 py-24 md:py-32">
        <AnimatedContent
          className="mx-auto max-w-7xl"
          distance={48}
          duration={0.8}
          threshold={0.18}
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <SectionHeading
              eyebrow="Notre écosystème"
              title="Une théorie, deux expériences, une mission"
              text="YALLAH À LA VIE constitue le socle de la vision. REVEL en est l’expression collective à travers des conférences immersives. SELMER en propose une expérience plus intime à travers le voyage."
            />
            <p className="rounded-lg bg-[#171412] p-8 text-lg leading-8 text-white/78">
              À travers cette approche, Laila Tazi invite chacun à accomplir ce
              qu’elle appelle le « Pas Magique », ce premier mouvement intérieur
              capable de transformer durablement une trajectoire de vie.
            </p>
          </div>
        </AnimatedContent>
      </section>

      <section
        id="experiences"
        className="bg-[#171412] px-5 py-24 text-white md:py-32"
      >
        <AnimatedContent
          className="mx-auto max-w-7xl"
          distance={52}
          duration={0.9}
          threshold={0.16}
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {experiences.map((experience) => (
              <article
                key={experience.name}
                id={experience.name.toLowerCase()}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <div className="relative aspect-[16/11]">
                  <Image
                    src={experience.image}
                    alt={experience.name}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#e7b85f]">
                    {experience.eyebrow}
                  </p>
                  <h2 className="mt-4 text-4xl font-semibold">
                    {experience.name}
                  </h2>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight">
                    {experience.title}
                  </h3>
                  <div className="mt-5 grid gap-5 leading-8 text-white/68">
                    {experience.text.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </AnimatedContent>
      </section>

      <section className="bg-white px-5 py-24 md:py-32">
        <AnimatedContent
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2"
          distance={48}
          duration={0.85}
          threshold={0.18}
        >
          <div className="rounded-lg border border-[#dfd4c2] bg-[#f8f4ec] p-8">
            <SectionHeading
              eyebrow="Pourquoi cette approche est unique ?"
              title="Une approche qui remet la vie en mouvement"
              text="Elle commence par un mouvement intérieur, remet le lien au centre, transforme les idées en expériences vécues et permet à chacun de retrouver sa capacité d’agir."
            />
          </div>
          <div className="rounded-lg border border-[#dfd4c2] bg-[#f8f4ec] p-8">
            <SectionHeading
              eyebrow="À qui s’adresse l’expérience ?"
              title="Cette expérience peut vous parler si…"
              text="Vous souhaitez retrouver du sens ou de l’élan, traversez une transition, recherchez une expérience qui vous remet en action, souhaitez vivre la force du collectif avec REVEL ou préférez l’intimité d’un voyage avec SELMER."
            />
          </div>
        </AnimatedContent>
      </section>

      <section id="temoignages" className="px-5 py-24 md:py-32">
        <AnimatedContent distance={44} duration={0.8} threshold={0.18}>
          <SectionHeading
            eyebrow="Témoignages"
            title="Ils ont remis leur vie en mouvement"
          />
          <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-lg bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#be6b41]/10"
              >
                <blockquote className="text-lg leading-8 text-[#4d463f]">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8 font-bold text-[#be6b41]">
                  — {testimonial.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </AnimatedContent>
      </section>

      <section
        id="presse"
        className="overflow-hidden bg-[#eadfce] py-24 md:py-32"
      >
        <AnimatedContent distance={40} duration={0.8} threshold={0.2}>
          <SectionHeading
            eyebrow="Revue de presse"
            title="Ils parlent de notre vision"
          />
        </AnimatedContent>
        <AnimatedContent distance={28} duration={0.9} threshold={0.12} delay={0.1}>
          <div className="press-marquee mt-14 flex gap-5">
            {[...pressImages, ...pressImages].map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="relative aspect-square w-64 shrink-0 overflow-hidden rounded-lg bg-white shadow-sm transition duration-300 hover:scale-[1.02] md:w-80"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </AnimatedContent>
      </section>

      <section id="blog" className="bg-white px-5 py-24 md:py-32">
        <AnimatedContent distance={46} duration={0.85} threshold={0.18}>
          <SectionHeading
            eyebrow="Blog"
            title="Réflexions, conseils et actualités"
            text="Découvrez les réflexions de Laila Tazi autour du mouvement vivant, du leadership, de la reconnexion à soi et des expériences qui transforment une trajectoire."
          />
          <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="flex min-h-72 flex-col rounded-lg border border-[#dfd4c2] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#be6b41]/10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#be6b41]">
                  {post.category}
                </p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight">
                  {post.title}
                </h3>
                <p className="mt-4 leading-7 text-[#5f5850]">{post.excerpt}</p>
                <Link
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold"
                >
                  Lire l’article
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </AnimatedContent>
      </section>

      <section id="faq" className="px-5 py-24 md:py-32">
        <AnimatedContent distance={42} duration={0.75} threshold={0.2}>
          <SectionHeading eyebrow="FAQ" title="Vos questions, nos réponses" />
          <Accordion className="mx-auto mt-14 max-w-4xl rounded-lg bg-white px-6 shadow-sm">
            {faqs.map(([question, answer], index) => (
              <AccordionItem
                key={question}
                value={`faq-${index}`}
                className="border-[#d9cdbb]"
              >
                <AccordionTrigger className="py-6 text-lg font-semibold leading-7 text-[#171412] no-underline hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-8 text-[#5f5850]">
                  <p>{answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedContent>
      </section>

      <section
        id="contact"
        className="bg-[#171412] px-5 py-24 text-white md:py-32"
      >
        <AnimatedContent
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr]"
          distance={52}
          duration={0.85}
          threshold={0.18}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#e7b85f]">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Et si votre premier mouvement commençait ici ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/68">
              Vous souhaitez en savoir plus sur REVEL, SELMER ou une
              collaboration ? Partagez-nous votre demande. L’équipe vous
              recontactera avec les informations adaptées.
            </p>
          </div>
          <form className="rounded-lg bg-white p-6 text-[#171412] shadow-2xl md:p-8">
            <div className="grid gap-5">
              <h3 className="text-2xl font-semibold">Formulaire de contact</h3>
              <label className="grid gap-2 text-sm font-semibold">
                Nom complet
                <input className="h-12 rounded-md border border-[#d9cdbb] px-4 outline-none focus:border-[#be6b41]" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Numéro de téléphone
                <input className="h-12 rounded-md border border-[#d9cdbb] px-4 outline-none focus:border-[#be6b41]" />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Adresse mail
                <input
                  type="email"
                  className="h-12 rounded-md border border-[#d9cdbb] px-4 outline-none focus:border-[#be6b41]"
                />
              </label>
              <div className="grid gap-3 text-sm font-semibold">
                Je suis :
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Un(e) Particulier(e)", "Une entreprise"].map((option) => (
                    <label
                      key={option}
                      className="flex h-12 items-center gap-3 rounded-md border border-[#d9cdbb] px-4"
                    >
                      <input type="radio" name="profile" />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
              <button className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#171412] px-6 text-sm font-bold text-white transition hover:bg-[#be6b41]">
                Envoyer ma demande
                <ArrowRight className="size-4" />
              </button>
            </div>
          </form>
        </AnimatedContent>
      </section>

      <footer className="bg-[#100e0c] px-5 py-14 text-white">
        <AnimatedContent
          className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_0.8fr_1.1fr]"
          distance={34}
          duration={0.75}
          threshold={0.12}
        >
          <div>
            <h2 className="text-xl font-bold tracking-[0.24em]">LAILA TAZI</h2>
            <p className="mt-5 text-white/66">
              La vie répond au mouvement.
              <br />
              Le leader de ta vie, c’est toi.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Navigation</h3>
            <div className="mt-5 grid gap-2 text-sm text-white/66">
              {footerNavItems.map(([label, href]) => (
                <Link key={href} href={href} className="hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Restons en mouvement</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/66">
              Recevez les prochaines expériences, réflexions et actualités de
              Laila Tazi.
            </p>
            <div className="mt-5 flex max-w-md overflow-hidden rounded-full bg-white">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="min-w-0 flex-1 px-5 text-sm text-[#171412] outline-none"
              />
              <button className="bg-[#e7b85f] px-5 text-sm font-bold text-[#171412]">
                Je m’inscris
              </button>
            </div>
            <h3 className="mt-6 font-semibold">Réseaux sociaux</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Instagram", "LinkedIn", "Facebook"].map((network) => (
                <Link
                  key={network}
                  href="#"
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white hover:text-[#171412]"
                >
                  {network}
                </Link>
              ))}
            </div>
          </div>
        </AnimatedContent>
        <AnimatedContent
          className="mx-auto mt-12 flex max-w-7xl justify-center border-t border-white/10 pt-10"
          distance={24}
          duration={0.75}
          threshold={0.1}
          delay={0.1}
        >
          <Image
            src="/logo.webp"
            alt="YALLAH À LA VIE"
            width={96}
            height={96}
            className="size-24 object-contain"
          />
        </AnimatedContent>
      </footer>
    </main>
  );
}
