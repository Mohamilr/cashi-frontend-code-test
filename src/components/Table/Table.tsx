import type { ReactNode } from 'react'
import TablePagination from './TablePagination'

type TableProps = {
  children: ReactNode
  tableHeader: String[]
  containerClassName?: string
  tableClassName?: string
  headerClassName?: string
  currentPage?: number
  totalRecords?: number
  pageSize?: number
  onPageChange?: (page: number) => void
  isPaginated?: boolean
}

const Table = ({
  children,
  tableHeader,
  tableClassName,
  headerClassName,
  containerClassName,
  currentPage,
  totalRecords,
  pageSize,
  onPageChange,
  isPaginated = false,
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
      className={`flex flex-col overflow-hidden rounded-t-lg mb-2 relative ${containerClassName}`}
    >
      <div className="overflow-y-auto w-full">
        <table className={`w-full ${tableClassName}`}>
          <thead className="border-b border-gray-200">
            <tr>{Header}</tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
      {isPaginated && (
        <div className="flex justify-end mt-4">
          <TablePagination
            currentPage={currentPage as number}
            totalRecords={totalRecords as number}
            pageSize={pageSize as number}
            onPageChange={(page) => onPageChange?.(page)}
          />
        </div>
      )}
    </div>
  )
}

export default Table
