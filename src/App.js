import React, { Component } from 'react';
import Section from './components/Section';
import Statistic from './components/Statistic';



export default class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addStatistic = (evt) => {
    const name = evt.target.name;
    this.setState((prev) => {
      return {[name] : prev[name] +1}
    })
  }
 
  countTotalFeedback =() =>{
    const total = (this.state.good + this.state.bad + this.state.neutral)
    return total
    
  }

  countPositiveFeedbackPercentage = () =>{
    const positiveFeedback = Math.round((this.state.good * 100) / this.countTotalFeedback())
    return positiveFeedback
  }

  render() {
    return (
      <>
      <section>
        <h2>Please leve your feedback</h2>
        <button type="button" name="good" onClick = {this.addStatistic}>Good</button>
        <button type="button" name="neutral" onClick = {this.addStatistic} >Neutral</button>
        <button type="button" name ="bad" onClick = {this.addStatistic}>Bad</button>
        </section>

        <Section title="statistic"></Section>

        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />


  </>
    )
  }
}


