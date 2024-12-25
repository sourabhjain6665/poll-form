import React from 'react';

const Carousel = ({ steps, currentStep, goToNextStep }) => {
    return (
        <div className="carousel overflow-hidden relative h-full">
            <div
                className="carousel-slide flex flex-col transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentStep * 100}%)` }}
            >
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="h-screen flex justify-center items-center bg-gray-50 p-4 shadow-md"
                    >
                        {React.cloneElement(step.component, { goToNextStep })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
