import React from "react";
import CustomButton from "../../ui/custom-button/custom-button.component";
import "./questions-block.styles.scss";

const Question = (props) => (
  <div className="questions">
    <h1>{props.title}</h1>
    <p className="author">От: {props.author}</p>
    {props.questions.map(({ type, question, id }) => (
      <div key={id} className="questions2">
        <div>
          {id}) {question}
        </div>
        <input type={type} placeholder="Отговор" />
      </div>
    ))}
    <CustomButton className="success">Решение</CustomButton>
  </div>
);

export default Question;
