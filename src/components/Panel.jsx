import React from 'react';
import styled from 'styled-components';

const Panel = styled.ul`
margin: 1rem;
padding: 1rem;

background-color: ${({ theme }) => theme.panel.background};
border-radius: 3px;
box-shadow:
  0 2px 12px rgba(0, 0, 0, .2),
  inset 0 0 0 1px ${({ theme }) => theme.panel.borderColor},
  inset 0 0 0 2px rgba(255, 255, 255, .2);

color: ${({ theme }) => theme.panel.foreground};
line-height: 1.4;
`;

export default Panel;
