import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import FigureTile1 from '../../../Assets/main/Prod/Figure-tiles/Figure1.png';
import FigureTile2 from '../../../Assets/main/Prod/Figure-tiles/Figure2.jpg';
import FigureTile3 from '../../../Assets/main/Prod/Figure-tiles/Figure3.jpg';
import '../style.css';

export default function FigureTiles() {
    const listText = [
        {
            title: 'Индивидуальность',
            text: 'Фигурные памятники отражают личные особенности и интересы умершего, что делает их более значимыми для родственников и друзей. Каждый памятник может быть уникальным произведением искусства, созданным по индивидуальному заказу.',
        },
        {
            title: 'Эстетическая привлекательность',
            text: 'Благодаря разнообразию форм и художественным элементам, фигурные памятники выглядят более привлекательно и могут стать настоящим украшением кладбища. Их дизайн часто включает сложные детали и резьбу, что придает им уникальность и выразительность.',
        },
        {
            title: 'Долговечность',
            text: 'Обычно фигурные памятники изготавливаются из гранита или мрамора, что гарантирует их долговечность и устойчивость к внешним воздействиям. Гранит, в частности, известен своей прочностью и стойкостью к атмосферным условиям.',
        },
        {
            title: 'Возможность персонализации',
            text: 'Фигурные памятники могут передавать глубокие чувства скорби и памяти, создавая атмосферу уважения к усопшему. Их художественное исполнение часто вызывает сильные эмоции у посетителей могилы.',
        },
        {
            title: 'Эмоциональная глубина',
            text: 'Многие фигурные памятники содержат символику, которая отражает жизненные ценности или верования усопшего. Например, памятники в виде ангелов могут символизировать защиту и вечную жизнь, а деревья — продолжение жизни.',
        },
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Фигурные памятники</h1>
                <p className="subtitle">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text">Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Фигурные памятники представляют собой уникальные и
                        художественно оформленные надгробия, которые отличаются
                        от традиционных прямоугольных стел своей сложной формой
                        и выразительным дизайном. Они могут принимать различные
                        формы, включая сердца, ангелов, деревья и другие
                        символические изображения, что позволяет
                        персонализировать памятник в соответствии с характером и
                        предпочтениями усопшего.
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
                            src={FigureTile1}
                            alt="ColorTile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={FigureTile2}
                            alt="Tile1"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={FigureTile3}
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
