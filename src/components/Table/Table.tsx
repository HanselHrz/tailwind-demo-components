interface TableProps {
  headers: string[];
  rows: string[][];
  className?: string;
  headerColor?: string;
  rowOddColor?: string;
  rowEvenColor?: string;
  borderColor?: string;
  [key: string]: unknown; // Para permitir props adicionales
}

export function Table({
  headers,
  rows,
  className = "",
  headerColor = "bg-table-header",
  rowOddColor = "bg-table-rowOdd",
  rowEvenColor = "bg-table-rowEven",
  borderColor = "border-table-border",
  ...props
}: TableProps) {
  return (
    <table className={`w-full border-collapse ${className}`} {...props}>
      <thead className={`${headerColor}`}>
        <tr>
          {headers.map((header) => (
            <th key={header} className={`border-b-2 p-2 text-left font-semibold text-gray-700 ${borderColor}`}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className={`${rowIndex % 2 === 0 ? rowOddColor : rowEvenColor}`}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className={`border-b p-2 text-gray-700 ${borderColor}`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
