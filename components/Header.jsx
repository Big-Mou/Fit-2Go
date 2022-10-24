import css from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png' 
import { UilShoppingBag, UilReceipt } from '@iconscout/react-unicons'
import { useStore } from "../store/store";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
     const [Order, setOrder]= useState("")

     useEffect(()=>{
        setOrder(localStorage.getItem("order"));
     }, [])
   

    const items = useStore((state)=>state.cart.pizzas.length)
    return(
         <div className={css.header}>
           
            {/*logo side*/}
             <div className={css.logo}>
            <a href='#hero'><Image src ={Logo} alt ="" width={80} height={60}/></a>
            <span>FIT2GO</span>
            </div>
            
            {/* Menu side */}
            
            <ul className={css.menu}>
                <li className={css.hidden}><Link href='../'>Home</Link></li>
                <li className={css.menubtn}><Link href='../'>Menu</Link></li>
                <li className={css.hidden}><Link href='#footer'>Contact</Link></li>
             </ul>

            {/*right side*/}
             <div className={css.rightSide}>
                <Link href = '/cart'>
                <div className={css.cart}>
                    <UilShoppingBag size={35} color="#2E2E2E"/>
                    <div className={css.badge}>{items}</div>
                </div>
                </Link>
               
                {Order && (
                    <Link href={`/order/${Order}`}>
                    <div className={css.cart}>
                    <UilReceipt size={35} color='#2E2E2E'/>
                    {Order != "" && <div className={css.badge}>1</div>}
                    </div>
                    </Link>
                )}  
                
             
             </div>
        </div>
    )
};
