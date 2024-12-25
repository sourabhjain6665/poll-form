import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../pages/App";

describe("App Component", () => {
    it("renders the first question by default", () => {
        render(<App />);
        expect(screen.getByText("How was your productivity this week?")).toBeInTheDocument();
    });

    it("navigates to the next question on arrow down", () => {
        const { container } = render(<App />);
        fireEvent.keyDown(container, { key: "ArrowDown" });
        expect(screen.getByText("How was your focus this week?")).toBeInTheDocument();
    });
});
