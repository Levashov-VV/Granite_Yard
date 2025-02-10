'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import telegram from '../../../../Assets/icons-feedback/telegram.svg';
import vk from '../../../../Assets/icons-feedback/vk.svg';
import instagram from '../../../../Assets/icons-feedback/instagram.svg';
import whatsapp from '../../../../Assets/icons-feedback/whatsapp.svg';

const Card = () => {
    return (
        <StyledWrapper>
            <div className="card">
                <a href="#" className="socialContainer containerOne">
                    <Image
                        src={instagram}
                        alt="instagram"
                        width={30}
                        height={30}
                    />
                </a>
                <a href="#" className="socialContainer containerTwo">
                    <Image
                        src={telegram}
                        alt="telegram"
                        width={30}
                        height={30}
                    />
                </a>
                <a href="#" className="socialContainer containerThree">
                    <Image src={vk} alt="vk" width={30} height={30} />
                </a>
                <a href="#" className="socialContainer containerFour">
                    <Image
                        src={whatsapp}
                        alt="whatsapp"
                        width={30}
                        height={30}
                        color="#fff"
                    />
                </a>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card {
        width: fit-content;
        height: fit-content;
        background-color: rgb(238, 238, 238);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 25px 25px;
        gap: 20px;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
    }

    .socialContainer {
        width: 52px;
        height: 52px;
        background-color: rgb(44, 44, 44);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition-duration: 0.3s;
    }
    .containerOne:hover {
        background-color: #d62976;
        transition-duration: 0.3s;
    }
    .containerTwo:hover {
        background-color: #00acee;
        transition-duration: 0.3s;
    }

    .containerThree:hover {
        background-color: #0072b1;
        transition-duration: 0.3s;
    }

    .containerFour:hover {
        background-color: #128c7e;
        transition-duration: 0.3s;
    }

    .socialContainer:active {
        transform: scale(0.9);
        transition-duration: 0.3s;
    }

    .socialSvg {
        width: 17px;
    }

    .socialContainer:hover .socialSvg {
        animation: slide-in-top 0.3s both;
    }

    @keyframes slide-in-top {
        0% {
            transform: translateY(-50px);
            opacity: 0;
        }

        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`;

export default Card;
