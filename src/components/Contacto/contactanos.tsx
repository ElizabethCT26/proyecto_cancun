

function Contactanos() {
    return (
        <div className="text-center p-[3vh] ">
            <h1 className="text-2xl font-bold mb-4">Contáctanos</h1>
            <p className="mb-6">Estamos aquí para ayudarte. ¡Envíanos tus datos!</p>

            <form className="max-w-md mx-auto bg-white p-[2vw] w-[40vw] rounded shadow">
                <h2 className="text-lg font-semibold mb-4">¡Tus datos!</h2>

                <div className="mb-4 text-left">
                    <label className="block mb-2 font-medium" htmlFor="nombre">
                        Nombre completo
                    </label>
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        placeholder="Juan Pérez"
                        className="w-full border text-gray-400 border-gray-300 p-2 rounded"
                    />
                    <div>
                          <label className="block mb-2 font-medium" htmlFor="nombre">
                        Correo
                    </label>
                    <input
                        id="correo"
                        name="correo"
                        type="email"
                        placeholder="Juanperez@gmail.com"
                        className="w-full border text-gray-400 border-gray-300 p-2 rounded"
                    />
                    </div>
                      <div>
                          <label className="block mb-2 font-medium" htmlFor="nombre">
                        Telefono
                    </label>
                    <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        placeholder="9984117654"
                        className="w-full border text-gray-400 border-gray-300 p-2 rounded"
                    />
                    </div>
                      <div>
                          <label className="block mb-2 font-medium" htmlFor="nombre">
                        Mensaje
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        placeholder="Me gustaria pedir más información sobre..."
                        className="w-full border text-gray-400 border-gray-300 p-2 rounded"
                    />
                    </div>
                </div>
                <div>
                    <button className="bg-green-400 w-[12vw] text-white rounded-md">
                        Enviar!
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contactanos;
