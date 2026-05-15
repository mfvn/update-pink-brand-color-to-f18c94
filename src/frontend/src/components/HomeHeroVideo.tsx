import { useEffect, useRef, useState } from "react";

export default function HomeHeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try to play the video
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay failed, show controls
        setShowControls(true);
      });
    }

    // Listen for play errors
    const handleError = () => {
      setShowControls(true);
    };

    video.addEventListener("error", handleError);
    return () => video.removeEventListener("error", handleError);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/generated/hero-video-poster.dim_1920x1080.jpg"
        controls={showControls}
      >
        <source
          src="/assets/hero-video-printer-printing.mp4"
          type="video/mp4"
        />
        Seu navegador não suporta vídeo HTML5.
      </video>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
    </section>
  );
}
