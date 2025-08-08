import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";

function HeroSection() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/media/movies")
      .then((response) => {
        const data = response.data;

        const shuffled = [...data].sort(() => 0.5 - Math.random());
        const filtered = shuffled.filter((item) => item.year === 2025).slice(0, 12);

        setMedia(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="w-full flex justify-center items-center min-h-[300px]">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );

  return (
    <div className="w-full pt-32 pb-20" style={{ backgroundColor: "#002b49" }}>
      <div style={{ backgroundColor: "#002b49", padding: "2rem", color: "white" }}>
        <h4 style={{ margin: 0 }}>Trending Now</h4>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={6}
        breakpoints={{
          320: { slidesPerView: 1 },
          575: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 6 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        loop={true}
      >
        {media.map((item, index) => {
          const folder = item.category === "movie" ? "movies" : "tvshows";
          return (
            <SwiperSlide key={`${item.id}-${index}`} className="relative">
              <Link to={`/details/${item.id}`} className="block">
                <div style={{ height: "350px" }}>
                  <img
                  src={`/${folder}/${item.poster}`}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default HeroSection;
