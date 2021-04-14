import React from "react";
import CustomButton from "../../ui/custom-button/custom-button.component";
import "./questions-block.styles.scss";

const Question = (props) => (
  <article className="questions">
    <h2>{props.title}</h2>
    <div>
      <div>Въпроси: {props.questions}</div>
    </div>
    <CustomButton className="success">Решение</CustomButton>
  </article>
);

export default Question;
