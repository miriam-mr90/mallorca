import React from 'react';

import Cards from './Cards.jsx'
import Filters from './Filters.jsx';

const Main = ({ categorySelected, filterCategories, displayedItems }) => (
    <>
        {categorySelected.filters && (
            <Filters
                filters={categorySelected.filters}
                filterCategories={filterCategories}
            />
        )}
        <Cards displayedItems={displayedItems} />
    </>
);

export default Main;