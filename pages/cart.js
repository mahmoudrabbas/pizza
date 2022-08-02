import Head from "next/head";
import style from "../styles/Cart.module.css";
import Image from 'next/image';

const cart = () => {
    return (
        <>
            <Head>
                <title>Cart</title>
                <meta charSet='utf-8' />
                <meta name='description' content='ss' />
            </Head>
            <div className={style.container}>
                <div className={style.left}>
                    <table className={style.table}>
                        <tr className={style.tr}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                        <tr>
                            <td>
                                <Image src="/imgs/pizza4.png" width={40} height={40} />
                            </td>
                            <td>
                                Chicken Pizza
                            </td>
                            <td>
                                $100
                            </td>
                            <td>
                                5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Image src="/imgs/pizza4.png" width={40} height={40} />
                            </td>
                            <td>
                                Chicken Pizza
                            </td>
                            <td>
                                $100
                            </td>
                            <td>
                                5
                            </td>
                        </tr>

                    </table>
                </div>
                <div className={style.right}>
                    <div className={style.wrapper}>
                        <h2>Cart Price</h2>
                        <div className={style.group}>
                            <span>Total Price</span>: $200<br />
                            <span>Discount</span>: $0<br/>
                            <span>Total Price</span>: $200<br />
                            <hr />
                            <button class={style.btn}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cart