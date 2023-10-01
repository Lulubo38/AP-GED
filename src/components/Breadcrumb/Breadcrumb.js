import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = () => {
    return (
        <div className="breadcrumb">
            Dossier1 {'>'} Sous-dossier1 {'>'} Fichier1.txt
        </div>
    );
}

export default Breadcrumb;
