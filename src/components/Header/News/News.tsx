/**Новостной блок, включающий список новостей и котировки */
import { newsData, quotes } from "./newsData";
import { NewsList } from "./NewsList";
import { Quotes } from "./Quotes";
import classes from "../header.module.css";

export const News = () => {
    const currentDate = new Date().toLocaleDateString();
    return (
        <>
            <div className={classes["news-container"]}>
                <div className={classes["top-line"]}>
                    <ul className={classes["news"]}>
                        <li>
                            <a href="#">Сейчас в СМИ</a>
                        </li>
                        <li>
                            <a href="#">В стране</a>
                        </li>
                        <li>
                            <a href="#">Рекомендуем</a>
                        </li>
                    </ul>
                    <p>{currentDate}</p>
                </div>
                <NewsList data={newsData} />
                <Quotes data={quotes} />
            </div>
        </>
    );
};
