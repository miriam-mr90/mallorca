import React from 'react';

import Title from '../components/ui/Title';
import Cards from '../components/CardResult'
import Filters from '../components/Filters';

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