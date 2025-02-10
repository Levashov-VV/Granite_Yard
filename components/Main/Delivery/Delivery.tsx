import DeliveryCard from './Cards/Cards-Delivery';
import Button from '../Buttons/Button';
import './style.css';
import Link from 'next/link';

export default function Delivery() {
    const button = [{ name: 'Подробнее о доставке', href: '/pages/delivery' }];

    const deliveryText = [
        {
            name: 'Своевременность',
            description:
                'Доставка осуществляется точно в срок, что позволяет клиентам планировать свои проекты без задержек.',
        },
        {
            name: 'Безопасность',
            description:
                'Продукция упаковывается с учетом всех стандартов безопасности, что минимизирует риск повреждений во время транспортировки.',
        },
        {
            name: 'Гибкость',
            description:
                'Компания предлагает различные варианты доставки — от стандартной до экспресс-доставки, что позволяет клиентам выбрать наиболее подходящий для них вариант.',
        },
    ];
    return (
        <div className="delivery">
            <div className="delivery-block">
                <h2 className="title">Доставка</h2>
            </div>
            <div className="delivery-block">
                <p className="del text">
                    В нашей компании мы ставим клиента в центр всего, что
                    делаем. Наша цель — не просто выполнить заказ, а превзойти
                    ваши ожидания. Мы активно слушаем наших клиентов, учитываем
                    их отзывы и постоянно улучшаем наши услуги.
                </p>
            </div>
            <div className="delivery-block cards">
                {deliveryText.map((item, index) => (
                    <DeliveryCard
                        key={index}
                        name={item.name}
                        description={item.description}
                    />
                ))}
            </div>
            <div className="wholesale">
                <div className="wholesale-block">
                    <h2 className="title">Гранитные памятники оптом</h2>
                </div>
                <div className="wholesale-block">
                    <p className="del text">
                        Стандартные и фигурные, все размеры и формы из черного,
                        серого и цветного гранита месторождений Карелии и
                        северо-западного региона России.
                    </p>
                    <p className="del text">
                        Продажа заготовок и готовых моделей оптом
                    </p>
                    <p className="del text">
                        Купить с доставкой по РФ любым видом транспорта.
                    </p>
                </div>
            </div>
            <div className="delivery-block">
                    <Link href={button[0].href}>
                        <Button button={button} />
                    </Link>
            </div>
        </div>
    );
}
