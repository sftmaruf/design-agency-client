import React, { useState } from 'react';

import Select from 'react-select';

const Selector = (props) => {

    const [index, setIndex] = useState(0);

    const options = [
        { value: 'Pending', label: 'Pending'},
        { value: 'Done', label: 'Done' },
        { value: 'On going', label: 'On going' }
    ]

    const defaultValue = () => {
        for (let i = 0; i < options.length; i++){
            if (options === props.state) {
                setIndex(i);
            }
        }
    }

    const customStyles = {
        minWidth: '150px'
    }


    return (
        <div>
            <Select
                options={options}
                defaultValue = {options[index]}
                styles={customStyles}
                onChange = {props.handleChangeState}
            />
        </div>
    );
};

export default Selector;