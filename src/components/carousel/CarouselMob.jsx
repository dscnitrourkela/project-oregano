import React from 'react'
import * as styles from '../../styles/Carousel.module.css';
import {Body2, Heading1, Heading2} from '../shared';
import Card from './Card'

export default function CarouselMob() {
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
  return (
    <div>
        <Heading2>SESSIONS</Heading2>
        <Body2>New to hackathon dont worry we got you covered with all the basic information</Body2>
        <div className={`flex flex-wrap flex-col overflow-x-scroll pt-10 card-holder ${styles.dragScroll}`} style={{height: "375px"}}>
            {
                cards1.map(
                    item=>
                        <Card id={item.id} designation={item.designation} name={item.name} key={item.key} focused={'true'} heading={item.heading} date={item.date} label={item.label} ></Card> 
                    
                )
            }
        </div>
    </div>
  )
}
