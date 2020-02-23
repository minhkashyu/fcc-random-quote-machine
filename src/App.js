import React from 'react';
import './sass/App.scss';
import Header from './components/partials/header.jsx';
import Footer from './components/partials/footer.jsx';
import Quote from './components/partials/quote.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Quote />
      <Footer />
    </div>
  );
}

export default App;
