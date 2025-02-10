import './style.css';

interface BlockProps {
    title: string;
    subtitle: string;
    text: string;
    img?: string;
    price: string;
    from: string;
    characteristics?: [number, number, number, number, number, number, number];
}

export default function ProductPrice({
    title,
    subtitle,
    price,
    from,
    characteristics,
}: BlockProps) {
    return (
        <div className="product-price">
            <div className="product-price-block">
                <h1 className="title">{title}</h1>
                <p className="subtitle">{subtitle}</p>
            </div>
            <div className="product-price-block">
                <div className="product-image"></div>
                <div className="product-price-text">
                    <p className="list-title">Цена от {price}</p>
                    <p className="list-title">Месторождение {from}</p>
                    <p className="list-title">Характеристики продукции:</p>
                    {characteristics && (
                        <ul className="list">
                            <li className="list-item">
                                Плотность - {characteristics[0]} г/см3
                            </li>
                            <li className="list-item">
                                Марка по прочности при сжатии -{' '}
                                {characteristics[1]} кг/см2
                            </li>
                            <li className="list-item">
                                Водопоглощение - {characteristics[2]} %
                            </li>
                            <li className="list-item">
                                Морозостойкость - {characteristics[3]} циклов
                            </li>
                            <li className="list-item">
                                Истираемость - {characteristics[4]} см2
                            </li>
                            <li className="list-item">
                                Радиоактивность - до {characteristics[5]}{' '}
                                беккерелей/кг
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
