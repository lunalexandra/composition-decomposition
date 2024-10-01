/**Блок со списокм новостей */

import classes from "../header.module.css";

interface ListProps {
    icon: string,
    link: string,
    title: string
}

export const NewsList: React.FC<{ data: ListProps[] }> = ({ data }) => {
    return (
        <ul className={classes["news-list"]}>
            {data.map(({ icon, link, title }) => (
                <li key={title}>
                    <img src={icon} alt={"..."} />
                    <a href={link}>{title}</a>
                </li>
            ))}
        </ul>
    );
};