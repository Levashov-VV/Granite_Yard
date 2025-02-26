'use client';

import Image from 'next/image';
import './style.css';
import Logo from '../../Assets/Logo.png';
import Dropdown from './DropDown/DropDown';
import styled from 'styled-components';
import HeaderImg from '../../Assets/Header-img.jpg';
import Link from 'next/link';

const Button = styled.button`
    font-family: 'Manrope';
    font-weight: 500;
    color: white;
    padding: 10px;
`;

export default function Header({}) {
    const linksPrice = [
        { href: '', label: '' },
        { href: '/pages/price/Standart-tiles', label: 'Стандартные памятники' },
        { href: '/pages/price/Color-tiles', label: 'Цветные памятники' },
        { href: '/pages/price/Figure-tiles', label: 'Фигурные памятники' },
        { href: '/pages/price/Block-granit', label: 'Блоки из гранита' },
        { href: '/pages/price/Fin-granit', label: 'Финский гранит' },
        { href: '/pages/price/Tombstones', label: 'Надгробные плиты' },
        { href: '/pages/price/Granit-cut', label: 'Распил' },
        { href: '/pages/price/Slabs', label: 'Слэбы' },
        { href: '/pages/price/Gabro', label: 'Корки из габбро-диабаза' },
        { href: '/pages/price/Granit-tiles', label: 'Гранитная плитка' },
        { href: '/pages/price/Kitchen-granit', label: 'Кухонный гранит' },
        { href: '/pages/price/Step-tiles', label: 'Пошаговые плиты' },
        { href: '/pages/price/Paving-slabs', label: 'Гранитная брусчатка' },
        { href: '/pages/price/Border-granit', label: 'Гранитная бордюры' },
    ];

    const linksDelivery = [
        { href: '', label: '' },
        { href: '/pages/delivery', label: 'Доставка' },
    ];

    const linksGranit = [
        { href: '', label: '' },
        { href: '/pages/product/Gabro-D', label: 'Габбро-диабаз' },
        { href: '/pages/product/Sosnovckiy', label: 'Сосновский серый' },
        { href: '/pages/product/Smoke', label: 'Дымовский' },
        { href: '/pages/product/Rapakivi', label: 'Рапакиви' },
        { href: '/pages/product/Shongui', label: 'Шонгуй' },
        { href: '/pages/product/Merchant', label: 'Купецкий' },
        { href: '/pages/product/Nini', label: 'Нинимяки' },
        { href: '/pages/product/Vinga', label: 'Винга' },
        { href: '/pages/product/Hibinit', label: 'Хибинит' },
        {
            href: '/pages/product/Subpolar-amphibolite',
            label: 'Приполяный амфиболит',
        },
        { href: '/pages/product/Renaissance', label: 'Возрождение' },
        { href: '/pages/product/Spock-buntin', label: 'Сопка Бунтина' },
        { href: '/pages/product/Kaalguvaara', label: 'Калгуваара' },
    ];
    return (
        <header className="header">
            <div className="header-main">
                <div className="nav">
                    <div className="nav-block">
                        <div className="logo">
                            <Link href="/">
                                <Image
                                    src={Logo}
                                    className="logo"
                                    alt="Логотип"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="nav-block">
                        <nav className="navigation">
                            <div className="nav-list">
                                <div className="nav-block">
                                    <button className="nav-button">
                                        <Link
                                            className="nav-button-text"
                                            href="/"
                                        >
                                            Главная
                                        </Link>
                                    </button>
                                </div>
                                <div className="nav-block">
                                    <Button className="nav-button">
                                        <Dropdown
                                            name="О нас"
                                            links={linksDelivery}
                                        />
                                    </Button>
                                </div>
                                <div className="nav-block">
                                    <Button className="nav-button">
                                        <Dropdown
                                            name="Граниты"
                                            links={linksGranit}
                                        />
                                    </Button>
                                </div>
                                <div className="nav-block">
                                    <Button className="nav-button">
                                        <Dropdown
                                            name="Продукция"
                                            links={linksPrice}
                                        />
                                    </Button>
                                </div>
                                <div className="nav-block">
                                    <button className="nav-button">
                                        <Link
                                            className="nav-button-text"
                                            href="/pages/contacts"
                                        >
                                            Контакты
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className="contacts">
                                <button className="contacts-button">
                                    <Link href="tel:8(8442) 60-50-46">
                                        <span className="nav-button-text contacts-text">
                                            8(8442) 60-50-46
                                        </span>
                                    </Link>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="header-img">
                    <Image
                        src={HeaderImg}
                        className="header-img"
                        alt="Заглавная картинка"
                    />
                </div>
            </div>
        </header>
    );
}
