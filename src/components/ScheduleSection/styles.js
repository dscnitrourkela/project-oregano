import styled, { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'
import StarJedi from '../../../static/Starjedi.ttf'

export const StarJediFont = createGlobalStyle`
  @font-face {
    font-family: 'starjedi';
    src: url(${StarJedi}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  `

export const GridContainer = styled.div`
${tw`
w-full
grid
grid-cols-1
md:grid-cols-4
md:gap-16
gap-10
items-center
`}`;

export const DateContainer = styled.div`
font-family:'starjedi';
${tw`
    col-span-1
    text-color-primary
    md:text-5xl
    text-3xl
`}`;

export const EventContainer = styled.div`
${tw`
    overflow-x-scroll
    md:col-span-3
    flex
    gap-9
    relative
    w-full
`}
-ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const DottedLine = styled.div`
position:absolute;
top:50%;
left:0;
height:4px;
border-top:2px dashed #FFF496;
opacity: 0.48;
z-index:10;
width:${(props) => (props.length > 1 ? `calc(${props.length}*290px + 10px)` : '100%')};
@media(min-width:768px){
    width:${(props) => (props.length > 2 ? `calc(${props.length}*386px + 20px)` : '100%')};
}
`

export const EventIndividualContainer = styled.div`
${tw`
flex
items-center
gap-2
z-20
`}
`

export const EventCompletion = styled.div`
border: 1px solid white;
background-color:${(props) => (props.completed ? '#FDBD0F' : '#202020')};
${tw`
h-4
w-4
rounded-full
`}
`

export const EventDetailContainer = styled.div`
${tw`
md:p-4
p-3
md:w-[326px]
w-[230px]
grid
grid-cols-4
items-center

justify-between
bg-background-dark
h-full
rounded-xl
`}`;

export const EventDetails = styled.div`
${tw`
flex
flex-col
col-span-3
content-start
justify-center
gap-1
w-full
h-full
`}`;

export const EventSpeaker = styled.div`
${tw`
flex
flex-row
gap-1
items-center
`}`;

