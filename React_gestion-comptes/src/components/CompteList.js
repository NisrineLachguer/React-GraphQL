import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_COMPTES } from '../graphql/queries';

/**
 * Composant pour afficher la liste des comptes
 */
const CompteList = () => {
    const { loading, error, data } = useQuery(GET_ALL_COMPTES);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg m-4">
                <p className="font-bold">Erreur</p>
                <p>{error.message}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Liste des Comptes</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.allComptes.map((compte) => (
                    <div
                        key={compte.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">
                                Compte #{compte.id}
                            </h2>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${compte.type === 'COURANT'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-green-100 text-green-800'
                                }`}>
                                {compte.type}
                            </span>
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Solde:</span>
                                <span className="font-bold text-lg text-gray-900">
                                    {compte.solde.toFixed(2)} €
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-gray-600">Date de création:</span>
                                <span className="text-gray-700">
                                    {new Date(compte.dateCreation).toLocaleDateString('fr-FR')}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {data.allComptes.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">Aucun compte disponible</p>
                </div>
            )}
        </div>
    );
};

export default CompteList;
