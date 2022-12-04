import { useState } from "react";

export const AddCategory = ({ onAddNewValue }) => {
    const [inputValue, setInputValue] = useState('');

    const onChangeInputValue = ({ target }) => setInputValue(target.value);

    const onSubmit = (event) => {
        event.preventDefault();

        const newInputValue = inputValue.trim();

        if(newInputValue.length <= 1) return;

        onAddNewValue(newInputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                onChange={ onChangeInputValue }
            />
        </form>
    );
};
