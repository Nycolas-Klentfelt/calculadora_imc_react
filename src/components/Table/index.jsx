import style from './table.module.css'

const Table = () => {
    return( 
        <div id='table' className={style.table}>
            <h3 className={style.tableTitle}>Tabela de Classificação IMC</h3>
            <table>
                <tr className={style.row}>
                    <th className={style.colLeft}>IMC</th>
                    <th className={style.colRight}>Classificação</th>
                </tr>
                <tr className={style.row}>
                    <td className={style.colLeft}>Menor que 18,5</td>
                    <td className={style.colRight}>Magreza</td>
                </tr>
                <tr className={style.row}>
                    <td className={style.colLeft}>Entre 18,5 e 24,9</td>
                    <td className={style.colRight}>Normal</td>
                </tr>
                <tr className={style.row}>
                    <td className={style.colLeft}>Entre 25,0 e 29,9</td>
                    <td className={style.colRight}>Sobrepeso</td>
                </tr>
                <tr className={style.row}>
                    <td className={style.colLeft}>Entre 30,0 e 34,9</td>
                    <td className={style.colRight}>Obesidade grau 1</td>
                </tr>
                <tr className={style.row}>
                    <td className={style.colLeft}>Entre 34,9 e 39,9</td>
                    <td className={style.colRight}>Obesidade grau 2</td>
                </tr>
                <tr className={style.row}>
                    <td className={style.colLeft}>Maior que 40,0</td>
                    <td className={style.colRight}>Obesidade grau 3</td>
                </tr>
            </table>
        </div>
    )
}

export default Table;