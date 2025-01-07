import React from 'react';
import Sidebar from './components/Sidebar';
import Navba from './components/Navba';


const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <Navba /> {/* Optional: If you have a top navbar */}
        <div style={{ padding: '24px' }}>
          <h1>New & Upcoming Drops (60)</h1>
          {/* Product List */}

        </div>
      </div>
    </div>
  );
};

export default App;
