import { QUIZZVSS } from './questions.js'; // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const __________ = document.getElementById('__________');
const __________ = document.getElementById('__________');

// Récupérer la première question
const firstQuestion = __________.questions[0];

// Injecter le texte de la question dans l'emplacement dédié
__________.innerText = __________;

// Pour chaque option, créer un bouton et l'ajouter au conteneur
firstQuestion.__________.forEach(__________ => {
  const __________ = document.createElement('button');
  __________.innerText = __________;
  __________.classList.add('__________');
  __________.appendChild(__________);
});
