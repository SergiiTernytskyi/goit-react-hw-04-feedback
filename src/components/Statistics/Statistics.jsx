import PropTypes from 'prop-types';
import { MessageList } from 'components/MessageList/MessageList';
import { StatisticsItem, StatisticsList } from './Statistics.styled';

export const Statistics = ({ statistics, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <MessageList statistics={statistics} />
      </StatisticsItem>
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>Positive feedback: {positivePercentage}%</StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
