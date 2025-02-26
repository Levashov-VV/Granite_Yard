import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import Block1 from '../../../Assets/main/Prod/Block/Block1.png';
import Block2 from '../../../Assets/main/Prod/Block/Block2.jpg';
import Block3 from '../../../Assets/main/Prod/Block/Block3.jpg';
import '../style.css';

export default function BlockGranit() {
    const listText = [
        {
            title: 'Преимущества гранитных блоков',
            list: [
                {
                    subtitle: 'Прочность и долговечность',
                    text: 'гранит обладает высокой прочностью и устойчивостью к механическим повреждениям.',
                },
                {
                    subtitle: 'Эстетика',
                    text: 'гранитные блоки доступны в различных цветах и текстурах, что позволяет их использовать в дизайне интерьеров и ландшафтов.',
                },
                {
                    subtitle: 'Низкий уровень радиоактивности',
                    text: 'это делает гранит безопасным для использования в жилых помещениях',
                },
            ],
        },
        {
            title: 'Процесс обработки',
            list: [
                {
                    subtitle: 'Распиловка',
                    text: 'блоки распиливаются на слэбы для дальнейшего использования.',
                },
                {
                    subtitle: 'Полировка и шлифовка',
                    text: 'эти процессы придают камню гладкость и блеск.',
                },
                {
                    subtitle: 'Термообработка',
                    text: 'создает неровную поверхность, предотвращающую скольжение.',
                },
            ],
        },
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Гранитные блоки</h1>
                <p className="subtitle">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text">Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Гранитные блоки — это крупные массивы натурального
                        камня, добываемые из гранитных месторождений. Они
                        получают с помощью открытых или буровзрывных методов,
                        после чего блоки транспортируются на производства для
                        дальнейшей переработки в различные изделия, такие как
                        плитка, брусчатка, столешницы и элементы архитектуры.
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
                            src={Block1}
                            alt="Tile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={Block2}
                            alt="Tile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={Block3}
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
