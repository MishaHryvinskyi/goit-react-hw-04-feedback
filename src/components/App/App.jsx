import { useState } from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";
import { MainContainer } from './App.styled';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

const feedbackOptions = {
  good: setGood,
  neutral: setNeutral,
  bad: setBad
};

const handleFeedback = (type) => {
  const feedbackUpdater = feedbackOptions[type];
  if (feedbackUpdater) {
    feedbackUpdater(prevValue => prevValue + 1);
  }
};

  

const totalFeedback = good + neutral + bad;

const countPositiveFeedbackPercentage = () => {
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
}

  
const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

  

return (
  <MainContainer>
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={Object.keys(feedbackOptions)}
        onLeaveFeedback={handleFeedback}
      />
    </Section>

    <Section title="Statistics">
      {totalFeedback > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
    <Notification message="There is no feedback" />
    )}
    </Section>
  </MainContainer>
    );
  }


export default App;