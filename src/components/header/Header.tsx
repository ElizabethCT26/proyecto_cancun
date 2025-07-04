import { Link } from "react-router-dom";

const Header = () => {
  

  return (
    <div className="bg-black text-white  w-full relative">

      <div className="p-4 md:p-6 lg:p-8 flex flex-wrap items-center justify-between ">
          <div>
            <Link to="/login">Iniciar sesión</Link>
          </div>
        </div>
    </div>
  );
};

export default Header;
