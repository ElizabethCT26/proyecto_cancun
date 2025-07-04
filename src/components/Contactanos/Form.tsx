import axios from 'axios';
import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  mensaje: string;
}

const loadReCaptchaScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (document.getElementById('recaptcha-script')) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.id = 'recaptcha-script';
    script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
    script.async = true;
    script.defer = true;

    script.onload = () => resolve();
    script.onerror = () => reject();

    document.body.appendChild(script);
  });
};

function Contactanos() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const siteKey = '6LfTlWwrAAAAANb2OSRcr0cQPazu12Chy2w3UOk1';
  const api = 'http://157.245.116.21/api/leads';

  useEffect(() => {
    loadReCaptchaScript()
      .then(() => setRecaptchaReady(true))
      .catch(() => console.error('Error cargando el script de reCAPTCHA'));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const validarFormulario = () => {
    const { nombre, correo, telefono, mensaje } = formData;

    if (!nombre.trim()) {
      toast.error('El nombre es obligatorio');
      return false;
    }

    if (!correo.trim()) {
      toast.error('El correo es obligatorio');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      toast.error('Correo no válido');
      return false;
    }

    if (!telefono.trim()) {
      toast.error('El teléfono es obligatorio');
      return false;
    }

    if (!/^\d{10,15}$/.test(telefono)) {
      toast.error('Teléfono inválido (solo números entre 10 dígitos)');
      return false;
    }

    if (!mensaje.trim()) {
      toast.error('El mensaje no puede estar vacío');
      return false;
    }

    if (!aceptaTerminos) {
      toast.error('Debes aceptar los términos y condiciones');
      return false;
    }

    if (!captchaToken) {
      toast.error('Verifica el reCAPTCHA');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validarFormulario()) return;

    try {
      const response = await axios.post(api, { ...formData, captcha: captchaToken });
      console.log(response)
      toast.success('Formulario enviado con éxito ✅');

      setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
      setCaptchaToken(null);
      setAceptaTerminos(false);
    } catch (error) {
      toast.error('Ocurrió un error al enviar el formulario ❌');
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className="text-center p-[3vh]">
      <h1 className="text-2xl font-bold mb-4">Contáctanos</h1>
      <p className="mb-6">Estamos aquí para ayudarte. ¡Envíanos tus datos!</p>

      <form
        className="max-w-md mx-auto bg-white p-[2vw] w-[40vw] rounded shadow"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-semibold mb-4">Registra tus datos</h2>
        <p className="text-xs text-slate-400 p-[2vh]">
          Favor de ingresar sus datos, para más información
        </p>

        <div className="mb-4 text-left">
          <label className="block mb-2 font-medium" htmlFor="nombre">
            Nombre completo
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Juan Pérez"
            className="w-full border text-gray-400 border-gray-300 p-2 rounded"
          />

          <label className="block mb-2 font-medium mt-4" htmlFor="correo">
            Correo
          </label>
          <input
            id="correo"
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            placeholder="juanperez@gmail.com"
            className="w-full border text-gray-400 border-gray-300 p-2 rounded"
          />

          <label className="block mb-2 font-medium mt-4" htmlFor="telefono">
            Teléfono
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="9984117654"
            className="w-full border text-gray-400 border-gray-300 p-2 rounded"
          />

          <label className="block mb-2 font-medium mt-4" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Me gustaría pedir más información sobre..."
            className="w-full border text-gray-400 border-gray-300 p-2 rounded"
          />

          <div className="my-4">
            {recaptchaReady && (
              <ReCAPTCHA sitekey={siteKey} onChange={handleCaptchaChange} />
            )}
          </div>

          <div className="my-4 flex items-start gap-2">
            <input
              type="checkbox"
              checked={aceptaTerminos}
              onChange={() => setAceptaTerminos(!aceptaTerminos)}
            />
            <label>
              He leído y acepto los{' '}
              <Link to="/conditions" className="text-blue-400 hover:underline">
                términos y condiciones
              </Link>
              .
            </label>
          </div>

          <div>
            <Link to="/aviso" className="text-blue-500 hover:underline">
              Aviso de privacidad
            </Link>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="bg-green-400 w-[12vw] text-white rounded-md p-2"
          >
            ¡Enviar!
          </button>
        </div>
      </form>

      {/* Notificaciones */}
      <ToastContainer position="top-right" autoClose={4000} />
    </div>
  );
}

export default Contactanos;
