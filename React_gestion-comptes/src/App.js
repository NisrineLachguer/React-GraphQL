import React, { useState } from 'react';
import './App.css';
import CompteList from './components/CompteList';
import CreateCompte from './components/CreateCompte';

function App() {
  const [activeTab, setActiveTab] = useState('list');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Gestion des Comptes
          </h1>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 mt-6">
        <div className="bg-white rounded-lg shadow-md p-2 inline-flex space-x-2">
          <button
            onClick={() => setActiveTab('list')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'list'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            📋 Liste des Comptes
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === 'create'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            ➕ Créer un Compte
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'list' && <CompteList />}
        {activeTab === 'create' && <CreateCompte />}
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 py-6 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2026 Gestion des Comptes - Application React avec GraphQL</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
