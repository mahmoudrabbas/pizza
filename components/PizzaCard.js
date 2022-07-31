import Image from 'next/image';
import style from '../styles/PizzaCard.module.css';

const PizzaCard = () => {
    return (
        <div className={style.container}>
            <Image src='/imgs/pizza5.png' width={500} height={500} />
            <h1 className={style.title}>Pizza Chicken</h1>
            <span className={style.price}>19.5$</span>
            <p className={style.desc}>hdhhdddd ddddddd dddddd ddddddddddddddhd</p>
        </div>
    )
}

export default PizzaCard