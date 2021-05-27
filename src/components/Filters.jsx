import React from 'react';
import Select from './ui/Select.jsx';

const Filters = ({ filters, filterCategories }) => (
    <section className="filters">
        {Object.keys(filters).map((objectKey, index) => (
            <Select filters={filters}
                onChangeMethod={filterCategories}
                objectKey={objectKey}
                key={index}
            />
        ))}
    </section>
)

export default Filters;