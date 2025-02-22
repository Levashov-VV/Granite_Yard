import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import GraniteTile1 from '../../../Assets/main/Prod/Granite-tiles/Tile1.jpg';
import GraniteTile2 from '../../../Assets/main/Prod/Granite-tiles/Tile2.png';
import GraniteTile3 from '../../../Assets/main/Prod/Granite-tiles/Tile3.jpg';
import '../style.css';

export default function GraniteTiles() {
    const listText = [
        {
            title: 'Устойчивость к влаге и химикатам',
            text: 'гранит имеет низкое водопоглощение (обычно менее 1%), что делает его устойчивым к влаге и агрессивным химическим веществам.',
        },
        {
            title: 'Легкость ухода',
            text: 'поверхности гранита легко чистятся от загрязнений, а полированные варианты особенно удобны в этом отношении.',
        },
        {
            title: 'Экологическая безопасность',
            text: 'гранит является натуральным материалом без вредных примесей, что делает его безопасным для здоровья человека.',
        },
        {
            title: 'Широкий спектр применения',
            text: 'может использоваться как для внутренней облицовки стен или полов дома, так и для наружного мощения тротуаров или площадей.',
        },
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Гранитная плитка</h1>
                <p className="subtitle">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text">Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Гранитные плитки — это популярный материал для отделки и мощения,
                        обладающий рядом преимуществ, которые делают его привлекательным для
                        использования в быту.                    
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
                            src={GraniteTile1}
                            alt="ColorTile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={GraniteTile2}
                            alt="Tile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={GraniteTile3}
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