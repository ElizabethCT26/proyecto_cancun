import axios from 'axios';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface FormData {
    nombre: string;
    correo: string;
    telefono: string;
    mensaje: string;
}

function Contactanos() {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: '',
    });

    const api = 'http://localhost:8082/form';

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(api, formData);
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
                <h2 className="text-lg font-semibold mb-4">¡Tus datos!</h2>

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
