import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-8 lg:px-16">{children}</div>;
};

export default Container;
