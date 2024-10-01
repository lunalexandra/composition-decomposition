import { list } from "./searchList";
import classes from "./searchBlock.module.css";

interface SearchListProps {
    link: string;
    title: string;
}

export const SearchBlock = () => {
    const searchList: SearchListProps[] = list;

    return (
        <>
            <div className={classes["search-block"]}>
                <div className={classes.logo}>
                    <img src="" alt="logo" />
                </div>
                <div className={classes["search-container"]}>
                <ul className={classes["search-list"]}>
                    {searchList.map(({ link, title }) => (
                        <li key={title}>
                            <a href={link}>{title}</a>
                        </li>
                    ))}
                </ul>
                <form className={classes["search-form"]}>
                    <input type="text" id="search-input" className={classes["search-input"]} placeholder="Введите запрос..." aria-label="Поисковая строка" />
                    <button type="submit" className={classes["search-button"]}>Найти</button>
                     <label htmlFor="search-input">Найдется все. Например ....</label>
                </form>
                </div>
            </div>
        </>
    );
};
