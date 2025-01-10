'use client';
import React from 'react';

import Prizes from '@/components/prizes/prizes';
import PhotoGallery from '@/components/photoGallery/PhotoGallery';

const Playground = () => {
  return (
    <div className='flex items-center justify-center flex-col w-full h-full px-5'>
      {/* <H1>Playground</H1>
      <H2>Add your components here.</H2>
      <div className='flex gap-5 h-full flex-col my-10'>
        <div>
          {' '}
          <PrimaryButton>This is a primary button</PrimaryButton>
        </div>
        <div>
          <DiscordButton>Discord</DiscordButton>
        </div>
      </div>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error tenetur quae totam?
        Eius optio rem aperiam, asperiores eos, nisi odio dignissimos dicta, dolores itaque
        doloremque. Et magni eius voluptates?
      </Paragraph> */}

      <Prizes />
      <PhotoGallery />
    </div>
  );
};

export default Playground;
