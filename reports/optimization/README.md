<h1 align="center">Rapport d'optimisation</h1>

## Table des matières

- [Introduction](#introduction)
- [Version initiale](#version-initiale)
- [Recommandations appliquées](#recommandations-appliquées)
  1. [Optimisation des ressources](#1-optimisation-des-ressources)
  2. [Equivalents textuels](#2-equivalents-textuels)
  3. [Sémantique HTML](#3-sémantique-html)
  4. [Métadonnées](#4-correction-des-métadonnées)
  5. [Taille de police](#5-taille-du-texte)
  6. [Référencement non black hat](#6-référencement-black-hat)
  7. [Contraste des couleurs](#7-contraste-des-couleurs)
  8. [Focus](#8-focus)
  9. [Optimisation de la navigation](#9-optimisation-de-la-navigation)
  10. [Localisation](#10-localisation)
- [Version finale](#version-finale)

## Introduction

Ce rapport fait état des dix recommandations provenant du rapport d'analyse. Il décrit de manière approfondie les problèmes identifiés et les solutions envisagées et mises en place.

Chaque recommandation appliquée présente une comparaison, avec la version qui la précède, des résultats obtenus en terme de performance et d'accessibilité, à l'aide de ces deux outils:

- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Wave](https://wave.webaim.org/)

> **Note: Le rapport Lighthouse complet au format `pdf` est disponible en cliquant sur son image d'aperçu.**

## [Version initiale](https://build-initial--freddy-escobar-4-05112020.netlify.app/)

Ci-dessous, les résultats issus de la version initiale fournie telle quelle, sans aucun changements apportés.

<p>
    <a href="/reports/assets/initial/Lighthouse.pdf">
        <img src="/reports/assets/initial/Lighthouse_thumb.jpg" alt="Aperçu rapport Lighthouse" width="400">
    </a>
</p>

<p>
    <a href="https://wave.webaim.org/report#/https://build-initial--freddy-escobar-4-05112020.netlify.app/">
        <img src="/reports/assets/initial/Wave.jpg" alt="Rapport Wave" width="400">
    </a>
</p>

## Recommandations appliquées

Les recommandations appliquées se cumulent les unes avec les autres dans l'ordre chronologique suivant.

### [1. Optimisation des ressources](https://build-optimized-resources--freddy-escobar-4-05112020.netlify.app/)

La gestion des ressources impactent en premier lieu les performances d'un site.

#### Problèmes identifiés

- Le poids total des ressources téléchargées est de **8,274 KiB**. Ce qui est conséquent.

- Des ressources ne sont pas utilisées.

- Les ressources non critiques bloquent le rendu de la page pendant un certain temps.

#### Solutions apportées

- Minification des ressources javascript et css, ainsi que des documents html.

- Compression et conversion des images vers des formats optimisés.

- Génération de plusieurs dimensions d'images afin de les afficher selon la taille de l'écran (images dîtes "responsive").

- Suppression des ressources et du code non utilisés.

- Purge des règles non utilisées dans les fichiers css.

- Gestion des icônes par importation directe à l'aide de l'élément html "svg", plutôt que de charger une fonte de police.

- Report du chargement des ressources non critiques. Utilisation de la technique "lazy loading" pour les images non visibles à l'écran.

- Création de bundles javascript. Les bibliothèques tierces se trouvent dans un bundle séparé, pour mise en cache, indépendamment du code implémenté par les développeurs de La Chouette Agence.

- Le css critique, c’est-à-dire directement visible à l'écran au chargement du site, est inséré dans le document html. Le reste du css et chargé plus tard via une feuille de style externe.

#### Résultats

<p>
    <a href="/reports/assets/optimized-resources/Lighthouse.pdf">
        <img src="/reports/assets/optimized-resources/Lighthouse_thumb.jpg" alt="Aperçu rapport Lighthouse" width="400">
    </a>
</p>

#### Comparaison

| Lighthouse                 | Avant | Après | Gain    |
| -------------------------- | ----- | ----- | ------- |
| **Performance**            | 74    | 97    | **+23** |
| **Accessibilité**          | 84    | 84    |   0     |
| **Pratiques recommandées** | 86    | 93    | **+7**  |
| **SEO**                    | 78    | 78    |   0     |

### [2. Equivalents textuels](https://build-textual-equivalents--freddy-escobar-4-05112020.netlify.app/)

Une mauvaise gestion des équivalents textuels peut dégrader les performances. Cependant, la principale optimisation concerne ici l'accessibilité et le SEO.

#### Problèmes identifiés

- Des images avec du texte sont utilisées. Cela génère des requêtes supplémentaires inutiles. Mais surtout, cela "empêche" les moteurs de recherche d'accéder au contenu de ce texte.

- Le texte alternatif concernant les images n'est ni pertinent, ni concis.

- Les champs du formulaire de contact n'ont pas de label associé.

- Certains liens n'ont pas d'intitulé.

#### Solutions apportées

- Les images avec du texte ont été remplacées par leur équivalent en html.

- Les images ont un texte alternatif clair et concis via l'attribut `alt`.

- Les champs du formulaire de contact ont dorénavant un label associé grâce aux attributs `id` et `for`.

- Les liens qui ne comportent pas de texte, ont désormais un attribut `aria-label` afin de leur donner un intitulé.

#### Résultats

<p>
    <a href="/reports/assets/textual-equivalents/Lighthouse.pdf">
        <img src="/reports/assets/textual-equivalents/Lighthouse_thumb.jpg" alt="Aperçu rapport Lighthouse" width="400">
    </a>
</p>

<p>
    <a href="https://wave.webaim.org/report#/https://build-textual-equivalents--freddy-escobar-4-05112020.netlify.app/">
        <img src="/reports/assets/textual-equivalents/Wave.jpg" alt="Rapport Wave" width="400">
    </a>
</p>

#### Comparaison

| Lighthouse                 | Avant | Après | Gain    |
| -------------------------- | ----- | ----- | ------- |
| **Performance**            | 97    | 99    | **+2**  |
| **Accessibilité**          | 84    | 94    | **+10** |
| **Pratiques recommandées** | 93    | 93    |   0     |
| **SEO**                    | 78    | 78    |   0     |

| Wave                     | Avant | Après | Gain    |
| ------------------------ | ----- | ----- | ------- |
| **Erreurs**              | 5     | 1     | **-4**  |
| **Alertes**              | 12    | 10    | **-2**  |
| **Éléments structurés**  | 15    | 18    | **+3**  |
| **Erreurs de contraste** | 29    | 31    | **+2**  |
| **Fonctionnalités**      | 7     | 6     | **-1**  |
| **ARIA**                 | 0     | 11    | **+11** |

### [3. Sémantique HTML](https://build-semantic-html--freddy-escobar-4-05112020.netlify.app/)

La sémantique HTML permet une meilleure compréhension du contenu du site, de la part des outils d'accessibilité, et des moteurs de recherche.

#### Problème identifié

- Le contenu des documents HTML n'est pas structuré à l'aide de balises sémantique.

#### Solution apportée

- Utilisation des balises sémantiques pour donner du sens et un rôle au contenu.

#### Résultats

<p>
    <a href="https://wave.webaim.org/report#/https://build-semantic-html--freddy-escobar-4-05112020.netlify.app/">
        <img src="/reports/assets/semantic-html/Wave.jpg" alt="Rapport Wave" width="400">
    </a>
</p>

#### Comparaison

| Wave                     | Avant | Après | Gain   |
| ------------------------ | ----- | ----- | -----  |
| **Erreurs**              | 1     | 1     | 0      |
| **Alertes**              | 10    | 9     | **-1** |
| **Éléments structurés**  | 18    | 20    | **+2** |
| **Erreurs de contraste** | 31    | 31    | 0      |
| **Fonctionnalités**      | 6     | 6     | 0      |
| **ARIA**                 | 11    | 11    | 0      |

### [4. Correction des métadonnées](https://build-metadatas--freddy-escobar-4-05112020.netlify.app/)

Les méta-données donnent des indications très importantes pour décrire les pages aux moteurs de recherche ainsi qu'aux outils d'accessibilité.

#### Problèmes identifiés

- Le titre des pages est absent.
- La description des pages n'est pas pertinente.

#### Solutions apportées

- Ajout d'un titre unique, pertinent et concis pour chaque page.
- Modification de la description des pages. Celles-ci sont maintenant plus pertinentes et uniques.

#### Résultats

<p>
    <a href="/reports/assets/metadatas/Lighthouse.pdf">
        <img src="/reports/assets/metadatas/Lighthouse_thumb.jpg" alt="Aperçu rapport Lighthouse" width="400">
    </a>
</p>

#### Comparaison

| Lighthouse                 | Avant | Après | Gain   |
| -------------------------- | ----- | ----- | ------ |
| **Performance**            | 99    | 99    |   0    |
| **Accessibilité**          | 94    | 94    |   0    |
| **Pratiques recommandées** | 93    | 93    |   0    |
| **SEO**                    | 78    | 86    | **+8** |

### [5. Taille du texte](https://build-font-size--freddy-escobar-4-05112020.netlify.app/)

La taille des polices de fonte est importante pour la lisibilité du texte, notamment sur mobile.

#### Problème identifié

- Certains éléments du site, ont une taille de police beaucoup trop petite.

#### Solutions apportées

- Augmentation de la taille de la police par défaut sur la balise `body`.
- Ajustement des éléments dont la taille de la police définie est trop petite.

#### Résultats

<p>
    <a href="/reports/assets/font-size/Lighthouse.pdf">
        <img src="/reports/assets/font-size/Lighthouse_thumb.jpg" alt="Aperçu rapport Lighthouse" width="400">
    </a>
</p>

#### Comparaison

| Lighthouse                 | Avant | Après | Gain   |
| -------------------------- | ----- | ----- | ------ |
| **Performance**            | 99    | 99    |   0    |
| **Accessibilité**          | 94    | 94    |   0    |
| **Pratiques recommandées** | 93    | 93    |   0    |
| **SEO**                    | 86    | 94    | **+8** |

### [6. Référencement Black Hat](https://build-no-black-hat--freddy-escobar-4-05112020.netlify.app/)

Le réfèrencent appelée "black hat" consiste à utiliser des techniques non recommandées, voire pénalisées ou interdites, par les moteurs de recherche, afin d'accroître la visibilité du site.

#### Problèmes identifiés

- Utilisation de la technique "Cloaking", qui permet de fournir un affichage diffèrent de la page web selon le visiteur.

- Présence massive de liens de retour vers des annuaires sans rapport avec le contenu du site web.

#### Solutions apportées

- Suppression du code html utilisant la technique de cloaking.
- Suppression des liens de retour.

#### Résultats

<p>
    <a href="/reports/assets/no-black-hat/Lighthouse.pdf">
        <img src="/reports/assets/no-black-hat/Lighthouse_thumb.jpg " alt="Aperçu rapport Lighthouse" width="400">
    </a>
</p>

<p>
    <a href="https://wave.webaim.org/report#/https://build-no-black-hat--freddy-escobar-4-05112020.netlify.app/">
        <img src="/reports/assets/no-black-hat/Wave.jpg" alt="Rapport Wave" width="400">
    </a>
</p>

#### Comparaison

| Lighthouse                 | Avant | Après | Gain   |
| -------------------------- | ----- | ----- | ------ |
| **Performance**            | 99    | 100   | **+1** |
| **Accessibilité**          | 94    | 94    |   0    |
| **Pratiques recommandées** | 93    | 93    |   0    |
| **SEO**                    | 94    | 100   | **+6** |

| Wave                     | Avant | Après | Gain    |
| ------------------------ | ----- | ----- | ------- |
| **Erreurs**              | 1     | 1     |   0     |
| **Alertes**              | 9     | 7     | **-2**  |
| **Éléments structurés**  | 20    | 17    | **-3**  |
| **Erreurs de contraste** | 31    | 6     | **-25** |
| **Fonctionnalités**      | 6     | 6     |   0     |
| **ARIA**                 | 11    | 11    |   0     |

### [7. Contraste des couleurs](https://build-color-contrast--freddy-escobar-4-05112020.netlify.app/)

Le contraste des couleurs entre le texte et le fond, permet une bonne lisibilité.

#### Problème identifié

- Certains éléments du site, ont un contraste entre la couleur du texte et du fond trop faible.

#### Solution apportée

- Utilisation d'un ratio de contraste suivant les critères du [WCAG 2.1](https://www.w3.org/TR/WCAG21/#contrast-minimum)

#### Résultats

<p>
    <a href="/reports/assets/color-contrast/Lighthouse.pdf">
        <img src="/reports/assets/color-contrast/Lighthouse_thumb.jpg" alt="Aperçu rapport Lighthouse" width="400">
    </a>
</p>

<p>
    <a href="https://wave.webaim.org/report#/https://build-color-contrast--freddy-escobar-4-05112020.netlify.app/">
        <img src="/reports/assets/color-contrast/Wave.jpg" alt="Rapport Wave" width="400">
    </a>
</p>

#### Comparaison

| Lighthouse                 | Avant | Après | Gain   |
| -------------------------- | ----- | ----- | ------ |
| **Performance**            | 100   | 100   |   0    |
| **Accessibilité**          | 94    | 97    | **+3** |
| **Pratiques recommandées** | 93    | 93    |   0    |
| **SEO**                    | 100   | 100   |   0    |

| Wave                     | Avant | Après | Gain   |
| ------------------------ | ----- | ----- | ------ |
| **Erreurs**              | 1     | 1     |   0    |
| **Alertes**              | 7     | 7     |   0    |
| **Éléments structurés**  | 17    | 17    |   0    |
| **Erreurs de contraste** | 6     | 0     | **-6** |
| **Fonctionnalités**      | 6     | 6     |   0    |
| **ARIA**                 | 11    | 11    |   0    |

### [8. Focus](https://build-focus--freddy-escobar-4-05112020.netlify.app/)

Le focus des éléments interactifs permet de naviguer sur un site à l'aide d'un clavier.

#### Problèmes identifiés

- Certains éléments du site n'ont pas de focus visuellement identifiables.

- Les modal utilisés pour les images qui présentent les réalisations de La Chouette Agence ne gèrent pas le focus.

#### Solutions apportées

- Ajout d'un style css qui permet d'identifier les éléments portants le focus.

- Ajout de l'attribut `tabindex` pour corriger le focus sur les modal.

Suite à ces corrections, les résultats suivants ont été obtenus:

#### Résultats

<p>
    <img src="/reports/assets/focus/overview.gif" alt="Aperçu du focus sur le site" width="400">
</p>

### [9. Optimisation de la navigation](https://build-optimized-navigation--freddy-escobar-4-05112020.netlify.app/)

La navigation d'un site web est un élément important pour l'expérience utilisateur. Celle-ci doit être bien pensée, afin de faciliter l'exploration du contenu du site par les moteurs de recherche et les outils d'accessibilité.

#### Problèmes identifiés

- Une page dédiée au formulaire de contact est superflue.

- Il n'y a pas de liens renvoyant vers les différentes sections de la page d'accueil.

- Redondances des liens vers la page de contact.

#### Solutions apportées

- Suppression de la page de contact, et intégration du formulaire de contact sur la page d'accueil.

- Ajout de liens à la barre de navigation vers les différentes sections de la page d'accueil.

- Ajout d'un bouton qui apparaît après le défilement de la page vers le bas, et qui permet de remonter tout en haut de la page.

#### Résultats

<p>
    <a href="https://wave.webaim.org/report#/https://build-optimized-navigation--freddy-escobar-4-05112020.netlify.app/">
        <img src="/reports/assets/optimized-navigation/Wave.jpg" alt="Rapport Wave" width="400">
    </a>
</p>

#### Comparaison

| Wave                     | Avant | Après | Gain   |
| ------------------------ | ----- | ----- | ------ |
| **Erreurs**              | 1     | 1     |   0    |
| **Alertes**              | 7     | 0     | **-7** |
| **Éléments structurés**  | 17    | 17    |   0    |
| **Erreurs de contraste** | 0     | 0     |   0    |
| **Fonctionnalités**      | 6     | 10    | **+4** |
| **ARIA**                 | 11    | 13    | **+2** |

### [10. Localisation](https://build-localization--freddy-escobar-4-05112020.netlify.app/)

La localisation d'un site web et ce qui permet de définir dans quelle(s) langue(s) est disponible le contenu.

#### Problème identifié

- La valeur donnée à l'attribut `lang` sur la balise `html` qui permet de définir de manière globale la langue utilisée sur le site, est invalide.

#### Solution apportée

- Modification de la valeur afin de définir la langue du contenu comme étant du français.

#### Résultats

<p>
    <a href="/reports/assets/localization/Lighthouse.pdf">
        <img src="/reports/assets/localization/Lighthouse_thumb.jpg" alt="Aperçu rapport Lighthouse" width="400">
    </a>
</p>

<p>
    <a href="https://wave.webaim.org/report#/https://build-localization--freddy-escobar-4-05112020.netlify.app/">
        <img src="/reports/assets/localization/Wave.jpg" alt="Rapport Wave" width="400">
    </a>
</p>

#### Comparaison

| Lighthouse                 | Avant | Après | Gain   |
| -------------------------- | ----- | ----- | ------ |
| **Performance**            | 100   | 100   |   0    |
| **Accessibilité**          | 97    | 100   | **+3** |
| **Pratiques recommandées** | 93    | 93    |   0    |
| **SEO**                    | 100   | 100   |   0    |

| Wave                     | Avant | Après | Gain   |
| ------------------------ | ----- | ----- | ------ |
| **Erreurs**              | 1     | 0     | **-1** |
| **Alertes**              | 0     | 0     |   0    |
| **Éléments structurés**  | 17    | 17    |   0    |
| **Erreurs de contraste** | 0     | 0     |   0    |
| **Fonctionnalités**      | 10    | 11    | **+1** |
| **ARIA**                 | 13    | 13    |   0    |

## [Version finale](https://freddy-escobar-4-05112020.netlify.app/)

Nous sommes maintenant en mesure de comparer les performances et l'accessibilité entre la version initiale du site, et celles qui incorporent les dix recommandations présentées lors de l'audit.

### Résultats

<p>
    <a href="/reports/assets/master/Lighthouse.pdf">
        <img src="/reports/assets/master/Lighthouse_thumb.jpg" alt="Aperçu rapport Lighthouse" width="400">
    </a>
</p>

<p>
    <a href="https://wave.webaim.org/report#/https://freddy-escobar-4-05112020.netlify.app/">
        <img src="/reports/assets/master/Wave.jpg" alt="Rapport Wave" width="400">
    </a>
</p>

### Comparaison

| Lighthouse                 | Avant | Après | Gain    |
| -------------------------- | ----- | ----- | ------- |
| **Performance**            | 74    | 100   | **+26** |
| **Accessibilité**          | 84    | 100   | **+16** |
| **Pratiques recommandées** | 86    | 93    | **+7**  |
| **SEO**                    | 78    | 100   | **+22** |

| Wave                     | Avant | Après | Gain    |
| ------------------------ | ----- | ----- | ------- |
| **Erreurs**              | 5     | 0     | **-5**  |
| **Alertes**              | 12    | 0     | **-12** |
| **Éléments structurés**  | 15    | 17    | **+2**  |
| **Erreurs de contraste** | 29    | 0     | **-29** |
| **Fonctionnalités**      | 7     | 11    | **+4**  |
| **ARIA**                 | 0     | 13    | **+13** |
