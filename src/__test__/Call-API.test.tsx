import CallAPI from "./../layout/Call-API";
import { screen, render, prettyDOM } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";
import { describe } from "node:test";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

describe("Call api page check", () => {
  it("Check Parent div", () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <CallAPI />
        </QueryClientProvider>
      </Provider>
    );
    let div1 = screen.getByTestId("Mydiv");
    expect(div1).toMatchSnapshot();
  });
  it("Check Parent div", () => {
    const renderer: any = render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <CallAPI />
        </QueryClientProvider>
      </Provider>
    );
    let div1 = screen.getByTestId("Mydiv");
    console.log(prettyDOM(renderer.container.firstChild));
  });
});
