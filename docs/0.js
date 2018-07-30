(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/ra-language-french/index.js":
/*!**************************************************!*\
  !*** ./node_modules/ra-language-french/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
    ra: {
        action: {
            delete: 'Supprimer',
            show: 'Afficher',
            list: 'Liste',
            save: 'Enregistrer',
            create: 'Créer',
            edit: 'Éditer',
            sort: 'Trier',
            cancel: 'Annuler',
            undo: 'Annuler',
            refresh: 'Actualiser',
            add: 'Ajouter',
            remove: 'Supprimer',
            add_filter: 'Ajouter un filtre',
            remove_filter: 'Supprimer ce filtre',
            back: 'Retour',
            bulk_actions:
                '%{smart_count} selectionné |||| %{smart_count} selectionnés',
        },
        boolean: {
            true: 'Oui',
            false: 'Non',
        },
        page: {
            list: 'Liste des %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Créer %{name}',
            dashboard: 'Tableau de bord',
            not_found: 'Page manquante',
            loading: 'Chargement',
        },
        input: {
            file: {
                upload_several:
                    'Déposez les fichiers à uploader, ou cliquez pour en sélectionner.',
                upload_single:
                    'Déposez le fichier à uploader, ou cliquez pour le sélectionner.',
            },
            image: {
                upload_several:
                    'Déposez les images à uploader, ou cliquez pour en sélectionner.',
                upload_single:
                    "Déposez l'image à uploader, ou cliquez pour la sélectionner.",
            },
            references: {
                all_missing: 'Impossible de trouver des données de références.',
                many_missing:
                    'Au moins une des références associées semble ne plus être disponible.',
                single_missing:
                    'La référence associée ne semble plus disponible.',
            },
        },
        message: {
            yes: 'Oui',
            no: 'Non',
            are_you_sure: 'Êtes-vous sûr ?',
            about: 'Au sujet de',
            not_found:
                "L'URL saisie est incorrecte, ou vous avez suivi un mauvais lien.",
            loading:
                'La page est en cours de chargement, merci de bien vouloir patienter.',
            invalid_form: "Le formulaire n'est pas valide.",
            delete_title: 'Supprimer %{name} #%{id}',
            delete_content:
                'Êtes-vous sur(e) de vouloir supprimer cet élément ?',
            bulk_delete_title:
                'Supprimer %{name} |||| Supprimer %{smart_count} %{name} éléments',
            bulk_delete_content:
                'Êtes-vous sur(e) de vouloir supprimer cet élément ? |||| Êtes-vous sur(e) de vouloir supprimer ces %{smart_count} éléments ?',
        },
        navigation: {
            no_results: 'Aucun résultat',
            page_out_of_boundaries: 'La page %{page} est en dehors des limites',
            page_out_from_end: 'Fin de la pagination',
            page_out_from_begin: 'La page doit être supérieure à 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} sur %{total}',
            next: 'Suivant',
            prev: 'Précédent',
        },
        auth: {
            username: 'Identifiant',
            password: 'Mot de passe',
            sign_in: 'Connexion',
            sign_in_error: "Échec de l'authentification, merci de réessayer",
            logout: 'Déconnexion',
        },
        notification: {
            updated:
                'Élément mis à jour |||| %{smart_count} élements mis à jour',
            created: 'Élément créé',
            deleted: 'Élément supprimé |||| %{smart_count} élements supprimés',
            bad_item: 'Élément inconnu',
            item_doesnt_exist: "L'élément n'existe pas",
            http_error: 'Erreur de communication avec le serveur',
            canceled: 'Action annulée',
        },
        validation: {
            required: 'Ce champ est requis',
            minLength: 'Minimum %{min} caractères',
            maxLength: 'Maximum %{max} caractères',
            minValue: 'Minimum %{min}',
            maxValue: 'Maximum %{max}',
            number: 'Doit être un nombre',
            email: 'Doit être un email',
        },
    },
};


/***/ }),

/***/ "./src/i18n/fr.js":
/*!************************!*\
  !*** ./src/i18n/fr.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _raLanguageFrench = __webpack_require__(/*! ra-language-french */ "./node_modules/ra-language-french/index.js");

var _raLanguageFrench2 = _interopRequireDefault(_raLanguageFrench);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({
  simple: {
    action: {
      close: 'Fermer',
      resetViews: 'Réinitialiser des vues'
    },
    'create-post': 'Nouveau post'
  }
}, _raLanguageFrench2.default, {
  resources: {
    posts: {
      name: 'Article |||| Articles',
      fields: {
        average_note: 'Note moyenne',
        body: 'Contenu',
        comments: 'Commentaires',
        commentable: 'Commentable',
        created_at: 'Créé le',
        notifications: 'Destinataires de notifications',
        nb_view: 'Nb de vues',
        password: 'Mot de passe (si protégé)',
        pictures: 'Photos associées',
        published_at: 'Publié le',
        teaser: 'Description',
        tags: 'Catégories',
        title: 'Titre',
        views: 'Vues'
      }
    },
    comments: {
      name: 'Commentaire |||| Commentaires',
      fields: {
        body: 'Contenu',
        created_at: 'Créé le',
        post_id: 'Article',
        author: {
          name: 'Auteur'
        }
      }
    },
    users: {
      name: 'User |||| Users',
      fields: {
        name: 'Name',
        role: 'Role'
      }
    }
  },
  post: {
    list: {
      search: 'Recherche'
    },
    form: {
      summary: 'Résumé',
      body: 'Contenu',
      miscellaneous: 'Extra',
      comments: 'Commentaires'
    },
    edit: {
      title: 'Article "%{title}"'
    }
  },
  comment: {
    list: {
      about: 'Au sujet de'
    }
  },
  user: {
    list: {
      search: 'Recherche'
    },
    form: {
      summary: 'Résumé',
      security: 'Sécurité'
    },
    edit: {
      title: 'Utilisateur "%{title}"'
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=0.js.map