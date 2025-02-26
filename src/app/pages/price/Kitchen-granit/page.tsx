import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import KitchenGranite1 from '../../../Assets/main/Prod/Kitchen-granit/kitchen1.png';
import KitchenGranite2 from '../../../Assets/main/Prod/Kitchen-granit/kitchen2.jpg';
import KitchenGranite3 from '../../../Assets/main/Prod/Kitchen-granit/kitchen3.png';
import '../style.css';

export default function KitchenGranite() {
    const listText = [
        {
            title: 'Влагостойкость',
            text: 'гранит имеет низкую пористость (коэффициент влагопоглощения не более 0,25%), что делает его идеальным для влажной среды кухни. Он не впитывает жидкости, такие как вино или чай, что облегчает уход за ним.',
        },
        {
            title: 'Устойчивость к высоким температурам',
            text: 'гранит может выдерживать температуры до 280 °C без повреждений, поэтому можно ставить на него горячие кастрюли или сковороды без опаски.',
        },
        {
            title: 'Экологичность',
            text: 'как натуральный материал, гранит экологически чистый и не содержит вредных химических веществ.',
        },
        {
            title: 'Легкость ухода',
            text: 'поверхность гранита легко чистится PH-нейтральными средствами; важно избегать плавиковой кислоты, которая может повредить кварц в составе камня.',
        },
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Кухонный гранит</h1>
                <p className="subtitle">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text">Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Гранит является одним из наиболее популярных материалов
                        для кухонных столешниц благодаря своим уникальным
                        свойствам и преимуществам. Помимо столешниц, гранит
                        также используется для фартуков на кухне — они дополняют
                        столешницу и создают единый стиль пространства. Кроме
                        того, он применяется для подоконников из-за своей
                        прочности при постоянном нагреве от батарей. В целом
                        использование гранита на кухне обеспечивает сочетание
                        практичности с эстетической привлекательностью
                        интерьера.
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
                            src={KitchenGranite1}
                            alt="ColorTile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={KitchenGranite2}
                            alt="Tile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={KitchenGranite3}
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
