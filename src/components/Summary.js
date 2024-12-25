import React from 'react';
import { usePoll } from '../context/PollContext';

const Summary = ({ steps }) => {
    const { selectedOptions } = usePoll();

    return (
        <div className="summary p-4">
            <h2 className="text-2xl font-bold mb-4">Weekly Performance Feedback</h2>
            <ul className="mt-4 space-y-2">
                {steps.map((step) => (
                    selectedOptions[step.id] && (
                        <li key={step.id} className="p-2  ">
                            {step.title}
                            <strong>{selectedOptions[step.id]}</strong>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
};

export default Summary;
