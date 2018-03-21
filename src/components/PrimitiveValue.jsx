import styled from 'styled-components';

export default styled.span`
background-color: ${({ name, theme }) => theme.primitives[name].background};
color: ${({ name, theme }) => theme.primitives[name].foreground};
`;
