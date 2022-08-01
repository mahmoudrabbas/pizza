import style from '../styles/Footer.module.css';
import Image from 'next/image';
function Footer(props){
    return (
        <div className={style.container}>
            <div className={style.item}>
                <Image src={"/imgs/banner-2.jpg"} width="760" height="653.6" objectFit='cover' />
            </div>
            <div className={style.item}>
                <div className={style.card}>
                    <h2 className={style.motto}>
                        The Pizza We Made Is The Best
                    </h2>
                </div>
                <div className={style.card}>
                    <h1 className={style.title}>Find Our Restaurant</h1>
                    <p className={style.text}>
                        2658 st-Taha Hussein Rd #eee.
                        <br /> Minia, mina city
                        <br /> (+20) 1024 7522
                    </p>
                    <p className={style.text}>
                        2658 st-Taha Hussein Rd #eee.
                        <br /> Minia, mina city
                        <br /> (+20) 1024 7522
                    </p>
                    <p className={style.text}>
                        2658 st-Taha Hussein Rd #eee.
                        <br /> Minia, mina city
                        <br /> (+20) 1024 7522
                    </p>
                </div>
                <div className={style.card}>
                    <h1 className={style.title}>Working Hours</h1>
                        <p className={style.text}>
                            Saturday - thursday
                            <br /> 10:00 - 24:00
                            <br /> (+20) 1024 7522
                        </p>
                        <p className={style.text}>
                            Saturday - thursday
                            <br /> 10:00 - 24:00
                            <br /> (+20) 1024 7522
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;