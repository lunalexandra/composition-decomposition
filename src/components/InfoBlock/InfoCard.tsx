/**Карточка информационного блока внизу */
import classes from "./infoblock.module.css";

interface InfoCardProps {
    title: string;
    link: string;
    children?: React.ReactNode;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, link, children }) => {
    return (
        <article className={classes["info-card"]}>
            <a href={link}>{title}</a>
            {children}
        </article>
    );
};