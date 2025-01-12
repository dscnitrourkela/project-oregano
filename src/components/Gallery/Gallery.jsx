/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`xl:h-screen flex justify-center items-center flex-col gap-8 pb-32 pt-48 px-4`}
`;
const Title = styled.h1`
  ${tw`text-white font-Prompt font-bold xl:text-[64px] leading-[96px] text-3xl`}
`;
const Container = styled.div`
  ${tw`xl:h-full flex flex-col xl:gap-1 gap-4 items-center w-full`}
`;
const ImageRow = styled.div`
  ${tw`flex h-full flex-col xl:flex-row xl:gap-1 gap-4 overflow-hidden justify-center`}
`;
const Image = styled.img`
  ${tw`h-full object-contain`}
`;
export default function PhotoGallery() {
  return (
    <Wrapper>
      {' '}
      <Title>Photo Gallery</Title>{' '}
      <Container>
        {' '}
        <ImageRow>
          {' '}
          <Image
            src='https://res.cloudinary.com/dqcrkrtyr/image/upload/v1735197554/IMG_3676_1_pkbptg.png'
            alt='Image 1'
          />{' '}
          <Image
            src='https://res.cloudinary.com/dqcrkrtyr/image/upload/v1735197552/IMG_0407_1_kq3kpg.png'
            alt='Image 1'
          />{' '}
          <Image
            src='https://res.cloudinary.com/dqcrkrtyr/image/upload/v1735197554/IMG_3645_1_dj9dm0.png'
            alt='Image 1'
          />{' '}
        </ImageRow>{' '}
        <ImageRow>
          {' '}
          <Image
            src='https://res.cloudinary.com/dqcrkrtyr/image/upload/v1735197552/IMG_1425_1_jg3ne4.png'
            alt='Image 1'
          />{' '}
          <Image
            src='https://res.cloudinary.com/dqcrkrtyr/image/upload/v1735197552/IMG_1451_1_ilphko.png'
            alt='Image 1'
          />{' '}
          <Image
            src='https://res.cloudinary.com/dqcrkrtyr/image/upload/v1735197552/IMG_1369_1_frh45q.png'
            alt='Image 1'
          />{' '}
          <Image
            src='https://res.cloudinary.com/dqcrkrtyr/image/upload/v1735197554/IMG_1546_1_wxujwl.png'
            alt='Image 1'
          />{' '}
        </ImageRow>{' '}
        <ImageRow>
          {' '}
          <Image
            src='https://res.cloudinary.com/dqcrkrtyr/image/upload/v1735197553/IMG_3590_1_ynfo17.png'
            alt='Image 1'
          />{' '}
          <Image
            src='https://res.cloudinary.com/dqcrkrtyr/image/upload/v1735197554/IMG_3593_1_cmjzia.png'
            alt='Image 1'
          />{' '}
          <Image
            src='https://res.cloudinary.com/dqcrkrtyr/image/upload/v1735197553/IMG_1499_1_zl2drj.png'
            alt='Image 1'
          />{' '}
          <Image
            src='https://res.cloudinary.com/dqcrkrtyr/image/upload/v1735197552/IMG_0484_1_ls8yrp.png'
            alt='Image 1'
          />{' '}
        </ImageRow>{' '}
      </Container>{' '}
    </Wrapper>
  );
}
