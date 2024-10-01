import { InfoCard } from "./InfoCard"
import classes from "./infoblock.module.css"

export const InfoBlock = () => {
    return (
        <>
            <div className={classes["info-block"]}>
                <InfoCard title="Погода" link="#">
                    <img src="" alt="Дождь" />
                    <p>+17</p>
                    <p>Текст</p>
                </InfoCard>

                <InfoCard title="Карта страны" link="#">
                    <p>Текст</p>
                </InfoCard>

                <InfoCard title="Эфир" link="#">
                    <ul>
                        <li>Элемент списка 1</li>
                        <li>Элемент списка 1</li>
                        <li>Элемент списка 1</li>
                    </ul>
                </InfoCard>

                <InfoCard title="Посещаемое" link="#">
                    <ul>
                        <li>Элемент списка 1</li>
                        <li>Элемент списка 1</li>
                        <li>Элемент списка 1</li>
                    </ul>
                </InfoCard>

                <InfoCard title="Телепрограмма" link="#">
                    <ul>
                        <li>Элемент списка 1</li>
                        <li>Элемент списка 1</li>
                        <li>Элемент списка 1</li>
                    </ul>
                </InfoCard>
            </div>
        </>
    )
}