import {useState } from 'react'; 
import useLocalStorage from './useLocalStorage'; 

const useForm = (key, initialValues, callback ) => {
    const [stateValues, setStateValues] = useLocalStorage(initialValues);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);


    const handleChange = event => {
        setStateValues({...stateValues,[event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event ? event.preventDefault() : callback(stateValues)
        setShowSuccessMessage(true)
    }

return [stateValues, handleChange, handleSubmit, showSuccessMessage]
}

export default useForm 
