import React, { useState, useCallback } from 'react';
import PollStep from '../components/PollStep';
import Summary from '../components/Summary';
import { PollProvider } from '../context/PollContext';

const throttle = (func, delay) => {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
};

const App = () => {
    const steps = [
        { id: 1, title: 'How was your productivity this week?' },
        { id: 2, title: 'How was your focus this week?' },
        { id: 3, title: 'How do you rate your learning progress?' },
        { id: 4, title: 'How was your energy level this week?' },
        { id: 5, title: 'How was your collaboration with teammates?' },
        { id: 6, title: 'How do you rate your time management?' },
        { id: 7, title: 'How was your overall performance?' },
        { id: 8, title: 'Summary' },
    ];

    const [currentStep, setCurrentStep] = useState(0);

    const moveStep = (direction) => {
        setCurrentStep((prev) => {
            const nextStep = prev + direction;
            if (nextStep < 0 || nextStep >= steps.length) {
                return prev; // Prevent going out of bounds
            }
            return nextStep;
        });
    };

    const handleScroll = useCallback(
        throttle((event) => {
            const direction = event.deltaY > 0 ? 1 : -1;
            moveStep(direction);
        }, 500),
        []
    );

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') moveStep(1);
        if (event.key === 'ArrowUp') moveStep(-1);
    };

    return (
        <PollProvider>
            <div
                className="app h-screen flex"
                onWheel={handleScroll}
                onKeyDown={handleKeyDown}
                tabIndex={0}
            >
                <aside className="w-[500px] bg-gradient-to-br from-indigo-500 to-blue-300 p-6 flex flex-col justify-center">
                    <div className="flex items-start">
                        {/* Navigation Dots */}
                        <div className="flex flex-col space-y-3 mr-6">
                            {steps.map((_, index) => (
                                <span
                                    key={index}
                                    className={`w-3 h-3 rounded-full ${
                                        currentStep === index
                                            ? 'bg-black'
                                            : 'bg-white'
                                    }`}
                                ></span>
                            ))}
                        </div>

                        
                        <div className="text-white text-2xl font-bold">
                            {steps[currentStep].title}
                        </div>
                    </div>
                </aside>

                <main className="w-[600px] p-6 flex items-center justify-center transition-transform duration-500">
                    {currentStep < steps.length - 1 ? (
                        <PollStep
                            stepId={steps[currentStep].id}
                            title={steps[currentStep].title}
                            options={[
                                { icon: '😔', label: 'Bad' },
                                { icon: '😐', label: 'Average' },
                                { icon: '😊', label: 'Good' },
                            ]}
                        />
                    ) : (
                        <Summary steps={steps} />
                    )}
                </main>
            </div>
        </PollProvider>
    );
};

export default App;
