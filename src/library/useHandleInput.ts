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

    const handleInput = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>) => {
        const eAsAny = e as any;

        if (eAsAny.target.type === "number") {
            append({ [eAsAny.target.name]: parseInt(eAsAny.target.value, 10) } as T);
        } else {
            append({ [eAsAny.target.name]: eAsAny.target.value } as T);
        }

        setTarget(eAsAny.target);
    };

    return { handleInput, target };
}

export default useHandleInput;
