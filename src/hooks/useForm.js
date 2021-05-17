import {useState } from 'react'; 
// import useLocalStorage from './useLocalStorage'; 

const useForm = (initialValues, callback ) => {
    const [stateValues, setStateValues] = useState(initialValues);   // Takes initial values and sets it to state. 
    const [showSuccessMessage, setShowSuccessMessage] = useState(false); // initializes successMessage to false. 

//CHANGE HANDLERS 
    const handleChange = event => {
        setStateValues({...stateValues,[event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event ? event.preventDefault() : callback(stateValues)
        setShowSuccessMessage(true)
    }
// Functions returned for use in Components
return [stateValues, handleChange, handleSubmit, showSuccessMessage]
}

export default useForm 
