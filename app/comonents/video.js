"use client";
import React, { useRef, useEffect } from "react";

function Video() {
  const videoRef = useRef(null);

  // Handle focus change events to play/pause video
  useEffect(() => {
    const handleFocus = () => {
      if (videoRef.current) {
        videoRef.current.play(); // Play video when window is in focus
      }
    };

    const handleBlur = () => {
      if (videoRef.current) {
        videoRef.current.pause(); // Pause video when window loses focus
      }
    };

    // Add event listeners for focus and blur
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <section className="bg-white">
      <div className="video-container bg-white max-w-full mx-auto p-4">
        <video
          ref={videoRef}
          className="w-full h-auto rounded-lg shadow-lg lg:h-64 xl:h-72" // Adjust the height on large screens
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/cq8l59W/videoblocks-construction-site-sunset-timelapse_rds1ojwoob__afd03761879945e4e3029d4374fcc815__P360.mp4" // Replace with your video source
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Video;
