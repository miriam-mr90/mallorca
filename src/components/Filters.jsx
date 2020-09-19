import React from 'react';
import styled from "styled-components";

const StyledFilters = styled.div`
    color: ${props => props.theme.color.neutral000};
    display: flex;
    margin: 0 12px 12px;
`;

const Filters = ({ filters, filterCategories }) => (
    <StyledFilters>
        {Object.keys(filters).map((objectKey, index) => (
            <div key={index}>
                {objectKey}
                <select onChange={e => filterCategories(objectKey, e.target.value)}>
                    <option value='all'>All</option>
                    {filters[objectKey].map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
            </div>
        ))}
    </StyledFilters>
)

export default Filters;