import React from "react";
import { Meta, Story } from "@storybook/react";

import { SectionTitle } from "../src";

interface Props {
  readonly sectionTitle: string;
}

export default {
  title: "SectionTitle",
  component: SectionTitle,
  argTypes: {
    sectionTitle: { control: "text" },
  },
} as Meta;

export const normal: Story<Props> = ({ sectionTitle }) => (
  <SectionTitle>{sectionTitle}</SectionTitle>
);

normal.args = {
  sectionTitle: "Section Title",
};
