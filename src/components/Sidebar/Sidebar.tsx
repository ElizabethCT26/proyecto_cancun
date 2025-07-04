import { Link } from 'react-router-dom';

type Props = {
  sidebar: boolean;
  setSidebar: (value: boolean) => void;
};

function Sidebar({ sidebar, setSidebar }: Props) {
  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-[60vw]  md:w-[20vw] z-50
        bg-black text-white p-[2vw] rounded-r-2xl  shadow-[0_0_40px_rgba(0,0,0,0.9)] 
        transform transition-transform duration-300 ease-in-out
        ${sidebar ? "translate-x-0" : "-translate-x-full"}
      `}
    >

      <div className="flex mt-[2.5vh] md:mt-[1vh] items-center justify-center ">
        <h1>Tours.com</h1>
      </div>
      <button
        onClick={() => setSidebar(false)}
        className="absolute top-4 right-4 text-2xl font-semibold cursor-pointer"
      >
        X
      </button>

      <nav className="mt-12 flex flex-col mx-[2vw] gap-6 text-lg">
       <Link to="/dashboard" onClick={() => setSidebar(false)}>Dashboard</Link>
  <Link to="/usuarios" onClick={() => setSidebar(false)}>Usuarios</Link>
  <Link to="/login" onClick={() => setSidebar(false)}>Cerrar sesión</Link>
      </nav>

  
      <div className="absolute bottom-4 text-xs left-[2vw] text-gray-400">
        © 2024 Pueblos Mágicos | México Desconocido
      </div>
    </div>
  );
}


export default Sidebar;