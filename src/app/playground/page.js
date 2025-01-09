'use client';
import React from 'react';

import { DiscordButton, PrimaryButton } from '@/components/shared/typography/Button';
import { H1, H2, Paragraph } from '@/components/shared/typography/Headings';

const Playground = () => {
  return (
    <div className='flex items-center justify-center flex-col w-full h-full px-5'>
      <H1>Playground</H1>
      <H2>Add your components here.</H2>
      <div className='flex gap-5 h-full flex-col my-10'>
        <PrimaryButton>This is a primary button</PrimaryButton>
        <DiscordButton>Discord</DiscordButton>
      </div>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error tenetur quae totam?
        Eius optio rem aperiam, asperiores eos, nisi odio dignissimos dicta, dolores itaque
        doloremque. Et magni eius voluptates?
      </Paragraph>
    </div>
  );
};

export default Playground;
