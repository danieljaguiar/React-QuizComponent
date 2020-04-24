import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { incorrectAnswer: false };
    console.log("QuizQuestion -> Constructor");
  }

  handleClick(buttonText) {
    console.log("QuizQuestion -> handleClick");
    if (buttonText === this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false });
      this.props.showNextQuestionHandler();
    } else {
      this.setState({ incorrectAnswer: true });
    }
  }

  render() {
    console.log("QuizQuestion -> Render");
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          {this.props.quiz_question.answer_options.map(
            (answeroption, index) => (
              <QuizQuestionButton
                clickHandler={this.handleClick.bind(this)}
                button_text={answeroption}
                key={index}
              />
            )
          )}
          <ul></ul>
        </section>
        {this.state.incorrectAnswer ? (
          <p className="error">Sorry, that's not right</p>
        ) : null}
      </main>
    );
  }
}

export default QuizQuestion;
