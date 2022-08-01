import style from '../../styles/Product.module.css'
import Image from 'next/image';



function Product() {
    const pizza = {
        id:1,
        img: "/imgs/pizza6.png",
        name: "Chicken Pizza",
        price: [19.2, 20, 25],
        desc: "A very delicious chickens pizza"
    };
    return (
        <div className={style.container}>
            <div className={style.left}>
                <div className={style.imgContainer}>
                    <img src={pizza.img} alt=""/>
                </div>
            </div>
            <div className={style.right}>
                <h1 className={style.title}>{pizza.name}</h1>
                <p className={style.description}>{pizza.desc}</p>
            </div>
        </div>
    );
}

export default Product;
