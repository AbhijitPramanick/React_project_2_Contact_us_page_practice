import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (
    <div>
      <div className={`container ${styles.contact_section}`}>
        <h2>CONTACT US</h2>
        <p>
          Welcome to Esha Yoga Center, where yoga meets sustainable change.
          We're dedicated to yoga and our planet, empowering individuals for
          holistic well-being while actively supporting sustainable development
          and environmental conservation. Your questions about our yoga classes
          or our sustainability efforts are always welcome; let's make a
          positive impact together.
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;
