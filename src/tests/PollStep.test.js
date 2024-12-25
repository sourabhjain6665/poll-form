import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PollStep from "../components/PollStep";
import { PollProvider } from "../context/PollContext";

describe("PollStep Component", () => {
    it("renders all options", () => {
        render(
            <PollProvider>
                <PollStep
                    stepId={1}
                    options={[
                        { icon: "😔", label: "Bad" },
                        { icon: "😐", label: "Average" },
                        { icon: "😊", label: "Good" },
                    ]}
                />
            </PollProvider>
        );

        expect(screen.getByText("Bad")).toBeInTheDocument();
        expect(screen.getByText("Average")).toBeInTheDocument();
        expect(screen.getByText("Good")).toBeInTheDocument();
    });

    it("highlights the selected option", () => {
        render(
            <PollProvider>
                <PollStep
                    stepId={1}
                    options={[
                        { icon: "😔", label: "Bad" },
                        { icon: "😐", label: "Average" },
                        { icon: "😊", label: "Good" },
                    ]}
                />
            </PollProvider>
        );

        const option = screen.getByText("Good");
        fireEvent.click(option);

        const selectedOption = option.closest(".option");
        expect(selectedOption).toHaveClass("bg-blue-200");
    });
});
