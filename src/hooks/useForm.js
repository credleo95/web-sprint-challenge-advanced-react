import { useLocalStorage } from './useLocalStorage'; 

export const useForm = (initialValues, callback) => {
const [values, setValues] = useLocalStorage('list-values', initialValues); 

const handleChange = event => {
    setValues({
        ...values,
        [event.target.name]: event.target.value
    })
}
const onSubmit = event => {
    event ? event.preventDefault() : callback(values);
}

const resetForm = event => {
    event.preventDefault(); 
    setValues(initialValues);
};

return [values, handleChange, onSubmit, resetForm]; 
}