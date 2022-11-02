import React from 'react';
import { useState } from 'react';
import {Heading3, Heading4, Heading5, Body1} from '../shared'
import * as styles from '../../styles/Carousel.module.css';
import { Item } from 'stream-chat-react/dist/components/AutoCompleteTextarea/Item';
export default function Card({ id, heading, name, designation, date, label, focused}) {

  return (
    <div id={id} className={`${styles.cardMob} rounded-lg p-3 ml-6 bg-gray-900`} style={focused?{border: "2px solid yellow"}:{}} onClick={()=>setApplied(rightCardClass)}>
      <div className='h-1/2 bg-white w-full rounded-md'></div>
      <div className='h-1/2  text-yellow-400 py-2 flex flex-col justify-between'>
        <Heading3>{heading}</Heading3>
        {/* {heading} */}
        <Body1>{name} : {designation}</Body1>
        <div className='flex justify-between'>
          <div className='my-auto'>
          <Heading4>{date}</Heading4>
          </div>
          <button className='bg-yellow-400 px-4 py-3 rounded-full text-black'>
            {label}
          </button>
        </div>
      </div>
    </div>
  );
}
