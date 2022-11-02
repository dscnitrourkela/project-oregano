import React from 'react';
import { useState } from 'react';
import * as styles from '../../styles/Carousel.module.css';
import { Body1, Body2, Heading3, Heading2, Caption, ButtonMeta, ButtonMetaLarge } from '../shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Carousel() {
  const [focused, setFocused] = useState(2);
  const leftCardClass = `${styles.wReq} absolute top-0 z-10 ${styles.one} duration-300 ease-linear p-3 bg-gray-900 rounded-2xl`;

  const centerCardClass = `${styles.wScaled} absolute top-0 z-30 duration-300 ease-linear rounded-3xl p-3 bg-gray-900 ${styles.two}`;

  const rightCardClass = `${styles.three} ${styles.wReq} z-10 absolute top-0 duration-300 ease-linear bg-gray-900 p-3 rounded-2xl`;

  const behindCardClass = `${styles.two} ${styles.wReq} absolute top-0 z-0 duration-300 ease-linear p-3`;

  const [cns, setCNS] = useState([leftCardClass, centerCardClass, rightCardClass, behindCardClass]);
  
  const [cardDex, setCardDex] = useState(
    cns.map((item) => {
      if (item === centerCardClass) {
        return 'bg-yellow-400';
      } else {
        return 'bg-gray-100';
      }
    }),
  );

  const [center, setCenter] = useState(1);

  let cards1 = [
    {
      id: 1,
      heading: 'HOW TO PRESENT IN A HACKATHON',
      name: 'Sivraj Rajshiv',
      designation: 'MLH Lead',
      date: '29 January',
      label: 'LABEL',
    },
    {
      id: 2,
      heading: 'HOW TO PRESENT IN A EVENT',
      name: 'Ayush Shaw',
      designation: 'MLH Lead',
      date: '29 January',
      label: 'LABEL',
    },
    {
      id: 3,
      heading: 'Random text3',
      name: 'Sivraj Rajshiv',
      designation: 'MLH Lead',
      date: '29 January',
      label: 'LABEL',
    },
    {
      id: 4,
      heading: 'Random text4',
      name: 'Sivraj Rajshiv',
      designation: 'MLH Lead',
      date: '29 January',
      label: 'LABEL',
    },
  ];
  function rotateLeft() {
    setCNS([...cns.slice(1), cns[0]]);
    setCardDex([...cardDex.slice(1), cardDex[0]]);
    setCenter((center-1 + cards1.length)%cards1.length);
  }
  function rotateRight() {
    setCNS([cns[cns.length - 1], ...cns.slice(0, cns.length - 1)]);
    setCardDex([cardDex[cardDex.length - 1], ...cardDex.slice(0, cardDex.length - 1)]);
    setCenter((center+1)%cards1.length);
  }

  return (
    <div className='grid grid-cols-5 py-12'>
      <div className={`${styles.hComponent} col-span-3`}>
        <div className={`mx-auto relative ${styles.wScaled} `}>
          <button
            id='left-carousal-btn'
            className={`z-50 absolute w-8 ${styles.leftBtn}`}
            onClick={rotateLeft}
          >
            Left
            <FontAwesomeIcon icon="fa-light fa-chevron-left" />
          </button>
          <button
            id='right-carousal-btn'
            className={`z-50 absolute w-8 ${styles.rightBtn}`}
            onClick={rotateRight}
          >
            Right
            <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
          </button>

          {/* card  */}
          {cards1.map((item) => {
            return (
              <div
                key={item.id}
                className={`${(item.id===focused)?styles.focused:""} ${cns[item.id - 1]}`}
                style={
                  cns[item.id - 1] !== centerCardClass
                    ? { filter: 'blur(2px)' }
                    : { filter: 'blur(0px)' }
                }
              >
                <div
                  className='h-1/2 bg-white w-full'
                  style={
                    cns[item.id - 1] !== centerCardClass
                      ? { borderRadius: '1.0rem' }
                      : { borderRadius: '0.8rem' }
                  }
                ></div>
                <div className='h-1/2 text-white py-4 bg-gray-900 flex flex-col justify-between'>
                  <div>
                    <Heading3>{item.heading}</Heading3>
                    <div className='py-4'>
                      <Body2>
                        {item.name} : {item.designation}
                      </Body2>
                    </div>
                  </div>
                  <div className='flex justify-between '>
                    <Body1>{item.date}</Body1>
                    <div className='h-fit mt-auto'>
                      <Body2>{item.label}</Body2>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div
            className=' mx-auto justify-between py-4 flex'
            style={{ width: `${cardDex.length}rem` }}
          >
            {cardDex.map((item) => {
              return <span className={`${item} h-2 w-2 rounded-full mx-auto`}></span>;
            })}
          </div>
        </div>
      </div>
      <div
        className=' col-span-2 relative max-w-md ml-auto pr-3 mr-16 flex flex-col justify-between'
        style={{ top: '22px', height: '517px' }}
      >
        <Heading2>SESSIONS</Heading2>
        <Caption>
          Now to hackathon dont worry we got you covered with all the basic information
        </Caption>
        <Heading3>{cards1[center].heading}</Heading3>

        <Body2>{cards1[center].name}</Body2>

        <Body2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In nulla nisi facere itaque ad
          doloribus, maxime dignissimos, minus accusamus, distinctio ratione consequatur harum rerum
          exercitationem beatae excepturi libero aut totam quam amet labore iure architecto.
        </Body2>

        <div className='flex justify-between pt-4'>
          <button className='bg-yellow-400 py-4 px-6 text-sm rounded-full text-black'>JOIN LIVE</button>
          <span className='h-fit my-auto font-semibold text-yellow-400 text-sm underline cursor-pointer'>
            GO TO YOUTUBE {'>'}
          </span>
        </div>
      </div>
    </div>
  );
}
