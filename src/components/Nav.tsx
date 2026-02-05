import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  return (
    <div
      className="fixed top-0 left-0 w-full h-16 flex items-center justify-center bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 z-50 font-bold text-xl text-gray-800 cursor-pointer transition-colors duration-300 hover:text-sky-500"
      onClick={() => {
        navigate("/");
      }}
    >
      Fiorentika's Portfolio
    </div>
  );
}

export default Nav;
