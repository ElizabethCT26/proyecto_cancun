import axios from 'axios'
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ILead{
  Id: number,
  Nombre: string,
  Correo: string,
  Mensaje: string,
  Telefono: string,
  EstadoId: number,
}

function Usuarios() {

  const navigate = useNavigate()
  const [data, setData] = useState<ILead[]>()

  const fetchData = async () => {
      try {
        const response = await axios.get('http://157.245.116.21/api/leads', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
          }
        })
      setData(response.data)
      } catch (error) {
        console.log(error)
        navigate('/')
      }
    }

  const deleteUser = async (Id:number) => {
      try {
        await axios.delete(`http://157.245.116.21/api/leads/${Id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
          }
        })
        fetchData()
        toast.success('Eliminado correctamente');
      } catch (error) {
        console.log(error)
        toast.error('Algo ha salido mal');
    }
  }

const toggleContact = async (Id: number, nuevoEstadoId: number) => {
  try {
    console.log(nuevoEstadoId)
    const response = await axios.patch(
      `http://157.245.116.21/api/leads/${Id}`,
      { estadoId: nuevoEstadoId },
      {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      }
    );
    console.log(response);
    fetchData(); 
  } catch (error) {
    console.error("Error actualizando estado:", error);
    toast.error('Algo ha salido mal');
  }
};  

  useEffect(() => {
    fetchData()
  }, [])

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
              {data?.map((lead) => (
                <tr key={lead.Id} className="hover:bg-gray-100 transition-colors duration-300">
                  <td className="px-6 py-2">{lead.Nombre}</td>
                  <td className="px-6 py-2">{lead.Correo}</td>
                  <td className="px-6 py-2">{lead.Telefono}</td>
                  <td className="px-6 py-2">{lead.Mensaje}</td>
                  <td className="px-6 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        lead.EstadoId === 1
                          ? 'bg-green-100 text-green-700' 
                          : lead.EstadoId === 2
                          ? 'bg-yellow-100 text-yellow-700'     
                          : 'bg-red-100 text-red-700'       
                      }`}
                    >
                      {lead.EstadoId === 1
                        ? 'Nuevo'
                        : lead.EstadoId === 2
                        ? 'Contactado'
                        : 'Descartado'}
                    </span>
                  </td>
                  <td className="px-6 py-2 flex gap-2">
                  <button
                    className="px-[1vw] bg-yellow-500 text-white rounded-md text-xs w-[8vw]"
                    onClick={() => {
                      const siguienteEstado = ((lead.EstadoId % 3) + 1); // 1 → 2 → 3 → 1
                      toggleContact(lead.Id, siguienteEstado);
                    }}
                  >
                    Cambiar estado
                  </button>

                    <button className="px-[1vw] bg-red-600 text-white rounded-md text-xs w-[8vw]" onClick={() => deleteUser(lead.Id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

        </table>

      </div>

      <ToastContainer position="top-right" autoClose={4000} />
    </div>

    
  );
}

export default Usuarios;
