import PropTypes from 'prop-types';
import {
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiAngryFill,
} from 'react-icons/bs';
import { Button, ButtonsItem, ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(option => {
        return (
          <ButtonsItem key={option}>
            <Button
              type="button"
              option={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option === 'good' && <BsFillEmojiSmileFill size={26} />}
              {option === 'neutral' && <BsFillEmojiNeutralFill size={26} />}
              {option === 'bad' && <BsFillEmojiAngryFill size={26} />}
              {option}
            </Button>
          </ButtonsItem>
        );
      })}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
