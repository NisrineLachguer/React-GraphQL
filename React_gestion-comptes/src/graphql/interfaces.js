/**
 * @typedef {Object} Compte
 * @property {string} id - Identifiant unique du compte
 * @property {number} solde - Solde du compte
 * @property {string} dateCreation - Date de création du compte
 * @property {string} type - Type de compte (COURANT ou EPARGNE)
 */

/**
 * @typedef {Object} Transaction
 * @property {string} id - Identifiant unique de la transaction
 * @property {string} type - Type de transaction (DEPOT ou RETRAIT)
 * @property {number} montant - Montant de la transaction
 * @property {string} date - Date de la transaction
 * @property {Compte} compte - Compte associé à la transaction
 */

/**
 * @typedef {Object} SoldeStats
 * @property {number} count - Nombre de comptes
 * @property {number} sum - Somme totale des soldes
 * @property {number} average - Moyenne des soldes
 */

/**
 * @typedef {Object} TransactionStats
 * @property {number} count - Nombre total de transactions
 * @property {number} sumDepots - Somme totale des dépôts
 * @property {number} sumRetraits - Somme totale des retraits
 */

/**
 * @typedef {Object} CompteRequest
 * @property {number} solde - Solde initial du compte
 * @property {string} type - Type de compte (COURANT ou EPARGNE)
 */

/**
 * @typedef {Object} TransactionRequest
 * @property {string} type - Type de transaction (DEPOT ou RETRAIT)
 * @property {number} montant - Montant de la transaction
 * @property {string} compteId - Identifiant du compte concerné
 */

// Export des types pour utilisation dans d'autres fichiers
export default {};