function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-md shadow-4xl border border-slate-300 w-[60vw] md:h-[80vh] h-[90vh] my-[5vh] flex">
    
        <div className="flex flex-col justify-center items-center md:w-[40vw] w-[60vw]  px-[5vw] space-y-6">
          <h1 className="text-2xl font-bold mb-6">Iniciar sesión</h1>
            <div>
                <h2 className="text-slate-500">Bienvenidos a Tours.com</h2>
            </div>

          <form className="w-full  space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-semibold">
                Correo electrónico:
              </label>
              <input
                id="email"
                type="email"
                placeholder="JuanaGarcia@gmail.com"
                className="bg-slate-100 rounded-md h-[6vh] px-[2vw] text-gray-700"
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
              />
            </div>
          </form>
          <div>
            <button className="bg-pink-600 text-white w-[25vw] h-[6vh] rounded-md">
                Iniciar sesión
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-b from-pink-500 to-black rounded-l-4xl rounded-r-md  w-[50vw] h-full"></div>
      </div>
    </div>
  );
}

export default Login;
