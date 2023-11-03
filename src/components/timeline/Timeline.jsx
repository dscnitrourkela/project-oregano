import React from 'react';
import styled from 'styled-components';
import Extensionboth from './Extensionboth';
import Extensionright from './Extensionright';
import { timelinecontent } from '../../../config/content/Timelinecontent';
import { Heading1 } from '..';

const Theading = styled(Heading1)`
    font-weight: 700;
    margin: 0;
    margin-bottom: 24px;
    @media (max-width: 640px) {
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 96px;
      margin-top: 32px;
      margin-bottom: 32px;
    }
`
const Wrapper = styled.div`
  width: 1240px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 640px) {
    width: 362.885px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export default function timeline() {
  return (
    <section>
      <Wrapper>
        <Theading>{timelinecontent.title}</Theading>
        {timelinecontent.nodes.length === 0
          ? ''
          : timelinecontent.nodes.map((node, index) => {
              if (index === timelinecontent.nodes.length - 1) {
                if (node && node.ellipsecontent) {
                  return (
                    <Extensionboth
                      key={node.sno}
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
                    key={node.sno}
                    boxcolor={node.boxcolor}
                    node={node}
                    position='end'
                  />
                );
              }

              if (node && node.ellipsecontent) {
                return (
                  <Extensionboth
                    key={node.sno}
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
                  key={node.sno}
                  boxcolor={node.boxcolor}
                  node={node}
                  position='notend'
                />
              );
            })}
      </Wrapper>
    </section>
  );
}
