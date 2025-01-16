import React, { Suspense } from 'react';
import ThreeScene from './ThreeScene';

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThreeScene />
    </Suspense>
  );
};

export default App;
