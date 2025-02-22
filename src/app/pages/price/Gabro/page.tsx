import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import Gabbro1 from '../../../Assets/main/Prod/Gabbro/Gabbro1.png';
import Gabbro2 from '../../../Assets/main/Prod/Gabbro/Gabbro2.png';
import Gabbro3 from '../../../Assets/main/Prod/Gabbro/Gabbro3.jpg';
import '../style.css';

export default function Gabbro() {
    const listText = [
        {
            title: 'Применение',
            list: [
                {
                    subtitle: 'Декоративные элементы',
                    text: 'используются как украшения или дополнительные детали при отделке помещений.',
                },
                {
                    subtitle: 'Строительство',
                    text: 'могут применяться для мощения дорожек или тротуаров',
                },
                {
                    subtitle: 'Отделка интерьера',
                    text: 'включаются в дизайн лестниц, ступеней или других архитектурных элементов',
                },
            ],
        }
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Корки из габбро-диабаза</h1>
                <p className="subtitle">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text">Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Корки из габбро-диабаза — это обрезки или остатки камня, полученные
                        в процессе обработки и распила габбро-диабаза. Габбро-диабаз — это
                        вулканическая горная порода, известная своей высокой прочностью,
                        морозоустойчивостью и устойчивостью к влаге и механическим
                        нагрузкам. Он широко используется в строительстве для изготовления
                        плитки, брусчатки, памятников и других декоративных элементов.
                        Корки из габбро-диабаза могут быть полированными или окантованными.
                        Полированные корки имеют глянцевую поверхность и используются для
                        декоративных целей. Окантованные корки имеют обработанный край, что
                        делает их пригодными для использования в различных строительных проектах.
                    </p>
                    <ul className="description-list">
                        {listText.map((item, index) => (
                            <li key={index}>
                                <h3 className="title-list">{item.title}</h3>
                                <ul className="description-sublist">
                                    {item.list.map((subItem, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className="description-list-item"
                                        >
                                            <p className="subtitle-list">
                                                {subItem.subtitle}:{' '}
                                                {subItem.text}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h3 className='title-text'>Примеры работ</h3>
                </div>
                <div className="description-images">
                    <div className="description-img">
                        <Image className="standartTiles-img" src={Gabbro1} alt="Tile1" />
                    </div>
                    <div className="description-img">
                        <Image className="standartTiles-img" src={Gabbro2} alt="Tile1" />
                    </div>
                    <div className="description-img">
                        <Image className="standartTiles-img" src={Gabbro3} alt="Tile1" />
                    </div>
                </div>
            </div>
            <div className="standartTiles-block">
                <FeedBack />
            </div>
        </div>
    );
}