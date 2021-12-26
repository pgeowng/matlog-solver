export const TableResult = ({
  P11 = '',
  P12 = '',
  P21 = '',
  P22 = '',
  result = [[]],
}) => {
  return (
    <table className="App-table">
      <thead>
        <tr>
          <th>x1</th>
          <th>x2</th>
          <th>x3</th>
          <th>{P11}</th>
          <th>{P12}</th>
          <th>Ф1</th>
          <th>{P21}</th>
          <th>{P22}</th>
          <th>Ф2</th>
        </tr>
      </thead>
      <tbody>
        {result.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{Number(cell)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
