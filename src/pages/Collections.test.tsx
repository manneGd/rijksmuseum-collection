import Collections from "./Collections.tsx";
import {describe, it, expect} from "vitest";
import { render, waitForElementToBeRemoved} from "@testing-library/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("<Collections />", () => {
  it("should render the collections page", async () => {
    const screen = render(
      <QueryClientProvider client={queryClient}>
        <Collections />
      </QueryClientProvider>);

    await waitForElementToBeRemoved(() => screen.getByTestId("loader"));

    expect(screen.getByText("Search")).toBeVisible();
    expect(screen.getByTestId("artObjectList").children).toHaveLength(2);
    expect(screen.getByText("Load more")).toBeVisible();
  });
});