import classes from "./banner.module.css";

interface BannerProps {
  img?: string;
}

export const Banner: React.FC<BannerProps> = ({ img }) => {
  return (
    <div className={classes["banner"]}>
      {img ? (
        <img src={img} alt="Banner" className={classes.img} />
      ) : (
        <div className={classes.placeholder}>Нет изображения</div>
      )}
    </div>
  );
};
