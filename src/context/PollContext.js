import React, { createContext, useContext, useState } from 'react';

const PollContext = createContext();

export const PollProvider = ({ children }) => {
    const [selectedOptions, setSelectedOptions] = useState({});

    return (
        <PollContext.Provider value={{ selectedOptions, setSelectedOptions }}>
            {children}
        </PollContext.Provider>
    );
};

export const usePoll = () => {
    const context = useContext(PollContext);
    if (!context) {
        throw new Error('usePoll must be used within a PollProvider');
    }
    return context;
};
