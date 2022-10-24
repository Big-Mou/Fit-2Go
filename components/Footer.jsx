import {UilFacebook, UilWhatsapp, UilInstagram} from "@iconscout/react-unicons"
import css from '../styles/Footer.module.css'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import Link from 'next/link'
import socialMedia from '../assets/socialMedia.png'

export default function Footer() {
    return(
        <div className={css.container} id="footer">
           
           

           <Link href='#hero'><div className={css.logo}>
           <Image className={css.fimage} src ={Logo} alt ="" width={80} height={60}/>
            <span><a href="../">FIT2GO</a></span>
            </div></Link>
            <Image className={css.fimage} src ={socialMedia} alt ="" width={260} height={90}/>
            <div className={css.social}>
           <UilFacebook size={45}/>
            <UilWhatsapp size={45}/>
            <UilInstagram size={45}/>
           </div>

            <span>ALL RIGHTS RESERVED</span> 
        </div>
    )
};

  

