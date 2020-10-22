import React from 'react';
import styled from "styled-components";
import Select from './Select.jsx';

const StyledFilters = styled.div`
    color: ${props => props.theme.color.neutral000};
    display: flex;
    margin: 0 12px 12px;
`;

const Filters = ({ filters, filterCategories }) => (
    <StyledFilters>
        {Object.keys(filters).map((objectKey, index) => (
            <div key={index}>
                <Select filters={filters}
                    filterCategories={filterCategories}
                    objectKey={objectKey}
                />
            </div>
        ))}
    </StyledFilters>
)

export default Filters;