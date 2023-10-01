import React, { useState } from 'react';

const FileExplorer = ({ fileStructure }) => {
  // État local pour suivre les nœuds déroulés
  const [expandedNodes, setExpandedNodes] = useState({});

  // Fonction pour gérer le déroulement ou le repliement des nœuds
  const handleNodeClick = (nodeName) => {
    setExpandedNodes((prevState) => ({
      ...prevState,
      [nodeName]: !prevState[nodeName],
    }));
  };

  // Fonction de rendu des nœuds
  const renderTreeNode = (node, nodeName) => {
    const isFolder = node.type === 'folder';

    // Déterminez si ce nœud est déroulé ou replié en fonction de l'état local
    const isExpanded = expandedNodes[nodeName];

    // Définissez une classe CSS personnalisée pour les éléments de dossier et de fichier
    const nodeClassName = isFolder ? 'folder' : 'file';

    // Définissez un style en ligne pour la couleur du texte en bleu
    const textStyle = {
      color: '#007bff', // Couleur bleu clair pour le texte
    };

    return (
      <div key={nodeName} className={nodeClassName}>
        <span onClick={() => handleNodeClick(nodeName)} style={textStyle}>
          {isFolder ? (isExpanded ? '▼' : '▶') : '📄'} {nodeName}
        </span>
        {isExpanded &&
          isFolder &&
          Object.entries(node.children).map(([childName, childNode]) => (
            <div key={childName} style={{ marginLeft: '10px' }}>
              {renderTreeNode(childNode, childName)}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className="file-explorer">
      {renderTreeNode(fileStructure.root, 'root')}
    </div>
  );
};

export default FileExplorer;
