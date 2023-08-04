/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';

const RadioButtonWithTooltip = ({ label, tooltipText, checked, onChange }) => {
  return (
    <OverlayTrigger
      placement="right"
      overlay={<Tooltip>{tooltipText}</Tooltip>}
    >
      <Form.Check
        type="radio"
        label={label}
        name="radioOptions"
        checked={checked}
        onChange={onChange}
      />
    </OverlayTrigger>
  );
};

export default RadioButtonWithTooltip;