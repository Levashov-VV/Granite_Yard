'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    title: string;
    img?: string;
    href: string;
}
const Card = ({ title, img, href }: CardProps) => {
    return (
        <StyledWrapper>
            <Link href={href}>
                <div className="container">
                    <a />
                    <a />
                    <a />
                    <a />
                    <div className="card">
                        <div className="card-header">{title}</div>
                        {img && (
                            <Image src={img} alt={title} className="cards" />
                        )}
                    </div>
                </div>
            </Link>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .cards {
        width: 300px;
        height: 200px;
        perspective: 500px;
        border-radius: 10px;
    }
    .container .card {
        background-color: white;
        border-radius: 10px;

        position: relative;
        z-index: 0;
        transition: all 300ms ease-out;
        transform-origin: center center;
        width: 300px;
        height: 240px;
        box-shadow: 0px;
    }

    .card-header {
        padding: 10px;
        width: 300px;
        background-color: #000;
        color: white;
        font-family: 'Manrope';
        font-size: 24px;
        border: 1px solid white;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .container .card .border {
        transition: all 300ms ease-out;
        transform-origin: center center;
        position: absolute;
        top: 6px;
        left: 6px;
        width: calc(100% - 12px);
        height: calc(100% - 12px);
        border: 1px solid black;
        border-radius: 9px;
    }

    .container {
        perspective: 1000px;
        position: relative;
        /* you don't need width and height if your card already has a lot of content */
        width: 100%;
        max-width: 250px;
        height: 150px;
        border-radius: 10px;
    }
    .container a {
        opacity: 0;
        position: absolute;
        z-index: 1;
        width: 50%;
        height: 50%;
    }
    .container a:hover,
    .container a:focus {
        transform: translateZ(50px);
    }

    .container a:hover ~ .card .card-header,
    .container a:focus ~ .card .card-header {
        transform: translateZ(24px);
    }

    .container a:nth-child(1) {
        top: 0;
        left: 0;
    }
    .container a:nth-child(1):hover ~ .card,
    .container a:nth-child(1):focus ~ .card {
        transform: rotateX(10deg) rotateY(-10deg) translateZ(0);
        transform-origin: right bottom;
        box-shadow: 10px 20px;
    }
    .container a:nth-child(2) {
        top: 0;
        right: 0;
    }
    .container a:nth-child(2):hover ~ .card,
    .container a:nth-child(2):focus ~ .card {
        transform: rotateX(10deg) rotateY(10deg) translateZ(0);
        transform-origin: left bottom;
        box-shadow: -10px 20px;
    }
    .container a:nth-child(3) {
        bottom: 0;
        right: 0;
    }
    .container a:nth-child(3):hover ~ .card,
    .container a:nth-child(3):focus ~ .card {
        transform-origin: left top;
        transform: rotateX(-10deg) rotateY(10deg) translateZ(0);
        box-shadow: -10px -20px;
    }
    .container a:nth-child(4) {
        bottom: 0;
        left: 0;
    }
    .container a:nth-child(4):hover ~ .card,
    .container a:nth-child(4):focus ~ .card {
        transform-origin: right top;
        transform: rotateX(-10deg) rotateY(-10deg) translateZ(0);
        box-shadow: 10px -20px;
    }
`;

export default Card;
