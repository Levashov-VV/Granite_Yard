interface FlowerGardenProps {
    flowerGarden: {
        long: number;
        width: number;
        thickness: number;
        oneSide: number;
        fiveSide: number;
    }[]
}

export default function FlowerGarden({ flowerGarden }: FlowerGardenProps) {
    return(
<div className='table-tile'>
            <h2 className='title-table'> Цветник (цоколь)</h2>
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
                        {flowerGarden.map((item, i) => (
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
    )
}