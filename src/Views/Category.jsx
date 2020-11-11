import React from 'react';

const Category = ({params}) => (
    <>
        <p>This is the Category page: <b>{params.id}</b></p>
    </>
);

export default Category;