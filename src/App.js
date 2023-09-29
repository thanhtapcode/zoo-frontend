import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// Components
import Home from './pages/Home/home';
import News from './pages/News/news';
// import Animals from './pages/Animals/animals';
// import Gallery from './pages/Gallery/gallery';
// import About from './pages/About/about';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className='Root'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
          {/* <Route path="/animals" component={Animals} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;