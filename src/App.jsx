import React, { Fragment } from "react";
import "./styles/styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Blog, History } from "./pages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Error } from "./pages/Error";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Juan Eulufi Salazar | Home</title>
        <meta name="description" content="Portafolio personal de Juan Eulufi" />
        <meta name="keywords" content='Desarrollador de Frontend, creador de sitios web.' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="https://nitodev.netlify.app/" />
        <meta name="author" content='Juan Eulufi' />
        <meta name="publisher" content='Juan Eulufi' />

        {/* Social Media Tags */}
        <meta property="og:title" content='Juan Eulufi Salazar | Home' />
        <meta property="og:description" content='Desarrollador de Frontend, creador de sitios web.' />
        <meta property="og:url" content="https://nitodev.netlify.app/" />
        <meta property="og:image" content='https://bafybeiflsbfx4bikx6xp3y4bosckczjk4wtqawqgl6sg2t46chv7m2r33m.ipfs.w3s.link/foto-me.jpg' />

        <meta name="twitter:title" content='Juan Eulufi Salazar | Home' />
        <meta
            name="twitter:description"
            content='Desarrollador de Frontend, creador de sitios web.'
        />
        <meta name="twitter:image" content='https://bafybeiflsbfx4bikx6xp3y4bosckczjk4wtqawqgl6sg2t46chv7m2r33m.ipfs.w3s.link/foto-me.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Fragment>
        <div className="bg-[#f0e7db] dark:bg-[#202023]  text-stone-900 dark:text-stone-300 min-h-screen font-plus">
          <div className="max-w-5xl w-11/12 mx-auto transition-all  duration-500 ease-in dark:transition-all dark:duration-500 dark:ease-in">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="blog" element={<Blog />} />
              <Route path="history" element={<History />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Fragment>
    </HelmetProvider>
  );
}

export default App;
