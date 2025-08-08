import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import ContentSection from "../components/ContentSection";


const Home = () => {
  const [movies, setMovies] = useState([]);
  const [tvshows, setTvshows] = useState([]);

  useEffect(() => {
    // Fetch Featured Movies
    fetch(`${process.env.REACT_APP_API_BASE_URL}/media/featured?category=movie`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.slice(0, 6));
      })
      .catch((err) => {
        console.error("Failed to fetch featured movies:", err);
      });

    // Fetch Featured TV Shows
    fetch(`${process.env.REACT_APP_API_BASE_URL}/media/featured?category=tv`)
      .then((res) => res.json())
      .then((data) => {
        setTvshows(data.slice(0, 6));
      })
      .catch((err) => {
        console.error("Failed to fetch featured TV shows:", err);
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
