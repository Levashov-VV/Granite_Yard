'use client';

import { useEffect } from 'react';
import Card from '../Cards/Cards';
import quility from '../../../Assets/main/Quality/quality-medal.svg';
import tool from '../../../Assets/main/Quality/tool.svg';
import hand from '../../../Assets/main/Quality/handshake.svg';
import time from '../../../Assets/main/Quality/time.svg';
import price from '../../../Assets/main/Quality/best-price.svg';
import './style.css';
import 'animate.css';
import WOW from 'wowjs';


export default function CompanyInfo() {
    useEffect(() => {
        new WOW.WOW({
            live: false,
        }).init();
    }, []);
    const ourQualities = [
        {
            name: 'Качество материалов',
            description:
                'Мы работаем только с высококачественным гранитом, который проходит строгий контроль на всех этапах. Это позволяет нам гарантировать долговечность и эстетическую привлекательность наших изделий.',
            img: quility,
        },
        {
            name: 'Современное оборудование',
            description:
                'Используя новейшие технологии и оборудование, мы обеспечиваем точный распил и обработку камня, что позволяет реализовать даже самые сложные проекты.',
            img: tool,
        },
        {
            name: 'Индивидуальный подход',
            description:
                'Мы понимаем, что каждый клиент уникален, поэтому предлагаем индивидуальные решения, учитывающие ваши потребности и пожелания. Наша команда готова предложить консультации и помощь на всех этапах — от выбора материала до финальной обработки.',
            img: hand,
        },
        {
            name: 'Скорость выполнения заказов',
            description:
                'Благодаря оптимизированным процессам и высококвалифицированной команде мы можем гарантировать быстрое выполнение заказов без ущерба для качества.',
            img: time,
        },
        {
            name: 'Конкурентные цены',
            description:
                'Мы стремимся предложить нашим клиентам лучшие условия на рынке, сохраняя при этом высокие стандарты качества.',
            img: price,
        },
    ];
    return (
        <section className="info ">
            <div className="info-block fadeInUp wow">
                <h2 className="title ">О нас</h2>
            </div>
            <div className="info-block fadeInUp wow">
                <h2 className="subtitle ">
                    Добро пожаловать в Гранитный двор — ваш надежный партнер в
                    мире гранита!
                </h2>
            </div>
            <div className="info-block fadeInUp wow">
                <div className="text">
                    Мы молодая и перспективная компания, которая
                    специализируется на высококачественном распиле и обработке
                    гранитных изделий. Мы предлагаем нашим клиентам уникальные
                    решения для их проектов. Наша команда профессионалов
                    гарантирует, что каждый заказ будет выполнен с максимальной
                    точностью и вниманием к деталям.
                </div>
            </div>
            <div className="info-block cards fadeInUp wow">
                {ourQualities.map((quality, index) => (
                    <Card key={index} quality={quality} />
                ))}
            </div>
        </section>
    );
}
