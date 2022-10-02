function useHandleInput<T>(
    stateSetter: React.Dispatch<React.SetStateAction<T>>
) {
    const handleInput = (e: any) =>
        stateSetter((state) => ({ ...state, [e.target.name]: e.target.value }));

    return { handleInput };
}

export default useHandleInput;
