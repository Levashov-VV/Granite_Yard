import ProductBlock from '../Product-base/Product-price';
import Sosnovskiy from '../../../Assets/main/Granit/sosnovo-grey-granit.jpg';
import TablePriceStele from '../Table-Price/Stele/table';
import TablePriceTile from '../Table-Price/Tile/table';
import TablePriceStands from '../Table-Price/Stands/table';
import TableFlowerGarden from '../Table-Price/Flower-garden/table';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import '../style.css';

export default function GabroD() {
    const characteristics = [
        {
            title: 'Сосновский серый',
            subtitle: 'Цена, характеристики, добыча',
            img: Sosnovskiy ,
            price: '5000 руб.',
            from: 'Другорецкое',
            characteristics: [2.6, 1500, 0.4, 200, 0.14, 105],
        },
    ];

    const thickness = [50, 60, 80, 100];
    const thicknessTile = 18;
    const tile = [
        { title: '600x300', price: 4500 },
        { title: '600x400', price: 4500 },
        { title: '500x300', price: 4500 },
        { title: '400x300', price: 4500 },
    ];

    const stands = [
        {
            long: 500,
            width: 150,
            thickness: 150,
            oneSide: 2400,
            fiveSide: 3000,
        },
        {
            long: 500,
            width: 200,
            thickness: 150,
            oneSide: 2900,
            fiveSide: 3700,
        },
        {
            long: 600,
            width: 150,
            thickness: 150,
            oneSide: 2800,
            fiveSide: 3500,
        },
        {
            long: 600,
            width: 200,
            thickness: 150,
            oneSide: 3800,
            fiveSide: 4500,
        },
        {
            long: 600,
            width: 200,
            thickness: 200,
            oneSide: 5100,
            fiveSide: 6400,
        },
        {
            long: 700,
            width: 200,
            thickness: 150,
            oneSide: 4300,
            fiveSide: 5400,
        },
        {
            long: 700,
            width: 200,
            thickness: 200,
            oneSide: 5500,
            fiveSide: 7100,
        },
        {
            long: 800,
            width: 200,
            thickness: 150,
            oneSide: 4800,
            fiveSide: 6300,
        },
        {
            long: 800,
            width: 200,
            thickness: 200,
            oneSide: 6200,
            fiveSide: 7900,
        },
        {
            long: 900,
            width: 200,
            thickness: 150,
            oneSide: 5700,
            fiveSide: 7500,
        },
        {
            long: 900,
            width: 200,
            thickness: 200,
            oneSide: 7700,
            fiveSide: 10000,
        },
        {
            long: 1000,
            width: 200,
            thickness: 150,
            oneSide: 6300,
            fiveSide: 8400,
        },
        {
            long: 1000,
            width: 200,
            thickness: 200,
            oneSide: 8500,
            fiveSide: 11300,
        },
        {
            long: 1000,
            width: 250,
            thickness: 200,
            oneSide: 10900,
            fiveSide: 14200,
        },
        {
            long: 1100,
            width: 200,
            thickness: 200,
            oneSide: 10500,
            fiveSide: 13100,
        },
        {
            long: 1200,
            width: 200,
            thickness: 150,
            oneSide: 7900,
            fiveSide: 11200,
        },
        {
            long: 1200,
            width: 200,
            thickness: 200,
            oneSide: 14200,
            fiveSide: 17700,
        },
    ];

    const flowerGarden = [
        {
            long: 1200,
            width: 50,
            thickness: 80,
            oneSide: 950,
            fiveSide: 1050,
        },
        {
            long: 1000,
            width: 50,
            thickness: 80,
            oneSide: 800,
            fiveSide: 950,
        },
        {
            long: 700,
            width: 50,
            thickness: 80,
            oneSide: 620,
            fiveSide: 720,
        },
        {
            long: 600,
            width: 50,
            thickness: 80,
            oneSide: 570,
            fiveSide: 620,
        },
        {
            long: 500,
            width: 50,
            thickness: 80,
            oneSide: 470,
            fiveSide: 570,
        },
        {
            long: 1200,
            width: 80,
            thickness: 80,
            oneSide: 1400,
            fiveSide: 1800,
        },
        {
            long: 1000,
            width: 80,
            thickness: 80,
            oneSide: 1230,
            fiveSide: 1400,
        },
        {
            long: 800,
            width: 80,
            thickness: 80,
            oneSide: 800,
            fiveSide: 950,
        },
        {
            long: 700,
            width: 80,
            thickness: 80,
            oneSide: 720,
            fiveSide: 860,
        },
        {
            long: 600,
            width: 80,
            thickness: 80,
            oneSide: 620,
            fiveSide: 760,
        },
        {
            long: 500,
            width: 80,
            thickness: 80,
            oneSide: 520,
            fiveSide: 720,
        },
        {
            long: 1000,
            width: 80,
            thickness: 100,
            oneSide: 1600,
            fiveSide: 1800,
        },
        {
            long: 700,
            width: 80,
            thickness: 100,
            oneSide: 1150,
            fiveSide: 1350,
        },
        {
            long: 600,
            width: 80,
            thickness: 100,
            oneSide: 950,
            fiveSide: 1150,
        },
    ]
    
    const price50mm = [
        {
            title: '600x400',
            oneSide: 2650,
            twoSide: 3150,
            fiveSide: 3400,
        },
        {
            title: '800x400',
            oneSide: 3600,
            twoSide: 4200,
            fiveSide: 4800,
        },
        {
            title: '900x450',
            oneSide: 4800,
            twoSide: 5600,
            fiveSide: 6200,
        },
        {
            title: '1000x500',
            oneSide: 6500,
            twoSide: 7500,
            fiveSide: 8300,
        },
        {
            title: '1000x600',
            oneSide: 7300,
            twoSide: 8500,
            fiveSide: 9300,
        },
        {
            title: '1100x500',
            oneSide: 6400,
            twoSide: 7600,
            fiveSide: 8500,
        },
        {
            title: '1200x600',
            oneSide: 9100,
            twoSide: 10400,
            fiveSide: 11500,
        },
    ];
    const price60mm = [
        {
            title: '600x400',
            oneSide: 3200,
            twoSide: 3800,
            fiveSide: 4300,
        },
        {
            title: '800x400',
            oneSide: 4300,
            twoSide: 4900,
            fiveSide: 5400,
        },
        {
            title: '900x450',
            oneSide: 5900,
            twoSide: 6900,
            fiveSide: 7600,
        },
        {
            title: '1000x500',
            oneSide: 7300,
            twoSide: 8400,
            fiveSide: 9300,
        },
        {
            title: '1000x600',
            oneSide: 8700,
            twoSide: 10100,
            fiveSide: 11200,
        },
        {
            title: '1100x500',
            oneSide: 7800,
            twoSide: 9300,
            fiveSide: 11200,
        },
        {
            title: '1200x600',
            oneSide: 10400,
            twoSide: 12200,
            fiveSide: 14200,
        },
    ];
    const price80mm = [
        {
            title: '600x400',
            oneSide: 5600,
            twoSide: 6400,
            fiveSide: 7100,
        },
        {
            title: '900x450',
            oneSide: 6500,
            twoSide: 7500,
            fiveSide: 8200,
        },
        {
            title: '1000x500',
            oneSide: 8200,
            twoSide: 9400,
            fiveSide: 10400,
        },
        {
            title: '1000x600',
            oneSide: 9800,
            twoSide: 11400,
            fiveSide: 12600,
        },
        {
            title: '1100x500',
            oneSide: 9100,
            twoSide: 10355,
            fiveSide: 11600,
        },
        {
            title: '1200x600',
            oneSide: 12200,
            twoSide: 14100,
            fiveSide: 15400,
        },
        {
            title: '1200x800',
            oneSide: 21800,
            twoSide: 25400,
            fiveSide: 27200,
        },
        {
            title: '1400x700',
            oneSide: 20500,
            twoSide: 24200,
            fiveSide: 26200,
        },
        {
            title: '1500x700',
            oneSide: 23600,
            twoSide: 27200,
            fiveSide: 29900,
        },
        {
            title: '1600x700',
            oneSide: 25600,
            twoSide: 29700,
            fiveSide: 32800,
        },
        {
            title: '1600x800',
            oneSide: 32400,
            twoSide: 37800,
            fiveSide: 41800,
        },
    ];
    const price100mm = [
        {
            title: '800x400',
            oneSide: 7200,
            twoSide: 8300,
            fiveSide: 9200,
        },
        {
            title: '900x450',
            oneSide: 9800,
            twoSide: 11300,
            fiveSide: 12600,
        },
        {
            title: '1000x500',
            oneSide: 11800,
            twoSide: 14100,
            fiveSide: 15200,
        },
        {
            title: '1000x600',
            oneSide: 12400,
            twoSide: 14600,
            fiveSide: 16000,
        },
        {
            title: '1100x500',
            oneSide: 11400,
            twoSide: 13100,
            fiveSide: 14600,
        },
        {
            title: '1200x600',
            oneSide: 15400,
            twoSide: 17600,
            fiveSide: 19500,
        },
        {
            title: '1200x800',
            oneSide: 19500,
            twoSide: 22200,
            fiveSide: 24600,
        },
        {
            title: '1400x700',
            oneSide: 24700,
            twoSide: 27800,
            fiveSide: 30800,
        },
        {
            title: '1500x800',
            oneSide: 31200,
            twoSide: 36000,
            fiveSide: 40000,
        },
        {
            title: '1600x800',
            oneSide: 37000,
            twoSide: 41900,
            fiveSide: 44900,
        },
        {
            title: '1800x800',
            oneSide: 41900,
            twoSide: 47600,
            fiveSide: 51800,
        },
    ];
    const stele = [price50mm, price60mm, price80mm, price100mm];
    return (
        <div className="granite-page">
            <div className="granite-page-block">
                <ProductBlock
                    characteristics={characteristics}
                />
            </div>
            <div className="granite-page-block">
                <TablePriceStele stele={stele} thickness={thickness} />
            </div>
            <div className="granite-page-block">
                <TablePriceTile tile={tile} thicknessTile={thicknessTile} />
            </div>
            <div className="granite-page-block">
                <TablePriceStands stands={stands} />
                <TableFlowerGarden flowerGarden={flowerGarden} />
            </div>
            <div className="granite-page-block">
                <FeedBack />
            </div>
        </div>
    );
}