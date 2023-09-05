import React from 'react'; // Import the React library
import Render from './components/Render'; // Import the ConditionalRendering component
import Button from './components/Button'; // Import the Button component
import './MyApp.css'; // Import the CSS styles for this component

function App() {
  return (
    <div className='main'> {/* Create a main container with a CSS class 'main' */}
      <Render /> {/* Render the ConditionalRendering component */}
      <Button /> {/* Render the Button component */}
    </div>
  );
}

export default App; // Export the App component as the default export
