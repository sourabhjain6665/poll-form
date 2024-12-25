import React from "react";
import { render, screen } from "@testing-library/react";
import Carousel from "../components/Carousel";

const MockStep = ({ goToNextStep }) => (
    <div>
        <button onClick={goToNextStep}>Next</button>
        <p>Mock Step</p>
    </div>
);

describe("Carousel Component", () => {
    const steps = [
        { id: 1, component: <MockStep /> },
        { id: 2, component: <MockStep /> },
    ];


    it("applies the correct translateY style for currentStep", () => {
        const { container } = render(
            <Carousel steps={steps} currentStep={1} goToNextStep={() => {}} />
        );

        const slide = container.querySelector(".carousel-slide");
        expect(slide).toHaveStyle("transform: translateY(-100%)");
    });
});
