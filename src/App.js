import React from 'react';
import Sidebar from './components/Sidebar';
import Navba from './components/Navba';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      {/* Navbar at the top */}
      <div style={{ flexShrink: 0 }}>
        <Navba />
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex' }}>
        {/* Sidebar aligned with Product List */}
        <div style={{ width: '256px', overflowY: 'auto', backgroundColor: '#f7f7f7' }}>
          <Sidebar />
        </div>

        {/* Product List */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default App;
