import type { Meta, StoryObj, Parameters } from "@storybook/react";
import { Swatch } from ".";
import { cssProps } from "./test";

const Swatches = ({ props }: Parameters) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {Object.keys(props).map((prop) => (
        <Swatch
          name={prop}
          size={props[prop].type === "size" ? props[prop].value : "8rem"}
          key={prop}
        />
      ))}
    </div>
  );
};

export default {
  title: "Design System/Color",
  component: Swatch,
  parameters: {
    cssprops: {
      ...cssProps.primitiveColor,
      ...cssProps.semanticColor,
      ...cssProps.size,
    },
  },
} as Meta;

export const PrimitiveStory: StoryObj = {
  parameters: {
    cssprops: cssProps.primitiveColor,
  },
  render: () => <Swatches props={cssProps.primitiveColor} />,
};

export const SemanticStory: StoryObj = {
  parameters: {
    cssprops: cssProps.semanticColor,
  },
  render: () => <Swatches props={cssProps.semanticColor} />,
};

export const SizeStory: StoryObj = {
  parameters: {
    cssprops: cssProps.size,
  },
  render: () => <Swatches props={cssProps.size} />,
};
