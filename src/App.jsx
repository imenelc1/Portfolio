import React from 'react';

function App() {
  return (
    <div className="p-10 text-center">
      {/* Utilisation de la police Headline et de la couleur Primary */}
      <h1 className="font-headline text-5xl text-primary mb-4">
        Onyx Kinetic
      </h1>
      
      <p className="font-body text-gray-400 mb-8">
        Test des couleurs et des typographies.
      </p>

      {/* Boutons avec tes nouvelles couleurs */}
      <div className="flex gap-4 justify-center">
        <button className="bg-primary px-6 py-2 rounded-md font-semibold">Primary</button>
        <button className="bg-secondary px-6 py-2 rounded-md font-semibold">Secondary</button>
        <button className="bg-tertiary px-6 py-2 rounded-md font-semibold">Tertiary</button>
      </div>
    </div>
  );
}
export default App;