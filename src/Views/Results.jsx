import React from 'react';

import Title from '../components/ui/Title.jsx';
import Cards from '../components/CardResult.jsx'
import Filters from '../components/Filters.jsx';

const Results = ({
    categorySelected,
    selectedMenuItemIcon,
    filterCategories,
    displayedItems
}) => (
    <>
        <Title title={categorySelected.name} icon={selectedMenuItemIcon} />
        {categorySelected.filters && (
            <Filters
                filters={categorySelected.filters}
                filterCategories={filterCategories}
            />
        )}
        <Cards displayedItems={displayedItems} />
    </>
);

export default Results;