## Commande Repas 2: Macdonald's

Création API + QRCode de l'application Web Macdonald's

![Web Macdonald's]()

## Table des matières

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table des matières</summary>
  <ol>
    <li>
      <a href="#Contexte-du-projet">Contexte du projet</a>
    </li>
    <li><a href="#Capture-d'écran-de-l'application">Capture d'écran de l'application</a></li>
    <li><a href="#technologies-utilisées">technologies utilisées</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#COMMENT-COURIR">COMMENT COURIR !!</a></li>
    <li><a href="#Author">Author</a></li>
  </ol>
</details>

## Contexte du projet

Le Snack Délice vient d’ouvrir un restaurant de fast food au centre-ville, ce snack propose un service similaire à MacDonald’s Afin de réaliser ça, il faut bien comprendre premièrement le système de la borne McDo,

Base de données :

Ajouter Manuellement dans la base de données MongoDB les enregistrements nécessaires pour le bon fonctionnement de la partie FrontOffice (Client)

Application Web:

Créer un application web dynamique en Node JS (Back End) et HTML, CSS, JavaScript... (Front End)

Étape 1 :

Choix de la langue : une interface qui permet l’utilisateur de choisir la langue (AR-FR-AN) Étape 2 :

Choix du mode de la commande : une interface qui permet à l'utilisateur de choisir entre manger sur place et à emporter. Étape 3:

Prise de la commande : une interface qui permet à l'utilisateur de filtrer les produits en utilisant les catégories, ainsi un pop-up qui s’affiche si vous avez un code promo à appliquer. La commande peut être composée d’un ou plusieurs Menu ou Produits et chaque menu peut contenir des produits déjà prédéfinis Exemple : J’ai choisi le menu (petite faim), j’aurai les produits (Chiken, Beef…), par la suite j’ai choisi Chiken, j’aurai (Chiken Chesse, Chiken burger…) Plus des détails dans les ressources 1 et 2 : la vidéo et la matrice d'amplitude du restaurant.

Étape 4 :

Choix des suppléments de la commande : un pop-up qui permet à l'utilisateur de choisir des suppléments genre (boissons, frites…) Étape 5 :

Choix des suppléments de la commande : une interface qui permet à l'utilisateur de compléter la commande en ajoutant la boisson et les frites… Étape 6 :

Confirmation de la commande : une interface qui permet l’utilisateur de confirmer la commande ou bien ajouter/modifier le nombre des produits ou menu (ex : x1, x2, x3) Étape 7 :

Ajout du numéro (Service à table) : une interface qui permet à l'utilisateur d’entrer le numéro disponible pour avoir le service à table.

Étape 7-1 :

Chaque produit ou menu à un nombre de point de fidélité qui va servir le client par la suite de bénéficier d’une réduction lors de sa prochaine commande Chaque 10 points= 2 Dhs Tout produit qui est compris entre 7 et 20 dhs vaut 5 points Tout produit qui est compris entre 21 et 49 vaut 12 points Tout produit supérieur à 50 Dhs vaut 20 points Les points de fidélité seront stockés dans un QR Code

Étape 8 :

Choix de la méthode de paiement : une interface qui permet à l'utilisateur de choisir est ce qu’il va payer en espèces ou avec carte bancaire. **Étape 9 **(si le paiement par carte) :

Choisir le type de la carte : un pop-up pour choisir le type de la carte (MasterCard, Visa…), **Étape 10 : **Validation du paiement Générer un document PDF qui contient le détail de la commande du client

**Étape 11 **:

Chaque commande passée doit être enregistrée dans le system via un fichier texte qui va être nommé par la date d’opération

## Capture d'écran de l'application

![]()

## Capture d'écran de Trello

![]()

## Diagramme

![]()

## Prérequis (technologies utilisées)

MongoDB
Node.js
HTML5/CSS3
JavaScript
MySQL
GIT
Pédagogie active

## License

Distributed under the MIT License. See LICENSE for more information.

## COMMENT COURIR !!

```bash
    # how to run
Pour Exécuter ce Projet, vous devez suivre ces étapes :
Étape 1: installé nodejs sur votre PC: https://nodejs.org/en/download/ .
Étape 2: Extraire le fichier.
Étape 3: Ouvrez le dossier avec Nimporte quel IDE (VScode / notepad .....)
Étape 4: installez node-module avec cette commande << npm install --save >>.
'npm install nodemailer --save'
'npm install handlebars --save'
'npm install fs --save'
```

Maintenant, les étapes suivantes comment connecter la base de données

```

Étape 5: installez Apache (Xampp / wamp).
Étape 6: Ouvrez un navigateur et accédez à l'URL "http://localhost/phpmyadmin/".
Étape 8: Créez une base de données nommant "MacdonaldDB" puis cliquez sur l'onglet d'importation
Étape 9: Cliquez sur parcourir le fichier et sélectionnez le fichier "MacdonaldDB.sql qui se trouve dans le dossier
Étape 10: Cliquez sur aller.

```

```
Étape 11: Ouvrez le Terminal et appuyez sur npm start

    ## Enjoy

```

start app via https://localhost:3000/

## Author

Yassine Cherkaoui
