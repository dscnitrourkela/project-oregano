import React from 'react';
import { useState } from 'react';
import * as styles from '../../styles/Carousel.module.css';
import { Body1, Body2, Heading3, Heading2, Caption} from '../shared';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default function Carousel({cards, focused}) {
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

  function rotateLeft() {
    setCNS([...cns.slice(1), cns[0]]);
    setCardDex([...cardDex.slice(1), cardDex[0]]);
    setCenter((center-1 + cards.length)%cards.length);
  }
  function rotateRight() {
    setCNS([cns[cns.length - 1], ...cns.slice(0, cns.length - 1)]);
    setCardDex([cardDex[cardDex.length - 1], ...cardDex.slice(0, cardDex.length - 1)]);
    setCenter((center+1)%cards.length);
  }

  return (
    <div className={`grid grid-cols-5 py-12 w-full ${styles.largeGrid}`}>
      <div className={`${styles.hComponent} ${styles.columnGrid}  w-full`}>
        <div className={`mx-auto relative ${styles.wScaled} `}>
          <button
            id='left-carousal-btn'
            className={`z-50 absolute w-8 h-8  bg-yellow-500 p-2 rounded-full text-white ${styles.leftBtn}`}
            onClick={rotateLeft}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            id='right-carousal-btn'
            className={`z-50 w-8 h-8 text-white bg-yellow-300 absolute p-2 rounded-full  ${styles.rightBtn}`}
            onClick={rotateRight}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* card  */}
          {cards.map((item) => {
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
        className={` relative max-w-md   pr-3  flex flex-col justify-between ${styles.columnGrid2}`}
        style={{ top: '22px', height: '517px' }}
      >
        <Heading2>SESSIONS</Heading2>
        <Caption>
          Now to hackathon dont worry we got you covered with all the basic information
        </Caption>
        <Heading3>{cards[center].heading}</Heading3>

        <Body2>{cards[center].name}</Body2>

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
