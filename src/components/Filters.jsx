import React from 'react';
import styled, { css } from "styled-components";
import Select from './ui/Select.jsx';

const StyledFilters = styled.div`
    ${({ theme }) => css`
        color: ${theme.color.neutral000};
        display: flex;
        margin: 0 12px 12px;
    `}
`;

const Filters = ({ filters, filterCategories }) => (
    <StyledFilters>
        {Object.keys(filters).map((objectKey, index) => (
            <div key={index}>
                <Select filters={filters}
                    onChangeMethod={filterCategories}
                    objectKey={objectKey}
                />
            </div>
        ))}
    </StyledFilters>
)

export default Filters;