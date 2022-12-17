import styled from 'styled-components';

export const StatisticsList = styled.ul`
  text-transform: uppercase;
  list-style: none;
`;

export const StatisticsItem = styled.li`
  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.semibold};
  line-height: ${props => props.theme.lineHeights.body};

  color: ${props => props.theme.colors.primaryText};

  :not(:last-child) {
    margin-bottom: ${props => props.theme.space[4]}px;
  }
`;
