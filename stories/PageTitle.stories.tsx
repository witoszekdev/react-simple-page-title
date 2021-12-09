import React, { useState } from "react";
import { Meta } from "@storybook/react";
import { PageTitle, IPageTitleProps } from "../src/PageTitle";

export default {
  title: "PageTitle",
  component: PageTitle,
} as Meta<IPageTitleProps>;

export const EmptyPageTitle = () => <PageTitle title={null} />;

export const ExamplePageTitle = () => (
  <PageTitle title="This page title is dynamic!" />
);

export const DynamicPageTitle = () => {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <PageTitle title={`Counter: ${counter}`} />
      <button onClick={() => setCounter((val) => val + 1)}>
        Increase counter
      </button>
    </>
  );
};

export const NestedPageTitle = () => {
  const [showNested, setShowNested] = useState(false);

  return (
    <>
      <PageTitle title="Initial page title" />
      {showNested && <PageTitle title="Nested page title" />}
      <button onClick={() => setShowNested((val) => !val)}>
        {showNested ? "Hide" : "Show"} nested page title
      </button>
    </>
  );
};
