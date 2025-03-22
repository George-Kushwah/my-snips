import React from "react";
interface ITableProps {
  row: any;
  col: any;
}

export default function Tableprint({ row, col }: ITableProps) {
  return (
    <>
      <table className="table table-bordered table-striped">
        <tbody>
          {[...Array(parseInt(row))].map((_, rows: any) => (
            <tr key={rows}>
              {[...Array(parseInt(col))].map((_, cols: any) => (
                <td key={cols}>
                  {/* {cols % 2 === 0
                    ? row * cols + (rows + 1)
                    : row * (cols + 1) - rows} */}
                  {row * cols + (rows + 1)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
