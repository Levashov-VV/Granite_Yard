import ProductCard from './Product-cards/Product-cards';
import gabro from '../../../Assets/main/Product/Gabro.jpg';
import figured from '../../../Assets/main/Product/Figured-monuments.png';
import colorTile from '../../../Assets/main/Product/Color-Granite.png';
import tombstones from '../../../Assets/main/Product/Tombstones.png';
import graniteCut from '../../../Assets/main/Product/Granit-cut.png';
import rock from '../../../Assets/main/Product/Rock.png';
import block from '../../../Assets/main/Product/block.png';
import polishedTile from '../../../Assets/main/Product/polished-tiles.jpg';
import pavingStones from '../../../Assets/main/Product/paving-stones.jpg';
import stepTile from '../../../Assets/main/Product/step-tile.jpg';
import border from '../../../Assets/main/Product/border.jpg';
import slabs from '../../../Assets/main/Product/paving-slabs.jpg';
import './style.css';

export default function Product() {
    const ProductText = [
        {
            name: 'Стелы',
            title: 'Памятники габбро-диабаз оптом',
            img: gabro,
        },
        {
            name: 'Производство ',
            title: 'Фигурные памятники из гранита',
            img: figured,
        },
        {
            name: 'Заготовки',
            title: 'Памятники из цветных гранитов',
            img: colorTile,
        },
        {
            name: 'Плиты для памятников',
            title: 'Надгробные плиты',
            img: tombstones,
        },
        {
            name: 'Распил',
            title: 'Гранитный распил оптом',
            img: graniteCut,
        },
        {
            name: 'Распил',
            title: 'Гранитные корки памятники скала',
            img: rock,
        },
        {
            name: 'Блоки',
            title: 'Гранитные блоки',
            img: block,
        },
        {
            name: 'Плитка',
            title: 'Гранитная плитка полированная и термообработанная',
            img: polishedTile,
        },
        {
            name: 'Брусчатка',
            title: 'Гранитная брусчатка колотоая пиленая',
            img: pavingStones,
        },
        {
            name: 'Плиты дорожек',
            title: 'Пошаговые плиты',
            img: stepTile,
        },
        {
            name: 'Обустройство тротуаров',
            title: 'Гранитные бордюры',
            img: border,
        },
        {
            name: 'Гранитная плита мощения',
            title: 'Плиты мощения',
            img: slabs,
        },
    ];
    return (
        <div className="product fadeInUp wow" id="product">
            <div className="product-block ">
                <h2 className="title">Продукция</h2>
            </div>
            <div className="product-block">
                {ProductText.map((item) => (
                    <ProductCard
                        key={item.name}
                        name={item.name}
                        title={item.title}
                        img={item.img}
                    />
                ))}
            </div>
        </div>
    );
}
