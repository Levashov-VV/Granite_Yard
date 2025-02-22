import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import Cut1 from '../../../Assets/main/Prod/CutGranite/Cut1.jpg';
import Cut2 from '../../../Assets/main/Prod/CutGranite/Сut2.jpg';
import '../style.css';

export default function GraniteCut() {
    const listText = [
        {
            title: 'Для распила гранита используются несколько технологий:',
            list: [
                {
                    subtitle: 'Дисковая распиловка',
                    text: 'использует дисковые режущие приспособления, часто оснащенные алмазными кромками. Это позволяет быстро и точно разрезать камень, что делает этот метод экономически эффективным.',
                },
                {
                    subtitle: 'Канатная распиловка',
                    text: 'применяется для обработки камней любой структуры и твердости. Канатные пилы используются для добычи блоков в горных массивах или на предприятиях по обработке камня.',
                },
                {
                    subtitle: 'Штрипсовая распиловка',
                    text: 'редко используется в современном производстве, но может быть эффективной при определенных условиях.',
                },
            ],
        },
        {
            title: 'Особенности процесса',
            list: [
                {
                    subtitle: 'Скорость резки',
                    text: 'зависит от типа абразива (например, кварцевый песок или карборунд) и состояния режущего механизма.',
                },
                {
                    subtitle: 'Контроль качества',
                    text: 'важен для предотвращения брака (например, клиновидные плиты или сколы).',
                },
                {
                    subtitle: 'Оборудование',
                    text: 'современные станки обеспечивают точность и экономичность процесса.',
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
                <h1 className="titles">Распил</h1>
                <p className="subtitle">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text">Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Распил гранита — это процесс обработки гранитных блоков с целью
                        получения плит или деталей необходимых размеров и форм. Этот процесс
                        является одним из наиболее сложных в камнеобработке из-за высокой
                        твердости и стоимости материала.                   
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
                        <Image className="standartTiles-img" src={Cut1} alt="Tile1" />
                    </div>
                    <div className="description-img">
                        <Image className="standartTiles-img" src={Cut2} alt="Tile1" />
                    </div>
                </div>
            </div>
            <div className="standartTiles-block">
                <FeedBack />
            </div>
        </div>
    );
}