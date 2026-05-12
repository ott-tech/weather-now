import { createContext, useContext, useState } from "react";

const UnitContext = createContext('metric');

export function UnitProvider({ children }) {
    const [unit, setUnit] = useState('metric');

    const toggleUnit = () => {
        setUnit((prevUnit) => prevUnit === 'metric' ? 'imperial' : 'metric');
    }

    return (
        <UnitContext.Provider value={{ unit, toggleUnit }}>
            {children}
        </UnitContext.Provider>
    )
}

export function useUnit() {
    return useContext(UnitContext);
}