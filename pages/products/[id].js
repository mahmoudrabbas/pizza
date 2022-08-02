import style from '../../styles/Product.module.css'
// import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';



function Product() {
    const [size, setSize] = useState(0);
    const [count, setCount] = useState(1);
    const pizza = {
        id:1,
        img: "/imgs/pizza6.png",
        name: "Chicken Pizza",
        price: [20, 40, 50],
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum id ipsum quis ex iure, voluptatibus voluptas. Iste debitis reiciendis voluptas! Minus, dignissimos officiis molestias unde iusto, veniam ratione, architecto illum amet ab a laboriosam similique repudiandae. Fugiat distinctio repellat nulla aliquid placeat quae, ea provident ut facilis molestiae, inventore vero!"
    };
    return (
        <>
            <Head>
                <title>{pizza.name}</title>
                <meta charSet='utf-8' />
                <meta name='description' content='dddddddddddddd' />
            </Head>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.imgContainer}>
                        <img src={pizza.img} alt=""/>
                    </div>
                </div>
                <div className={style.right}>
                    <h1 className={style.title}>{pizza.name}</h1>
                    <p className={style.description}>{pizza.desc}</p>
                    <h4>Choose Size</h4>
                    <div className={style.btns}>
                        <button className={style.btn} onClick={() => setSize(0)}>Small</button>
                        <button className={style.btn} onClick={() => setSize(1)}>Medium</button>
                        <button className={style.btn} onClick={() => setSize(2)}>Large</button>
                    </div>
                    <p className={style.price}>${pizza.price[size] * count}</p>
                    <div className={style.addtocart}>
                        <input className={style.input} type='number' value={count} min={1} onChange={(e) => setCount(e.currentTarget.value)} /> 
                        <button className={style.addtoCartBtn}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
