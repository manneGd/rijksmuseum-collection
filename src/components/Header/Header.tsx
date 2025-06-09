import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        alt="logo"
        height={64}
        width={64}
        src="../../../public/rijksmuseum_logo.jpeg"
      />
      <h1>Rijksmuseum Art Collection</h1>
    </div>
  );
};

export default Header;
