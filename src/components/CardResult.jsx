import React from "react";
import styled, { css } from 'styled-components'
// import ReactImageAppear from 'react-image-appear';
import { isEmptyString } from "../helpers";
import ErrorMessage from "../views/ErrorMessage";

const CardPhoto = styled.div`
    ${({ photo }) => css`
        background-image: url(${photo});
        background-position: center;
        background-size: cover;
    `}
`;

const CardItem = ({ item }) => (
  <div className="card">
    <CardPhoto className="card__cover" photo={item.photo}>
      {!item.photo.includes("https") && <i className="icon icon-no-photo" />}
    </CardPhoto>
    <h3 className="card__title">{item.name}</h3>
    <p className="card__description">{item.description}</p>
    <ul className="card__list">
      {!!item.type &&
        <li className="card__list-item">
          Type:
          <span>{item.type}</span>
        </li>
      }
      {item.features && (
        <li className="card__list-item">
          Features:
          {item.features.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </li>
      )}
      {item.isFavorite &&
        <i className="icon icon-star card__favorite" />
      }
      {!isEmptyString(item.where.address) && (
        <li className="card__address">
          <i className="icon icon-pin" />
          <a href={item.where.mapLocation} target="_blank">
            {item.where.address}
          </a>
        </li>
      )}
    </ul>
  </div>
);

const Card = ({ displayedItems }) => (
  <div className="card__wrapper">
    {displayedItems.length ? (
      displayedItems.map((item, index) => <CardItem key={index} item={item} />)
    ) : (
      <ErrorMessage type="no-results" />
    )}
  </div>
);

export default Card;
