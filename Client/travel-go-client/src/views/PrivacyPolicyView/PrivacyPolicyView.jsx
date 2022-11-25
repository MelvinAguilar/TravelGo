import classes from "./PrivacyPolicyView.module.scss";
import Header from "../../components/Header/Header";
import FooterAttribution from "../../components/Footer/FooterAttribution/FooterAttribution";

const PrivacyPolicyView = ({ className, ...rest }) => {
  return (
    <>
      <Header />
      <main>
        <section className={classes["Privacy-policy"]} {...rest}>
          <h1 className={classes["Privacy-policy__title"]}>Privacy Policy</h1>
          <p>
            This page is used to inform website visitors regarding our policies
            with the collection, use, and disclosure of Personal Information if
            anyone decided to use our Service, the test website.
          </p>

          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation with this policy. The Personal
            Information that we collect are used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy. Our Privacy Policy was
            created with the help of the{" "}
            <a href="https://www.privacypolicytemplate.net/">
              Privacy Policy Template Generator
            </a>
            .
          </p>

          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which is accessible at test, unless
            otherwise defined in this Privacy Policy.
          </p>

          <h2 className={classes["Privacy-policy__subtitle"]}>
            Information Collection and Use
          </h2>

          <p>
            For a better experience while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to your name, Email address, phone number,
            Address, State, Province, ZIP/Postal code, City. The information
            that we collect will be used to contact or identify you.
          </p>

          <h2 className={classes["Privacy-policy__subtitle"]}>Log Data</h2>

          <p>
            We want to inform you that whenever you visit our Service, we
            collect information that your browser sends to us that is called Log
            Data. This Log Data may include information such as your computer’s
            Internet Protocol ("IP") address, browser version, pages of our
            Service that you visit, the time and date of your visit, the time
            spent on those pages, and other statistics.
          </p>

          <h2 className={classes["Privacy-policy__subtitle"]}>Cookies</h2>

          <p>
            Cookies are files with small amount of data that is commonly used an
            anonymous unique identifier. These are sent to your browser from the
            website that you visit and are stored on your computer’s hard drive.
          </p>

          <p>
            Our website uses these "cookies" to collection information and to
            improve our Service. You have the option to either accept or refuse
            these cookies, and know when a cookie is being sent to your
            computer. If you choose to refuse our cookies, you may not be able
            to use some portions of our Service.
          </p>

          <h2 className={classes["Privacy-policy__subtitle"]}>Security</h2>

          <p>
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>

          <h2 className={classes["Privacy-policy__subtitle"]}>
            Links to Other Sites
          </h2>

          <p>
            Our Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over, and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>

          <h2 className={classes["Privacy-policy__subtitle"]}>Contact Us</h2>

          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us.
          </p>
        </section>
      </main>
      <FooterAttribution />
    </>
  );
};

export default PrivacyPolicyView;
