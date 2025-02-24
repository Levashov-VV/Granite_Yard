import './style.css';
import Image from 'next/image';

interface Characteristic {
    title: string;
    subtitle: string;
    img: string;
    price: string;
    from: string;
    characteristics?: [number, number, number, number, number, number, number];
}

interface BlockProps {
    characteristics: Characteristic[];
}

export default function ProductPrice({
    characteristics
}: BlockProps) {
    const firstCharacteristic = characteristics[0];

    return (
        <div className="product-price">
            <div className="product-price-block">
                <h1 className="title-granit">{firstCharacteristic.title}</h1>
                <p className="subtitle">{firstCharacteristic.subtitle}</p>
            </div>
            <div className="product-price-block">
                <div className='product-price-img'>
                    <Image className="product-price-img" src={firstCharacteristic.img} alt={firstCharacteristic.title} />
                </div>
                <div className="product-price-text">
                    <p className="info-title">Цена от {firstCharacteristic.price}</p>
                    <p className="info-title">Месторождение {firstCharacteristic.from}</p>
                    <p className="info-title">Характеристики продукции:</p>
                    {firstCharacteristic.characteristics && (
                        <ul className="list">
                            <li className="list-item">
                                Плотность - {firstCharacteristic.characteristics[0]} г/см3
                            </li>
                            <li className="list-item">
                                Марка по прочности при сжатии -{' '}
                                {firstCharacteristic.characteristics[1]} кг/см2
                            </li>
                            <li className="list-item">
                                Водопоглощение - {firstCharacteristic.characteristics[2]} %
                            </li>
                            <li className="list-item">
                                Морозостойкость - {firstCharacteristic.characteristics[3]} циклов
                            </li>
                            <li className="list-item">
                                Истираемость - {firstCharacteristic.characteristics[4]} см2
                            </li>
                            <li className="list-item">
                                Радиоактивность - до {firstCharacteristic.characteristics[5]}{' '}
                                беккерелей/кг
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <div className='product-price-block'>
                <h2 className='title'>Прайс-лист на изделия из гранита {firstCharacteristic.title}</h2>
            </div>
        </div>
    );
}