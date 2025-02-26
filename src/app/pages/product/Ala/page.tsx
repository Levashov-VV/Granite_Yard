import ProductBlock from '../Product-base/Product-price';
import AlaImg from '../../../Assets/main/Granit/alanoskuazastavkabig.jpg';
// import TablePriceStele from '../Table-Price/Stele/table';
// import TablePriceTile from '../Table-Price/Tile/table';
// import TablePriceStands from '../Table-Price/Stands/table';
// import TableFlowerGarden from '../Table-Price/Flower-garden/table';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import '../style.css';

export default function Ala() {
    const characteristics = [
        {
            title: 'Ала-носкуа',
            subtitle: 'Цена, характеристики, добыча',
            img: AlaImg,
            price: '2690 руб.',
            characteristics: [2.69, 125, 0.15, 100, 0.41, 740],
        },
    ];
    // const thickness = [50, 60, 80, 100];
    // const thicknessTile = 18;
    // const tile = [
    //     { title: '600x300', price: 6000 },
    //     { title: '600x400', price: 6000 },
    //     { title: '500x300', price: 6000 },
    //     { title: '400x300', price: 6000 },
    // ];

    // const stands = [
    //     {
    //         long: 500,
    //         width: 150,
    //         thickness: 150,
    //         oneSide: 2700,
    //         fiveSide: 3400,
    //     },
    //     {
    //         long: 500,
    //         width: 200,
    //         thickness: 150,
    //         oneSide: 3200,
    //         fiveSide: 4100,
    //     },
    //     {
    //         long: 600,
    //         width: 150,
    //         thickness: 150,
    //         oneSide: 3100,
    //         fiveSide: 3900,
    //     },
    //     {
    //         long: 600,
    //         width: 200,
    //         thickness: 150,
    //         oneSide: 4100,
    //         fiveSide: 5000,
    //     },
    //     {
    //         long: 600,
    //         width: 200,
    //         thickness: 200,
    //         oneSide: 5600,
    //         fiveSide: 7000,
    //     },
    //     {
    //         long: 700,
    //         width: 200,
    //         thickness: 150,
    //         oneSide: 4700,
    //         fiveSide: 5900,
    //     },
    //     {
    //         long: 700,
    //         width: 200,
    //         thickness: 200,
    //         oneSide: 6000,
    //         fiveSide: 7800,
    //     },
    //     {
    //         long: 800,
    //         width: 200,
    //         thickness: 150,
    //         oneSide: 5300,
    //         fiveSide: 6900,
    //     },
    //     {
    //         long: 800,
    //         width: 200,
    //         thickness: 200,
    //         oneSide: 6800,
    //         fiveSide: 8700,
    //     },
    //     {
    //         long: 900,
    //         width: 200,
    //         thickness: 150,
    //         oneSide: 6300,
    //         fiveSide: 8200,
    //     },
    //     {
    //         long: 900,
    //         width: 200,
    //         thickness: 200,
    //         oneSide: 8500,
    //         fiveSide: 10900,
    //     },
    //     {
    //         long: 1000,
    //         width: 200,
    //         thickness: 150,
    //         oneSide: 6900,
    //         fiveSide: 9200,
    //     },
    //     {
    //         long: 1000,
    //         width: 200,
    //         thickness: 200,
    //         oneSide: 9400,
    //         fiveSide: 12500,
    //     },
    //     {
    //         long: 1000,
    //         width: 250,
    //         thickness: 200,
    //         oneSide: 12000,
    //         fiveSide: 15600,
    //     },
    //     {
    //         long: 1100,
    //         width: 200,
    //         thickness: 200,
    //         oneSide: 11500,
    //         fiveSide: 14500,
    //     },
    //     {
    //         long: 1200,
    //         width: 200,
    //         thickness: 150,
    //         oneSide: 8700,
    //         fiveSide: 11200,
    //     },
    //     {
    //         long: 1200,
    //         width: 200,
    //         thickness: 200,
    //         oneSide: 15600,
    //         fiveSide: 19500,
    //     },
    // ];

    // const flowerGarden = [
    //     {
    //         long: 1200,
    //         width: 50,
    //         thickness: 80,
    //         oneSide: 1100,
    //         fiveSide: 1200,
    //     },
    //     {
    //         long: 1000,
    //         width: 50,
    //         thickness: 80,
    //         oneSide: 900,
    //         fiveSide: 1100,
    //     },
    //     {
    //         long: 700,
    //         width: 50,
    //         thickness: 80,
    //         oneSide: 700,
    //         fiveSide: 1200,
    //     },
    //     {
    //         long: 600,
    //         width: 50,
    //         thickness: 80,
    //         oneSide: 650,
    //         fiveSide: 750,
    //     },
    //     {
    //         long: 500,
    //         width: 50,
    //         thickness: 80,
    //         oneSide: 550,
    //         fiveSide: 630,
    //     },
    //     {
    //         long: 1200,
    //         width: 80,
    //         thickness: 80,
    //         oneSide: 1600,
    //         fiveSide: 2000,
    //     },
    //     {
    //         long: 1000,
    //         width: 80,
    //         thickness: 80,
    //         oneSide: 1400,
    //         fiveSide: 1600,
    //     },
    //     {
    //         long: 800,
    //         width: 80,
    //         thickness: 80,
    //         oneSide: 900,
    //         fiveSide: 1100,
    //     },
    //     {
    //         long: 700,
    //         width: 50,
    //         thickness: 80,
    //         oneSide: 800,
    //         fiveSide: 1000,
    //     },
    //     {
    //         long: 600,
    //         width: 80,
    //         thickness: 80,
    //         oneSide: 700,
    //         fiveSide: 900,
    //     },
    //     {
    //         long: 500,
    //         width: 80,
    //         thickness: 80,
    //         oneSide: 600,
    //         fiveSide: 800,
    //     },
    //     {
    //         long: 1000,
    //         width: 80,
    //         thickness: 100,
    //         oneSide: 1800,
    //         fiveSide: 2000,
    //     },
    //     {
    //         long: 700,
    //         width: 80,
    //         thickness: 100,
    //         oneSide: 1300,
    //         fiveSide: 1500,
    //     },
    //     {
    //         long: 600,
    //         width: 80,
    //         thickness: 100,
    //         oneSide: 1100,
    //         fiveSide: 1300,
    //     },
    // ]

    // const price50mm = [
    //     {
    //         title: '600x400',
    //         oneSide: 3100,
    //         twoSide: 3600,
    //         fiveSide: 4000,
    //     },
    //     {
    //         title: '800x400',
    //         oneSide: 4200,
    //         twoSide: 4900,
    //         fiveSide: 5600,
    //     },
    //     {
    //         title: '900x450',
    //         oneSide: 5600,
    //         twoSide: 6500,
    //         fiveSide: 7200,
    //     },
    //     {
    //         title: '1000x500',
    //         oneSide: 7500,
    //         twoSide: 8700,
    //         fiveSide: 9600,
    //     },
    //     {
    //         title: '1000x600',
    //         oneSide: 8500,
    //         twoSide: 9800,
    //         fiveSide: 10800,
    //     },
    //     {
    //         title: '1100x500',
    //         oneSide: 7700,
    //         twoSide: 8900,
    //         fiveSide: 9800,
    //     },
    //     {
    //         title: '1200x600',
    //         oneSide: 10500,
    //         twoSide: 12100,
    //         fiveSide: 13400,
    //     },
    // ];
    // const price60mm = [
    //     {
    //         title: '600x400',
    //         oneSide: 3750,
    //         twoSide: 4400,
    //         fiveSide: 4900,
    //     },
    //     {
    //         title: '800x400',
    //         oneSide: 4950,
    //         twoSide: 5700,
    //         fiveSide: 6300,
    //     },
    //     {
    //         title: '900x450',
    //         oneSide: 6800,
    //         twoSide: 7900,
    //         fiveSide: 8700,
    //     },
    //     {
    //         title: '1000x500',
    //         oneSide: 8400,
    //         twoSide: 9700,
    //         fiveSide: 10700,
    //     },
    //     {
    //         title: '1000x600',
    //         oneSide: 10100,
    //         twoSide: 11700,
    //         fiveSide: 12900,
    //     },
    //     {
    //         title: '1100x500',
    //         oneSide: 9300,
    //         twoSide: 10700,
    //         fiveSide: 11800,
    //     },
    //     {
    //         title: '1200x600',
    //         oneSide: 12100,
    //         twoSide: 14000,
    //         fiveSide: 15400,
    //     },
    // ];
    // const price80mm = [
    //     {
    //         title: '600x400',
    //         oneSide: 6400,
    //         twoSide: 7400,
    //         fiveSide: 8200,
    //     },
    //     {
    //         title: '900x450',
    //         oneSide: 7500,
    //         twoSide: 8700,
    //         fiveSide: 9600,
    //     },
    //     {
    //         title: '1000x500',
    //         oneSide: 9500,
    //         twoSide: 11000,
    //         fiveSide: 12100,
    //     },
    //     {
    //         title: '1000x600',
    //         oneSide: 11400,
    //         twoSide: 13200,
    //         fiveSide: 14600,
    //     },
    //     {
    //         title: '1100x500',
    //         oneSide: 10500,
    //         twoSide: 12100,
    //         fiveSide: 13400,
    //     },
    //     {
    //         title: '1200x600',
    //         oneSide: 14000,
    //         twoSide: 16100,
    //         fiveSide: 17800,
    //     },
    //     {
    //         title: '1200x800',
    //         oneSide: 25000,
    //         twoSide: 28800,
    //         fiveSide: 31700,
    //     },
    //     {
    //         title: '1400x700',
    //         oneSide: 23500,
    //         twoSide: 27100,
    //         fiveSide: 29900,
    //     },
    //     {
    //         title: '1500x700',
    //         oneSide: 27000,
    //         twoSide: 31100,
    //         fiveSide: 34300,
    //     },
    //     {
    //         title: '1600x700',
    //         oneSide: 29500,
    //         twoSide: 34000,
    //         fiveSide: 37400,
    //     },
    //     {
    //         title: '1600x800',
    //         oneSide: 37000,
    //         twoSide: 42600,
    //         fiveSide: 46900,
    //     },
    // ];
    // const price100mm = [
    //     {
    //         title: '800x400',
    //         oneSide: 8320,
    //         twoSide: 9600,
    //         fiveSide: 10600,
    //     },
    //     {
    //         title: '900x450',
    //         oneSide: 11340,
    //         twoSide: 13100,
    //         fiveSide: 14500,
    //     },
    //     {
    //         title: '1000x500',
    //         oneSide: 13750,
    //         twoSide: 15900,
    //         fiveSide: 17500,
    //     },
    //     {
    //         title: '1000x600',
    //         oneSide: 14400,
    //         twoSide: 16700,
    //         fiveSide: 18400,
    //     },
    //     {
    //         title: '1100x500',
    //         oneSide: 13200,
    //         twoSide: 15200,
    //         fiveSide: 16800,
    //     },
    //     {
    //         title: '1200x600',
    //         oneSide: 17500,
    //         twoSide: 20200,
    //         fiveSide: 22300,
    //     },
    //     {
    //         title: '1200x800',
    //         oneSide: 22100,
    //         twoSide: 25500,
    //         fiveSide: 28100,
    //     },
    //     {
    //         title: '1400x700',
    //         oneSide: 27900,
    //         twoSide: 32100,
    //         fiveSide: 35400,
    //     },
    //     {
    //         title: '1500x800',
    //         oneSide: 35400,
    //         twoSide: 40800,
    //         fiveSide: 44900,
    //     },
    //     {
    //         title: '1600x800',
    //         oneSide: 41000,
    //         twoSide: 47200,
    //         fiveSide: 51000,
    //     },
    //     {
    //         title: '1800x800',
    //         oneSide: 47000,
    //         twoSide: 54000,
    //         fiveSide: 58000,
    //     },
    // ];
    // const stele = [price50mm, price60mm, price80mm, price100mm];
    return (
        <div className="granite-page">
            <div className="granite-page-block">
                <ProductBlock characteristics={characteristics} />
            </div>
            <div className="granite-page-block">
                <div className="granite-page-none">
                    В данный момент у нас нет прайс-листов на эти позиции, но вы
                    можете обратиться к нам любым удобным вам способом и
                    проконсультируем вас по всем интересующим вас вопросам
                </div>
            </div>
            {/* <div className="granite-page-block">
                <TablePriceStele stele={stele} thickness={thickness} />
            </div>
            <div className="granite-page-block">
                <TablePriceTile tile={tile} thicknessTile={thicknessTile} />
            </div>
            <div className="granite-page-block">
                <TablePriceStands stands={stands} />
                <TableFlowerGarden flowerGarden={flowerGarden} />
            </div> */}
            <div className="granite-page-block">
                <FeedBack />
            </div>
        </div>
    );
}
