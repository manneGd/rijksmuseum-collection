import NoSearchFound from "../Icon/NoSearchFound.tsx";
import style from "./NoResult.module.scss";

const NoResult = () => {
  return (
    <div className={style.noResult}>
      <NoSearchFound />
      <h2>No result found.</h2>
    </div>
  );
};

export default NoResult;
