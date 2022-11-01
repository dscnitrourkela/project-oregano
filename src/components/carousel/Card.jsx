import React from 'react';
import { useState } from 'react';
import * as styles from '../../styles/Carousel.module.css';
export default function Card({ id, pos , heading}) {
  
  const leftCardClass = `${styles.wReq} absolute top-0 z-10 opacity-60 ${styles.one} duration-500 ease-linear`;

  const centerCardClass = `${styles.wScaled} absolute top-0 z-30 duration-500 ease-linear ${styles.two}`;

  const rightCardClass = `${styles.three} ${styles.wReq} z-10 absolute top-0 opacity-60 duration-500 ease-linear`;
  
  const behindCardClass = `${styles.two} ${styles.wReq} absolute top-0 z-0 duration-500 ease-linear`;

  const [applied, setApplied] = useState(
    (pos==='left')?leftCardClass:((pos==='center')?centerCardClass:((pos==='right')?rightCardClass:behindCardClass))
  );


  return (
    <div id={id} className={applied} style={{border: "1px solid yellow"}} onClick={()=>setApplied(rightCardClass)}>
      <div className='h-1/2 bg-white w-full'></div>
      <div className='h-1/2 text-center  text-yellow-400'>{heading}</div>
    </div>
  );
}
