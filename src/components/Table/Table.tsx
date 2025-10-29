import type { ReactNode } from 'react'

type TableProps = {
  children: ReactNode
  tableHeader: String[]
  containerClassName?: string
  tableClassName?: string
  headerClassName?: string
}

const Table = ({
  children,
  tableHeader,
  tableClassName,
  headerClassName,
  containerClassName,
}: TableProps) => {
  const Header = tableHeader.map((heading, index) => {
    return (
      <th
        key={index}
        className={`bg-gray-100 py-[13.5px] px-6 text-black text-start text-p-sm-md sticky top-0 z-20 ${headerClassName}`}
      >
        {heading}
      </th>
    )
  })

  return (
    <div
      className={`flex overflow-hidden rounded-t-lg mb-2 relative ${containerClassName}`}
    >
      <div className="overflow-y-auto w-full">
        <table className={`w-full ${tableClassName}`}>
          <thead className="border-b border-gray-200">
            <tr>{Header}</tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
