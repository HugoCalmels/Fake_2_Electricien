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
  desc: string;
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
    tagline: "Du simple point lumineux à l’installation complète, posé proprement et aux normes.",
    services: [
      {
        slug: "prises-interrupteurs",
        title: "Prises et interrupteurs",
        desc: "Ajout, déplacement ou remplacement de prises, interrupteurs et va-et-vient.",
        image: img("1761479373576-ad4c1c5bb9af"),
      },
      {
        slug: "eclairage",
        title: "Éclairage et luminaires",
        desc: "Plafonniers, suspensions, spots encastrés et éclairage extérieur.",
        image: img("1563973153236-794eef98609f"),
      },
      {
        slug: "tableau-electrique",
        title: "Tableau électrique",
        desc: "Pose d’un tableau neuf avec disjoncteurs et différentiels adaptés.",
        image: img("1576446470246-499c738d1c8e"),
      },
      {
        slug: "borne-recharge",
        title: "Borne de recharge",
        desc: "Installation de borne pour véhicule électrique, en maison ou en copropriété.",
        image: img("1766507680004-1c71007aefe5"),
      },
      {
        slug: "climatisation",
        title: "Climatisation",
        desc: "Raccordement électrique de climatiseurs et pompes à chaleur air-air.",
        image: img("1665826254141-bfa10685e002"),
      },
      {
        slug: "vmc",
        title: "VMC et ventilation",
        desc: "Pose et raccordement de VMC simple ou double flux.",
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
        image: img("1634586648651-f1fb9ec10d90"),
      },
      {
        slug: "cuisine",
        title: "Cuisine",
        desc: "Circuits dédiés pour l’électroménager et éclairage du plan de travail.",
        image: img("1618832515490-e181c4794a45"),
      },
      {
        slug: "salle-de-bain",
        title: "Salle de bain",
        desc: "Mise en conformité des volumes, éclairage de miroir et sèche-serviettes.",
        image: img("1742134131017-44d377a611b1"),
      },
      {
        slug: "remplacement-tableau",
        title: "Remplacement de tableau",
        desc: "Un vieux tableau à fusibles remplacé par un tableau moderne et sécurisé.",
        image: img("1635335874521-7987db781153"),
      },
      {
        slug: "mise-aux-normes",
        title: "Mise aux normes",
        desc: "Diagnostic et mise en conformité NF C 15-100, pour vendre ou louer sereinement.",
        image: img("1758101755915-462eddc23f57"),
      },
      {
        slug: "maison-ancienne",
        title: "Maison ancienne",
        desc: "Remplacement des vieux câbles et ajout de circuits dans le bâti ancien.",
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
        image: img("1719935114301-eac84a6591cf"),
      },
      {
        slug: "disjoncteur-qui-saute",
        title: "Disjoncteur qui saute",
        desc: "Recherche de la surcharge ou du défaut d’isolement qui fait tout couper.",
        image: img("1576446468729-7674e99608f5"),
      },
      {
        slug: "prise-hors-service",
        title: "Prise ou interrupteur HS",
        desc: "Prise qui chauffe, interrupteur qui grésille : réparation ou remplacement.",
        image: img("1751486289947-4f5f5961b3aa"),
      },
      {
        slug: "recherche-de-panne",
        title: "Recherche de panne",
        desc: "Mesures et tests circuit par circuit pour localiser le défaut.",
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
        image: img("1767514536575-82aaf8b0afc4"),
      },
      {
        slug: "cuisine-balma",
        title: "Cuisine ouverte · Balma",
        desc: "Îlot central alimenté, suspensions et spots sur variateur.",
        image: img("1682888813913-e13f18692019"),
      },
      {
        slug: "borne-blagnac",
        title: "Borne de recharge · Blagnac",
        desc: "Borne 7 kW dans un garage, avec ligne dédiée depuis le tableau.",
        image: img("1704475187766-058b6f7b7929"),
      },
      {
        slug: "restaurant-saint-cyprien",
        title: "Restaurant · Saint-Cyprien",
        desc: "Éclairage de salle en suspensions et mise aux normes de la cuisine.",
        image: img("1718221621618-e477ce33485a"),
      },
    ],
  },
];

// Le 5e câble alimente la section contact
export const CONTACT_SECTION = { id: "contact", label: "Contact" };

export const SECTIONS = [...CATEGORIES.map((c) => ({ id: c.id, label: c.label })), CONTACT_SECTION];
