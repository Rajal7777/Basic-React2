import React from 'react';

const Table = ({ items }) => {
    console.log(items)
    return (
        <div className="table-container">
            <h1>table</h1>
            <table>
                <tbody>
                {
                    items.map((item) => {
                       
                      return (
                        <tr key={item.id}>
                            {Object.entries(item).map(([key, value]) => {
                               return <td key={key} >{JSON.stringify(value)}</td>
                                
                            })}
                        </tr>
                      )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default Table;