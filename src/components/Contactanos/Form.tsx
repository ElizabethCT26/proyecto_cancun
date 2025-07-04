import axios from 'axios';
import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import ReCAPTCHA from 'react-google-recaptcha'
import { Link } from 'react-router-dom';

interface FormData {
    nombre: string; 
    correo: string;
    telefono: string;
    mensaje: string;
}

const loadReCaptchaScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (document.getElementById('recaptcha-script')) {
            resolve(); // Ya está cargado
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

    useEffect(() => {
        loadReCaptchaScript()
            .then(() => setRecaptchaReady(true))
            .catch(() => console.error('Error cargando el script de reCAPTCHA'));
    }, []);

    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const siteKey = '6LfTlWwrAAAAANb2OSRcr0cQPazu12Chy2w3UOk1'
    const api = 'http://localhost:8082/form';

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

        const handleCaptchaChange = (token: string | null) => {
        setCaptchaToken(token);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!captchaToken) {
            alert('Por favor, verifica el reCAPTCHA.');
            return;
        }

        try {
            const response = await axios.post(api, { ...formData, captcha: captchaToken });
            console.log('Formulario enviado con éxito:', response.data);
        } catch (error) {
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
                    <div>
                        <p className='text-xs text-slate-400 p-[2vh]'>Favor de ingresar sus datos, para más información</p>
                    </div>


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
    <ReCAPTCHA
        sitekey={siteKey}
        onChange={handleCaptchaChange}
    />
)}
                    </div>
                    

                    <input type="checkbox"></input><label className='mx-2'>He leido y acepto los 
                       <Link to='/conditions'>
                         <button  className="text-blue-400 cursor-pointer p-1">terminos y condiciones</button>.
                       </Link>
                    </label>

                     <div >
                        <Link to="aviso" className="text-blue-500 hover:underline">
                            Aviso de privacidad
                        </Link>
                    </div>
                </div>
           <div>
                      
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
        </div>
    );
}

export default Contactanos;
