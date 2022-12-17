import PropTypes from 'prop-types';

import {
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiAngryFill,
} from 'react-icons/bs';
import { List, Message } from './MessageList.styled';

export const MessageList = ({ statistics: { good, neutral, bad } }) => {
  return (
    <List>
      <Message option="good">
        <BsFillEmojiSmileFill size={36} />
        Good: {good}
      </Message>
      <Message option="neutral">
        <BsFillEmojiNeutralFill size={36} />
        Neutral: {neutral}
      </Message>
      <Message option="bad">
        <BsFillEmojiAngryFill size={36} />
        Bad: {bad}
      </Message>
    </List>
  );
};

MessageList.propTypes = {
  statistics: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};
