'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface GraniteCardProps {
    title: string;
    subtitle: string;
    img?: string;
    href: string;
}

const GraniteCard = ({ title, subtitle, img, href }: GraniteCardProps) => {
    return (
        <StyledWrapper>
            <div className="cards">
                <Link href={href}>
                    <figure className="card">
                        {img && (
                            <Image src={img} alt={title} className="cards" />
                        )}
                        <figcaption className="card_title">
                            <p className="card_subtitle">{subtitle}</p>
                            {title}
                        </figcaption>
                    </figure>
                </Link>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .cards {
        width: 275px;
        height: 350px;
        perspective: 500px;
    }
    .card {
        width: 275px;
        height: 350px;
        background: #16161d;
        border-radius: 4px;
        position: relative;
        transform-style: preserve-3d;
        will-change: transform;
        transition: transform 0.5s;
    }

    .card:hover {
        transform: translateZ(10px) translateX(20px) rotateX(20deg)
            rotateY(20deg);
    }

    .card_title {
        color: #fff;
        position: absolute;
        top: 70%;
        left: 5%;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        transform: translateY(-50%);
        transition: transform 0.5s;
        font: 600 2rem 'Manrope', sans-serif;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
    }

    .card_subtitle {
        color: #fff;
        opacity: 0.8;
        font: 600 0.9rem 'Manrope', sans-serif;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
        text-transform: uppercase;
    }

    .card:hover .card_title {
        transform: translateZ(50px);
    }
`;

export default GraniteCard;
