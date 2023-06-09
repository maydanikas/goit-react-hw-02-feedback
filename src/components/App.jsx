import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from '../css/Widget.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hadleFeedback = event => {
    const feedback = event.target.name.toLowerCase();
    if (feedback in this.state) {
      this.setState(prevState => {
        return { [feedback]: prevState[feedback] + 1 };
      });
    }
  };

  // hadleFeedback = event => {
  //   if (event.target === event.currentTarget) {
  //     return;
  //   }
  //   for (const feedback in this.state) {
  //     if (event.target.name.toLowerCase() === feedback) {
  //       this.setState(prevState => {
  //         return { [feedback]: prevState[feedback] + 1 };
  //       });
  //     }
  //   }
  // };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <div className={css.feedbackContainer}>
        <Section title="Please leave feedback below:">
          <FeedbackOptions
            feedback={this.hadleFeedback}
            options={this.state.feedbackOptions}
          />
        </Section>
        {this.countTotalFeedback(this.state) ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
