import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const validar = () => {
    if (!email.trim()) {
      toast.error('El correo es obligatorio');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Correo no válido');
      return false;
    }

    if (!password.trim()) {
      toast.error('La contraseña es obligatoria');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validar()) return;

    const apiUrl = import.meta.env.VITE_API_URL
    try {
      const response = await axios.post(`${apiUrl}/api/login`, {
        correo: email,
        contrasena: password
      });

      sessionStorage.setItem('token', response.data);
      toast.success('Inicio de sesión exitoso');

      navigate('/usuarios')
    } catch (error) {
      if (axios.isAxiosError(error)) {
        //toast.error(error.response?.data?.message || 'Error en el inicio de sesión ');
        toast.error('Credenciales incorrectas');
      } else {
        toast.error('Ocurrió un error inesperado ❌');
      }
      console.error('Login error:', error);
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-md shadow-4xl border border-slate-300 w-[60vw] md:h-[80vh] h-[90vh] my-[5vh] flex">

        {/* Formulario */}
        <div className="flex flex-col justify-center items-center md:w-[40vw] w-[60vw] px-[5vw] space-y-6">
          <h1 className="text-2xl font-bold mb-6">Iniciar sesión</h1>
          <h2 className="text-slate-500">Bienvenidos a Tours.com</h2>

          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold">
                Correo electrónico:
              </label>
              <input
                id="email"
                type="email"
                placeholder="JuanaGarcia@gmail.com"
                className="bg-slate-100 rounded-md h-[6vh] px-[2vw] text-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 font-semibold">
                Contraseña:
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="bg-slate-100 rounded-md h-[6vh] px-[2vw] text-gray-700"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-pink-600 text-white w-full h-[6vh] rounded-md mt-2"
            >
              Iniciar sesión
            </button>
          </form>
        </div>

        {/* Lado derecho decorativo */}
        <div className="bg-gradient-to-b from-pink-500 to-black rounded-l-4xl rounded-r-md w-[50vw] h-full"></div>
      </div>

      {/* Toast notifications */}
      <ToastContainer position="top-right" autoClose={4000} />
    </div>
  );
}

export default Login;
