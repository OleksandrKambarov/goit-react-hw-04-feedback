import React, { useState } from 'react';
import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerBTn = ({ target: { textContent } }) => {
    this.setState({
      [textContent]: this.state[textContent] + 1,
    });
  };

  const countTotalFeedback = () => {
    const total = Object.values({ ...this.state }).reduce((acc, value) => {
      acc += value;
      return acc;
    }, 0);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  const buttons = Object.keys({ ...this.state });
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={buttons} onLeaveFeedback={this.handlerBTn} />
      </Section>

      <Section title="Statistics">
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;
