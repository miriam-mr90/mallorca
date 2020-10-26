import React from 'react';
// import ReactImageAppear from 'react-image-appear';
import styled, { css } from 'styled-components';
import { isEmptyString } from '../helpers';
import ErrorMessage from '../Views/ErrorMessage';

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
        flex: 0 0 calc(25% - 24px);
        flex-direction: column;
        margin: 8px 12px;

        .card {
            &__wrapper {
                padding: 24px 20px;
            }

            &__title {
                font-size: 16px;
                text-align: center;
                color: ${theme.color.main};
            }
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

const CardItem = ({ item }) => (
    <StyledCard>
        <div className="card__wrapper">
            <div className="card__title">{item.name}</div>
            <p>Description: {item.description}</p>
            { !isEmptyString(item.where.address) && (
                <Address>
                    <i className="icon icon-pin" />
                    <a href={item.where.mapLocation} target="_blank">{item.where.address}</a>
                </Address>
            )}
            <div>Type: {item.type}</div>
            { item.features && (
                <div> Features:
                    {item.features.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
            )}
            { item.isFavorite && <i className="icon icon-star" />}
        </div>
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
