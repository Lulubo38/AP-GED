import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import backgroundImage from './images/fond.jpg';

import Sidebar from './components/Sidebar/Sidebar';
import FileExplorer from './components/FileExplorer/FileExplorer';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import ActionBar from './components/ActionBar/ActionBar';

function App() {
  const initialFileStructure = {
    root: {
      type: 'folder',
      children: {
        folder1: {
          type: 'folder',
          children: {
            file1: { type: 'file' },
            file2: { type: 'file' },
          },
        },
        folder2: {
          type: 'folder',
          children: {
            file3: { type: 'file' },
          },
        },
      },
    },
  };

  const [fileStructure, setFileStructure] = useState(initialFileStructure);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users') // Mettez à jour le port si nécessaire
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });
  }, []);

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Sidebar />
      <div className="main-content">
        <ActionBar />
        <Breadcrumb />
        <FileExplorer fileStructure={fileStructure} />
        {/* Vous pouvez maintenant utiliser l'état 'users' pour afficher les utilisateurs ou passer cette information à d'autres composants */}
      </div>
    </div>
  );
}

export default App;
