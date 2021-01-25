import { withTheme } from '@material-ui/core';
import React from 'react';
import Select from 'react-select';


const Selector = ({ handleChangeState, orderDetails }) => {
    const orderStateIndex = orderDetails.state;
    const options = [
        { value: '0', label: 'Pending', color: 'red' },
        { value: '1', label: 'Done', color: 'green' },
        { value: '2', label: 'On going', color: 'orange' }
    ];

    const customStyles = {
        option: (styles, { data, isSelected, isFocused }) => {
            return {
                ...styles,
                backgroundColor: isSelected ? data.color
                    : isFocused ? 'whitesmoke' : 'white',
                color: isSelected ? 'white' :data.color
            };
        },

        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            borderBottom: '1px dotted pink',
            color: options[orderStateIndex],
            padding: 20,
            border: "1px solid green"
        }),

        control: (_, { selectProps: { width } }) => ({
            width: 'auto',
            display: "flex",
            border: `1px solid ${options[orderStateIndex].color}`
        }),

        singleValue: (styles, { data }) => ({
            color:  data.color
        })
    }

    return (
        <div>
            <Select
                options={options}
                defaultValue={options[orderStateIndex]}
                styles={customStyles}
                width="200px"
                onChange={handleChangeState}
            />
        </div>
    );
};

export default Selector;