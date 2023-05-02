import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render, screen } from "@testing-library/react";

import Select from "../app/components/Select/Select";

describe("Select", () => {
  it("Renders", () => {
    const handleSortChange = jest.fn();
    render(<Select handleSortChange={handleSortChange}></Select>);

    const select = screen.getByTitle("Sort by date");

    expect(select).toBeInTheDocument();
  });

  it("onChange executes when first option is selected", () => {
    const handleSortChange = jest.fn();
    render(<Select handleSortChange={handleSortChange} />);

    const select = screen.getByTitle("Sort by date");

    fireEvent.change(select, { target: { value: "byDateDsc" } });

    expect(handleSortChange).toHaveBeenCalledWith("byDateDsc");
  });

  it("onChange executes when second option is selected", () => {
    const handleSortChange = jest.fn();
    render(<Select handleSortChange={handleSortChange} />);

    const select = screen.getByTitle("Sort by date");

    fireEvent.change(select, { target: { value: "byDateAsc" } });

    expect(handleSortChange).toHaveBeenCalledWith("byDateAsc");
  });
});
