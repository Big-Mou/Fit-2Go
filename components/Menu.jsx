
import Image from 'next/image';
import css from '../styles/Menu.module.css'
import { urlFor } from "../lip/client"
import Link from 'next/link'


export default function Menu({ pizzas }) {
    
    





    return (
        <div className={css.container} id="menu">

            <div className={css.heading}>
                 <span>OUR MENU</span>
                 <span>Menu That Always</span>
                 <span>Make You Fall In Love</span>
            </div>
 
            
             <div className={css.menu}>
            {/* pizzas */}
            {pizzas.map((pizza,id)=>{

                const src = urlFor(pizza.image).url();
                return (
                    <div className={css.pizza} key={id}>
                         
                         <Link href={`./pizza/${pizza.slug.current}`}>

                        <div className={css.ImageWrapper}>
                            <Image loader={()=> src} src={src} alt="" objectFit="cover" layout="fill"/>
                        </div>
                            
                            </Link>

                            <span className={css.pizzaName}>{pizza.name}</span>
                            <span className={css.pizzaName}><span style={{ color: "var(--themeRed)" }}>EGP</span>{""} {pizza.price[0]}</span>
                            
                    </div>
                )
            })}
        
            </div>
       
        </div>
    );
    
}

