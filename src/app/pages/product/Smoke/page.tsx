import ProductBlock from '../Product-base/Product-price';
import Dym from '../../../Assets/main/Granit/dym.jpg';
import TablePriceStele from '../Table-Price/Stele/table';
import TablePriceTile from '../Table-Price/Tile/table';
import TablePriceStands from '../Table-Price/Stands/table';
import TableFlowerGarden from '../Table-Price/Flower-garden/table';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import '../style.css';

export default function Smoke() {
    const characteristics = [
        {
            title: 'Дымовский',
            subtitle: 'Цена, характеристики, добыча',
            img: Dym,
            price: '2800 руб.',
            characteristics: [2.879, 1600, 0.1, 300, 0.17, 1],
        },
    ];

    const thickness = [50, 60, 80, 100];
    const thicknessTile = 18;
    const tile = [
        { title: '600x300', price: 6000 },
        { title: '600x400', price: 6000 },
        { title: '500x300', price: 6000 },
        { title: '400x300', price: 6000 },
    ];

    const stands = [
        {
            long: 500,
            width: 150,
            thickness: 150,
            oneSide: 2500,
            fiveSide: 3200,
        },
        {
            long: 500,
            width: 200,
            thickness: 150,
            oneSide: 3000,
            fiveSide: 3900,
        },
        {
            long: 600,
            width: 150,
            thickness: 150,
            oneSide: 2900,
            fiveSide: 3700,
        },
        {
            long: 600,
            width: 200,
            thickness: 150,
            oneSide: 3900,
            fiveSide: 4700,
        },
        {
            long: 600,
            width: 200,
            thickness: 200,
            oneSide: 5300,
            fiveSide: 6700,
        },
        {
            long: 700,
            width: 200,
            thickness: 150,
            oneSide: 4500,
            fiveSide: 5600,
        },
        {
            long: 700,
            width: 200,
            thickness: 200,
            oneSide: 5700,
            fiveSide: 7400,
        },
        {
            long: 800,
            width: 200,
            thickness: 150,
            oneSide: 5000,
            fiveSide: 6600,
        },
        {
            long: 800,
            width: 200,
            thickness: 200,
            oneSide: 6500,
            fiveSide: 8300,
        },
        {
            long: 900,
            width: 200,
            thickness: 150,
            oneSide: 6000,
            fiveSide: 7800,
        },
        {
            long: 900,
            width: 200,
            thickness: 200,
            oneSide: 8100,
            fiveSide: 10400,
        },
        {
            long: 1000,
            width: 200,
            thickness: 150,
            oneSide: 6600,
            fiveSide: 8800,
        },
        {
            long: 1000,
            width: 200,
            thickness: 200,
            oneSide: 8900,
            fiveSide: 11900,
        },
        {
            long: 1000,
            width: 250,
            thickness: 200,
            oneSide: 11400,
            fiveSide: 14900,
        },
        {
            long: 1100,
            width: 200,
            thickness: 200,
            oneSide: 11000,
            fiveSide: 13800,
        },
        {
            long: 1200,
            width: 200,
            thickness: 150,
            oneSide: 8300,
            fiveSide: 11700,
        },
        {
            long: 1200,
            width: 200,
            thickness: 200,
            oneSide: 14900,
            fiveSide: 18600,
        },
    ];

    const flowerGarden = [
        {
            long: 1200,
            width: 50,
            thickness: 80,
            oneSide: 1000,
            fiveSide: 1100,
        },
        {
            long: 1000,
            width: 50,
            thickness: 80,
            oneSide: 850,
            fiveSide: 1000,
        },
        {
            long: 700,
            width: 50,
            thickness: 80,
            oneSide: 650,
            fiveSide: 750,
        },
        {
            long: 600,
            width: 50,
            thickness: 80,
            oneSide: 600,
            fiveSide: 650,
        },
        {
            long: 500,
            width: 50,
            thickness: 80,
            oneSide: 500,
            fiveSide: 600,
        },
        {
            long: 1200,
            width: 80,
            thickness: 80,
            oneSide: 1500,
            fiveSide: 1900,
        },
        {
            long: 1000,
            width: 80,
            thickness: 80,
            oneSide: 1300,
            fiveSide: 1500,
        },
        {
            long: 800,
            width: 80,
            thickness: 80,
            oneSide: 850,
            fiveSide: 1000,
        },
        {
            long: 700,
            width: 80,
            thickness: 80,
            oneSide: 750,
            fiveSide: 900,
        },
        {
            long: 600,
            width: 80,
            thickness: 80,
            oneSide: 650,
            fiveSide: 800,
        },
        {
            long: 500,
            width: 80,
            thickness: 80,
            oneSide: 550,
            fiveSide: 750,
        },
        {
            long: 1000,
            width: 80,
            thickness: 100,
            oneSide: 1700,
            fiveSide: 1900,
        },
        {
            long: 700,
            width: 80,
            thickness: 100,
            oneSide: 1200,
            fiveSide: 1400,
        },
        {
            long: 600,
            width: 80,
            thickness: 100,
            oneSide: 1000,
            fiveSide: 1200,
        },
    ];

    const price50mm = [
        {
            title: '600x400',
            oneSide: 2800,
            twoSide: 3300,
            fiveSide: 3600,
        },
        {
            title: '800x400',
            oneSide: 3800,
            twoSide: 4400,
            fiveSide: 5000,
        },
        {
            title: '900x450',
            oneSide: 5000,
            twoSide: 5900,
            fiveSide: 6500,
        },
        {
            title: '1000x500',
            oneSide: 6800,
            twoSide: 7900,
            fiveSide: 8700,
        },
        {
            title: '1000x600',
            oneSide: 7700,
            twoSide: 8900,
            fiveSide: 9800,
        },
        {
            title: '1100x500',
            oneSide: 6700,
            twoSide: 8000,
            fiveSide: 8900,
        },
        {
            title: '1200x600',
            oneSide: 9500,
            twoSide: 10900,
            fiveSide: 12100,
        },
    ];
    const price60mm = [
        {
            title: '600x400',
            oneSide: 3400,
            twoSide: 4000,
            fiveSide: 4500,
        },
        {
            title: '800x400',
            oneSide: 4500,
            twoSide: 5100,
            fiveSide: 5700,
        },
        {
            title: '900x450',
            oneSide: 6200,
            twoSide: 7200,
            fiveSide: 7900,
        },
        {
            title: '1000x500',
            oneSide: 7600,
            twoSide: 8800,
            fiveSide: 9700,
        },
        {
            title: '1000x600',
            oneSide: 9100,
            twoSide: 10600,
            fiveSide: 11700,
        },
        {
            title: '1100x500',
            oneSide: 8400,
            twoSide: 9700,
            fiveSide: 11700,
        },
        {
            title: '1200x600',
            oneSide: 10900,
            twoSide: 12800,
            fiveSide: 14900,
        },
    ];
    const price80mm = [
        {
            title: '600x400',
            oneSide: 5800,
            twoSide: 6700,
            fiveSide: 7400,
        },
        {
            title: '900x450',
            oneSide: 6800,
            twoSide: 7900,
            fiveSide: 8600,
        },
        {
            title: '1000x500',
            oneSide: 8600,
            twoSide: 9900,
            fiveSide: 10900,
        },
        {
            title: '1000x600',
            oneSide: 10300,
            twoSide: 12000,
            fiveSide: 13200,
        },
        {
            title: '1100x500',
            oneSide: 9500,
            twoSide: 10900,
            fiveSide: 12200,
        },
        {
            title: '1200x600',
            oneSide: 12800,
            twoSide: 14800,
            fiveSide: 16200,
        },
        {
            title: '1200x800',
            oneSide: 23000,
            twoSide: 26500,
            fiveSide: 28600,
        },
        {
            title: '1400x700',
            oneSide: 21500,
            twoSide: 25200,
            fiveSide: 27200,
        },
        {
            title: '1500x700',
            oneSide: 24800,
            twoSide: 28500,
            fiveSide: 31500,
        },
        {
            title: '1600x700',
            oneSide: 26800,
            twoSide: 31200,
            fiveSide: 34500,
        },
        {
            title: '1600x800',
            oneSide: 34000,
            twoSide: 39500,
            fiveSide: 43500,
        },
    ];
    const price100mm = [
        {
            title: '800x400',
            oneSide: 7500,
            twoSide: 8700,
            fiveSide: 9600,
        },
        {
            title: '900x450',
            oneSide: 10300,
            twoSide: 11800,
            fiveSide: 13200,
        },
        {
            title: '1000x500',
            oneSide: 12400,
            twoSide: 14800,
            fiveSide: 15900,
        },
        {
            title: '1000x600',
            oneSide: 13000,
            twoSide: 15200,
            fiveSide: 16800,
        },
        {
            title: '1100x500',
            oneSide: 11900,
            twoSide: 13800,
            fiveSide: 15200,
        },
        {
            title: '1200x600',
            oneSide: 16200,
            twoSide: 18500,
            fiveSide: 20500,
        },
        {
            title: '1200x800',
            oneSide: 20500,
            twoSide: 23200,
            fiveSide: 25800,
        },
        {
            title: '1400x700',
            oneSide: 25900,
            twoSide: 29200,
            fiveSide: 32200,
        },
        {
            title: '1500x800',
            oneSide: 32400,
            twoSide: 37800,
            fiveSide: 41800,
        },
        {
            title: '1600x800',
            oneSide: 38900,
            twoSide: 43500,
            fiveSide: 46900,
        },
        {
            title: '1800x800',
            oneSide: 43900,
            twoSide: 49600,
            fiveSide: 53900,
        },
    ];
    const stele = [price50mm, price60mm, price80mm, price100mm];
    return (
        <div className="granite-page">
            <div className="granite-page-block">
                <ProductBlock characteristics={characteristics} />
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
