import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    console.log("Quiz -> Constructor");
    super(props);
    this.state = { quiz_position: 1 };
  }

  handleResetClick() {
    this.setState({ quiz_position: 1 });
  }

  showNextQuestion() {
    console.log("Quiz -> ShowNext");
    this.setState({ quiz_position: this.state.quiz_position + 1 });
  }

  render() {
    console.log("Quiz -> Render");
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;
    let finalResult;

    if (isQuizEnd) {
      finalResult = (
        <QuizEnd resetClickHandler={this.handleResetClick.bind(this)}></QuizEnd>
      );
    } else {
      finalResult = (
        <QuizQuestion
          showNextQuestionHandler={this.showNextQuestion.bind(this)}
          className="QuizQuestion"
          quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
        ></QuizQuestion>
      );
    }

    return <div>{finalResult}</div>;
  }
}

export default Quiz;
