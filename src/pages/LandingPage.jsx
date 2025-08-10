import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handlePlayWithSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((err) => {
        console.error("Playback failed:", err);
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/RenderGate");
    }, 20100); // 20 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      onClick={handlePlayWithSound}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            loop
            playsInline
            muted
            autoPlay
            className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          >
            <source src="/video/V.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
