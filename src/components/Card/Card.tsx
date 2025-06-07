import style from "./Card.module.scss";
import NoImageFound from "../Icon/NoImageFound.tsx";

export type CardProps = {
    title: string;
    imageSrc: string | undefined;
}
const Card = ({title, imageSrc}: CardProps) => {
  return (
    <div className={style.card}>
      {imageSrc ? 
        <img alt="artwork" className={style.cardImage} src={imageSrc} /> 
        : (
          <div data-testid="noImageFoundIcon">
            <NoImageFound />
          </div>
        )}
      <div className={style.artInfo}>
        <h2 className={style.artTitle}>{title}</h2>
      </div>
    </div>
  );
};

export default Card;