import React from 'react';
import { Heading2 } from '..';
import Comp1, {Comp2} from './Comp1';

export const Footer = () => {
  return (
    <div>
        <Heading2> Footer </Heading2>
        <Comp1>list item 1</Comp1>
        <Comp1>list item 2</Comp1>
        <Comp1>Smaller Componenets</Comp1>

        <Comp2>another component</Comp2>
    </div>
  )
}
console.log(Comp1.componentStyle.rules)
console.log(Comp2.componentStyle.rules)