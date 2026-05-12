import { useUnit } from "../Context/UnitContext";

function UnitToggle() {
    const { unit, toggleUnit } = useUnit();

    return (
        <button className="unit-toggle" onClick={toggleUnit}>
            Switch to {unit === 'metric' ? 'Imperial' : 'Metric'}
        </button>
    );
}

export default UnitToggle;