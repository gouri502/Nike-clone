// import React from 'react';
// import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div>
//         <h1>Welcome to the Nike Clone</h1>
//         <p>Start designing your page here!</p>
//       </div>
//     </div>
//   );
// }

// export default App;


// App.js or your main page file
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <Navbar /> {/* Optional: If you have a top navbar */}
        <div style={{ padding: '24px' }}>
          <h1>New & Upcoming Drops(60)</h1>
        </div>
      </div>
    </div>
  );
};

export default App;
