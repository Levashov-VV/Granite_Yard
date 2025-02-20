import './style.css'
interface TileProps {
    tile: { title: string; price: number }[];
    thicknessTile: number
}
export default function Tile({tile, thicknessTile}: TileProps) {
    return (
        <div className='table-tile'>
            <h2 className='title-table'>Плитка полированная</h2>
            <div className="price-list">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td colSpan={2}>
                                        Толщина {thicknessTile} мм
                                    </td>
                                </tr>
                                <tr>
                                    <td>Размер, мм</td>
                                    <td>
                                        Цена, руб/м2.
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {tile.map((price, i) => (
                                    <tr key={i}>
                                        <td>{price.title}</td>
                                        <td>{price.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
            </div>
        </div>
    )
}