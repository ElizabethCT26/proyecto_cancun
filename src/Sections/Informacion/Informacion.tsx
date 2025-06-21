

const Info = () => {
    return (
      <div className="px-6 py-10 max-w-4xl mx-auto text-gray-800">
        {/* Banner */}
        <div
            className="relative w-full h-28 bg-cover bg-[center_bottom_20%] rounded-2xl overflow-hidden mb-12 text-white text-2xl font-bold flex items-center justify-center"
            style={{ backgroundImage: `url('https://mexicancaribbean.travel/wp-content/uploads/2024/09/cancun-3-scaled.jpg')` }}
            >
            <div className="absolute inset-0 bg-black/60" /> {/* Overlay oscuro */}
            <span className="relative z-10">Acerca de Cancún</span>
        </div>

  
        {/* Su magia */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-6">Su magia</h3>
          <p className="text-justify">
            Cancún es mucho más que sol y mar: es el corazón vibrante de la cultura del sureste mexicano. 
            Aquí, las tradiciones mayas conviven con sabores únicos, historias milenarias y la calidez de 
            su gente. Es un destino donde cada rincón guarda una experiencia: desde platillos típicos y
             música tradicional hasta actividades que celebran lo mejor de México.
          </p>
        </div>
  
        {/* El motivo */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-6">El motivo</h3>
          <p className="mb-8">Cancún es una puerta a experiencias inolvidables:</p>
          <ul className="list-disc list-inside space-y-1">
            <li className="mb-6">Sus playas de arena blanca y mar turquesa son mundialmente reconocidas.</li>
            <li className="mb-6">Cerca se encuentra Chichén Itzá, una de las Nuevas Siete Maravillas del Mundo.</li>
            <li className="mb-6">Puedes disfrutar catas de tequila y mezcal, así como talleres que exploran la gastronomía tradicional.</li>
            <li className="mb-6">La cultura maya se mantiene viva en comunidades cercanas, con rituales, artesanías y arquitectura ancestral.</li>
            <li className="mb-12">Cancún conecta con la Ruta de los Cenotes y pueblos mágicos llenos de historia y encanto.</li>
          </ul>
        </div>
  
        {/* Lo básico */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-6">Lo básico</h3>
          <p className="mb-6">El Caribe mexicano y sus sabores emblemáticos.</p>
        </div>
  
        {/* Imprescindibles */}
        <div>
          <h3 className="text-xl font-semibold mb-12">Imprescindibles</h3>
          <ol className="list-decimal list-inside space-y-1">
            <li>Visitar al menos una tequilera o mezcalería en Cancún con experiencia de cata incluida.</li>
            <li>Explorar un parque temático o ecoturístico que combine cultura maya, gastronomía y naturaleza.</li>
            <li>Relajarte en un hotel con experiencias sensoriales: spa de agave, mixología con destilados mexicanos y cocina local.</li>
          </ol>
        </div>

      </div>
    );
  };
  
  export default Info;
  