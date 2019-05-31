import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";
import { getPokemonByType } from "./utils/getPokemon";

afterEach(cleanup);

const mockSuccessResponse = [{ pokemon: 1 }, { pokemon: 2 }];
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("select button works on click", () => {
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
  const { getByText, findByText } = render(<App />);
  const buttonSelect = getByText("Select");
  fireEvent.click(buttonSelect);
  return findByText("Reset");
});

test("countdown starts", () => {
  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
  const { getByText, findByText } = render(<App />);
  const buttonSelect = getByText("Select");
  fireEvent.click(buttonSelect);
  return findByText("28s");
});
