import { Link } from 'react-router-dom';
import { ShieldCheck, UserCheck, Lock, RefreshCcw, Mail } from 'lucide-react';
import Footer from '../footer/FooterComponent';

function TerminosCondiciones() {
    return (
        <>
        <div className="max-w-4xl mx-auto my-10 px-6 py-8 bg-white rounded-2xl shadow-lg border border-gray-200">
            <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
                Términos y Condiciones
            </h1>

            <section className="mb-8">
                <div className="flex items-center mb-2">
                    <ShieldCheck className="text-blue-900 w-5 h-5 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">1. Aceptación de los términos</h2>
                </div>
                <p className="text-gray-600 text-justify">
                    Al enviar tus datos a través de nuestro formulario, aceptas estos términos y condiciones.
                    Si no estás de acuerdo, por favor no utilices nuestros servicios.
                </p>
            </section>

            <section className="mb-8">
                <div className="flex items-center mb-2">
                    <UserCheck className="text-blue-900 w-5 h-5 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">2. Uso de la información</h2>
                </div>
                <p className="text-gray-600 text-justify">
                    La información proporcionada será utilizada únicamente para fines de contacto y atención al cliente.
                    No compartiremos tus datos con terceros sin tu consentimiento, salvo en casos legales obligatorios.
                </p>
            </section>

            <section className="mb-8">
                <div className="flex items-center mb-2">
                    <Lock className="text-blue-900 w-5 h-5 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">3. Protección de datos</h2>
                </div>
                <p className="text-gray-600 text-justify">
                    Nos comprometemos a proteger tus datos personales. Utilizamos medidas de seguridad para evitar el
                    acceso no autorizado, alteración o pérdida de la información que recopilamos.
                </p>
            </section>

            <section className="mb-8">
                <div className="flex items-center mb-2">
                    <RefreshCcw className="text-blue-900 w-5 h-5 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">4. Modificaciones</h2>
                </div>
                <p className="text-gray-600 text-justify">
                    Podemos actualizar estos términos en cualquier momento. Te recomendamos revisar esta página
                    periódicamente para estar al tanto de posibles cambios.
                </p>
            </section>

            <section className="mb-8">
                <div className="flex items-center mb-2">
                    <Mail className="text-blue-900 w-5 h-5 mr-2" />
                    <h2 className="text-2xl font-semibold text-gray-800">5. Contacto</h2>
                </div>
                <p className="text-gray-600 text-justify">
                    Si tienes dudas sobre estos términos, puedes contactarnos directamente a través del formulario.
                </p>
            </section>

            <div className="text-center mt-12">
                <Link
                    to="/"
                    className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
                >
                    ← Volver al inicio
                </Link>
            </div>
           
        </div>
        
         <Footer/>
         </>
    );
}

export default TerminosCondiciones;
