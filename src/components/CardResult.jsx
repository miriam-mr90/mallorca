import React from 'react';
// import ReactImageAppear from 'react-image-appear';
import styled, { css } from 'styled-components';
import { isEmptyString } from '../helpers';
import ErrorMessage from '../views/ErrorMessage';

const StyledCardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1;

    ${({ theme }) => css`
        @media ${theme.device.tablet} {
            flex-direction: row;
        }
    `}
`;

const StyledCard = styled.div`
    ${({ theme }) => css`
        background: ${theme.color.neutral000};
        border-radius: 4px;
        box-shadow: -1px 1px 2px rgba(18,42,68,0.1);
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex: 0 0 calc(25% - 24px);
        margin: 8px 12px;
        padding: 24px 20px;
        position: relative;

        .card {
            &__title {
                font-size: 16px;
                text-align: center;
                color: ${theme.color.main};
            }
        }
    `}
`;

const Image = styled.div`
    ${({ theme }) => css`
        align-items: center;
        display: flex;
        justify-content: center;
        margin-left: -20px;
        width: calc(100% + 40px); /* full width + card padding */
        background: #eaeef4;
        margin-top: -24px;
        border-radius: 4px 4px 0 0;
        height: 120px;
        margin-bottom: 24px;

        .icon {
            color: #a8b3c3;
            font-size: 4.2rem;
        }
    `}
`;
const Address = styled.div`
    ${({ theme }) => css`
        display: flex;
        margin-bottom: 1.2rem;

        .icon {
            color: ${theme.color.main};
            margin-right: .4rem;
        }
    `}
`;

const Favorite = styled.i`
    ${({ theme }) => css`
        position: absolute;
        bottom: 18px;
        right: 16px;
        color: #ee392c;

        &:before {
            border: 2px solid;
            border-radius: 100%;
            padding: 6px;
        }

    `}
`;

const CardItem = ({ item }) => (
    <StyledCard>
        <Image>
            <i className="icon icon-no-photo" />
        </Image>
        <div className="card__title">{item.name}</div>
        <p>Description: {item.description}</p>
        { !isEmptyString(item.where.address) && (
            <Address>
                <i className="icon icon-pin" />
                <a href={item.where.mapLocation} target="_blank">{item.where.address}</a>
            </Address>
        )}
        {item.type ? <div>Type: {item.type}</div> : null}
        { item.features && (
            <div> Features:
                {item.features.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>
        )}
        { item.isFavorite && <Favorite className="icon icon-heart" />}
    </StyledCard>
);

const Card = ({ displayedItems }) => (
    <StyledCardsWrapper>
        {displayedItems.length
            ? displayedItems.map((item, index) => (<CardItem  key={index} item={item} />))
            : <ErrorMessage type='no-results' />
        }
    </StyledCardsWrapper>
);

export default Card;
