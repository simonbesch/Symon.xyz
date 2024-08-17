create table role (
  id INT unsigned PRIMARY KEY auto_increment NOT NULL,
  name VARCHAR(255) NOT NULL
);

create table user (
  id int unsigned primary key auto_increment not null,
  email varchar(255) not null unique,
  password varchar(255) not null,
  role_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(role_id) REFERENCES role(id) ON DELETE CASCADE
);

create table skills (
  id int unsigned primary key auto_increment not null,
  name varchar(25) not null,
  level varchar(25) not null,
  levelCSS varchar(25) not null,
  description TEXT null,
  category varchar(25) not null,
  icon varchar(255) not null
);

create table projects (
  id int unsigned primary key auto_increment not null,
  title varchar(25) not null,
  description1 TEXT null,
  description2 TEXT null,
  description3 TEXT null,
  mates varchar(255) null,
  github varchar(255) null,
  online varchar(255) null,
  lien varchar(255) null,
  category varchar(25) not null,
  img1 varchar(255) null,
  img2 varchar(255) null,
  img3 varchar(255) null,
  img4 varchar(255) null,
  img5 varchar(255) null,
  img6 varchar(255) null,
  img7 varchar(255) null,
  img8 varchar(255) null,
  img9 varchar(255) null,
  img10 varchar(255) null
);

create table parkour (
  id int unsigned primary key auto_increment not null,
  date varchar(255) not null,
  lieu varchar(255) not null,
  poste varchar(255) not null,
  structure varchar(255) not null,
  type varchar(255) null,
  actuel BOOLEAN NOT NULL,
  description TEXT NULL
);

create table comms (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  description TEXT not null,
  pseudo varchar(255) not null,
  mail varchar(255) not null
);

create table all_infos (
  id int unsigned primary key auto_increment not null,
  dispo varchar(255) null,
  mail varchar(255) null,
  lnk varchar(255) null,
  github varchar(255) null,
  insta varchar(255) null,
  about TEXT null,
  info1 TEXT null,
  info2 TEXT null,
  info3 TEXT null,
  info4 TEXT null,
  info5 TEXT null
);

INSERT INTO all_infos (
  dispo,
  mail,
  lnk,
  github,
  insta,
  about,
  info1,
  info2,
  info3,
  info4,
  info5
) VALUES (
  'Disponible',
  'simonbescheron@gmail.com',
  'https://www.linkedin.com/in/simon-bescheron/',
  'https://github.com/simonbesch',
  'https://www.instagram.com/simonbesch/',
  'about',
  'info1',
  'info2',
  'info3',
  'info4',
  'info5'
);

INSERT INTO skills (
  name,
  level,
  levelCSS,
  description,
  category,
  icon
) VALUES (
  'Python',
  'En Cours',
  'vert',
  'meilleur language du monde',
  'Technos',
  'https://img.icons8.com/?size=100&id=13406&format=png&color=000000'
);
INSERT INTO projects (
  title,
  description1,
  description2,
  description3,
  github,
  online,
  lien,
  category,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10
) VALUES (
  'CP4',
  '',
  '',
  '',
  '',
  '',
  '',
  'checkpoint',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
);
INSERT INTO parkour (
  date,
  lieu,
  poste,
  structure,
  type,
  actuel,
  description
) VALUES (
  '2024',
  'Tours',
  'Etudiant Developpeur Web Full Stack',
  'Wild Code School',
  'CDD',
  1,
  'cool'
);

INSERT INTO role (id, name) VALUES 
(1, 'User'),
(2, 'Admin');

INSERT INTO user (
  email,
  password,
  role_id
) VALUES (
  'simonbescheron@gmail.com',
  '$argon2id$v=19$m=19,t=2,p=1$VnVjOHNEeDdCSERXTWR3VQ$n37MbA/7Q2p2Hg',
  2
);

