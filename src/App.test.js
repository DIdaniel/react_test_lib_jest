import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

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
  const colorButton = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  fireEvent.click(checkBox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkBox);
  expect(colorButton).toBeEnabled();
});
