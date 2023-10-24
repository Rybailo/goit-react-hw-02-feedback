import React, { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statisticsChange = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const persentege = (100 / (good + neutral + bad)) * good;
    return persentege.toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <section>
          <div>
            <Section title="Please leave feedback">
              <FeedbackOptions
                options={['good', 'neutral', 'bad']}
                onLeaveFeedback={this.statisticsChange}
              ></FeedbackOptions>
            </Section>
            {this.countTotalFeedback() > 0 ? (
              <Section title="Statistics">
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={this.countTotalFeedback}
                  positivePercentage={this.countPositiveFeedbackPercentage}
                ></Statistics>
              </Section>
            ) : (
              <Notification message="There is no feedback"></Notification>
            )}
          </div>
        </section>
      </div>
    );
  }
}
