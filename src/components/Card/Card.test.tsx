import Card from "./Card.tsx";
import {render} from "@testing-library/react";
import {describe, it, expect} from "vitest";

describe("<Card />", () => {
  it("render the card", () => {
    const screen = render(<Card
      title="test card"
      imageSrc="
https://lh3.googleusercontent.com/cRtF3WdYfRQEraAcQz8dWDJOq3XsRX-h244rOw6zwkHtxy7NHjJOany7u4I2EG_uMAfNwBLHkFyLMENzpmfBTSYXIH_F=s0"
    />);

    expect(screen.getByText("test card")).toBeVisible();
  });

  it("should render the no image found icon when no image are provided", () => {
    const screen = render(<Card
      imageSrc={undefined}
      title="test card with no image"
    />);

    expect(screen.getByText("test card with no image")).toBeVisible();
    expect(screen.getByTestId("noImageFoundIcon")).toBeVisible();
  });
});