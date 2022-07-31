import style from '../styles/Slider.module.css';
import Image from 'next/image';
import {useState} from 'react';
const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSlide = (d) => {
        (d === 'r')? setIndex(index < 2 ? index+1: 0): setIndex(index > 0 ? index-1: 2);
    }


    const imgs = [
        '/imgs/pizza6.png',
        '/imgs/pizza2.png',
        '/imgs/pizza5.png'
    ]
    return (
        <div className={style.container}>
            <div className={style.arrowContainer} style={{ left:0 }} onClick={() => handleSlide('l')} >
                <Image src="/imgs/arrowL.png" layout='fill' objectFit='contain'/>   
            </div>
            <div className={style.wrapper} style={{ transform:`translateX(${-100 * index}vw)` }}>
                {imgs.map((img, i  )=> (
                    <div className={style.imgContainer} key={i}>
                        <Image src={img} layout='fill' objectFit='contain' />
                    </div>
                ))}
            </div>
            <div className={style.arrowContainer} style={{ right:0 }} onClick={() => handleSlide('r')}>
                <Image src="/imgs/arrowR.png" layout='fill' objectFit='contain'/>
            </div>
        </div>
    )
}

export default Slider