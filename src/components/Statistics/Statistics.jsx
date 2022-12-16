import PropTypes from 'prop-types';
import {
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiAngryFill,
} from 'react-icons/bs';
import {
  StatisticsItem,
  Message,
  StatisticsList,
  MessageList,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        <MessageList>
          <Message option="good">
            <BsFillEmojiSmileFill size={36} />
            Good: {good}
          </Message>
          <Message option="neutral">
            <BsFillEmojiNeutralFill size={36} />
            Neutral: {neutral}{' '}
          </Message>
          <Message option="bad">
            <BsFillEmojiAngryFill size={36} />
            Bad: {bad}{' '}
          </Message>
        </MessageList>
      </StatisticsItem>
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>Positive feedback: {positivePercentage}%</StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
