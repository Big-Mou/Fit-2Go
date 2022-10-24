import css from '../styles/Hero.module.css';
import Image from 'next/image';
import logo from '../assets/logo1.png';
import HeroImage from '../assets/logo1.png';
import {UilPhone} from '@iconscout/react-unicons';
import Link from 'next/link'
export default function Hero() {
    return(
        <div className={css.container} id="hero">
           
            {/* left side */}
           
            <div className={css.left}>
              
            <Link href='#menu'><div className={css.cherryDiv}>
                <span>Eat right live right</span>
                <Image src={logo} alt="" width={50} height={40}/>
               </div></Link>
            
              <div className={css.heroText}>
                <span>Be The Fastest</span>
                <span>In Delivering</span>
                <span>
                Your <span style={{color: "var(--themeRed)"}}>Healthy Meal</span>
                </span>
               </div>

               <span className={css.miniText}>
                Our mission is to fill your tummy with Healthy food as you should eat right to live right
                and we offer perfect service, free delivery and high quality.
               </span>

               <Link href='#menu'><button className={'btn ${css.btn}'}>
               Get started
               </button></Link>

            
            </div>
          
            {/* right side */}

            <div className={css.right}>
                <div className={css.imageContainer}>
                    <Image src={HeroImage} alt="" layout="intrinsic"/>
                </div>

                
                <Link href='https://instagram.com/fit2go1?igshid=YmMyMTA2M2Y='><a target="_blank"><div className={css.ContactUs}>
                  <span>Contact us</span>
                  <div>
                    <UilPhone color='white'/>
                  </div>
                </div></a></Link>

                
          </div>
        </div>

    )
    
};

  


