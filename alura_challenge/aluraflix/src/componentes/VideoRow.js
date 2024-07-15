import React, { useState } from "react";
import "./VideoRow.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const VideoRow = ({ title, items, onVideoClick, id }) => {
  const [scrollLeft, setScrollLeft] = useState(0);

  const extractVideoId = (url) => {
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return videoIdMatch ? videoIdMatch[1] : null;
  };

  const getButtonBackgroundColor = (text) => {
    switch (text.toLowerCase()) {
      case "front end":
        return "#6BD1FF";
      case "back end":
        return "#00C86F";
      case "mobile":
        return "#FFBA05";
      default:
        return "#6BD1FF";
    }
  };

  const movieRowLeft = () => {
    let scrollX = scrollLeft + Math.round(window.innerWidth / 2);
    if (scrollX > 0) {
      scrollX = 0;
    }
    console.log(scrollX);
    setScrollLeft(scrollX);
  };

  const movieRowRight = () => {
    let scrollX = scrollLeft - Math.round(window.innerWidth / 2);
    let listWidth = items.length * 350;
    if (window.innerWidth - listWidth > scrollX) {
      scrollX = window.innerWidth - listWidth - 60;
      console.log(scrollX);
    }
    console.log(listWidth);
    setScrollLeft(scrollX);
  };

  return (
    <div className="movieRow" id={id}>
      <h2 style={{ backgroundColor: getButtonBackgroundColor(title) }}>
        {title}
      </h2>
      <div className="movieRow--left" onClick={movieRowLeft}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <div className="movieRow--right" onClick={movieRowRight}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrollLeft,
            width: items.length * 350,
          }}
        >
          {items.length > 0 &&
            items.map((item, key) => (
              <div
                key={key}
                className="movieRow--item"
                onClick={() => onVideoClick(item)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={`https://img.youtube.com/vi/${extractVideoId(
                    item.url
                  )}/hqdefault.jpg`}
                  alt={item.title}
                />
                <h3>{item.title}</h3>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoRow;
