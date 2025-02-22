import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import BorderGranit1 from '../../../Assets/main/Prod/Border/Border1.jpg';
import BorderGranit2 from '../../../Assets/main/Prod/Border/Border2.jpg';
import BorderGranit3 from '../../../Assets/main/Prod/Border/Border3.png';
import '../style.css';

export default function BorderGranit() {
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
                <h1 className="titles">Гранитные бордюры</h1>
                <p className="subtitle">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text">Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Гранитные бордюры — это декоративные и функциональные элементы,
                        используемые для ограждения и разделения различных территорий, таких
                        как садовые дорожки, клумбы, газоны, тротуары и проезжие части. Они
                        изготавливаются из натурального гранита, который отличается высокой
                        прочностью и долговечностью.                    
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
                            src={BorderGranit1}
                            alt="ColorTile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={BorderGranit2}
                            alt="Tile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={BorderGranit3}
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