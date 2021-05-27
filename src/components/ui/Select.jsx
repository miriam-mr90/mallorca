import React from 'react';
import styled, { css } from "styled-components";

const StyledSelect = styled.div`
    ${({ theme }) => css`
        color: ${theme.color.neutral000};
        display: flex;
        flex-direction: column;

        span {
            text-transform: capitalize;
            margin-bottom: .8rem;
        }

        select {
            background: ${theme.color.neutral000};
            padding: .4rem .6rem;
            border-radius: .4rem;
            border: .1rem solid #CED4DA;
        }
    `}
`;

const Select = ({ filters, onChangeMethod, objectKey }) => (
    <StyledSelect className="filters__item">
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