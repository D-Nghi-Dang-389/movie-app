import React, { useRef } from "react";
import "./ContentSection.css";

const actors = [
  { name: "Anne Hathaway", image: "/actors/anne.jpg" },
  { name: "Emma Watson", image: "/actors/emmawatson.jpg" },
  { name: "Kim Nam Gil", image: "/actors/kimnamgil.jpg" },
  { name: "Kim So Young", image: "/actors/kimsoyoung.jpg" },
  { name: "Tom Cruise", image: "/actors/tomcruise.jpg" },
  { name: "Tom Hank", image: "/actors/tomhank.jpg" },
  { name: "Chris Evans", image: "/actors/ChrisEvans.jpg" },
  { name: "Emma Stone", image: "/actors/Emmastone.jpg" },
  { name: "Elliot", image: "/actors/elliot.jpg" },
  { name: "Heath", image: "/actors/Heath.jpg" },
  { name: "India", image: "/actors/Idina.jpg" },
  { name: "Jang Hye Jin", image: "/actors/janghyejin.jpg" },
  { name: "Kristen", image: "/actors/kristen.jpg" },
  { name: "Leonardo", image: "/actors/leonardo.jpg" },
  { name: "Oscar", image: "/actors/oscar.jpg" },
  { name: "Ryan", image: "/actors/Ryan.jpg" },
  { name: "Song Kang Ho", image: "/actors/songkangho.jpg" },
  { name: "Timothee", image: "/actors/Timothee.jpg" },
  { name: "Zendaya", image: "/actors/zendaya.jpg" },
];

const ActorSpotlightSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="slider-wrapper">
      <h2 className="slider-title">Actor's Spotlight</h2>
      <p>
        Discover the stars behind the screen in our Actor's Spotlight. This section highlights 
        some of the most iconic and rising talents in Hollywood and global cinema. From blockbuster 
        veterans to breakout performers, explore the faces that bring unforgettable characters to life through powerful storytelling and on-screen presence
      </p>
      <div className="slider-container">
        <button className="slider-button left" onClick={() => scroll("left")}>
          &#8249;
        </button>

        <div className="slider" ref={scrollRef}>
          {actors.map((actor) => (
            <div className="slider-item" key={actor.name}>
              <img src={actor.image} alt={actor.name} />
            </div>
          ))}
        </div>

        <button className="slider-button right" onClick={() => scroll("right")}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default ActorSpotlightSlider;
