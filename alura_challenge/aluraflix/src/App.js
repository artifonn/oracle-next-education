import React, { useEffect, useState } from "react";
import fetchAPI from "./FetchAPI";
import VideoRow from "./componentes/VideoRow";
import FeaturedMovie from "./componentes/FeaturedMovie";
import "./App.css";
import Header from "./componentes/Header";
import loading from "./assets/loading.gif";
import Footer from "./componentes/Footer";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const list = await fetchAPI.getHomeList();
        setMovieList(list);

        const allVideos = list.flatMap((category) => category.items);
        if (allVideos.length > 0) {
          const randomChosen = Math.floor(Math.random() * allVideos.length);
          const chosen = allVideos[randomChosen];
          setFeaturedData(chosen);
        }
      } catch (error) {
        console.error("Erro:", error);
      }
    };
    fetchVideos();
  }, []);

  const handleVideoClick = (video) => {
    setFeaturedData(video);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (categorySlug) => {
    const categoryElement = document.getElementById(categorySlug);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page">
      <Header />
      {featuredData && (
        <FeaturedMovie
          video={featuredData}
          onCategoryClick={handleCategoryClick}
        />
      )}
      <section className="lists">
        {movieList.map((item, key) => (
          <VideoRow
            key={key}
            id={item.slug}
            title={item.title}
            items={item.items}
            onVideoClick={handleVideoClick}
          />
        ))}
      </section>
      <Footer />

      {movieList.length <= 0 && (
        <div className="loading">
          <img src={loading} alt="Carregando..." />
        </div>
      )}
    </div>
  );
};

export default App;
