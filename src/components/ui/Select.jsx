import React from 'react';
import styled from "styled-components";

const StyledSelect = styled.div`
    align-items: center;
    color: ${props => props.theme.color.neutral000};
    display: flex;
    margin: 1.2rem 1.2rem 1.2rem 0;

    span {
        text-transform: capitalize;
    }

    select {
        margin-left: 1rem;
        padding: .4rem .6rem;
        border-radius: .2rem;
        border: .1rem solid #ced4da;
    }
`;

const Select = ({ filters, onChangeMethod, objectKey }) => (
    <StyledSelect>
        <span>{objectKey}</span>
        <select onChange={e => onChangeMethod(objectKey, e.target.value)}>
            <option value='all'>All</option>
            {filters[objectKey].map((item, index) => (
                <option key={index} value={item}>{item}</option>
            ))}
        </select>
    </StyledSelect>
);

export default Select;