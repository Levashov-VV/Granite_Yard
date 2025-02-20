'use client';

import React from 'react';
import styled from 'styled-components';

interface CardProps {
    name: string;
    description: string;
    img?: string;
}

const Card: React.FC<CardProps> = ({ name, description }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <h3 className="text">{name}</h3>
                <p className="text">{description}</p>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card {
        width: 356.25px;
        height: 476.25px;
        padding-top: 18px;
        background: lightgrey;
        border: 3px inset white;
        background: #e8e8e8;
        box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #474a51;
        transition: all 0.5s ease-in-out;
        border-radius: 1.5rem;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 18px;
        font-weight: bolder;
        color: #000;
        font-family: 'Manrope';
        fweight: 600;
    }

    .card:hover {
        transform: translateY(-5px);
        scale: 1.1;
        transition: all 0.5s ease-in-out;
    }
`;

export default Card;
