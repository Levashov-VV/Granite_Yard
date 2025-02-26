import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import Block1 from '../../../Assets/main/Prod/Fin-Block/FinGranit1.jpg';
import Block2 from '../../../Assets/main/Prod/Fin-Block/FinGranit2.jpg';
import Block3 from '../../../Assets/main/Prod/Fin-Block/FinGranit3.png';
import '../style.css';

export default function FinGranit() {
    const listText = [
        {
            title: 'Прочность и твердость',
            text: 'финский гранит имеет высокую твердость по шкале Мооса, обычно около 6–7 единиц, что делает его очень устойчивым к износу.',
        },
        {
            title: 'Плотность',
            text: 'варьируется в зависимости от типа гранита, например, Балтик Грин имеет плотность около 2670 кг/м³, а Аврора — 2680 кг/м³.',
        },
        {
            title: 'Водопоглощение',
            text: 'очень низкое водопоглощение (например, Балтик Грин до 0,16%), что делает его устойчивым к погодным условиям.',
        },
        {
            title: 'Морозостойкость',
            text: 'высокая морозостойкость позволяет использовать его для наружных работ без риска разрушения при замерзании воды внутри породы.',
        },
        {
            title: 'Декоративные свойства',
            text: 'разнообразие цветов и текстур позволяет использовать его для создания уникальных интерьерных решений. Например, Балтик Грин имеет насыщенный зеленый цвет с крупными кристаллами полевого шпата.',
        },
        {
            title: 'Универсальность применения',
            text: 'используется как строительный материал для фасадов зданий, изготовления столешниц, памятников и других изделий благодаря своей прочности и декоративности.',
        },
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Финский гранит</h1>
                <p className="subtitle">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text"> Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Финский гранит известен своей исключительной прочностью,
                        долговечностью и декоративными свойствами. Он широко
                        используется в строительстве и отделке благодаря своим
                        уникальным характеристикам.
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
                            src={Block1}
                            alt="ColorTile1"
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
