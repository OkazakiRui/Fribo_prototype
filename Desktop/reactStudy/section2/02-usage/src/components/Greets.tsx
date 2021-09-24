import React from "react";

type Props = { name: string; times?: number };

const Greets: React.FunctionComponent<Props> = (props) => {
  const { name, times = 1, children } = props;

  return (
    <>
      {[...Array(times)].map((_) => (
        <p>
          {/* {console.log(children)} */}
          Hello, {name}! {children}
        </p>
      ))}
    </>
  );
};

export default Greets;
