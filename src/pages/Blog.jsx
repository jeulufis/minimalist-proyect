import React, { useEffect } from "react";
import PortfolioItem from "../components/PortfolioItem";
import Title from "../components/Title";
import blog from "../data/blog";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from "react-simple-typewriter";
import { useScrollTo } from "../hooks/useScrollTo";
import { Helmet } from "react-helmet-async";

export const Blog = () => {



  useEffect(() => {
    AOS.init();
  }, [])

  useScrollTo();
  return (
    <>
      <Helmet>
        <title>Juan Eulufi Salazar | Blog</title>
        <meta name="description" content="Blog persona de Juan Eulufi, donde encontraras resumenes de diferentes libros." />
        <meta name="keywords" content='Resumenes de libros conocidos.' />
        <meta name="robots" content='all' />
        <link rel="canonical" href="https://nitodev.netlify.app/blog" />
        <meta name="author" content='Juan Eulufi' />
        <meta name="publisher" content='Juan Eulufi' />

        {/* Social Media Tags */}
        <meta property="og:title" content='Juan Eulufi Salazar | Blog' />
        <meta property="og:description" content='Blog persona de Juan Eulufi, donde encontraras resumenes de diferentes libros.' />
        <meta property="og:url" content="https://nitodev.netlify.app/blog" />
        <meta property="og:image" content='https://bafybeiflsbfx4bikx6xp3y4bosckczjk4wtqawqgl6sg2t46chv7m2r33m.ipfs.w3s.link/foto-me.jpg' />

        <meta name="twitter:title" content='Juan Eulufi Salazar | Blog' />
        <meta
          name="twitter:description"
          content='Blog persona de Juan Eulufi, donde encontraras resumenes de diferentes libros.'
        />
        <meta name="twitter:image" content='https://bafybeiflsbfx4bikx6xp3y4bosckczjk4wtqawqgl6sg2t46chv7m2r33m.ipfs.w3s.link/foto-me.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="pt-20" >
        <div className="flex flex-col md:flex-row justify-center mx-3 ">
          <div className="w-full md:w-7/12">
            <Title>Blog</Title>
            <div className="flex flex-col mx-auto">
              <div className="flex justify-center items-center">
                <div className="flex flex-col w-full" data-aos="fade-up" data-aos-duration="2300">
                  <div className="text-sm bg-[#f5efe8] text-center p-3 rounded-md dark:bg-[#313133]">
                    <Typewriter
                      words={["This is my garden of knowledge."]}
                      loop={1}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={10}
                      delaySpeed={3000}
                    />

                  </div>
                  <div className="pt-7 grid grid-cols-1 md:grid-cols-2 gap-4" >

                    {blog.map((project) => (
                      <PortfolioItem $ {...project} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
