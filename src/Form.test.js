import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Test Form", () => {
  const MOCK_FUNCTION = jest.fn();

  beforeEach(() => {
    render(<Form CALL_FUNCTION={MOCK_FUNCTION} />);
  });

  test("cek apakah text halaman form ada", () => {
    const textHeading = screen.getByTestId("Text-form");
    expect(textHeading).toBeInTheDocument();
  });

  test("cek apakah button menjalankan function", () => {
    const btnSubmit = screen.getByRole("button");
    userEvent.click(btnSubmit);

    expect(MOCK_FUNCTION).toHaveBeenCalled();
  });
});
