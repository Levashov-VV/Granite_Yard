import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import PavingStones1 from '../../../Assets/main/Prod/Paving-stones/Paving-stones1.jpg';
import PavingStones2 from '../../../Assets/main/Prod/Paving-stones/Paving-stones2.jpg';
import PavingStones3 from '../../../Assets/main/Prod/Paving-stones/Paving-stones3.jpg';
import '../style.css';

export default function PavingStones() {
    const listText = [
        {
            title: 'Ландшафтный дизайн',
            text: 'пошаговые дорожки используются в ландшафтном дизайне для соединения различных объектов на участке, таких как дом и хозяйственные постройки.',
        },
        {
            title: 'Эстетика',
            text: 'гранитные плиты с рельефной фактурой предпочтительны из-за их естественного вида и противоскользящих свойств.',
        },
        {
            title: 'Монтаж',
            text: 'укладка плит производится на подготовленное основание из гравия и песка. Это обеспечивает отвод воды и стабильность конструкции.',
        },
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Гранитная брусчатка</h1>
                <p className="subtitle">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text">Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Пошаговые гранитные плиты — это элементы мощения,
                        используемые для создания садовых дорожек. Они
                        располагаются с широкими зазорами между собой, что
                        позволяет траве расти или заполнять пространство
                        декоративными материалами, такими как каменная крошка
                        или мульча. Расстояние между плитами обычно
                        соответствует среднему человеческому шагу, что делает их
                        удобными для ходьбы.
                    </p>
                    <ul className="description-list">
                        {listText.map((item, index) => (
                            <li key={index}>
                                <h3 className="title-list">{item.title}</h3>
                                <p className="subtitle-list">{item.text}</p>
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
                            src={PavingStones1}
                            alt="ColorTile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={PavingStones2}
                            alt="Tile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={PavingStones3}
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
