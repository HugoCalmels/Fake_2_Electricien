// Contenu du site de démo : coordonnées, sections et prestations.
// Tout est centralisé ici pour que la home et les futures pages
// (/installations, /installations/luminaires…) partagent les mêmes données.

export const SITE = {
  brand: "FakeElec",
  city: "Toulouse",
  zone: "Toulouse et 30 km autour",
  // Numéro de la plage réservée à la fiction (ARCEP) : n'appartient à personne
  phoneDisplay: "06 39 98 00 00",
  phoneTel: "+33639980000",
  email: "contact@fakeelec.example",
  hours: "Lun–Sam · 8h–19h",
  urgentHours: "Urgences 7j/7",
};

export type Service = {
  slug: string;
  title: string;
  // Phrase courte pour les cards
  desc: string;
  // Texte de la page de la prestation
  intro: string;
  includes: string[];
  image: string;
};

export type Category = {
  id: string;
  label: string;
  // Phrase courte affichée sous le titre de la section
  tagline: string;
  services: Service[];
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=75`;

export const CATEGORIES: Category[] = [
  {
    id: "installations",
    label: "Installations",
    tagline:
      "Du simple point lumineux à l’installation complète, posé proprement et aux normes.",
    services: [
      {
        slug: "prises-interrupteurs",
        title: "Prises et interrupteurs",
        desc: "Ajout, déplacement ou remplacement de prises, interrupteurs et va-et-vient.",
        intro:
          "Une prise mal placée, un interrupteur qui manque au bon endroit : ce sont souvent de petits travaux qui changent le quotidien. On ajoute, déplace ou remplace vos prises et commandes d’éclairage en respectant les hauteurs et les sections de câble imposées par la norme.",
        includes: [
          "Ajout de prises, y compris USB et prises extérieures étanches",
          "Va-et-vient et télérupteurs pour les couloirs et escaliers",
          "Remplacement d’appareillages anciens ou abîmés",
          "Saignées rebouchées proprement, prêtes à peindre",
        ],
        image: img("1761479373576-ad4c1c5bb9af"),
      },
      {
        slug: "eclairage",
        title: "Éclairage et luminaires",
        desc: "Plafonniers, suspensions, spots encastrés et éclairage extérieur.",
        intro:
          "Un bon éclairage se prévoit pièce par pièce : lumière d’ambiance, lumière de travail, éclairage d’accent. On pose et raccorde vos luminaires, du simple plafonnier aux spots encastrés sur variateur, à l’intérieur comme à l’extérieur.",
        includes: [
          "Plafonniers, suspensions et appliques",
          "Spots LED encastrés et rubans lumineux",
          "Variateurs et détecteurs de présence",
          "Éclairage extérieur et de jardin",
        ],
        image: img("1563973153236-794eef98609f"),
      },
      {
        slug: "tableau-electrique",
        title: "Tableau électrique",
        desc: "Pose d’un tableau neuf avec disjoncteurs et différentiels adaptés.",
        intro:
          "Le tableau est le cœur de votre installation : il protège les circuits et les personnes. On pose un tableau neuf, dimensionné pour vos besoins actuels et futurs, avec des disjoncteurs et des différentiels adaptés à chaque circuit.",
        includes: [
          "Étude des circuits et de la puissance nécessaire",
          "Pose du tableau, disjoncteurs et interrupteurs différentiels",
          "Repérage clair de chaque circuit",
          "Contrôle et mise en service",
        ],
        image: img("1576446470246-499c738d1c8e"),
      },
      {
        slug: "borne-recharge",
        title: "Borne de recharge",
        desc: "Installation de borne pour véhicule électrique, en maison ou en copropriété.",
        intro:
          "Recharger sa voiture sur une prise classique est lent et peut faire chauffer l’installation. Une borne dédiée recharge plus vite et en toute sécurité, avec une ligne tirée directement depuis le tableau.",
        includes: [
          "Étude de la puissance disponible chez vous",
          "Pose de borne murale 7 kW",
          "Ligne dédiée et protection spécifique",
          "Accompagnement pour les aides et le crédit d’impôt",
        ],
        image: img("1766507680004-1c71007aefe5"),
      },
      {
        slug: "climatisation",
        title: "Climatisation",
        desc: "Raccordement électrique de climatiseurs et pompes à chaleur air-air.",
        intro:
          "Un climatiseur ou une pompe à chaleur demande une alimentation dédiée et bien protégée. On s’occupe de toute la partie électrique, en lien avec votre installateur frigoriste.",
        includes: [
          "Ligne dédiée depuis le tableau",
          "Protection adaptée à la puissance de l’appareil",
          "Raccordement des unités intérieures et extérieures",
          "Vérification du bon fonctionnement",
        ],
        image: img("1665826254141-bfa10685e002"),
      },
      {
        slug: "vmc",
        title: "VMC et ventilation",
        desc: "Pose et raccordement de VMC simple ou double flux.",
        intro:
          "Une bonne ventilation évite l’humidité, les moisissures et les mauvaises odeurs. On pose et raccorde votre VMC, simple ou double flux, en neuf comme en remplacement.",
        includes: [
          "VMC simple flux et hygroréglable",
          "VMC double flux",
          "Remplacement d’un groupe bruyant ou en panne",
          "Raccordement électrique et commande",
        ],
        image: img("1574334292321-4844f63aefef"),
      },
    ],
  },
  {
    id: "renovation",
    label: "Rénovation",
    tagline: "On reprend l’existant pièce par pièce, sans tout casser.",
    services: [
      {
        slug: "renovation-complete",
        title: "Rénovation complète",
        desc: "Réfection de toute l’installation d’un appartement ou d’une maison.",
        intro:
          "Quand l’installation a plusieurs décennies, la rafistoler ne suffit plus. On reprend tout, du tableau jusqu’à la dernière prise, en limitant les dégâts dans les murs et en suivant un planning clair.",
        includes: [
          "Diagnostic de l’existant et plan des nouveaux circuits",
          "Remplacement du tableau et des câbles",
          "Nouvelles prises et points lumineux là où il en faut",
          "Attestation de conformité en fin de chantier",
        ],
        image: img("1634586648651-f1fb9ec10d90"),
      },
      {
        slug: "cuisine",
        title: "Cuisine",
        desc: "Circuits dédiés pour l’électroménager et éclairage du plan de travail.",
        intro:
          "La cuisine est la pièce la plus gourmande en électricité. Plaques, four, lave-vaisselle : chaque gros appareil a besoin de sa propre ligne, et le plan de travail d’un bon éclairage.",
        includes: [
          "Circuits dédiés pour chaque gros électroménager",
          "Prises en crédence, en nombre suffisant",
          "Éclairage sous meubles et au-dessus de l’îlot",
          "Coordination avec votre cuisiniste",
        ],
        image: img("1618832515490-e181c4794a45"),
      },
      {
        slug: "salle-de-bain",
        title: "Salle de bain",
        desc: "Mise en conformité des volumes, éclairage de miroir et sèche-serviettes.",
        intro:
          "Dans une salle de bain, l’eau et l’électricité imposent des règles strictes selon les zones autour de la douche et de la baignoire. On installe éclairage, prises et chauffage en respectant ces volumes.",
        includes: [
          "Mise en conformité des volumes de sécurité",
          "Éclairage de miroir et spots étanches",
          "Sèche-serviettes et chauffage d’appoint",
          "Liaison équipotentielle",
        ],
        image: img("1742134131017-44d377a611b1"),
      },
      {
        slug: "remplacement-tableau",
        title: "Remplacement de tableau",
        desc: "Un vieux tableau à fusibles remplacé par un tableau moderne et sécurisé.",
        intro:
          "Fusibles en porcelaine, pas de différentiel, tableau qui chauffe : un vieux tableau n’offre plus la protection nécessaire. On le remplace par un tableau moderne, sans refaire toute l’installation.",
        includes: [
          "Dépose de l’ancien tableau",
          "Pose d’un tableau neuf avec différentiels 30 mA",
          "Reprise et repérage des circuits existants",
          "Contrôle de la prise de terre",
        ],
        image: img("1635335874521-7987db781153"),
      },
      {
        slug: "mise-aux-normes",
        title: "Mise aux normes",
        desc: "Diagnostic et mise en conformité NF C 15-100, pour vendre ou louer sereinement.",
        intro:
          "Pour vendre, louer ou simplement dormir tranquille, votre installation doit respecter la norme NF C 15-100. On fait le point, on vous explique ce qui cloche et on corrige uniquement ce qui est nécessaire.",
        includes: [
          "Diagnostic complet de l’installation",
          "Devis détaillé, poste par poste",
          "Correction des défauts de sécurité",
          "Attestation de conformité",
        ],
        image: img("1758101755915-462eddc23f57"),
      },
      {
        slug: "maison-ancienne",
        title: "Maison ancienne",
        desc: "Remplacement des vieux câbles et ajout de circuits dans le bâti ancien.",
        intro:
          "Les maisons anciennes cachent souvent des câbles en tissu, des boîtes de dérivation oubliées et une terre absente. On modernise l’installation en respectant le bâti : moulures, parquets, murs en pierre.",
        includes: [
          "Remplacement des câbles anciens",
          "Création d’une prise de terre",
          "Passages discrets, en goulotte ou encastrés",
          "Ajout de circuits selon vos nouveaux usages",
        ],
        image: img("1517581177682-a085bb7ffb15"),
      },
    ],
  },
  {
    id: "depannage",
    label: "Dépannage",
    tagline: "Une panne ? On diagnostique vite et on remet en sécurité.",
    services: [
      {
        slug: "panne-de-courant",
        title: "Panne de courant",
        desc: "Plus de lumière dans une pièce ou dans toute la maison : on trouve pourquoi.",
        intro:
          "Plus de courant dans une pièce ou dans toute la maison ? Avant de toucher à quoi que ce soit, appelez-nous : on vient diagnostiquer l’origine de la coupure et remettre en service en sécurité.",
        includes: [
          "Intervention rapide, 7j/7 en cas d’urgence",
          "Recherche de l’origine de la coupure",
          "Réparation ou remise en sécurité",
          "Explication claire de ce qui s’est passé",
        ],
        image: img("1719935114301-eac84a6591cf"),
      },
      {
        slug: "disjoncteur-qui-saute",
        title: "Disjoncteur qui saute",
        desc: "Recherche de la surcharge ou du défaut d’isolement qui fait tout couper.",
        intro:
          "Un disjoncteur qui saute sans arrêt, c’est un signal : surcharge, appareil défectueux ou défaut d’isolement. On teste circuit par circuit pour trouver la cause, plutôt que de simplement le réarmer.",
        includes: [
          "Tests de chaque circuit",
          "Recherche d’appareil défectueux",
          "Mesure de l’isolement des câbles",
          "Correction du défaut",
        ],
        image: img("1576446468729-7674e99608f5"),
      },
      {
        slug: "prise-hors-service",
        title: "Prise ou interrupteur HS",
        desc: "Prise qui chauffe, interrupteur qui grésille : réparation ou remplacement.",
        intro:
          "Une prise qui chauffe, noircit ou grésille peut provoquer un départ de feu. On remplace l’appareillage et on vérifie le câblage derrière, pour que le problème ne revienne pas.",
        includes: [
          "Remplacement de prises et interrupteurs",
          "Vérification des connexions et du câble",
          "Contrôle de la protection du circuit",
          "Intervention propre et rapide",
        ],
        image: img("1751486289947-4f5f5961b3aa"),
      },
      {
        slug: "recherche-de-panne",
        title: "Recherche de panne",
        desc: "Mesures et tests circuit par circuit pour localiser le défaut.",
        intro:
          "Certaines pannes sont intermittentes et difficiles à trouver. Avec des appareils de mesure adaptés, on localise le défaut précisément, sans casser les murs au hasard.",
        includes: [
          "Mesures au multimètre et à la pince ampèremétrique",
          "Contrôle d’isolement",
          "Localisation précise du défaut",
          "Rapport et devis de réparation",
        ],
        image: img("1553873002-785d775854c9"),
      },
    ],
  },
  {
    id: "realisations",
    label: "Réalisations",
    tagline: "Quelques chantiers récents à Toulouse et autour.",
    services: [
      {
        slug: "appartement-carmes",
        title: "Appartement ancien · Carmes",
        desc: "Installation entièrement refaite dans un appartement des années 1930.",
        intro:
          "Dans cet appartement des années 1930 aux Carmes, l’installation d’origine n’avait ni terre ni différentiel. Tout a été refait en trois semaines, en conservant les moulures et le parquet.",
        includes: [
          "Tableau neuf et prise de terre créée",
          "32 prises et 14 points lumineux",
          "Passages discrets le long des moulures",
          "Attestation de conformité remise en fin de chantier",
        ],
        image: img("1767514536575-82aaf8b0afc4"),
      },
      {
        slug: "cuisine-balma",
        title: "Cuisine ouverte · Balma",
        desc: "Îlot central alimenté, suspensions et spots sur variateur.",
        intro:
          "Pour cette cuisine ouverte à Balma, l’îlot central devait accueillir plaques de cuisson et prises. Les lignes ont été tirées sous la chape avant la pose du sol, puis les suspensions et les spots installés sur variateur.",
        includes: [
          "Alimentation de l’îlot sous la chape",
          "Circuits dédiés four, plaques et lave-vaisselle",
          "Trois suspensions et huit spots sur variateur",
          "Chantier coordonné avec le cuisiniste",
        ],
        image: img("1682888813913-e13f18692019"),
      },
      {
        slug: "borne-blagnac",
        title: "Borne de recharge · Blagnac",
        desc: "Borne 7 kW dans un garage, avec ligne dédiée depuis le tableau.",
        intro:
          "À Blagnac, un couple venait d’acheter sa première voiture électrique. Une borne 7 kW a été installée dans le garage, avec une ligne dédiée depuis le tableau et un délestage pour ne jamais dépasser l’abonnement.",
        includes: [
          "Borne murale 7 kW",
          "Ligne dédiée de 20 mètres",
          "Délestage automatique",
          "Pose en une journée",
        ],
        image: img("1704475187766-058b6f7b7929"),
      },
      {
        slug: "restaurant-saint-cyprien",
        title: "Restaurant · Saint-Cyprien",
        desc: "Éclairage de salle en suspensions et mise aux normes de la cuisine.",
        intro:
          "Pour ce restaurant de Saint-Cyprien, il fallait une salle chaleureuse et une cuisine aux normes pour les contrôles. Le chantier s’est fait pendant la fermeture estivale, sans décaler la réouverture.",
        includes: [
          "Éclairage de salle en suspensions",
          "Mise aux normes de la cuisine professionnelle",
          "Circuits dédiés aux équipements de cuisson",
          "Chantier livré avant la réouverture",
        ],
        image: img("1718221621618-e477ce33485a"),
      },
    ],
  },
];

// Le 5e câble alimente la section contact
export const findCategory = (id: string) => CATEGORIES.find((c) => c.id === id);

export const findService = (categoryId: string, slug: string) =>
  findCategory(categoryId)?.services.find((s) => s.slug === slug);

export const CONTACT_SECTION = { id: "contact", label: "Contact" };

export const SECTIONS = [
  ...CATEGORIES.map((c) => ({ id: c.id, label: c.label })),
  CONTACT_SECTION,
];
