import { useLocalStorage } from './useLocalStorage'; 
import { useState } from 'react'; 

export const useForm = (initialValues, callback) => {
const [values, setValues] = useLocalStorage('list-values', initialValues); 
const [showSuccessMessage, setShowSuccessMessage] = useState(false); 

const handleChange = event => {
    setValues({
        ...values,
        [event.target.name]: event.target.value
    })
}
const onSubmit = event => {
    event ? event.preventDefault() : callback(values);
    setShowSuccessMessage(true)
    
}
// *** Eliminated because no Clear Button ***
// const resetForm = event => {
//     event.preventDefault(); 
//     setValues(initialValues);
// };


return [values, handleChange, onSubmit, showSuccessMessage]; 
}