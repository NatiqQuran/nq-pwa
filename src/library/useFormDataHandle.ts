import React from "react";

/**
 * Handles all the inputs with one function,
 * Append the name and value of the input to the given state
 * @param stateSetter setter of the state
 */
function useFormDataHandle<T>(
    stateSetter: React.Dispatch<React.SetStateAction<T>>
) {
    const appendToState = (newValue: T) =>
        stateSetter((state) => ({ ...state, ...newValue }));

    const handle = (event: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>) => {
        const eventAsAny = event as any;

        if (eventAsAny.target.type === "number") {
            appendToState({ [eventAsAny.target.name]: parseInt(eventAsAny.target.value, 10) } as T);
        } else {
            appendToState({ [eventAsAny.target.name]: eventAsAny.target.value } as T);
        }
    };

    return { handle };
}

export default useFormDataHandle;
