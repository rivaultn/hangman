# Jeu de pendu
Jeu de pendu créé dans le cadre du cours 
[Réalisez une application web avec React.js](https://openclassrooms.com/fr/courses/4664381-realisez-une-application-web-avec-react-js)
de la plateforme [Openclassroom](https://openclassrooms.com)

#### Instructions de l'exercice

Afin de valider les connaissances acquises jusqu’ici, vous allez faire un petit détour pour réaliser un autre jeu, 
plus facile à mettre en œuvre : un jeu de pendu… sans pendre qui que ce soit.

##### Deviner un mot ou une phrase
Le jeu du pendu consiste à faire deviner un mot ou une phrase, en essayant tour à tour des lettres possibles. 
Chaque essai révèle les lettres correspondantes dans le schéma du texte à deviner.

Dans le jeu classique, chaque essai infructueux (lettre non utilisée) fait progresser le dessin d’un pendu, et lorsque 
le dessin est complet (tête, corps, membres), on a perdu. C’est un jeu à deux, tour par tour, et la personne qui réalise
 l’ultime mauvais essai a perdu.

##### Pour cette activité, simplifions un peu
Afin de conserver une activité assez rapide à mettre en œuvre, on mettra de côté le côté « pendu » à proprement parler,
ainsi que le tour par tour, pour se concentrer sur la mécanique de découverte du mot. Des extensions possibles vous 
seront proposées au-delà de l'objectif principal.

Le jeu est donc orienté mono-joueur·se, et une partie consiste donc à tirer au sort un mot ou une phrase, afficher le 
masque associé, et proposer des saisies possibles pour toutes les lettres de l’alphabet latin. On peut alors essayer une
 lettre après l'autre, ce qui actualise le masque jusqu’à ce que tout le texte soit visible : on pourra alors 
 recommencer une partie.

Le but consiste donc, simplement, à trouver le texte en utilisant le moins d’essais possibles.

##### Consignes d’interface utilisateur
* L’affichage comprend deux parties : le masque de la devinette, et une série de boutons d'essai, à raison d’un par lettre.
 Par exemple, deux rangées de 13.
* Le masque utilise un _underscore_ ( _ ) pour toute lettre de la devinette qui n’a pas encore été révélé.
* On prend soin de bien séparer visuellement chaque lettre à deviner, pour faciliter la perception des tailles des mots.
* Pour simplifier la saisie et l’exploitation des lettres, on cantonnera les devinettes et les boutons à l'alphabet latin 
majuscule, sans signes diacritiques (accents, cédilles, etc.). Donc 26 lettres de A à Z.
* Les lettres déjà essayées doivent être signalées visuellement (par exemple, grisées). Il n'est pas obligatoire 
d'interdire une nouvelle tentative dessus, c'est comme vous voulez.
* Une fois le texte deviné, la liste des boutons de lettres est remplacée par un seul bouton qui permet de redémarrer une 
partie… sans avoir à recharger la page !

##### Consignes de réalisation
* Partez d’une nouvelle application générée avec  create-react-app  
* Vous pouvez retirer  index.css  et  logo.svg , et ce serait bien de changer le  <title>  de  public/index.html
* Le besoin est assez simple pour tout faire dans  App.js (et styler avec  App.css ), mais si vous tenez à découper en 
sous-composants (par exemple, pour le « clavier » de 26 touches), libre à vous.
* Le déroulement de la partie se base naturellement sur une évolution de l’état local du composant<App/>.
* Afin de vous permettre de vous concentrer sur React, vous trouverez ci-dessous une petite fonction utile qui construit 
le masque affiché à partir du texte à deviner et de la série des lettres déjà testées. Cette dernière est supposée être 
un Set (ES2015), mais vous pouvez en faire un simple tableau en remplaçant le.has() par un.includes().

## Prérequis

### Git

- plus d'informations sur git [here][git-github].
- Git [home][git-home] (téléchargement, documentation).

### Node.js et outils

- Télécharger [Node.js][node-download].

## Installation
### 1. Récupérer le code

Via Git, en clonant ce dépôt (`git clone` [hangman](https://github.com/rivaultn/hangman.git)

### 2. Installer les dépendances

- Installer les dépendances (`npm install`).

### 3. Exécuter le projet

- Exécuter le projet (`npm start`).

### 4. (Optionnel) Créer un build de développement 

- Créer un build de développement (`npm run build`).

## Built With

* [React.Js](https://github.com/facebook/react) - La librairie Javascript utilisée
* [Npm](https://github.com/npm/cli) - Le gestionnaire de paquet Javascript
* [Create React App](https://github.com/facebookincubator/create-react-app) - L'outil utilisé pour créer l'application

## Authors

* **Nicolas Rivault** - [rivaultn](https://github.com/rivaultn)
