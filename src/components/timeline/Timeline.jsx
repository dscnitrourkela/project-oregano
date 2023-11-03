import React from 'react';
import Extensionboth from './ExtensionBoth';
import Extensionright from './ExtensionRight';
import { timelinecontent } from '../../../config/content/Timelinecontent';
import { TimelineHead, TimelineWrapper } from './styles';

export default function Timeline() {
  return (
    <TimelineWrapper>
      <TimelineHead>{timelinecontent.title}</TimelineHead>
      {timelinecontent.nodes.length === 0
        ? ''
        : timelinecontent.nodes.map((node, index) => {
            if (index === timelinecontent.nodes.length - 1) {
              if (node && node.ellipsecontent) {
                return (
                  <Extensionboth
                    key={node.serialid}
                    boxcolor={node.boxcolor}
                    wheelcolor={node.wheelcolor}
                    ellipsecolor={node.ellipsecolor}
                    node={node}
                    position='end'
                  />
                );
              }
              return (
                <Extensionright
                  key={node.serialid}
                  boxcolor={node.boxcolor}
                  node={node}
                  position='end'
                />
              );
            }
            if (node && node.ellipsecontent) {
              return (
                <Extensionboth
                  key={node.serialid}
                  boxcolor={node.boxcolor}
                  wheelcolor={node.wheelcolor}
                  ellipsecolor={node.ellipsecolor}
                  node={node}
                  position='notend'
                />
              );
            }
            return (
              <Extensionright
                key={node.serialid}
                boxcolor={node.boxcolor}
                node={node}
                position='notend'
              />
            );
          })}
    </TimelineWrapper>
  );
}
