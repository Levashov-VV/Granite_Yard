import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import Tile1 from '../../../Assets/main/Prod/Standart-tiles/Tile1.png';
import Tile2 from '../../../Assets/main/Prod/Standart-tiles/Tile2.png';
import Tile3 from '../../../Assets/main/Prod/Standart-tiles/Tile3.jpg';
import '../style.css';

export default function StandartTiles() {
    const listText = [
        {
            title: 'Состав и свойства гранита',
            list: [
                {
                    subtitle: 'Материал',
                    text: 'гранит состоит в основном из полевого шпата, кварца и слюды, что придает ему высокую прочность и устойчивость к внешним воздействиям.',
                },
                {
                    subtitle: 'Износостойкость',
                    text: 'гранитные памятники обладают высокой износостойкостью и могут служить столетиями без значительных изменений.',
                },
            ],
        },
        {
            title: 'Типы и размеры стандартных памятников',
            list: [
                {
                    subtitle: 'Форма',
                    text: 'стандартные гранитные памятники могут быть как вертикальными, так и горизонтальными. Они имеют различные формы фасовки памятников: прямые для отечественного гранита и профильные для импортного.',
                },
                {
                    subtitle: 'Размеры',
                    text: 'стандартные размеры памятников начинаются от 400x600x80 мм, с высотой до 1200 мм и толщиной от 5 до 8 см.',
                },
                {
                    subtitle: 'Варианты оформления',
                    text: 'памятники могут быть прямоугольными, фигурными или резными, что позволяет выбрать подходящий стиль для оформления могилы.',
                },
            ],
        },
        {
            title: 'Процесс изготовления',
            list: [
                {
                    subtitle: 'Обработка',
                    text: 'изготовление начинается с обработки гранитного блока, который пилится на плиты, затем вырезаются детали памятника. Полировка производится как машинным, так и ручным способом',
                },
                {
                    subtitle: 'Гравировка',
                    text: ' гравировка на памятниках выполняется механическим способом, что обеспечивает высокую скорость и точность работы.',
                },
            ],
        },
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Стандартные памятники</h1>
                <p className="subtitle">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text"> Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Гранитные памятники являются популярным выбором для
                        оформления могил благодаря своей прочности и
                        долговечности. Вот основные характеристики и
                        преимущества стандартных гранитных памятников:
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
                        <Image className="standartTiles-img" src={Tile1} alt="Tile1" />
                    </div>
                    <div className="description-img">
                        <Image className="standartTiles-img" src={Tile2} alt="Tile1" />
                    </div>
                    <div className="description-img">
                        <Image className="standartTiles-img" src={Tile3} alt="Tile1" />
                    </div>
                </div>
            </div>
            <div className="standartTiles-block">
                <FeedBack />
            </div>
        </div>
    );
}
