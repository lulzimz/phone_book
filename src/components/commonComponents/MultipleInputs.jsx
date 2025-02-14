import { Button, Flex, Input } from "antd";
import PropTypes from "prop-types";
import { useState } from "react";

const MultipleInputs = ({ value = [""], onChange, ...inputProps }) => {
  const [inputsLength, setInputsLength] = useState();

  const handleInputChange = (newVal, index) => {
    onChange([
      ...value.slice(0, index),
      newVal,
      ...value.slice(index + 1, value.length),
    ]);
  };

  const finalInputsLength = inputsLength || value.length;

  return (
    <Flex vertical gap={5}>
      {Array(finalInputsLength)
        .fill()
        .map((_, index) => (
          <Flex key={index} gap={5} align="center">
            <Input
              {...inputProps}
              value={value[index]}
              onChange={(e) => handleInputChange(e.target.value, index)}
            />

            {index === finalInputsLength - 1 && (
              <Button
                type="primary"
                onClick={() => setInputsLength(finalInputsLength + 1)}
              >
                Add
              </Button>
            )}
          </Flex>
        ))}
    </Flex>
  );
};

export default MultipleInputs;

MultipleInputs.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  inputProps: PropTypes.object,
};
