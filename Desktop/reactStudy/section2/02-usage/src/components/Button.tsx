import React from "react";
type Props = { disable: boolean; text?: string };

const MyButton: React.FunctionComponent<Props> = (props) => {
  const { disable, text = "", children } = props;
  return (
    <>
      <button disabled={disable}>
        <span>{text}</span>
        {children}
      </button>
    </>
  );
};

export default MyButton;
