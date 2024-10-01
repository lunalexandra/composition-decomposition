/**Строка с котировками */

import classes from "../header.module.css";

interface QuotesProps {
    ticker: string,
    link: string,
    price: string,
    change: string
}

export const Quotes: React.FC<{ data: QuotesProps[] }> = ({ data }) => {
    return (
        <ul className={classes["quotes-list"]}>
            {data.map(({ ticker, link, price, change }) => (
                <li key={ticker}>
                    <a href={link}>{`${ticker} ${price} ${change}`}</a>
                </li>
            ))}
        </ul>
    );
};