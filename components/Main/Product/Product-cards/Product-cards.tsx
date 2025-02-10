'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface CardProps {
    name: string;
    title: string;
    img?: string;
}

const Card: React.FC<CardProps> = ({ name, title, img }) => {
    return (
        <StyledWrapper>
            <div className="cards">
                {img && <Image src={img} alt={title} className="card-img" />}
                <figure className="card card-text">
                    <figcaption className="card-title">
                        <p className="card-subtitle">{name}</p>
                        {title}
                    </figcaption>
                </figure>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .cards {
        width: 500px;
        height: 600px;
        position: relative;
        background: #fff;
        transition: all 0.5s ease-in-out;
        border-radius: 1.5rem;
        display: flex;
        justify-content: end;
        flex-direction: column;
        gap: 18px;
        z-index: 1;
    }

    .cards:hover {
        transform: translateY(-5px);
        transition: all 0.5s ease-in-out;
    }

    .card {
        width: 100%;
        height: 11%;
        background-color: #e8e8e8;
        box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #474a51;
        border-radius: 0 0 1.5rem 1.5rem;
        padding-top: 4px;
    }

    .card-img {
        width: 100%;
        height: 100%;
        border-radius: 1.5rem;
        position: absolute;
        z-index: -1;
    }

    .card-title {
        width: 100%;
        height: 100%;
        text-align: start;
        font: 600 16px 'Manrope', sans-serif;
        color: #000;
        padding-left: 16px;
    }

    .card-subtitle {
        opacity: 0.8;
        text-transform: uppercase;
        font-size: 16px;
    }
`;

export default Card;
