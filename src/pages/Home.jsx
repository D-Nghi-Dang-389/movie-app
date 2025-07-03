import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import ContentSection from "../components/ContentSection";


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTvshows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.filter((item) => item.category === "movie").slice(0, 6));
        setTvshows(data.filter((item) => item.category === "tv").slice(0, 6));
      });
  }, []);

  return (
    <div>
      <HeroSection title="Trending Now" items={movies} type="movie" />
      <FeaturedSection title="Featured Movies" items={movies} type="movie" />
      <FeaturedSection title="Featured TV Shows" items={tvshows} type="tv" />
      <ContentSection />
    </div>
  );
};

export default Home;
