import React from 'react';
import { usePoll } from '../context/PollContext';

const PollStep = ({ stepId, options }) => {
    const { selectedOptions, setSelectedOptions } = usePoll();

    const handleSelect = (label) => {
        setSelectedOptions((prev) => ({ ...prev, [stepId]: label }));
    };

    return (
        <div className="poll-step p-4">
            <div className="options grid grid-cols-3 gap-4">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`option p-4  cursor-pointer ${
                            selectedOptions[stepId] === option.label ? 'bg-blue-200' : ''
                        }`}
                        onClick={() => handleSelect(option.label)}
                    >
                        <span className="text-4xl">{option.icon}</span>
                        <span className="ml-2">{option.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PollStep;
