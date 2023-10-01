import React, { useState } from 'react';
import './ActionBar.css';
import folderIcon from '../svg/plus-solid.svg'; // Importez votre SVG pour "Ajouter un dossier"
import uploadIcon from '../svg/upload-solid.svg'; // Importez votre autre SVG pour "Uploader un fichier"

const ActionBar = () => {
    const iconStyle = {
        width: '16px', // Modifiez la largeur comme vous le souhaitez
        height: '16px', // Modifiez la hauteur comme vous le souhaitez
        marginRight: '5px', // Espace entre l'icône et le texte
    };

    const [selectedFile, setSelectedFile] = useState(null);

    // Gérez l'ouverture de l'explorateur de fichiers pour ajouter un fichier
    const handleAddFile = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';

        // Gérez la sélection de fichier
        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];

            if (file) {
                // Utilisez le fichier sélectionné
                setSelectedFile(file);
            }

            // Supprimez l'élément input créé dynamiquement
            document.body.removeChild(fileInput);
        });

        // Cliquez sur l'élément input pour ouvrir l'explorateur de fichiers
        fileInput.click();
    };

    // Gérez le téléchargement du fichier
    const handleFileUpload = () => {
        if (selectedFile) {
            // Envoyez le fichier au serveur ou effectuez le traitement nécessaire ici
            console.log('Fichier sélectionné :', selectedFile);
        } else {
            alert('Veuillez sélectionner un fichier avant de soumettre le formulaire.');
        }
    };

    return (
        <div className="action-bar">
            <button onClick={handleAddFile}>
                <img src={uploadIcon} alt="Icône de fichier" style={iconStyle} /> Ajouter un fichier
            </button>
            <button onClick={handleFileUpload}>
                <img src={folderIcon} alt="Icône de dossier" style={iconStyle} /> Uploader un dossier
            </button>
            {/* D'autres actions ici */}
        </div>
    );
}

export default ActionBar;
