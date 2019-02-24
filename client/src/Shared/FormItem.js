import React from "react";
import Form from "element-react";

const formItem = function(Controll, fieldName, props) {
  const {
    form: { value }
  } = this.state;
  return (
    <Form.Item prop={fieldName}>
      <Controll
        {...props}
        value={value}
        onChange={v => this.onFieldChange(v, fieldName)}
      />
    </Form.Item>
  );
};

export default formItem;
