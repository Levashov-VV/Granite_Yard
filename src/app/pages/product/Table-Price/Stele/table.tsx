import './style.css';

interface SteleProps {
    stele: any;
    thickness: number[];
}
export default function Stele({ stele, thickness }: SteleProps) {
    return (
        <>
            <h2 className='title-table'>Стелы</h2>
            <div className="price-list">
                {stele.map((priceList, index) => (
                    <div className="table-block" key={index}>
                        <table className="table">
                            <thead>
                                <tr>
                                    <td colSpan={4}>
                                        Толщина {thickness[index]} мм
                                    </td>
                                </tr>
                                <tr>
                                    <td>Размер, мм</td>
                                    <td
                                        colSpan={3}
                                    >
                                        Цена, руб.
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {priceList.map((price, i) => (
                                    <tr key={i}>
                                        <td>{price.title}</td>
                                        <td>{price.oneSide}</td>
                                        <td>{price.twoSide}</td>
                                        <td>{price.fiveSide}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </>
    );
}
