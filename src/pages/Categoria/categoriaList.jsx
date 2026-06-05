import { useEffect, useState } from 'react';

const CategoriaList = ({ onEdit }) => {

    return (
        <div>
            <h3>Categorias Cadastradas</h3>
            <table>
                <tr>
                    <td>id</td>
                    <td>nome</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>teste</td>
                </tr>

            </table>
        </div>
    );

}

export default CategoriaList;
