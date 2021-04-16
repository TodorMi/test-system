import React from "react";
import CustomButton from "../../ui/custom-button/custom-button.component";
import "./test-block.styles.scss";

const Test = (props) => (
  <article className="test">
    <h2>{props.title}</h2>
    <div>
      <div>Въпроси: {props.questions}</div>
      <div>Решен: {props.completed} пъти</div>
      <div className="author">От: {props.author}</div>
    </div>
    <CustomButton onClick={props.clicked}>&#9655; Започни</CustomButton>
  </article>
);

export default Test;
