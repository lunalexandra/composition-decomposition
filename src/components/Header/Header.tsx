import { News } from "./News/News";
import { Promo } from "./Promo/Promo";
import classes from "./header.module.css"

export const Header = () => {
    return (
        <>
            <div className={classes["header"]}>
                <News />
                <Promo icon="" link="" title="Заголовок рекламного блока" text="Описание" />
            </div>
        </>
    )
}