import { GlobalStyle } from 'components/GlobalStyle';
import { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Notification } from '../Notification/Notification';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';
import { Container } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const statisticsObj = { good, neutral, bad };

  const handleLeaveFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        return;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        return;

      case 'bad':
        setBad(prevState => prevState + 1);
        return;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Container>
      <GlobalStyle />

      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={Object.keys(statisticsObj)}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() > 0 ? (
          <Statistics
            statistics={statisticsObj}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback yet" />
        )}
      </Section>
    </Container>
  );
}
