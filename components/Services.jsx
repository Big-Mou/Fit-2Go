import Image from 'next/image'
import css from '../styles/Services.module.css'
import s1 from '../assets/chef.png'
import s2 from '../assets/freedelivery.png'
import s3 from '../assets/coach.png'


export default function Services() {
    return(
        <>
        <div className={css.heading}>
            <span>WHAT WE SERVE</span>
            <span>Healthy Food</span>
            <span>Free Delivery</span>
        </div>

        {/* Services*/}

        <div className={css.services}>
              
              
              <div className={css.feature}>
                 <div className={css.ImageWrapper}>
                    <Image src={s1} alt="" objectFit='cover' layout='intrinsic'/>
                 </div>

                <span>Easy to order</span>
                <span>You only need a few steps for food ordering</span>
              </div>

              <div className={css.feature}>
                 <div className={css.ImageWrapper}>
                    <Image src={s2} alt="" objectFit='cover' layout='intrinsic'/>
                 </div>

                <span>Free Delivery</span>
                <span>Delivery that is always in time and for free</span>
              </div>

              <div className={css.feature}>
                 <div className={css.ImageWrapper}>
                    <Image src={s3} alt="" objectFit='cover' layout='intrinsic'/>
                 </div>

                <span>Coach Support</span>
                <span>We offer a coach support from our certfied coach to setup your own diet</span>
              </div>
        </div>

         </>
    )
};
