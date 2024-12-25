import React from "react";
import { render, screen } from "@testing-library/react";
import Summary from "../components/Summary";
import { PollProvider, usePoll } from "../context/PollContext";

jest.mock("../context/PollContext", () => ({
    usePoll: jest.fn(),
}));

describe("Summary Component", () => {
    it("renders selected options", () => {
        usePoll.mockReturnValue({
            selectedOptions: {
                1: "Good",
                2: "Average",
            },
        });

        render(
            <PollProvider>
                <Summary
                    steps={[
                        { id: 1, title: "How was your productivity this week?" },
                        { id: 2, title: "How was your focus this week?" },
                    ]}
                />
            </PollProvider>
        );

        expect(screen.getByText("How was your productivity this week?")).toBeInTheDocument();
        expect(screen.getByText("Good")).toBeInTheDocument();
    });
});
