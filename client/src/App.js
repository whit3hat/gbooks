import React from 'react';
import Books from './pages/Books';
import Nav from './components/Nav';
import Search from './components/Search';

function App() {
  return (
    <div>
      <Nav />
      <Books />
      <Search />
    </div>
  );
}

export default App;
