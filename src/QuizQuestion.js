import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer)
      this.props.showNextQuestionHandler();
  }

  render() {
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
      </main>
    );
  }
}

export default QuizQuestion;
