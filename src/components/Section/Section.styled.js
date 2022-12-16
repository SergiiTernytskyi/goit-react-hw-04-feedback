import styled from 'styled-components';

export const SectionLayout = styled.section`
  padding: 30px 10px;

  border-radius: ${props => props.theme.radii.normal};
  background-color: ${props => props.theme.colors.background};

  :not(:last-child) {
    margin-bottom: ${props => props.theme.space[2] * 3}px;
  }
`;

export const Title = styled.title`
  display: block;
  margin-bottom: ${props => props.theme.space[5]}px;
  font-size: ${props => props.theme.fontSizes.xl}px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.body};
  text-transform: uppercase;
  color: ${props => props.theme.colors.primaryText};
`;
