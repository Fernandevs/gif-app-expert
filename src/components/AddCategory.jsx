import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onAddNewValue }) => {
    const [inputValue, setInputValue] = useState('');

    const onChangeInputValue = ({ target }) => setInputValue(target.value);

    const onSubmit = (event) => {
        event.preventDefault();

        const newInputValue = inputValue.trim();

        if (inputValue.length <= 1) return;

        onAddNewValue(newInputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                onChange={ onChangeInputValue }
            />
        </form>
    );
};

AddCategory.propTypes = {
    onAddNewValue: PropTypes.func.isRequired
};
