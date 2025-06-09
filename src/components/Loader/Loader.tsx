import style from "./Loader.module.scss";

const Loader = () => {
  return <span className={style.loader} data-testid="loader" />;
};

export default Loader;
