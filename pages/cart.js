import Image from "next/image";
import Layout from "../components/Layout";
import css from "../styles/Cart.module.css";
import { useStore } from "../store/store";
import { urlFor } from "../lip/client";
import toast, {Toaster} from "react-hot-toast";
import { useState } from "react";
import OrderModal from "../components/OrderModal";
import OrderModalCash from "../components/OrderModalCash"
export default function Cart() {
    const CartData = useStore((state)=>state.cart);
    
    const removePizza = useStore((state)=>state.removePizza);
    const[PaymentMethod, setPaymentMethod] = useState(null);
    const [Order, setOrder] = useState(
        typeof window !== 'undefined' && localStorage.getItem('order')
    )
    const handleRemove = (i)=> {
           removePizza(i);
           toast.error("Item Removed");
    };
    
    const total = ()=> CartData.pizzas.reduce((a,b)=>a+b.quantity * b.price, 0)
    
    const handleOnCash = ()=> {
        setPaymentMethod(1);
        typeof window !== 'undefined' && localStorage.setItem('total', total())
   }

    const handleOnDelivery = ()=> {
         setPaymentMethod(0);
         typeof window !== 'undefined' && localStorage.setItem('total', total())
    }
   
    return(
        <Layout>

            <div className={css.container}>
                
                {/* details*/}

                <div className={css.details}>
                    <table className={css.table}>
                        <thead>
                            <th>Item</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody className={css.tbody}>
                             {CartData.pizzas.length > 0 &&
                             CartData.pizzas.map((pizza, i)=> {
                                const src = urlFor(pizza.image).url()
                                return(
                                <tr key={i}>
                                    <td className = {css.imageTd}>
                                        <Image loader = {()=> src} alt="" objectFit = "cover" src={src} width = {85} height = {85}/>
                                    </td>
                                    
                                    <td>{pizza.name}</td>
                                    
                                    <td>
                                        {
                                            pizza.size === 0 ?
                                            "Small" :
                                            pizza.size === 1 ?
                                            "Medium" :
                                            "Large"
                                        }
                                    </td>

                                    <td>{pizza.price}</td>

                                    <td>{pizza.quantity}</td>

                                    <td>{pizza.price * pizza.quantity}</td>
                                     
                                    <td
                                    style={{color: "Red",
                                    cursor: 'pointer'}}
                                    onClick= {()=>handleRemove(i)}
                                    >x</td>
                                </tr>
                                   
                             )})
                             }
                        </tbody>
                    </table>
                </div>
                {/* summary*/}
                <div className={css.cart}>
                     <span>Cart</span>
                     <div className={css.CartDetails}>
                        <div>
                            <span>Items</span>
                            <span>{CartData.pizzas.length}</span>
                        </div>
                        
                        <div>
                            <span>Total</span>
                            <span>EGP {total()}</span>
                        </div>
                     </div>
                       
                       {!Order && CartData.pizzas.length > 0 ? (
                           <div className={css.buttons}>
                           <button className="btn" onClick={handleOnDelivery}>Pay on Delivery</button>
                           <button className="btn" onClick={handleOnCash}>Pay Now</button>
   
                       </div>
                       ): null}
                    

              </div>
            </div>
            <Toaster/>

            {/* Modal */}
            <OrderModal opened = {PaymentMethod === 0} setOpened = {setPaymentMethod} PaymentMethod = {PaymentMethod}/>
            <OrderModalCash opened = {PaymentMethod === 1} setOpened = {setPaymentMethod} PaymentMethod = {PaymentMethod}/>
        </Layout>
    )
};
