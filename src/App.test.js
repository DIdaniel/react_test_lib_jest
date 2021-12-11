import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("button은 정확한 initial color를 가지고 있다", () => {
  render(<App />);

  // button 역할(role)을 하면서 Change to blue 라는 text를 가진 것 찾기
  const colorButton = screen.getByRole("button", { name: /change to blue/i });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});

// test("button은 정확한 initial text를 가지고 있다", () => {});

test("button을 클릭하면 파란색으로 바뀐다", () => {
  render(<App />);

  // button 역할(role)을 하면서 Change to blue 라는 text를 가진 것 찾기
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click Btn
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be change to red
  expect(colorButton.textContent).toBe("Change to red");
});

test("초기 상태", () => {
  render(<App />);

  // 버튼이 활성화 된 상태로 시작하는지
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  expect(colorBtn).toBeEnabled();

  const checkBox = screen.getByRole("checkbox");
  // 버튼이 활성화 되지 않은 상태로 시작하는지
  expect(checkBox).not.toBeChecked();
  // expect(checkBox).toBeDisabled();
});

test("첫번째 체크박스 클릭하면 비활성화, 두번째 클릭하면 활성화 되는지", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
});

test("비활성화 버튼은 gray color, 누르면 red로 되돌아감", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // disable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle("background-color: gray");

  // re-enable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle("background-color: red");
});

test("비활성화 버튼인 gray button을 누르면 다시 blue로 돌아감", () => {
  render(<App />);
  const checkBox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // change button to blue
  fireEvent.click(colorButton);

  // disable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle("background-color: gray");

  // re-enable button
  fireEvent.click(checkBox);
  expect(colorButton).toHaveStyle("background-color: blue");
});

// Medium Violet Red
// Midnight Blue

// eslint-disable-next-line jest/valid-title
describe("대문자 camel-case 전에 공백 ", () => {
  test("inner 없이 + 대문자", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });

  test("one inner + 대문자", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("Multiple inner + 대문자", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
