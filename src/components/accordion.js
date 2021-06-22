import React, { useEffect, useState } from 'react';
import { Box, Text, Divider } from 'theme-ui';
import theme from '../lib/theme';

import { Accordion, Card } from 'react-bootstrap';

const Accordion2 = ({ data }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let tempItems = [];
    data.forEach((item) => {
      tempItems.push({
        title: item.title,
        content: item.content
      });
    });

    setItems(tempItems);
  }, []);

  return (
    <div>
      <Accordion>
        {items.map((i, index) => (
          <div key={index}>
            <Box>
              <Accordion.Toggle
                eventKey={`${index}`}
                style={{
                  backgroundColor: theme.colors.darker,
                  color: '#fff',
                  border: 'none',
                  outline: 'none',
                  textAlign: 'left',
                  margin: 0,
                  padding: 0
                }}
              >
                <Text variant="subtitle" sx={{ mt: [1] }}>
                  {i.title}
                </Text>
              </Accordion.Toggle>
              <Accordion.Collapse
                eventKey={`${index}`}
                style={{ margin: '1rem 0' }}
              >
                <Text variant="caption" sx={{ px: [2] }}>
                  {i.content}
                </Text>
              </Accordion.Collapse>
            </Box>
            <Divider sx={{ borderColor: theme.colors.slate, my: [2] }} />
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default Accordion2;
