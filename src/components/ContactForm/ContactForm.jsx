import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button icon={<MdMessage />} text={"VIA SUPPORT CHAT"} />
          <Button icon={<IoCall />} text={"VIA CALL"} />
        </div>
        <Button isWhite={true} icon={<IoCall />} text={"VIA EMAIL FORM"} />

        <form className={styles.main_form}>
          <div className={styles.form_control}>
            <label htmlFor="firstName">Name</label>
            <input type="text" name="firstName" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="textArea">Text</label>
            <textarea
              name="textArea"
              id="textarea"
              cols="30"
              rows="8"
              placeholder="Enter your message here"
            ></textarea>
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img
          src="/images/main_image_new.png"
          alt="Main image"
          height={"400px"}
          width={"400px"}
        />
      </div>
    </section>
  );
};

export default ContactForm;
