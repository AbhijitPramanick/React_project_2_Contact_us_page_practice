import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className={`${styles.logo}`}>
        <img
          src="/images/brand_logo_new.png"
          alt="Brand logo"
          height={"60px"}
          width={"60px"}
        />
        <h1>Esha Yoga Center</h1>
      </div>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Branches</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
