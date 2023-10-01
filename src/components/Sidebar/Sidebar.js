import React from 'react';
import './Sidebar.css';
import folderIcon from '../ActionBar/folder-open-solid.svg'; // Icône pour les dossiers
import fileIcon from '../ActionBar/file-solid.svg';     // Icône pour les fichiers

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <img src={folderIcon} alt="Folder" style={{ width: '24px', height: '24px' }} />
          Dossier 1
        </li>
        <li>
          <img src={fileIcon} alt="File" style={{ width: '24px', height: '24px' }} />
          Fichier 1
        </li>
        {/* ... */}
      </ul>
    </div>
  );
}

export default Sidebar;
