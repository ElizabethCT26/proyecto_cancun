import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import img7 from "../../assets/images/mexico.png";



const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t-1 text-center bg-[#eeeeee] ">
   

      {/* Redes sociales */}
     <div className="flex justify-center gap-4 mt-4 text-white text-xl">
  <div className="bg-[#1877F2] p-2 rounded-full">
    <FaFacebookF />
  </div>
  <div className="bg-[#1DA1F2] p-2 rounded-full">
    <FaTwitter />
  </div>
  <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full">
    <FaInstagram />
  </div>
  <div className="bg-[#FF0000] p-2 rounded-full">
    <FaYoutube />
  </div>
  <div className="bg-black p-2 rounded-full">
    <FaTiktok />
  </div>
</div>




      {/* Logo México */}
      <div className="bg-[#eeeeee] pb-6">
        <img src={img7} className="mx-auto h-10 md:h-12" alt="Logo México" />
      </div>

      {/* Pie de página final */}
      <div className="bg-[#b00367] font-semibold text-white text-sm py-4">
        <p>&copy; 2025 México Desconocido</p>
        <p>Avisos de privacidad</p>
      </div>
    </footer>
  );
};

export default Footer;
