export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('ecommerce_state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('ecommerce_state', serializedState);
    } catch {
        // ignore write errors
    }
};
