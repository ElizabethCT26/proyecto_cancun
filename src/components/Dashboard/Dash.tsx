import HeaderAdministrador from "../HeaderAdm/HeaderAdmin";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Dashboard() {
  return (
    <>
      <HeaderAdministrador />
   
            <div>
                <div className="flex justify-center text-center items-center mx-auto">
                    <h2 className="text-4xl font-bold p-[5vh] text-blue-950">Dashboard de Tours.com</h2>
                </div>
                    <div className=" bg-white border border-slate-200 rounded-md shadow-2xl w-[90vw] h-full p-[5vh] mx-auto flex flex-wrap justify-center gap-8 my-10">
                
                
                    <div className="bg-white shadow-2xl w-[30vw] h-[30vh] flex flex-col justify-center items-center rounded-lg">
                    <h1 className="text-red-500 font-bold text-2xl">Ventas:</h1>
                    <h2 className="text-slate-400 font-bold text-4xl">90</h2>
                    </div>

                    <div className="bg-white shadow-2xl w-[25vw] h-[30vh] flex flex-col justify-center items-center rounded-lg">
                    <h1 className="text-green-500 font-bold text-2xl">Tour más vendido:</h1>
                    <h2 className="text-slate-400 font-bold text-4xl">Cancún</h2>
                    </div>

                    <div className="bg-white shadow-2xl w-[25vw] h-[30vh] flex flex-col justify-center items-center rounded-lg">
                    <h1 className="text-blue-500 font-bold text-2xl">Usuarios:</h1>
                    <h2 className="text-slate-400 font-bold text-4xl">90</h2>
                    </div>

                    <div className="bg-white shadow-2xl w-[25vw] h-[30vh] flex flex-col justify-center items-center rounded-lg">
                    <h1 className="text-purple-500 font-bold text-2xl">Clientes nuevos:</h1>
                    <h2 className="text-slate-400 font-bold text-4xl">45</h2>
                    </div>
                    <div className="bg-white shadow-2xl w-[30vw] h-[30vh] flex flex-col justify-center items-center rounded-lg">
                    <h1 className="text-purple-500 font-bold text-2xl">Mensajes nuevos:</h1>
                    <h2 className="text-slate-400 font-bold text-4xl">10</h2>
                    </div>

                    <div>
                        <div className="bg-white w-[80vw] h-[80vh] rounded-md shadow-2xl">
                            <h1 className="p-[5vw]">Ventas mensuales:</h1>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="mes" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="ventas" stroke="#4ade80" strokeWidth={3} />
                                </LineChart>
                            </ResponsiveContainer>

                        </div>

                    </div>
                </div>
            </div>
    </>
  );
}

export default Dashboard;
