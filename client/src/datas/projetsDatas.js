const allProjets = [
  {
    name: "Virtu'Art",
    description: `
    Virtu'Art est notre premier projet dans le cadre de la formation à la Wild Code School.
    `,
    description2: `
    Consigne :
    LE SITE :
    Le site tient sur une page /
    Le site ressemble aux wireframes (maquettes) /
    Le site ne contient que des ressources valides (libres / gratuites / personnelles) /
    Le site est déployé (GitHub Pages) /
    LE CODE : 
    Le code ne se répète pas et ne contient pas de code mort (code propre) /
    Le code est valide (W3C Validator) /
    Le code est disponible sur GitHub /
    Les commits sont clairs et explicites
    `,
    description3: `
    Appréciation : Woaw ! Quelle masterclass ! Bravo ! N'hésitez pas à le fork pour les personnes qui ne l'ont pas et à le partager sur les réseaux, car c'est magnifique !
    `,
    github: "https://github.com/fanny-pretre/art-galery-2",
    online: "https://fanny-pretre.github.io/art-galery-2/",
    lien: "",
    mates: "Fanny PrêTre, David Lanzetti, NICOLAS",
    id: "1",
    upload: "yes",
    category: "projets",
    img: "https://github.com/simonbesch/PorteFolioImg/blob/main/img/p1.png?raw=true",
    img2: "",
    img3: "https://github.com/simonbesch/PorteFolioImg/blob/main/img/Logo%20(2).png?raw=true",
    img4: "https://github.com/simonbesch/PorteFolioImg/blob/main/img/home-hero-landscape.jpg?raw=true",
    img5: "https://github.com/simonbesch/PorteFolioImg/blob/main/img/free-photo-of-lunettes-de-soleil-art-creatif-festival.jpeg?raw=true",
    img6: "",
    img7: "",
    img8: "",
    img9: "",
    img10: "",
  },
  {
    name: "Globe Guide",
    description: `Application Web

Votre tâche consiste à développer une application Web en utilisant React ainsi qu'une API. Vous devrez également utiliser un framework CSS pour le design, par exemple :

    TailwindCSS
    PicoCSS
    Bootstrap
    Styled-Component
    etc.

Vous pouvez également utiliser SCSS pour le style.`,
    description2: ` API

Vous avez la liberté de choisir l'API publique qui vous inspire le plus. Votre objectif sera de concevoir votre application autour de cette API. Vous devrez récupérer les données et les intégrer à votre application.`,
    description3: `Gestion de projet

Vous devez suivre la méthodologie Agile SCRUM pour la gestion de projet, ce qui implique :

    La définition des rôles
    Des rendez-vous réguliers avec le client
    Une utilisation appropriée de Git & Github
    Des commits clairs et explicites
    Les pull requests (PRs) ne doivent contenir qu'une seule fonctionnalité à la fois, sinon ils seront refusés.
    Du code propre qui ne se répète pas et ne contient pas de code inutile.
`,
    github:
      "https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-CrewDragon-P2-Team1",
    online: "https://globe-guide.netlify.app/",
    lien: "",
    mates: "Fanny PrêTre, Mohamed Jebri, Baptiste Cazenave, Laurent",
    id: "2",
    upload: "yes",
    category: "projets",
    img: "https://github.com/WildCodeSchool-2024-02/JS-RemoteFR-CrewDragon-P2-Team1/blob/dev/client/src/assets/images/Gif.gif?raw=true",
    img2: "https://github.com/simonbesch/PorteFolioImg/blob/main/img/p2.png?raw=true",
    img3: "https://github.com/simonbesch/PorteFolioImg/blob/main/img/Logo.png?raw=true",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    img9: "",
    img10: "",
  },
  {
    name: "",
    description: "Projet 3",
    description2: "Description supplémentaire 1",
    description3: "Description supplémentaire 2",
    github: "",
    online: "",
    lien: "",
    mates: "",
    id: "3",
    upload: "no",
    category: "projets",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    img9: "",
    img10: "",
  },
  {
    name: "Checkpoint 1",
    description: "",
    description2: "Description supplémentaire 1",
    description3: "Description supplémentaire 2",
    github: "",
    online: "",
    lien: "",
    mates: "",
    id: "4",
    upload: "yes",
    category: "checkPoints",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    img9: "",
    img10: "",
  },
  {
    name: "Checkpoint 2",
    description: "",
    description2: "Description supplémentaire 1",
    description3: "Description supplémentaire 2",
    github: "",
    online: "",
    lien: "",
    mates: "",
    id: "5",
    upload: "no",
    category: "checkPoints",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    img9: "",
    img10: "",
  },
  {
    name: "",
    description: "",
    description2: "Description supplémentaire 1",
    description3: "Description supplémentaire 2",
    github: "",
    online: "",
    lien: "",
    mates: "",
    id: "6",
    upload: "no",
    category: "ateliersQuestes",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    img9: "",
    img10: "",
  },
  {
    name: "Casino Site",
    description:
      "Site pour jouer au pierre feuille ciseau et aux dés en js vanilla",
    description2: "Description supplémentaire 1",
    description3: "Description supplémentaire 2",
    github: "",
    online: "",
    lien: "",
    mates: "",
    id: "7",
    upload: "no",
    category: "sitesPerso",
    img: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    img9: "",
    img10: "",
  },
  {
    name: "Pedals Board",
    description: "Ce projet est un projet en électronique et en musique.",
    description2:
      "Le but étant de concevoir ce qu'on appelle une PedalsBoard pour réunir ses pédales d'effets de guitare.",
    description3:
      "Utilisant soudure et usinage, j'ai pu assembler ma Board avec du matériel de récupérations que je customiserai en pyrogravant sur le bois.",
    github: "",
    online: "",
    lien: "",
    mates: "",
    id: "8",
    upload: "yes",
    category: "projetsPerso",
    img: "https://github.com/simonbesch/PorteFolioImg/blob/main/img/IMG_20240527_173033.jpg?raw=true",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    img9: "",
    img10: "",
  },
  {
    name: "Levier Custom",
    description: "Ce projet est un projet utilisant électronique et code.",
    description2:
      "Mon levier de vitesse ayant rendu l'âme, je me suis dit que j'allais ne fabriquer un et en lui apportant une petite touche en plus.",
    description3:
      "A l'aide d'un arduino, les yeux s'allume dans le noir et je peux changer les couleurs en appuyant sur un bouton.",
    github: "",
    online: "",
    lien: "",
    mates: "",
    id: "9",
    upload: "yes",
    category: "projetsPerso",
    img: "https://github.com/simonbesch/PorteFolioImg/blob/main/img/IMG_20240528_180808.jpg?raw=true",
    img2: "https://github.com/simonbesch/PorteFolioImg/blob/main/img/IMG_20240528_180742.jpg?raw=true",
    img3: "",
    img4: "",
    img5: "",
    img6: "",
    img7: "",
    img8: "",
    img9: "",
    img10: "",
  },
];

export default allProjets;
