import Button from "./Button";
import {render} from "@testing-library/react";
import {describe, it, expect} from "vitest";

describe("<Button />", () => {
  it("should show loading", () => {
    const screen = render(<Button isLoading={true}>Test</Button>);

    const button =screen.getByText("Loading...");

    expect(button).toBeVisible();
    expect(button).toBeDisabled();
  });
});