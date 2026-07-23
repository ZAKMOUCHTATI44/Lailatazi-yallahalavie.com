import {
  ArrowRight,
  MicVocal,
  PlayCircle,
  Sparkles,
  TentTree,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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

const navItems = [
  ["Accueil", "#accueil"],
  ["Laila Tazi", "#laila-tazi"],
  ["Sa vision", "#vision"],
  ["Accompagnements", "#accompagnements"],
  ["Expériences", "#experiences"],
  ["Témoignages", "#temoignages"],
  ["Médias", "#medias"],
  ["Agenda", "#agenda"],
  ["Contact", "#contact"],
];

const footerNavItems = navItems.slice(1);

const principles = ["Bouge-toi", "Guéris-toi", "Révèle-toi"];

const supports = [
  {
    name: "REVEL",
    subtitle: "Conférences immersives",
    text: "Pour vivre la puissance du collectif, rencontrer des parcours inspirants et transformer une prise de conscience en mouvement.",
    action: "Découvrir REVEL",
    image: "/assets/PHOTOS SECTIONS/6.webp",
  },
  {
    name: "SELMER",
    subtitle: "Voyager autrement",
    text: "Pour ralentir, se reconnecter à soi, retrouver de la clarté et vivre le voyage comme une expérience de transformation.",
    action: "Découvrir SELMER",
    image: "/assets/PHOTOS SECTIONS/7.webp",
  },
  {
    name: "ENTREPRISES",
    subtitle: "Leadership et transformation humaine",
    text: "Pour accompagner les dirigeants, les équipes et les organisations autour de la posture, du leadership, du lien, de la communication et de la transformation humaine.",
    action: "Organiser une intervention",
    image: "/assets/PHOTOS SECTIONS/8.webp",
  },
  {
    name: "LEADER ONE",
    subtitle: "Personal Branding & Personal Power",
    text: "Une alliance entre l’expertise de Nawal Houti en Personal Branding et l’approche de Laila Tazi autour du Personal Power™. Un accompagnement pour aligner image, posture, voix, message et impact.",
    action: "Découvrir Leader One",
    image: "/assets/PHOTOS SECTIONS/9.webp",
  },
];

const events = [
  {
    tag: "Conférence",
    icon: MicVocal,
    title: "REVEL — Le pouvoir du premier mouvement",
    description:
      "Une expérience immersive mêlant témoignages, musique, émotion et prises de conscience pour retrouver son pouvoir d’action et initier un changement durable.",
  },
  {
    tag: "Live",
    icon: PlayCircle,
    title: "Et si le véritable leadership commençait par soi ?",
    description:
      "Un échange en direct avec Laila Tazi autour du Personal Power™, de la posture et des choix qui permettent de devenir pleinement le leader de sa propre vie.",
  },
  {
    tag: "Masterclass",
    icon: Sparkles,
    title: "Aligner sa posture, sa voix et sa voie",
    description:
      "Une masterclass pour mieux comprendre son positionnement, exprimer sa voix avec confiance et donner une direction plus claire à son parcours personnel ou professionnel.",
  },
  {
    tag: "Voyage",
    icon: TentTree,
    title: "SELMER — Revenir à l’essentiel",
    description:
      "Une expérience en petit groupe pensée pour ralentir, se reconnecter à soi et retrouver de la clarté grâce au voyage, au partage et à la nature.",
  },
  {
    tag: "Atelier",
    icon: UsersRound,
    title: "Leadership vivant — Remettre les équipes en mouvement",
    description:
      "Un atelier destiné aux dirigeants et aux équipes pour renforcer la posture de leadership, améliorer la qualité du lien et favoriser une dynamique collective plus engagée.",
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

const pressImages = Array.from({ length: 8 }, (_, index) => ({
  src: `/assets/PHOTOS PRESSE/${index + 1}.webp`,
  alt: `Article de presse ${index + 1}`,
}));

const requestChoices = [
  "Participer à une conférence REVEL",
  "Candidater à un voyage SELMER",
  "Découvrir SELMER One to One",
  "Candidater à Leader One",
  "Organiser une intervention en entreprise",
  "Proposer une collaboration ou une interview",
  "Autre demande",
];

const faqs = [
  [
    "Qu’est-ce que le Personal Power™ ?",
    "Le Personal Power™ désigne la capacité à reprendre pleinement sa place, à exprimer ce qui nous anime et à donner une direction consciente à notre vie.",
  ],
  [
    "Quelle est la différence entre REVEL et SELMER ?",
    "REVEL propose des conférences immersives portées par la force du collectif. SELMER transforme le voyage en une expérience intime de reconnexion et de transformation personnelle.",
  ],
  [
    "À qui s’adressent les accompagnements ?",
    "Aux personnes, leaders, entrepreneurs, équipes et organisations qui souhaitent remettre du mouvement, de la clarté et de l’alignement dans leur parcours.",
  ],
];

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
            className="flex min-w-0 items-center rounded-full pr-2 transition hover:bg-sky-50"
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
          <NavigationMenu className="hidden flex-none rounded-full bg-white px-3 py-2 text-[#333333] xl:flex">
            <NavigationMenuList className="gap-1">
              {navItems.map(([label, href]) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink
                    href={href}
                    className="rounded-full px-2.5 py-2 text-sm font-medium text-[#333333] hover:bg-sky-50 hover:text-[#171412] focus:bg-sky-50 focus:text-[#171412]"
                  >
                    {label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Link
            href="#contact"
            className="rounded-full bg-[#171412] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#be6b41] sm:text-sm"
          >
            Prendre contact
          </Link>
        </nav>
      </header>

      <section
        id="accueil"
        style={{ backgroundImage: 'url("/hero.png")' }}
        className="relative flex min-h-[92vh] items-end overflow-hidden bg-sky-100 bg-cover bg-center px-5 pb-16 pt-32 text-[#171412] md:min-h-screen md:pb-24 lg:items-center lg:px-12 xl:px-20"
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
            <Sparkles className="size-4 text-[#be6b41]" /> Le leader de ta vie,
            c’est toi.
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] md:text-7xl">
            La vie répond au mouvement.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#35515d]">
            Laila Tazi crée des expériences immersives et des accompagnements
            transformateurs qui remettent la vie en mouvement.
          </p>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-[#35515d]">
            Elle accompagne celles et ceux qui sont prêts à développer leur
            Personal Power™, afin d’incarner un leadership plus libre, plus
            aligné, plus charismatique et porteur de sens.
          </p>
          <Link
            href="#accompagnements"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#171412] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#be6b41]"
          >
            Découvrir les accompagnements <ArrowRight className="size-4" />
          </Link>
        </AnimatedContent>
      </section>

      <section id="vision" className="px-5 py-24 md:py-32">
        <AnimatedContent distance={46} duration={0.8} threshold={0.2}>
          <SectionHeading
            eyebrow="Sa vision"
            title="Trois invitations à remettre la vie en mouvement"
          />
        </AnimatedContent>
        <AnimatedContent
          distance={34}
          duration={0.85}
          threshold={0.16}
          delay={0.1}
        >
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

      <section id="personal-power" className="bg-white px-5 py-24 md:py-32">
        <AnimatedContent
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center"
          distance={50}
          duration={0.85}
          threshold={0.18}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#ddd0bd]">
            <Image
              src="/assets/PHOTOS SECTIONS/1.webp"
              alt="Une expérience Laila Tazi"
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#be6b41]">
              Personal Power™
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Développez votre Personal Power
            </h2>
            <p className="mt-6 text-xl leading-8 text-[#5f5850]">
              Alignez votre posture. Libérez vos freins. Clarifiez votre voix et
              votre voie. Le mouvement suivra.
            </p>
            <p className="mt-6 leading-8 text-[#5f5850]">
              Le Personal Power™ désigne la capacité à reprendre pleinement sa
              place, à exprimer ce qui nous anime et à donner une direction
              consciente à notre vie. Cette approche repose sur trois dimensions
              complémentaires.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                [
                  "La posture",
                  "La manière dont j’habite mon corps, mes émotions, mon énergie et ma présence.",
                ],
                [
                  "La voix",
                  "La manière dont j’exprime ma vérité, affirme mon message et crée le lien avec les autres.",
                ],
                [
                  "La voie",
                  "La direction que je choisis de donner à ma vie, à mes décisions et à mon impact.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="border-l-2 border-[#be6b41] pl-4">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f5850]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </section>

      <section id="laila-tazi" className="px-5 py-24 md:py-32">
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
              Qui est Laila Tazi ?
            </h2>
            <div className="mt-8 grid gap-5 leading-8 text-[#5f5850]">
              <p>
                Riche d’une expérience dans l’univers de la cosmétique du luxe
                et de la croissance de l’être, Laila Tazi est une conférencière
                phare et activatrice de transformation.
              </p>
              <p>
                Fondatrice de YALLAH À LA VIE, elle accompagne celles et ceux
                qui souhaitent remettre leur vie en mouvement et devenir le
                leader de leur vie.
              </p>
              <p>
                Une femme qui a cheminé, connu la performance, la réussite, les
                paillettes, puis le stop et le travail intérieur.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-[#be6b41] pl-6 text-2xl font-semibold leading-tight md:text-3xl">
              Une femme qui a compris que :{" "}
              <span className="block mt-3 text-[#5f5850]">
                « Ce ne sont pas les épreuves qui nous transforment, mais les
                choix que nous faisons après. »
              </span>
            </blockquote>
          </div>
        </AnimatedContent>
      </section>

      <section
        id="accompagnements"
        className="bg-[#171412] px-5 py-24 text-white md:py-32"
      >
        <AnimatedContent
          className="mx-auto max-w-7xl"
          distance={52}
          duration={0.9}
          threshold={0.16}
        >
          <SectionHeading
            eyebrow="Accompagnements"
            title="Comment puis-je vous accompagner ?"
            text="Les accompagnements proposés par Laila Tazi prennent différentes formes, selon votre situation, votre besoin de transformation et le type d’expérience que vous souhaitez vivre."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {supports.map((support) => (
              <article
                key={support.name}
                className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] transition duration-300 hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <div className="relative h-[400px]">
                  <Image
                    src={support.image}
                    alt={support.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#e7b85f]">
                    {support.name}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold">
                    {support.subtitle}
                  </h3>
                  <p className="mt-5 leading-8 text-white/68">{support.text}</p>
                  <Link
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#e7b85f]"
                  >
                    {support.action} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </AnimatedContent>
      </section>

      <section id="experiences" className="bg-white px-5 py-24 md:py-32">
        <AnimatedContent
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center"
          distance={48}
          duration={0.85}
          threshold={0.18}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#be6b41]">
              La vision
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              La Théorie du Mouvement Vivant
            </h2>
            <div className="mt-7 grid gap-5 text-lg leading-8 text-[#5f5850]">
              <p>
                La Théorie du Mouvement Vivant constitue le socle de la vision
                de Laila Tazi.
              </p>
              <p>
                Elle repose sur l’idée que la vie n’est pas transformée par les
                intentions seules, mais par les mouvements que nous décidons
                d’incarner.
              </p>
              <p>
                Le mouvement peut être intérieur avant de devenir visible :
                choisir, ressentir, nommer, prendre position, changer de regard
                ou accomplir un premier pas.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-[#eadfce] p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#be6b41]">
              Le Pas Magique
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight">
              Le premier mouvement qui ouvre une nouvelle trajectoire.
            </h3>
            <p className="mt-6 leading-8 text-[#5f5850]">
              Laila Tazi appelle Pas Magique ce premier mouvement intérieur qui
              ouvre une nouvelle trajectoire. Il ne garantit pas que tout
              changera immédiatement. Il marque cependant le moment où une
              personne cesse d’attendre que sa vie change et commence à
              reprendre son pouvoir d’action.
            </p>
          </div>
        </AnimatedContent>
      </section>

      <section id="agenda" className="px-5 py-24 md:py-32">
        <AnimatedContent distance={44} duration={0.8} threshold={0.18}>
          <SectionHeading
            eyebrow="Agenda"
            title="Les prochains rendez-vous"
            text="Des expériences pour se mettre en mouvement, rencontrer, ressentir et faire émerger de nouvelles possibilités."
          />
          <div className="mx-auto mt-14 grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event, index) => {
              const EventIcon = event.icon;

              return (
                <article
                  key={event.title}
                  className={`flex min-h-72 flex-col rounded-lg border border-[#dfd4c2] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#be6b41]/10 ${index === 0 ? "xl:col-span-2" : ""}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#be6b41]">
                      {event.tag}
                    </p>
                    <span className="grid size-11 place-items-center rounded-full bg-[#f8f4ec] text-[#be6b41]">
                      <EventIcon className="size-5" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight">
                    {event.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#5f5850]">
                    {event.description}
                  </p>
                  <Link
                    href="#contact"
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold"
                  >
                    Être informé(e) <ArrowRight className="size-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </AnimatedContent>
      </section>

      <section id="temoignages" className="bg-white px-5 py-24 md:py-32">
        <AnimatedContent distance={44} duration={0.8} threshold={0.18}>
          <SectionHeading
            eyebrow="Témoignages"
            title="Ils ont remis leur vie en mouvement"
          />
          <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-lg bg-[#f8f4ec] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#be6b41]/10"
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
        id="medias"
        className="overflow-hidden bg-[#eadfce] py-24 md:py-32"
      >
        <AnimatedContent distance={40} duration={0.8} threshold={0.2}>
          <SectionHeading eyebrow="Médias" title="Ils parlent de la vision" />
        </AnimatedContent>
        <AnimatedContent
          distance={28}
          duration={0.9}
          threshold={0.12}
          delay={0.1}
        >
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

      <section className="px-5 py-24 md:py-32">
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
              Partagez-nous votre demande. L’équipe vous recontactera avec les
              informations adaptées à votre besoin.
            </p>
          </div>
          <form className="rounded-lg bg-white p-6 text-[#171412] shadow-2xl md:p-8">
            <div className="grid gap-5">
              <h3 className="text-2xl font-semibold">Formulaire de contact</h3>
              <label className="grid gap-2 text-sm font-semibold">
                Nom complet
                <input
                  required
                  className="h-12 rounded-md border border-[#d9cdbb] px-4 outline-none focus:border-[#be6b41]"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Numéro de téléphone
                <input
                  type="tel"
                  className="h-12 rounded-md border border-[#d9cdbb] px-4 outline-none focus:border-[#be6b41]"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Adresse mail
                <input
                  required
                  type="email"
                  className="h-12 rounded-md border border-[#d9cdbb] px-4 outline-none focus:border-[#be6b41]"
                />
              </label>
              <fieldset className="grid gap-3">
                <legend className="text-sm font-semibold">Votre demande</legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {requestChoices.map((choice) => (
                    <label
                      key={choice}
                      className="flex items-start gap-3 rounded-md border border-[#d9cdbb] p-3 text-sm leading-5"
                    >
                      <input
                        type="checkbox"
                        name="request"
                        value={choice}
                        className="mt-0.5"
                      />
                      <span>{choice}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="grid gap-2 text-sm font-semibold">
                Un message à nous partager
                <textarea
                  rows={4}
                  className="resize-y rounded-md border border-[#d9cdbb] p-4 outline-none focus:border-[#be6b41]"
                />
              </label>
              <button className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#171412] px-6 text-sm font-bold text-white transition hover:bg-[#be6b41]">
                Envoyer ma demande <ArrowRight className="size-4" />
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
            <Image
              src="/logo.webp"
              alt="YALLAH À LA VIE"
              width={250}
              height={250}
              priority
              className="size-36 object-contain"
            />
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
              Recevez les prochains rendez-vous, réflexions et actualités de
              Laila Tazi.
            </p>
            <div className="mt-5 flex max-w-md overflow-hidden rounded-full bg-white">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="min-w-0 flex-1 h-12 px-5 text-sm text-[#171412] outline-none"
              />
              <button className="bg-[#e7b85f] px-5 text-sm font-bold text-[#171412]">
                Je m’inscris
              </button>
            </div>
            <h3 className="mt-7 font-semibold">Suivre Laila Tazi</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/lailatazi_?igsh=N3p0NTByMW02NzRj"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-transparent py-2 text-sm font-semibold  transition"
              >
                <Image
                  src={"/media/instagram.png"}
                  alt=""
                  width={25}
                  height={25}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/laïla-tazi-bb539993?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-transparent py-2 text-sm font-semibold  transition"
              >
                <Image
                  src={"/media/linkedin.png"}
                  alt=""
                  width={25}
                  height={25}
                />
              </a>
              <a
                href="https://www.facebook.com/share/18zDLvEpuS/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-transparent py-2 text-sm font-semibold  transition"
              >
                <Image
                  src={"/media/facebook.png"}
                  alt=""
                  width={25}
                  height={25}
                />
              </a>
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
