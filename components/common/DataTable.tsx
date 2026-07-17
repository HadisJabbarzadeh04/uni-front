interface DataTableProps {
  columns: string[];
  data: any[];
  actions?: (row: any) => React.ReactNode;
}


export default function DataTable({
  columns,
  data = [],
  actions,
}: DataTableProps) {


  return (
    <div
      className="
      bg-white
      dark:bg-slate-900
      rounded-2xl
      overflow-auto
      shadow
      "
    >

      <table className="w-full">

        <thead>
          <tr>

            {columns.map(c => (
              <th
                key={c}
                className="p-4 text-right"
              >
                {c}
              </th>
            ))}


            {actions && (
              <th>
                عملیات
              </th>
            )}

          </tr>
        </thead>


        <tbody>

          {data.map((row, index) => (

            <tr
              key={index}
              className="border-t"
            >

              {columns.map(c => (

                <td
                  key={c}
                  className="p-4"
                >
                  {row[c]}
                </td>

              ))}


              {actions && (

                <td className="p-4">
                  {actions(row)}
                </td>

              )}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}