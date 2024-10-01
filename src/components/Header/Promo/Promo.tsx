/**Рекламный блок */
import classes from "../header.module.css"

interface PromoProps {
    icon: string;
    link: string;
    title: string;
    text: string
}

export const Promo: React.FC<PromoProps> = ({ icon, link, title, text }) => {
    return (
        <>
            <div className={classes.promo}>
                <img src={icon} alt="Изображение" />
                <a href={link}>{title}</a>
                <p>{text}</p>
            </div>
        </>
    )
}