import React from 'react';

import Title from '../components/ui/Title.jsx';
import Cards from '../components/Cards.jsx'
import Filters from '../components/Filters.jsx';

const Results = ({
    categorySelected,
    selectedMenuItem,
    selectedMenuItemIcon,
    filterCategories,
    displayedItems
}) => (
    <>
        <Title title={selectedMenuItem} icon={selectedMenuItemIcon} />
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