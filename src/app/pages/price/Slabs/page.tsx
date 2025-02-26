import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import Slabs1 from '../../../Assets/main/Prod/Slabs/Slabs1.jpg';
import Slabs2 from '../../../Assets/main/Prod/Slabs/Slabs2.png';
import Slabs3 from '../../../Assets/main/Prod/Slabs/Slabs3.png';
import '../style.css';

export default function Slabs() {
    const listText = [
        {
            title: 'Процесс изготовления',
            list: [
                {
                    subtitle: 'Добыча',
                    text: 'гранит добывается в виде больших блоков на карьерах.',
                },
                {
                    subtitle: 'Резка',
                    text: 'блоки разрезаются на слэбы с помощью дисковых пил или алмазных канатов.',
                },
                {
                    subtitle: 'Обработка поверхности',
                    text: 'слэбы проходят дополнительную обработку (шлифовку или полировку) для придания им необходимой текстуры и вида',
                },
            ],
        },
        {
            title: 'Применение',
            list: [
                {
                    subtitle: 'Внешняя отделка',
                    text: 'термообработанные слэбы используются для наружной облицовки зданий или мощения уличных дорожек.',
                },
                {
                    subtitle: 'Внутренний дизайн',
                    text: 'полированные слэбы подходят для внутренних помещений — кухонных столешниц, барных столов и тумб',
                },
            ],
        },
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Слэбы</h1>
                <p className="subtitle">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text">Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        это прямоугольные плиты-заготовки, изготовленные из
                        натурального гранита. Они используются в строительстве и
                        интерьерном дизайне для создания различных изделий,
                        таких как столешницы, подоконники, каменные ступени и
                        облицовка стен.
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
                    <h3 className="title-text">Примеры работ</h3>
                </div>
                <div className="description-images">
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={Slabs1}
                            alt="Tile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={Slabs2}
                            alt="Tile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={Slabs3}
                            alt="Tile1"
                        />
                    </div>
                </div>
            </div>
            <div className="standartTiles-block">
                <FeedBack />
            </div>
        </div>
    );
}
