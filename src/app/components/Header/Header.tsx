'use client';

import Image from 'next/image';
import './style.css';
import Logo from '../../Assets/Logo.png';
import Telephone from '../../Assets/icon/telephone.svg';
import Dropdown from './DropDown/DropDown';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Manrope';
  font-weight: 500;
  color: white;
  padding: 10px;
`;

export default function Header({}) {
  const linksPrice = [
    { href: '#', label: 'Стандартные памятники' },
    { href: '#', label: 'Цветные памятники' },
    { href: '#', label: 'Фигурные памятники' },
    { href: '#', label: 'Блоки из гранита' },
    { href: '#', label: 'Финский гранит' },
    { href: '#', label: 'Надгробные плиты' },
    { href: '#', label: 'Распил' },
    { href: '#', label: 'Слэбы' },
    { href: '#', label: 'Корки из габбро-диабаза' },
    { href: '#', label: 'Гранитная плитка' },
    { href: '#', label: 'Плиты мощения' },
    { href: '#', label: 'Пошаговые плиты' },
    { href: '#', label: 'Гранитная брусчатка' },
    { href: '#', label: 'Гранитная бордюры' },
  ];

  const linksDelivery = [{ href: '#', label: 'Доставка' }];

  const linksGranit = [
    { href: '#', label: 'Габбро-диабаз' },
    { href: '#', label: 'Карелия Блэк' },
    { href: '#', label: 'Дымовский' },
    { href: '#', label: 'Рапакиви' },
    { href: '#', label: 'Шонгуй' },
    { href: '#', label: 'Купецкий' },
    { href: '#', label: 'Нинимяки' },
    { href: '#', label: 'Винка' },
    { href: '#', label: 'Хибинит' },
    { href: '#', label: 'Приполяный амфиболит' },
    { href: '#', label: 'Возрождение' },
    { href: '#', label: 'Сопка Бунтина' },
    { href: '#', label: 'Калгуваара' },
  ];
  return (
    <header className="header">
      <div className="header-main">
        <div className="nav">
          <div className="nav-block">
            <div className="logo">
              <Image src={Logo} className="logo" alt="Логотип" />
            </div>
          </div>
          <div className="nav-block">
            <nav className="navigation">
              <div className="nav-list">
                <div className="nav-block">
                  <button className="nav-button">
                    <span className="nav-button-text">Главная</span>
                  </button>
                </div>
                <div className="nav-block">
                  <Button className="nav-button">
                    <Dropdown name="О нас" links={linksDelivery} />
                  </Button>
                </div>
                <div className="nav-block">
                  <Button className="nav-button">
                    <Dropdown name="Цены" links={linksPrice} />
                  </Button>
                </div>
                <div className="nav-block">
                  <Button className="nav-button">
                    <Dropdown name="Граниты" links={linksGranit} />
                  </Button>
                </div>
                <button className="nav-button">
                  <span>Контакты</span>
                </button>
              </div>
              <div className="contacts">
                <button className="contacts-button">
                  <Image src={Telephone} className="telephone" alt="Контакты" />
                  <a href="tel:+7 (999) 999-99-99">
                    <span className="nav-button-text contacts-text">+ 7 (999) 999-99-99</span>
                  </a>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
