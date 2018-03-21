import React from 'react';
import styled from 'styled-components';

const Panel = styled.ul`
margin: 1rem;
padding: 1rem;

background-color: ${({ theme }) => theme.panel.background};
border-radius: 3px;
color: ${({ theme }) => theme.panel.foreground};
line-height: 1.4;
`;

export default Panel;
