
import style from '../styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';


function Navbar() {
    return (
        <div className={style.container}>
            <div className={style.item}>
                <div className={style.telBtn}>
                    <Image src="/imgs/tel.png" width="30" height="30"/>
                </div>
                <div className={style.texts}>
                    <div className={style.text}>order now !</div>
                    <div className={style.text}>(+20) 1024 7522</div>
                </div>
            </div>
            <div className={style.item}>
                <ul className={style.list}>
                    <li className={style.listItem}><Link href="/">Home</Link></li>
                    <li className={style.listItem}><Link href="/products">Products</Link></li>
                    <li className={style.listItem}><Link href="/menu">Menu</Link></li>
                    <li><Link href="/"><Image src={'/imgs/pizza3.png'} width="70%" height="70%" /></Link></li>
                    <li className={style.listItem}><Link href="/products">Discount</Link></li>
                    <li className={style.listItem}><Link href="/contact">Contact</Link></li>
                    <li className={style.listItem}><Link href="/about">About</Link></li>
                </ul>
            </div>
            <div className={style.item}>
                <div className={style.cart} data-counter={4}>
                    <Image src={'/imgs/cart.png'} width="40" height="40"/>
                    {/* <div className={style.counter}>5</div> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar