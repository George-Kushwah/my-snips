import Propstypes from "../layout/Props-type";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../Redux/Store";

describe("Props page check", () => {
  it("Check the button", () => {
    render(
      <Provider store={store}>
        <Propstypes />
      </Provider>
    );
    const Btn = screen.getByTestId("Mybtn");
    expect(Btn).toBeInTheDocument();
    fireEvent.click(Btn);
  });
});
