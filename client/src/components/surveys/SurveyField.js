import React from "react";
import { Field } from "redux-form";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div style={{ color: "red", fontSize: ".8rm", marginBottom: "10px" }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
