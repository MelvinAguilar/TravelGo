import classes from "./TermsOfServiceView.module.scss";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";

const TermsOfServiceView = ({ className, ...rest }) => {
  return (
    <>
      <Header />
      <main>
        <section className={classes["TermsOfService"]} {...rest}>
          <h1 className={classes["TermsOfService__title"]}>Términos y Condiciones de Uso</h1>
          
          <h2 className={classes["TermsOfService__subtitle"]}>
          INFORMACIÓN RELEVANTE
          </h2>
          <p>Es requisito necesario para la adquisición de los servicios que se ofrecen en este sitio, que lea y acepte los siguientes Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente documento. Todas los servicios que son ofrecidos por nuestro sitio web
          pudieran ser creadas, cobradas, enviadas o presentadas por una página web tercera y en tal caso estarían sujetas a sus propios Términos y Condiciones. En algunos casos, para adquirir un servicio, será necesario el registro por parte del usuario, con ingreso de datos personales fidedignos y definición de una contraseña.</p>

          <h2 className={classes["TermsOfService__subtitle"]}>
            CUENTAS
          </h2>
          
          <p>
          Cuando crea una cuenta con nosotros, debe proporcionarnos información que sea precisa, completa y fidedigna en todo momento. Caso contrariosería un incumplimiento de los Términos aceptados, que puede dar lugar a la inmediata terminación de su cuenta en TRAVELGO
          </p>
          <p> 
          Para usar nuestro página web y / o recibir nuestros servicios, debes tener al menos 18 años de edad, o la mayoría de edad legal en tu jurisdicción, y poseer la autoridad legal, el derecho y la libertad para participar en estos Términos como un acuerdo vinculante. No tienes permitido utilizar esta página web y / o recibir servicios si hacerlo está prohibido en tu país o en virtud de cualquier ley o regulación aplicable a tu caso.
          </p>

          <p>Podemos terminar o suspender de manera permanente o temporal tu acceso al servicio sin previo aviso y responsabilidad por cualquier razón, incluso si a nuestra sola determinación tu violas alguna disposición de estos Términos o cualquier ley o regulación aplicable. Puedes descontinuar el uso y solicitar cancelar tu cuenta y / o cualquier servicio en cualquier momento. Sin perjuicio de lo contrario en lo que antecede, con respecto a las suscripciones renovadas automáticamente a los servicios pagados, dichas suscripciones se suspenderán solo al vencimiento del período correspondiente por el que ya has realizado el pago.</p>

          <h2 className={classes["TermsOfService__subtitle"]}>
          PROPIEDAD</h2>
          <p>
          Usted no puede declarar propiedad intelectual o exclusiva a ninguno de nuestros productos, modificado o sin modificar. Todos los servicios son propiedad de los proveedores del contenido. En caso de que no se especifique lo contrario, nuestros servicios se proporcionan sin ningún tipo de garantía, expresa o implícita. En ningún momento esta compañía será responsable de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la imposibilidad de utilizar nuestros servicios.
          </p>

          <h2 className={classes["TermsOfService__subtitle"]}>
          CAMBIOS DE OFERTAS</h2>
          <p>Podemos, sin aviso previo, cambiar los servicios; dejar de proporcionar los servicios o cualquier característica de los servicios que ofrecemos; o crear límites para los servicios. Podemos  suspender de manera permanente o temporal el acceso a los servicios sin previo aviso ni responsabilidad por cualquier motivo, o sin ningún motivo.</p>

          <h2 className={classes["TermsOfService__subtitle"]}>
          PRIVACIDAD</h2>
          <p>
          
          TRAVELGO garantiza que la información personal que usted envía cuenta con la seguridad necesaria. Puede revisar más a detalle en nuestra POLÍTICA DE PRIVACIDAD.
          TRAVELGO reserva los derechos de cambiar o de modificar estos términos sin previo aviso.
          </p>

          <h2 className={classes["TermsOfService__subtitle"]}>
            PROPIEDAD INTELECTUAL
          </h2>
          <p>
          El sitio web y su contenido, características y funcionalidad originales son propiedad de TRAVELGO y están protegidos por leyes de derechos de autor internacionales, marca registrada patente, secreto comercial y otra propiedad intelectual o leyes de derechos de propiedad.
          </p>
          <h2 className={classes["TermsOfService__subtitle"]}>
          PROMOCIONES</h2>
          <p>Acepta recibir de vez en cuando nuestros mensajes y materiales de promoción, por correo postal, correo electrónico o cualquier otro formulario de contacto que nos proporciones. Si no deseas recibir dichos materiales o avisos de promociones, simplemente avísanos en cualquier momento</p>
          
          <h2 className={classes["TermsOfService__subtitle"]}>
          COOKIES</h2>
          <p>Empleamos el uso de cookies. Al utilizar el sitio web de TRAVELGO, usted acepta el uso de cookies de acuerdo con la política de privacidad de TRAVELGO. La mayoría de los modernos sitios web interactivos de hoy en día usan cookies para permitirnos recuperar los detalles del usuario para cada visita.</p>

          <p>Las cookies se utilizan en algunas áreas de nuestro sitio para habilitar la funcionalidad de esta área y la facilidad de uso para las personas que lo visitan. Algunos de nuestros socios afiliados/publicitarios también pueden usar cookies.</p>
        
          <p>
            <span className={classes["TermsOfService__warning"]}>
              Warning:{" "}
            </span>
            This is a demo website, so all the data is fake.
          </p>
        </section>
      </main>
      <FooterAttribution />
    </>
  );
};

export default TermsOfServiceView;
