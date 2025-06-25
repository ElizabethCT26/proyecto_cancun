import { Link } from 'react-router-dom';
import { ShieldQuestion, User, Info, ClipboardList, RotateCcw } from 'lucide-react';

function AvisoPrivacidad() {
  return (
    <div className="max-w-4xl mx-auto my-10 px-6 py-8 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
        Aviso de Privacidad
      </h1>

      <p className="mb-8 text-gray-700 text-justify">
        En cumplimiento con lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los
        Particulares, informamos que los datos personales que nos proporciones a través de este sitio serán tratados
        conforme a los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad
        y responsabilidad.
      </p>

      <section className="mb-8">
        <div className="flex items-center mb-2">
          <ShieldQuestion className="text-blue-900 w-5 h-5 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">1. Responsable del tratamiento de los datos</h2>
        </div>
        <p className="text-gray-600 text-justify">
          La persona responsable de la recopilación y tratamiento de tus datos personales es <strong>Cancun.com</strong>. Puedes contactarnos al correo <strong>cancun@gmail.com</strong>.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-2">
          <Info className="text-blue-900 w-5 h-5 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">2. Finalidad de los datos</h2>
        </div>
        <p className="text-gray-600 text-justify">
          Los datos personales que recabamos tienen como finalidad brindarte información, contactarte, responder tus
          solicitudes o dudas, y ofrecerte servicios relacionados con nuestro sitio web.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-2">
          <User className="text-blue-900 w-5 h-5 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">3. Datos personales recabados</h2>
        </div>
        <p className="text-gray-600 text-justify">
          Los datos que podremos recabar incluyen: nombre completo, correo electrónico, número telefónico y el mensaje
          que nos envíes a través del formulario de contacto.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-2">
          <ClipboardList className="text-blue-900 w-5 h-5 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">4. Derechos ARCO</h2>
        </div>
        <p className="text-gray-600 text-justify">
          Puedes ejercer tus derechos de acceso, rectificación, cancelación u oposición (ARCO) respecto a tus datos
          personales enviando una solicitud al correo mencionado anteriormente.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex items-center mb-2">
          <RotateCcw className="text-blue-900 w-5 h-5 mr-2" />
          <h2 className="text-2xl font-semibold text-gray-800">5. Cambios al aviso de privacidad</h2>
        </div>
        <p className="text-gray-600 text-justify">
          Nos reservamos el derecho de modificar este aviso de privacidad en cualquier momento. Cualquier cambio será
          publicado en esta misma página.
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
  );
}

export default AvisoPrivacidad;
