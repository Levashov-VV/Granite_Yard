import './style.css';

interface StandsProps {
    stands: {
        long: number;
        width: number;
        thickness: number;
        oneSide: number;
        fiveSide: number;
    }[]
}

export default function TablePriceStands({ stands }: StandsProps) {
    return (
        <div className='table-tile'>
            <h2 className='title-table'>Подставки</h2>
            <div className="price-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th colSpan={3}>Размеры, мм</th>
                            <th colSpan={2}>Цена, руб</th>
                        </tr>
                        <tr>
                            <td>Длина</td>
                            <td>Ширина</td>
                            <td>Толщина</td>
                            <td>Полировка 1 сторона</td>
                            <td>Полировка 5 сторон</td>
                        </tr>
                    </thead>
                    <tbody>
                        {stands.map((item, i) => (
                            <tr key={i}>
                                <td>{item.long}</td>
                                <td>{item.width}</td>
                                <td>{item.thickness}</td>
                                <td>{item.oneSide}</td>
                                <td>{item.fiveSide}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
