import { fireEvent, render, screen } from "@testing-library/react";

import { AddCategory } from "../../src/components";

describe('Pruebas en <AddCategory/>', () => {
    const inputValue = 'One Piece';

    test('Debe cambiar el valor de la caja de texto', () => {
        render(<AddCategory onAddNewValue={ () => {} }/>);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, {
            target: {
                value: inputValue
            }
        });

        expect(input.value).toBe(inputValue);
        screen.debug();
    });

    test('Debe llamar onNewCategory si input tiene un valor', () => {
        const onAddNewValue = jest.fn();

        render(<AddCategory onAddNewValue={ onAddNewValue }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {
            target: {
                value: inputValue
            }
        });

        fireEvent.submit(form);

        expect(input.value).toBe(inputValue);
        expect(onAddNewValue).toHaveBeenCalled();
        expect(onAddNewValue).toHaveBeenCalledTimes(1);
        expect(onAddNewValue).toHaveBeenCalledWith(inputValue);

        screen.debug();
    });

    test('No debe llamar el onAddNewValue si el input está vacío', () => {
        const onAddNewValue = jest.fn();

        render(<AddCategory onAddNewValue={ onAddNewValue }/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {
            target: {
                value: ''
            }
        });

        fireEvent.submit(form);
        
        expect(onAddNewValue).not.toHaveBeenCalled();
        expect(onAddNewValue).toHaveBeenCalledTimes(0);
    });
});
