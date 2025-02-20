import './style.css';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import Cards from './Cards-product/cards-product';
import gabroDia from '../../../Assets/main/Granit/gabbrodr.jpg';
import sosnovskiy from '../../../Assets/main/Granit/sosnovo-grey-granit.jpg';
import dym from '../../../Assets/main/Granit/dym.jpg';
import hibinit from '../../../Assets/main/Granit/hibinit.jpg';
import vinga from '../../../Assets/main/Granit/vinga.jpg';
import amfibol from '../../../Assets/main/Granit/amfibol.jpg';
import sopka from '../../../Assets/main/Granit/Sopka.jpg';
import vozrozh from '../../../Assets/main/Granit/vozrozh.jpg';
import kup from '../../../Assets/main/Granit/kup.jpg';
import nini from '../../../Assets/main/Granit/nini.jpg';
import kalguvaara from '../../../Assets/main/Granit/kalguvaara.jpg';
import piroksenit from '../../../Assets/main/Granit/piroksenit.jpg';
import rapakivi from '../../../Assets/main/Granit/rapakivi.jpg';
import shonguy from '../../../Assets/main/Granit/Shonguy.jpeg';
import krasnogorsky from '../../../Assets/main/Granit/krasnogorskii-granit.jpg';
import kallivolampi from '../../../Assets/main/Granit/kallivolampi.jpeg';
import ala from '../../../Assets/main/Granit/alanoskuazastavkabig.jpg';

export default function ProductAll() {
    const graniteBase = [
        {
            title: 'Габбро-диабаз',
            img: gabroDia,
            href: '/pages/product/Gabro-D',
        },
        {
            title: 'Сосновский (серый)',
            img: sosnovskiy,
            href: '/pages/product/Sosnovckiy',
        },
        {
            title: 'Дымовский',
            img: dym,
            href: '/pages/product/Smoke',
        },
        {
            title: 'Хибинит',
            img: hibinit,
            href: '/pages/product/Hibinit',
        },
        {
            title: 'Винга',
            img: vinga,
            href: '/pages/product/Vinga',
        },
        {
            title: 'Амфиболит',
            img: amfibol,
            href: '/pages/product/Subpolar-amphibolite',
        },
        {
            title: 'Сопка Бунтина',
            img: sopka,
            href: '/pages/product/Spock-buntin',
        },
        {
            title: 'Возрождение',
            img: vozrozh,
            href: '/pages/product/Renaissance',
        },
        {
            title: 'Купецкий',
            img: kup,
            href: '/pages/product/Merchant',
        },
        {
            title: 'Нинимяки',
            img: nini,
            href: '/pages/product/Nini',
        },

        {
            title: 'Калгуваара',
            img: kalguvaara,
            href: '/pages/product/Kaalguvaara',
        },
        {
            title: 'Пироксенит',
            img: piroksenit,
            href: '/pages/product/Piroksenit',
        },
        {
            title: 'Рапакиви',
            img: rapakivi,
            href: '/pages/product/Rapakivi',
        },
        {
            title: 'Шонгуй',
            img: shonguy,
            href: '/pages/product/Shongui',
        },
        {
            title: 'Красногорский',
            img: krasnogorsky,
            href: '/pages/product/Red-Rock',
        },
        {
            title: 'Калливолампи',
            img: kallivolampi,
            href: '/pages/product/Kallivolampi',
        },
        {
            title: 'Ала-носкуа',
            img: ala,
            href: '/pages/product/Ala',
        },
    ];
    return (
        <div className="productAll">
            <div className="productAll-blocks">
                <h1 className="title title-productAll">Наши граниты</h1>
                <p className="subtitle subtitle-productAll">
                    Мы предлагаем вам большой ассортимент товаров из различных
                    видов гранитов
                </p>
            </div>
            <div className="productAll-blocks">
                <h2 className="productAll-title">
                    Граниты, которые мы предлагаем
                </h2>
            </div>
            <div className="productAll-blocks">
                {graniteBase.map((item) => {
                    return <Cards key={item.title} {...item} />;
                })}
            </div>
            <div className="productAll-blocks">
                <FeedBack />
            </div>
        </div>
    );
}
