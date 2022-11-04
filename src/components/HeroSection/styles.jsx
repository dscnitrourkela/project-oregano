import styled from 'styled-components';
import tw from 'twin.macro';

export const HeroBody = styled.div`${
    tw`
    flex
    h-screen
    justify-center
    items-center
    bg-black
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
    h-24
    `
}`

export const SubTitle = styled.p`${
    tw`
    tracking-wide
    sm:tracking-widest
    text-lg
    text-center`
}`


export const NITR = styled.img`${
    tw`
    object-contain
    h-24
    `
}`

export const Tagline = styled.div`${
    tw`
    flex
    flex-col
    justify-center
    items-center
    mt-8
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
    justify-center
    items-center
    mt-8`
}`

export const DevfolioBtn = styled.button`${
    tw`
    text-btn-yellow
    bg-transparent
    border
    border-btn-yellow
    py-2.5
    px-2
    rounded-lg
    h-11
    `
}`

export const DiscBtn = styled.img`${
    tw`
    h-11
    m-2
    cursor-pointer`
}`