import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(false); // Start unmuted
  const [loaded, setLoaded] = useState(false);

  const handleMuteToggle = () => {
    setMuted((prev) => !prev);
    if (videoRef.current) videoRef.current.muted = !videoRef.current.muted;
  };

  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  return (
    <div className="min-h-screen bg-[#F5EDDA] flex flex-col items-center justify-center p-4">
      <img src="https://i.postimg.cc/brgkK3mc/logo.png" alt="Logo" className="mb-4 w-36 md:w-48" />
      <p style={{ fontFamily: "Inter", fontSize: "1.2rem", fontWeight: "regular", color: "#000", paddingBottom: "20px"}}>🚀 Launching soon... Stay tuned </p>

      <div
        className={`relative bg-white/95 shadow-lg rounded-xl overflow-hidden transition-all duration-1000 ${
          loaded ? "mask-reveal" : "mask-hidden"
        } w-full max-w-[600px] aspect-video md:aspect-video sm:aspect-[9/16] h-auto sm:h-[60vh]`}
      >
        <video
          ref={videoRef}
          src="/sample.mp4" // Replace with your video
          className="w-full h-full object-cover"
          autoPlay
          playsInline
          loop
          muted={muted}
          onCanPlay={() => setLoaded(true)}
        ></video>

        <button
          onClick={handleMuteToggle}
          className="absolute bottom-4 right-4 bg-black/60 text-white rounded-full p-2 text-sm hover:bg-black/80 transition"
        >
          {muted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
}

export default App; 