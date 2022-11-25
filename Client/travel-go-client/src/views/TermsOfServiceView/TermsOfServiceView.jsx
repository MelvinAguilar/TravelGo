import classes from "./TermsOfServiceView.module.scss";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";

const TermsOfServiceView = ({ className, ...rest }) => {
  return (
    <>
      <Header />
      <main>
        <section className={classes["TermsOfService"]} {...rest}>
          <h1 className={classes["TermsOfService__title"]}>Terms of Service</h1>

          <h2 className={classes["TermsOfService__subtitle"]}>
            1. User account
          </h2>
          <p>
            When You create an account with Us, You must provide Us information
            that is accurate, complete, and current at all times. Failure to do
            so constitutes a breach of the Terms, which may result in immediate
            termination of Your account on Our Service.
          </p>
          <p>
            You must be at least 18 years old to use this website. By using this
            website, you represent and warrant that you are at least 18 years
            old. If you are under 18 years old, you are not permitted to
            register for the Website or use any of its services and/or products.
          </p>
          <p>
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than You,
            without appropriate authorization. You may not use as a username any
            name that is offensive, vulgar or obscene.
          </p>
          <p>
            We reserve the right to refuse service, terminate accounts, remove
            or edit content, or cancel orders in our sole discretion.
          </p>

          <h2 className={classes["TermsOfService__subtitle"]}>
            2. Intellectual property
          </h2>
          <p>
            The Website and its original content, features and functionality are
            owned by the Company and are protected by international copyright,
            trademark, patent, trade secret and other intellectual property or
            proprietary rights laws.
          </p>

          <h3 className={classes["TermsOfService__subtitle"]}>
            3. Links To Other Web Sites
          </h3>
          <p>
            Our Service may contain links to third-party web sites or services
            that are not owned or controlled by the Company.
          </p>
          <p>
            We strongly advise You to read the terms and conditions and privacy
            policies of any third-party web sites or services that You visit.
          </p>

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
