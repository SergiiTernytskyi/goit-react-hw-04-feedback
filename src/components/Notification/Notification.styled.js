import styled from 'styled-components';

export const Message = styled.div`
  font-size: ${props => props.theme.fontSizes.m}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.heading};
  text-transform: uppercase;
  color: ${props => props.theme.colors.primaryText};
`;
