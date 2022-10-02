import React, { useState } from "react";

/**
 * Handles all the inputs with one function,
 * Append the name and value of the input to the given state
 * @param stateSetter setter of the state
 */
function useHandleInput<T>(
    stateSetter: React.Dispatch<React.SetStateAction<T>>
) {
    const [target, setTarget] = useState<HTMLInputElement | null>(null);

    const append = (newValue: T) =>
        stateSetter((state) => ({ ...state, ...newValue }));

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === "number") {
            append({ [e.target.name]: parseInt(e.target.value, 10) } as T);
        } else {
            append({ [e.target.name]: e.target.value } as T);
        }

        setTarget(e.target);
    };

    return { handleInput, target };
}

export default useHandleInput;
