import React from 'react';
// import ReactImageAppear from 'react-image-appear';
import { isEmptyString } from '../helpers';
import ErrorMessage from '../views/ErrorMessage';

const CardItem = ({ item }) => (
    <div className="card">
        <div className="card__cover">
            <i className="icon icon-no-photo" />
        </div>
        <h3 className="card__title">{item.name}</h3>
        <p>Description: {item.description}</p>
        { !isEmptyString(item.where.address) && (
            <div className="card__address">
                <i className="icon icon-pin" />
                <a href={item.where.mapLocation} target="_blank">{item.where.address}</a>
            </div>
        )}
        {item.type ? <div>Type: {item.type}</div> : null}
        { item.features && (
            <div> Features:
                {item.features.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>
        )}
        { item.isFavorite && <i className="icon icon-heart card__favorite" />}
    </div>
);

const Card = ({ displayedItems }) => (
    <div className="card__wrapper">
        {displayedItems.length
            ? displayedItems.map((item, index) => (<CardItem  key={index} item={item} />))
            : <ErrorMessage type='no-results' />
        }
    </div>
);

export default Card;
