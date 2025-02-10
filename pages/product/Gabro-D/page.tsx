import ProductBlock from '../Product-base/Product-price';
import './style.css';

export default function GabroD() {
    const сharacteristics = [
        {
            title: 'Габбро-диабаз',
            subtitle: 'Цена, характеристики, добыча',
            img: '../../../Assets/main/Granit/gabbrodr.jpg',
            price: '5000 руб.',
            from: 'Другорецкое',
            characteristics: [3.07, 1400, 0.1, 300, 0.07, 74],
        },
    ];
    return (
        <div>
            <ProductBlock
                title={сharacteristics[0].title}
                subtitle={сharacteristics[0].subtitle}
                img={сharacteristics[0].img}
                price={сharacteristics[0].price}
                from={сharacteristics[0].from}
                characteristics={сharacteristics[0].characteristics}
            />
        </div>
    );
}
