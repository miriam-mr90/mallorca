import React from 'react';
// import ReactImageAppear from 'react-image-appear';
import styled from "styled-components";

const StyledCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const StyledCard = styled.div`
    background: ${props => props.theme.color.neutral000};
    border-radius: 4px;
    box-shadow: -1px 1px 2px rgba(18,42,68,0.1);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 0 0 calc(25% - 24px);
    margin: 12px;

    .card {
        &__wrapper {
            padding: 24px 20px;
        }

        &__title {
            font-size: 16px;
            text-align: center;
            color: ${props => props.theme.color.main};
        }
    }
`;

const CardItem = ({ item }) => (
    <StyledCard>
        <div className="card__wrapper">
            <div className="card__title">{item.name}</div>
            <p>Description: {item.description}</p>
            <div>Map location: {item.mapLocation}</div>
            <div>Type: {item.type}</div>
            { item.features && <div> Features:
                {item.features.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>}
        </div>
    </StyledCard>
);

const Card = ({ displayedItems }) => (
    <StyledCardsWrapper>
        {displayedItems.length
            ? displayedItems.map((item, index) => (<CardItem  key={index} item={item} />))
            : <CardItem  item={displayedItems} />
        }
    </StyledCardsWrapper>
);

export default Card;
