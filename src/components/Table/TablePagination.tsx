import type { FC } from "react"
import { Icon } from "@iconify-icon/react"
import Button from "components/Button/Button"

type PaginationProps = {
  currentPage: number
  totalRecords: number
  pageSize: number
  onPageChange: (page: number) => void
}

const TablePagination: FC<PaginationProps> = ({
  currentPage,
  totalRecords,
  pageSize,
  onPageChange,
}) => {
  const pageCount = Math.ceil(totalRecords / pageSize)

  const visiblePageCount = 10

  let startPage = Math.max(1, currentPage - Math.floor(visiblePageCount / 2))
  let endPage = Math.min(startPage + visiblePageCount - 1, pageCount)

  if (endPage === pageCount) {
    startPage = Math.max(1, endPage - visiblePageCount + 1)
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  )

  return (
    <div className="flex items-center gap-2">
      <Button text="" variant="text"
        disabled={currentPage === 1}
        className={`flex justify-center px-2 py-2! border  border-gray-200`}
        rightIcon={<Icon
          icon="iconoir:nav-arrow-left"
          onClick={() => onPageChange(currentPage - 1)}

        />}
      />

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`flex items-center justify-center py-1 px-3 rounded-md border border-gray-200 ${currentPage === pageNumber ? "bg-main text-white" : "bg-white text-black"
            }`}
          onClick={() => onPageChange(pageNumber)}

        >
          {pageNumber}
        </button>
      ))}

      <Button text="" variant="text"
        disabled={currentPage === pageCount}
        className={`flex justify-center px-2 py-2! border  border-gray-200`}
        rightIcon={<Icon
          icon="iconoir:nav-arrow-right"
          onClick={() => onPageChange(currentPage + 1)}

        />}
      />
    </div>
  )
}

export default TablePagination
