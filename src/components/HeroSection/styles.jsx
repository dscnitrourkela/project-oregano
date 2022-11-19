import styled from 'styled-components';
import tw from 'twin.macro';

export const HeroBody = styled.div`${
    tw`
    flex
    justify-center
    items-center
    text-white
    flex-col
    overflow-x-hidden
    overflow-y-hidden
    w-full
    font-Noto
    `
}`

export const HeroTitle = styled.div`${
    tw`
    flex
    justify-center
    items-center
    flex-col
    px-5`
}`

export const HACK = styled.img`${
    tw`
    object-contain
    h-20
    sm:h-32
    `
}`

export const SubTitle = styled.p`${
    tw`
    tracking-wide
    text-lg
    text-center
    sm:tracking-wider
    sm:text-2xl`
}`


export const NITR = styled.img`${
    tw`
    object-contain
    h-20
    sm:h-32
    `
}`

export const Tagline = styled.div`${
    tw`
    flex
    flex-col
    justify-center
    items-center
    mt-9
    sm:mt-14
    `
}`

export const TaglineText = styled.p`${
    tw`
    mt-3
    text-center
    text-color-secondary
    text-base
    text-color-tertiary`
}`

export const HeroButtons = styled.div`${
    tw`
    flex
    sm:flex-row
    flex-col
    justify-center
    items-center
    mt-12`
}`