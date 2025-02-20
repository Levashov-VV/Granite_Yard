import './style.css';
import Image from 'next/image';
import Truck from '../../Assets/Delivery/truck.svg';
import Delivery1 from '../../Assets/Delivery/Delivery-1.png';
import Delivery2 from '../../Assets/Delivery/Delivery-2.png';
import Icons from '../../components/Main/FeedBack/Icons/Icons';
import DeliveryTitle from '../../Assets/Delivery/Delivery-title.png';
import DeliveryTitle2 from '../../Assets/Delivery/Delivery-title2.png';

export default function DeliveryPage() {
    const listQualities = [
        {
            name: 'Надёжность',
            description:
                'Наша компания формирует базы ответственных перевозчиков и принимают необходимые меры для сохранности гранитных изделий во время транспортировки. Изделия фиксируют на деревянных паллетах и закрепляют лентами-стяжками, при необходимости упаковывают в стрейч-плёнку, а гранитные слэбы перевозят в вертикальном положении на металлических слэбницах',
        },
        {
            name: 'Контроль',
            description:
                'Персональный менеджер контролирует каждый этап доставки гранитных блоков и изделий.',
        },
        {
            name: 'Индивидуальный подход',
            description:
                'Каждый заказ уникален, поэтому компании предлагают индивидуальные решения, включая изготовление гранитных изделий по чертежам или спецификациям заказчика.',
        },
        {
            name: 'Экономия',
            description:
                'Компании предлагают оптимальные варианты доставки по цене и срокам, а также возможность сэкономить на доставке, объединяя грузы в одном направлении. Контейнерные перевозки являются выгодным способом транспортировки на дальние расстояния.',
        },
    ];

    const listDelivery = [
        { name: 'Автомобильным транспортом' },
        { name: 'Железнодорожным транспортом' },
        { name: 'Контейнерные перевозки' },
        { name: 'Самовывоз со склада' },
    ];
    return (
        <div className="delivery">
            <div className="delivery-blocks">
                <h1 className="title title-delivery">Доставка</h1>
                <p className="subtitle subtitle-delivery">
                    Доставка гранита по всей стране – надежно, быстро, удобно!
                </p>
            </div>
            <div className="delivery-blocks">
                <div className="delivery-img">
                    <Image src={Truck} alt="Truck" className="truck" />
                </div>
                <div className="delivery-title">
                    Доставка гранита по всей России
                </div>
            </div>
            <div className="delivery-blocks">
                <div className="delivery-list">
                    <h2 className="list-title">Способы доставки:</h2>
                    <ul className="list">
                        {listDelivery.map((item) => (
                            <li key={item.name} className="list-item">
                                <h3 className="list-subtitle">{item.name}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="delivery-img-title">
                    <Image
                        src={DeliveryTitle}
                        alt="Delivery-title"
                        className="delivery-example"
                    />
                    <Image
                        src={DeliveryTitle2}
                        alt="Delivery-title"
                        className="delivery-example"
                    />
                </div>
                <div className="delivery-list">
                    <h2 className="list-title">Особенности доставки:</h2>
                    <ul className="list">
                        {listQualities.map((item) => (
                            <li key={item.name} className="list-item">
                                <h3 className="list-subtitle">{item.name}</h3>
                                <p className="delivery-text">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="delivery-blocks">
                <Image
                    src={Delivery1}
                    alt="Delivery1"
                    className="delivery-example"
                />
                <Image
                    src={Delivery2}
                    alt="Delivery2"
                    className="delivery-example"
                />
            </div>
            <div className="delivery-blocks">
                <div className="delivery-price">
                    Для получения информации о ценах и сроках доставки
                    обратитесь к нам
                </div>
                <Icons />
            </div>
        </div>
    );
}
