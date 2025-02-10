'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface CardProps {
    quality: {
        name: string;
        description: string;
        img: string;
    };
}

const Card = ({ quality }: CardProps) => {
    return (
        <StyledWrapper>
            <div className="card">
                <Image
                    src={quality.img}
                    alt={quality.name}
                    className="card__img"
                />
                <h1 className="card__title">{quality.name}</h1>
                <p>{quality.description}</p>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    h1 {
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
    }

    p {
        font-size: 20px;
        line-height: 24px;
        font-weight: 400;
    }
    .card {
        box-sizing: border-box;
        width: 356.25px;
        height: 476.25px;
        background: #fff;
        border: 1px solid #474a51;
        box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
        border-radius: 17px;
        text-align: center;
        cursor: pointer;
        transition: all 0.5s;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        gap: 24px;
        user-select: none;
        font-family: 'Manrope';
        font-weight: 500;
        color: black;
    }

    .card:hover {
        border: 1px solid black;
        transform: scale(1.05);
    }

    .card__img {
        width: 150px;
        height: 150px;
    }
`;

export default Card;
