import React from 'react';
import ExtensionBoth from './Extensionboth';
import ExtensionRight from './Extensionright';
import { timelinecontent } from '../../../config/content/Timelinecontent';
import { TimelineHead, TimelineWrapper } from './styles';
import { SectionContainer } from '../shared';

function TimelineSection() {
  return (
    <SectionContainer id='Timeline'>
      <TimelineWrapper>
        <TimelineHead>{timelinecontent.title}</TimelineHead>
        {timelinecontent.nodes.length === 0
          ? ''
          : timelinecontent.nodes.map((node, index) => {
              if (index === timelinecontent.nodes.length - 1) {
                if (node && node.ellipsecontent) {
                  return <ExtensionBoth key={node.serialid} node={node} position='end' />;
                }
                return <ExtensionRight key={node.serialid} node={node} position='end' />;
              }
              if (node && node.ellipsecontent) {
                return <ExtensionBoth key={node.serialid} node={node} position='notend' />;
              }
              return <ExtensionRight key={node.serialid} node={node} position='notend' />;
            })}
      </TimelineWrapper>
    </SectionContainer>
  );
}
export default TimelineSection;
