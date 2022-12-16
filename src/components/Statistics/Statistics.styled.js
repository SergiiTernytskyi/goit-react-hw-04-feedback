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

export const MessageList = styled.ul`
  display: flex;
  align-items: ceter;
  justify-content: center;
  list-style: none;
  gap: ${props => props.theme.space[5]}px;
`;

export const Message = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.l}px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.body};
  min-width: 100px;

  color: ${props => {
    switch (props.option) {
      case 'good':
        return '#03ad00';
      case 'neutral':
        return '#fa7600';
      case 'bad':
        return '#ed0f07';
      default:
        throw new Error('Unexpected prop');
    }
  }};

  svg {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
`;
