function Usuarios() {
  return (
    <div>
        <div>
            <h1 className="font-bold text-blue-950 text-2xl text-center p-[2vh]">CRUD DE USUARIOS</h1>
        </div>
      <div>

        <table className="w-[80vw] bg-white shadow-2xl mx-auto border border-slate-100 rounded-md my-[5vh] ">
            <thead>
                <tr className="border-b bg-blue-900 text-white border-slate-200">
                <th className=" px-6 py-2 text-left">Nombre</th>
                <th className=" px-6 py-2 text-left">Correo</th>
                <th className=" px-6 py-2 text-left">Telefono</th>
                <th className=" px-6 py-2 text-left">Mensaje</th>
                <th className=" px-6 py-2 text-left">Estado</th>
                <th className=" px-6 py-2 text-left">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-100 transition-colors duration-300">
                <td className=" px-6 py-2">Adios</td>
                <td className=" px-6 py-2">correo@ejemplo.com</td>
                <td className=" px-6 py-2">9987656</td>
                <td className=" px-6 py-2">Holaaa</td>
                <td className=" px-6 py-2">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                  Activo
                </span>
                </td>
               <td className="px-6 py-2 flex gap-2">
                    <button className="px-[1vw] bg-yellow-500 text-white rounded-md text-xs w-[8vw]">Cambiar estado</button>
                    <button className="px-[1vw] bg-red-600 text-white rounded-md w-[8vw] text-xs">Eliminar</button>
                </td>

                </tr>
            </tbody>
        </table>

      </div>
    </div>
  );
}

export default Usuarios;
