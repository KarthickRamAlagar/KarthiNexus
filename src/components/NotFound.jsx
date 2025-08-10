import { Link } from "react-router-dom";
import KR from "/KR.png";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black overflow-y-scroll flex items-center justify-center px-4">
      <div className="work-container">
        <div className="work-canvas flex flex-col items-center justify-center text-center p-8">
          <img src={KR} alt="Logo" className="w-24 h-24 animate-pulse" />
          <h1 className="text-white text-3xl font-bold mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-400 mb-6">
            The URL you entered doesn't exist. Let's get you back to the
            universe.
          </p>
          <Link
            to="/RenderGate"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-all duration-300"
          >
            Return to Render Gate
          </Link>
        </div>
      </div>
    </div>
  );
}
