import React from 'react';

const Table = ({ items }) => {
  console.log(items);
  return (
    <div className="table-container">
      <table border="1">
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              {Object.entries(item).map(([key, value]) => (
                <td key={key}>{JSON.stringify(value)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
