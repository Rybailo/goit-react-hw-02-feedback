import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  statisticsChange = option => {
    this.setState(prevState => {
      return {
        [option.target.name]: prevState[option.target.value] + 1,
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
            <h2>Please leave feedback</h2>
            <button
              type="button"
              name="good"
              value={'good'}
              onClick={this.statisticsChange}
            >
              good
            </button>
            <button
              type="button"
              name="neutral"
              value={'neutral'}
              onClick={this.statisticsChange}
            >
              neutral
            </button>
            <button
              type="button"
              name="bad"
              value={'bad'}
              onClick={this.statisticsChange}
            >
              bad
            </button>
          </div>
          <div>
            <h2>Statistics</h2>
            <ul>
              <li>Good: {this.state.good}</li>
              <li>Neutral: {this.state.neutral}</li>
              <li>Bad: {this.state.bad}</li>

              {this.countTotalFeedback() > 0 && (
                <li>Total: {this.countTotalFeedback()}</li>
              )}
              {this.countTotalFeedback() > 0 && (
                <li>
                  Positive feedback: {this.countPositiveFeedbackPercentage()}%
                </li>
              )}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
