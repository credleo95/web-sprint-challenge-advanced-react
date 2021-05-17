import { useState } from 'react' ;


const useLocalStorage = (key, initialValues) => {
    const [storedValues, setStoredValues] = useState(() => {
        const item = localStorage.getItem(key); 
        return item ? JSON.parse(item) : initialValues;
    }); 

    const setValues = values => {
        setStoredValues(values);
        localStorage.setItem(key, JSON.stringify(values))
    }

    return[storedValues, setValues]
}

export default useLocalStorage; 