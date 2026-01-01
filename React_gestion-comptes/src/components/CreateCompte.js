import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SAVE_COMPTE } from '../graphql/mutations';
import { GET_ALL_COMPTES } from '../graphql/queries';
import { TypeCompte } from '../graphql/types';

/**
 * Composant pour créer un nouveau compte
 */
const CreateCompte = () => {
    const [solde, setSolde] = useState('');
    const [type, setType] = useState(TypeCompte.COURANT);

    const [saveCompte, { loading, error }] = useMutation(SAVE_COMPTE, {
        refetchQueries: [{ query: GET_ALL_COMPTES }],
        onCompleted: () => {
            // Réinitialiser le formulaire
            setSolde('');
            setType(TypeCompte.COURANT);
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!solde || parseFloat(solde) < 0) {
            alert('Veuillez entrer un solde valide');
            return;
        }

        saveCompte({
            variables: {
                compte: {
                    solde: parseFloat(solde),
                    type: type
                }
            }
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Créer un Compte</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="solde" className="block text-sm font-medium text-gray-700 mb-2">
                        Solde Initial
                    </label>
                    <input
                        type="number"
                        id="solde"
                        value={solde}
                        onChange={(e) => setSolde(e.target.value)}
                        step="0.01"
                        min="0"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0.00"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                        Type de Compte
                    </label>
                    <select
                        id="type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value={TypeCompte.COURANT}>Compte Courant</option>
                        <option value={TypeCompte.EPARGNE}>Compte Épargne</option>
                    </select>
                </div>

                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        <p className="text-sm">{error.message}</p>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${loading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
                        }`}
                >
                    {loading ? 'Création en cours...' : 'Créer le Compte'}
                </button>
            </form>
        </div>
    );
};

export default CreateCompte;
