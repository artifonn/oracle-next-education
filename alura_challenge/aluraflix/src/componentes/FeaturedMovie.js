import React, { useState, useEffect, useRef } from "react";
import "./FeaturedMovie.css";

const FeaturedMovie = ({ video, onCategoryClick }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const playerRef = useRef(null);
  const playerInstance = useRef(null);

  const extractYouTubeId = (url) => {
    const regExp =
      /^.*(youtu\.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|\&v=|\/v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youTubeId = video ? extractYouTubeId(video.url) : null;

  useEffect(() => {
    if (!youTubeId) return;

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING) {
        setIsVideoPlaying(true);
      } else {
        setIsVideoPlaying(false);
      }
    };

    const initializePlayer = () => {
      if (playerInstance.current) {
        playerInstance.current.destroy();
      }
      if (window.YT && playerRef.current) {
        playerInstance.current = new window.YT.Player(playerRef.current, {
          videoId: youTubeId,
          events: {
            onStateChange: onPlayerStateChange,
          },
        });
      }
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = initializePlayer;
    } else {
      initializePlayer();
    }

    return () => {
      if (playerInstance.current) {
        playerInstance.current.destroy();
      }
    };
  }, [youTubeId]);

  const getButtonBackgroundColor = (text) => {
    console.log(text);
    switch (text) {
      case "frontEnd":
        return "#6BD1FF";
      case "backEnd":
        return "#00C86F";
      case "mobile":
        return "#FFBA05";
      default:
        return "#00C86F";
    }
  };

  if (!video) return null;

  return (
    <div className="feature">
      <div
        className="featureVideo"
        ref={playerRef}
        id={`youtube-player-${youTubeId}`}
      ></div>
      {!isVideoPlaying && (
        <div>
          <div className="featureVideoInfoShadow">
            <div className="featureVideoInfo">
              <button
                className="categoryButton"
                onClick={() => onCategoryClick(video.categories[0])}
                style={{
                  backgroundColor: getButtonBackgroundColor(
                    video.categories[0]
                  ),
                }}
              >
                {video.categories[0]}
              </button>
              <h1 className="featured--title">{video.title}</h1>
              <h3 className="featured--description">{video.description}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedMovie;
