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
  // Page de la prestation (contenu de démo, à faire relire par un électricien)
  duration: string;
  price: string;
  when: string[];
  faq: { q: string; a: string }[];
  image: string;
};

export type Category = {
  id: string;
  label: string;
  // Déroulé commun aux prestations de la section
  steps: { title: string; text: string }[];
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
    steps: [
      {
        title: "Visite et devis",
        text: "On vient voir sur place, on écoute ce que vous voulez et on vous remet un devis détaillé, gratuit.",
      },
      {
        title: "Préparation",
        text: "On fixe une date qui vous arrange et on prévoit tout le matériel pour ne pas revenir deux fois.",
      },
      {
        title: "Pose",
        text: "On installe proprement, en protégeant vos sols et vos meubles, et on nettoie en partant.",
      },
      {
        title: "Contrôle",
        text: "Chaque circuit est testé devant vous, et on vous explique comment tout fonctionne.",
      },
    ],
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
        duration: "1 à 4 h selon le nombre de points",
        price: "À partir de 90 € la prise ajoutée",
        when: [
          "Vous branchez tout sur des multiprises faute de prises au bon endroit",
          "Il manque un interrupteur en entrée de pièce ou en haut d’un escalier",
          "Vos prises sont anciennes, sans terre ou fendues",
          "Vous réaménagez une pièce : bureau, chambre d’enfant, salon",
        ],
        faq: [
          {
            q: "Faut-il casser les murs pour ajouter une prise ?",
            a: "Pas forcément. Quand c’est possible, on repique sur une prise voisine ou on passe par les plinthes et les cloisons creuses. Sinon, la saignée est rebouchée proprement, prête à peindre.",
          },
          {
            q: "Combien de prises peut-on mettre sur un même circuit ?",
            a: "La norme NF C 15-100 limite à 8 prises par circuit protégé en 16 A, ou 12 en 20 A. Au-delà, on crée un nouveau circuit depuis le tableau.",
          },
          {
            q: "Les prises USB, c’est aux normes ?",
            a: "Oui, à condition d’utiliser un appareillage certifié. Elles remplacent une prise classique dans le même boîtier.",
          },
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
        duration: "½ journée à 2 jours selon la pièce",
        price: "À partir de 80 € le point lumineux posé",
        when: [
          "Une pièce trop sombre ou éclairée par une seule ampoule au plafond",
          "Vous voulez des spots encastrés ou un éclairage sur variateur",
          "Vous installez des luminaires lourds ou suspendus haut",
          "Votre jardin ou votre allée n’est pas éclairé",
        ],
        faq: [
          {
            q: "Peut-on poser des spots dans n’importe quel plafond ?",
            a: "Dans un faux plafond en plaques de plâtre, oui. Dans une dalle béton, il faut prévoir un faux plafond ou des spots en saillie. On vous conseille selon votre configuration.",
          },
          {
            q: "Les variateurs marchent avec toutes les ampoules LED ?",
            a: "Non, il faut des ampoules dites dimmables et un variateur compatible LED. Sinon, la lumière clignote ou grésille.",
          },
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
        duration: "1 journée en moyenne",
        price: "À partir de 1 200 € posé",
        when: [
          "Construction ou extension de votre logement",
          "Votre tableau est plein et vous ajoutez des équipements",
          "Vous passez à une puissance d’abonnement supérieure",
          "Un diagnostic a relevé l’absence de protection différentielle",
        ],
        faq: [
          {
            q: "Combien de temps sans électricité ?",
            a: "La coupure dure généralement quelques heures dans la journée. On prévient à l’avance et on remet en service avant de partir.",
          },
          {
            q: "Mon tableau doit-il avoir une place de réserve ?",
            a: "Oui, la norme impose de garder environ 20 % de place libre pour pouvoir ajouter des circuits plus tard.",
          },
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
        duration: "½ à 1 journée",
        price: "À partir de 1 400 € borne comprise",
        when: [
          "Vous venez d’acheter une voiture électrique ou hybride rechargeable",
          "La recharge sur prise classique est trop lente",
          "Votre prise de garage chauffe pendant la recharge",
          "Vous êtes en copropriété et voulez une borne à votre place",
        ],
        faq: [
          {
            q: "Faut-il augmenter mon abonnement ?",
            a: "Pas toujours. Avec un délestage, la borne réduit sa puissance quand la maison consomme beaucoup, ce qui évite souvent de changer d’abonnement.",
          },
          {
            q: "Y a-t-il des aides ?",
            a: "Oui, un crédit d’impôt et, selon les cas, la prime Advenir. L’installateur doit être qualifié IRVE, ce qui est notre cas.",
          },
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
        duration: "½ journée pour la partie électrique",
        price: "À partir de 350 € la ligne dédiée",
        when: [
          "Vous faites poser une climatisation ou une pompe à chaleur",
          "Votre climatiseur fait sauter le disjoncteur au démarrage",
          "L’appareil est branché sur une prise ou une rallonge",
        ],
        faq: [
          {
            q: "Pourquoi une ligne dédiée ?",
            a: "Un climatiseur appelle beaucoup de courant au démarrage. Sur un circuit partagé, il fait sauter les protections et fait chauffer les câbles.",
          },
          {
            q: "Vous posez aussi la clim ?",
            a: "On s’occupe de l’électricité et on travaille avec des frigoristes partenaires pour la partie fluide.",
          },
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
        duration: "½ à 1 journée",
        price: "À partir de 600 € posée",
        when: [
          "Buée sur les vitres, moisissures ou odeurs persistantes",
          "Votre VMC actuelle est bruyante ou ne tourne plus",
          "Vous rénovez une salle de bain ou une cuisine",
        ],
        faq: [
          {
            q: "Simple ou double flux ?",
            a: "La simple flux suffit dans la plupart des logements. La double flux récupère la chaleur de l’air sortant : plus chère, elle est intéressante dans une maison bien isolée.",
          },
          {
            q: "Peut-on couper la VMC la nuit ?",
            a: "Non, elle doit fonctionner en continu pour renouveler l’air. Les modèles récents sont très silencieux.",
          },
        ],
        image: img("1574334292321-4844f63aefef"),
      },
    ],
  },
  {
    id: "renovation",
    label: "Rénovation",
    tagline: "On reprend l’existant pièce par pièce, sans tout casser.",
    steps: [
      {
        title: "Diagnostic de l’existant",
        text: "On fait le tour de l’installation, tableau compris, pour savoir ce qui peut être gardé.",
      },
      {
        title: "Plan et devis",
        text: "On dessine avec vous l’emplacement des prises et des lumières, et on chiffre poste par poste.",
      },
      {
        title: "Travaux",
        text: "On avance pièce par pièce, avec un planning clair et un circuit provisoire si vous habitez sur place.",
      },
      {
        title: "Conformité",
        text: "Contrôle final, attestation de conformité et schéma de l’installation remis en fin de chantier.",
      },
    ],
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
        duration: "1 à 3 semaines selon la surface",
        price: "À partir de 90 € / m² habitable",
        when: [
          "Votre installation a plus de 30 ans",
          "Vous achetez un logement ancien avant d’emménager",
          "Le diagnostic électrique de la vente a relevé de nombreux défauts",
          "Vous refaites les sols et les murs : c’est le bon moment",
        ],
        faq: [
          {
            q: "Peut-on vivre dans le logement pendant les travaux ?",
            a: "C’est possible en travaillant pièce par pièce, avec un circuit provisoire. Si le logement est vide, le chantier va plus vite.",
          },
          {
            q: "Qui s’occupe des rebouchages ?",
            a: "On rebouche nos saignées. Les finitions (enduit, peinture) peuvent être faites par nos partenaires ou par vous.",
          },
          {
            q: "Vous délivrez une attestation ?",
            a: "Oui, une attestation de conformité visée par le Consuel est remise à la fin, utile pour l’assurance et la revente.",
          },
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
        duration: "1 à 3 jours",
        price: "À partir de 1 500 € la cuisine",
        when: [
          "Vous changez de cuisine ou déplacez les meubles",
          "Plaques et four sont branchés sur le même circuit",
          "Il manque des prises sur le plan de travail",
          "Vous ajoutez un îlot central",
        ],
        faq: [
          {
            q: "À quel moment intervenir ?",
            a: "Avant la pose des meubles. On vient avec le plan du cuisiniste pour placer chaque sortie de câble au bon endroit.",
          },
          {
            q: "Combien de prises au-dessus du plan de travail ?",
            a: "La norme en demande au moins 4 pour une cuisine de plus de 4 m². En pratique, on en prévoit souvent 6.",
          },
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
        duration: "1 à 2 jours",
        price: "À partir de 900 € la salle de bain",
        when: [
          "Vous rénovez votre salle de bain ou créez une salle d’eau",
          "Une prise ou un interrupteur est trop près de la douche",
          "Vous ajoutez un sèche-serviettes ou un miroir lumineux",
        ],
        faq: [
          {
            q: "C’est quoi les volumes ?",
            a: "Ce sont des zones autour de la douche et de la baignoire où certains équipements sont interdits ou doivent être protégés contre l’eau. On place chaque élément au bon endroit.",
          },
          {
            q: "Peut-on mettre une prise près du lavabo ?",
            a: "Oui, en dehors des volumes 0, 1 et 2, et protégée par un différentiel 30 mA.",
          },
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
        duration: "1 journée",
        price: "À partir de 1 100 € posé",
        when: [
          "Votre tableau a encore des fusibles à cartouche ou en porcelaine",
          "Il n’y a pas d’interrupteur différentiel 30 mA",
          "Le tableau chauffe, sent le brûlé ou fait du bruit",
          "Votre assureur ou le diagnostic de vente le demande",
        ],
        faq: [
          {
            q: "Faut-il refaire tous les câbles ?",
            a: "Non. On garde les circuits existants s’ils sont en bon état et on les raccorde au nouveau tableau, en corrigeant ce qui est dangereux.",
          },
          {
            q: "Et si je n’ai pas de prise de terre ?",
            a: "On la contrôle systématiquement et on en crée une si elle manque ou si sa valeur est trop élevée.",
          },
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
        duration: "½ journée de diagnostic, puis 1 à 5 jours",
        price: "Diagnostic à partir de 150 €",
        when: [
          "Vous vendez ou louez votre logement",
          "Le diagnostic électrique a relevé des anomalies",
          "Vous sentez des petites décharges ou des odeurs de chaud",
          "Vous n’êtes pas sûr que votre installation soit sûre",
        ],
        faq: [
          {
            q: "Mise aux normes, c’est obligatoire ?",
            a: "Pas pour un logement ancien que vous habitez. Mais les défauts de sécurité doivent être corrigés, et le diagnostic est obligatoire pour vendre ou louer.",
          },
          {
            q: "Faut-il tout refaire ?",
            a: "Rarement. On corrige en priorité ce qui présente un danger, puis on vous propose le reste par étapes si vous le souhaitez.",
          },
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
        duration: "1 à 4 semaines",
        price: "Sur devis après visite",
        when: [
          "Câbles gainés de tissu, interrupteurs à bascule en porcelaine",
          "Pas de prise de terre dans la maison",
          "Boîtes de dérivation cachées dans les plafonds",
          "Vous voulez garder moulures, parquets ou pierres apparentes",
        ],
        faq: [
          {
            q: "Comment passer des câbles sans abîmer les moulures ?",
            a: "On utilise les vides existants, les planchers, les combles et, si besoin, des moulures électriques discrètes qui se fondent dans le décor.",
          },
          {
            q: "Les murs en pierre, c’est compliqué ?",
            a: "Un peu plus long, mais courant à Toulouse. On privilégie les passages par le sol ou le plafond plutôt que les saignées dans la pierre.",
          },
        ],
        image: img("1517581177682-a085bb7ffb15"),
      },
    ],
  },
  {
    id: "depannage",
    label: "Dépannage",
    tagline: "Une panne ? On diagnostique vite et on remet en sécurité.",
    steps: [
      {
        title: "Appel",
        text: "Vous nous décrivez la panne. On vous donne les premiers gestes de sécurité et un créneau d’intervention.",
      },
      {
        title: "Diagnostic",
        text: "Sur place, on mesure et on teste pour trouver l’origine exacte du problème.",
      },
      {
        title: "Réparation",
        text: "On répare immédiatement quand c’est possible, sinon on remet en sécurité et on revient avec la pièce.",
      },
      {
        title: "Explication",
        text: "On vous explique ce qui s’est passé et comment éviter que ça recommence.",
      },
    ],
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
        duration: "Intervention sous 2 à 4 h en urgence",
        price: "Déplacement et diagnostic à partir de 90 €",
        when: [
          "Plus de courant dans toute la maison mais les voisins en ont",
          "Une seule pièce ou un seul circuit ne fonctionne plus",
          "Le disjoncteur général refuse de se réarmer",
        ],
        faq: [
          {
            q: "Que vérifier avant de vous appeler ?",
            a: "Regardez si les voisins ont du courant, puis si un disjoncteur est descendu dans votre tableau. S’il redescend aussitôt, n’insistez pas et appelez-nous.",
          },
          {
            q: "Vous intervenez le week-end ?",
            a: "Oui, 7j/7 pour les urgences, avec une majoration indiquée avant de nous déplacer.",
          },
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
        duration: "1 à 3 h",
        price: "À partir de 120 € diagnostic compris",
        when: [
          "Le disjoncteur saute quand vous lancez un appareil précis",
          "Il saute sans raison apparente, parfois la nuit",
          "Il saute les jours de pluie ou d’humidité",
        ],
        faq: [
          {
            q: "C’est grave si ça saute souvent ?",
            a: "Le disjoncteur fait son travail : il vous protège. Mais il signale un vrai problème qu’il faut trouver, souvent un appareil ou un câble abîmé.",
          },
          {
            q: "Pourquoi ça saute quand il pleut ?",
            a: "Souvent à cause d’un équipement extérieur mal protégé contre l’eau : prise de jardin, éclairage, portail.",
          },
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
        duration: "30 min à 2 h",
        price: "À partir de 90 € la prise remplacée",
        when: [
          "Une prise noircie, fondue ou qui sent le chaud",
          "Un interrupteur qui grésille ou fait des étincelles",
          "Une prise qui ne tient plus dans le mur",
        ],
        faq: [
          {
            q: "Je peux la changer moi-même ?",
            a: "C’est possible en coupant le circuit, mais une prise qui a chauffé cache souvent une mauvaise connexion ou un câble abîmé derrière. Mieux vaut le vérifier.",
          },
          {
            q: "Pourquoi une prise chauffe ?",
            a: "Le plus souvent : un appareil trop puissant, une multiprise surchargée ou un fil mal serré dans la prise.",
          },
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
        duration: "1 à 4 h",
        price: "À partir de 150 €",
        when: [
          "Une panne intermittente que personne n’a trouvée",
          "Des lumières qui clignotent sans raison",
          "Un circuit qui fonctionne mal après des travaux",
        ],
        faq: [
          {
            q: "Comment trouvez-vous une panne sans casser ?",
            a: "Avec des mesures d’isolement et de continuité, circuit par circuit. On localise la zone du défaut avant d’ouvrir quoi que ce soit.",
          },
          {
            q: "Et si la panne ne se produit pas pendant votre venue ?",
            a: "On mesure l’isolement de chaque circuit, ce qui révèle souvent un défaut même quand tout semble marcher.",
          },
        ],
        image: img("1553873002-785d775854c9"),
      },
    ],
  },
  {
    id: "realisations",
    label: "Réalisations",
    tagline: "Quelques chantiers récents à Toulouse et autour.",
    steps: [
      {
        title: "Visite",
        text: "Relevé de l’existant et échange avec le client sur ses attentes.",
      },
      {
        title: "Devis et planning",
        text: "Chiffrage détaillé et dates calées avec les autres corps de métier.",
      },
      {
        title: "Chantier",
        text: "Travaux menés dans les délais, avec un point régulier sur l’avancement.",
      },
      {
        title: "Réception",
        text: "Contrôle final, attestation de conformité et visite avec le client.",
      },
    ],
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
        duration: "3 semaines",
        price: "Environ 9 500 €",
        when: [
          "Emménager rapidement dans un appartement sûr",
          "Garder les moulures et le parquet d’origine",
          "Ajouter des prises dans chaque pièce, trop rares à l’origine",
        ],
        faq: [],
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
        duration: "3 jours en deux interventions",
        price: "Environ 2 800 €",
        when: [
          "Une cuisine ouverte avec un îlot central fonctionnel",
          "Un éclairage réglable, du repas au travail sur le plan",
          "Aucun câble visible autour de l’îlot",
        ],
        faq: [],
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
        duration: "1 journée",
        price: "Environ 1 700 € avant aides",
        when: [
          "Recharger la voiture la nuit, en quelques heures",
          "Ne pas changer d’abonnement électrique",
          "Profiter du crédit d’impôt",
        ],
        faq: [],
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
        duration: "4 semaines pendant la fermeture",
        price: "Environ 14 000 €",
        when: [
          "Une salle plus chaleureuse le soir",
          "Une cuisine conforme pour les contrôles",
          "Rouvrir à la date prévue, sans retard",
        ],
        faq: [],
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
