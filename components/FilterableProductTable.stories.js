import Component from "./FilterableProductTable";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Example/FilterableProductTable",
  component: Component,
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const input = await canvas.findByPlaceholderText("Search...");
    const btn = await canvas.findByRole("button");

    await userEvent.type(input, "spinach", { delay: 100 });
    await userEvent.click(btn);

    expect(await canvas.findByText("Spinach")).toBeInTheDocument();
    expect(await canvas.findByTestId("product-row")).to;
    expect(await canvas.findAllByRole("row")).toHaveLength(3);
  },
};
