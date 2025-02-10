import Button from '../Buttons/Button';
import GraniteCard from './Granite-card/Granite-Card';
import gabroDia from '../../../Assets/main/Granit/gabbrodr.jpg';
import gabroKarBlack from '../../../Assets/main/Granit/gabro-karBlack.jpg';
import dym from '../../../Assets/main/Granit/dym.jpg';
import hibinit from '../../../Assets/main/Granit/hibinit.jpg';
import vinga from '../../../Assets/main/Granit/vinga.jpg';
import amfibol from '../../../Assets/main/Granit/amfibol.jpg';
import sopka from '../../../Assets/main/Granit/Sopka.jpg';
import vozrozh from '../../../Assets/main/Granit/vozrozh.jpg';
import kup from '../../../Assets/main/Granit/kup.jpg';
import nini from '../../../Assets/main/Granit/nini.jpg';
import './style.css';
import Link from 'next/link';

export default function Granite() {
    const button = [{ name: 'Посмотреть все граниты' }];

    const graniteBase = [
        {
            title: 'Габбро-диабаз',
            subtitle: 'Месторождение другорецкое',
            img: gabroDia,
            href: '/pages/product/Gabro-D',
        },
        {
            title: 'Карелия блэк',
            subtitle: 'Габбро-диабаз',
            img: gabroKarBlack,
            href: '/pages/product/Karelia-black',
        },
        {
            title: 'Дымовский',
            subtitle: 'Гранит',
            img: dym,
            href: '/pages/product/Smoke',
        },
        {
            title: 'Хибинит',
            subtitle: 'Гранит',
            img: hibinit,
            href: '/pages/product/Hibinit',
        },
        {
            title: 'Винга',
            subtitle: 'Гранит',
            img: vinga,
            href: '/pages/product/Vinga',
        },
        {
            title: 'Амфиболит',
            subtitle: 'Гранит',
            img: amfibol,
            href: '/pages/product/Subpolar-amphibolite',
        },
        {
            title: 'Сопка Бунтина',
            subtitle: 'Пироксенит',
            img: sopka,
            href: '/pages/product/Spock-buntin',
        },
        {
            title: 'Возрождение',
            subtitle: 'Гранит',
            img: vozrozh,
            href: '/pages/product/Renaissance',
        },
        {
            title: 'Купецкий',
            subtitle: 'Гранит',
            img: kup,
            href: '/pages/product/Merchant',
        },
        {
            title: 'Нинимяки',
            subtitle: 'Гранит',
            img: nini,
            href: '/pages/product/Nini',
        },
    ];

    return (
        <div className="granite">
            <div className="granite-block">
                <h2 className="title">Наши граниты</h2>
            </div>
            <div className="granite-block">
                <div className="granite-cards">
                    {graniteBase.map((granite) => (
                        <GraniteCard
                            key={granite.title}
                            title={granite.title}
                            subtitle={granite.subtitle}
                            img={granite.img}
                            href={granite.href}
                        />
                    ))}
                </div>
            </div>
            <div className="granite-block">
                <Link href={'/pages/product/Product-all'}>
                    <Button button={button} />
                </Link>
            </div>
        </div>
    );
}
