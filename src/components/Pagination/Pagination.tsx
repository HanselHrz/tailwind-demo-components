interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  buttonClassName?: string;
  [key: string]: unknown; // Para permitir props adicionales
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
  buttonClassName = "",
  ...props
}: PaginationProps) {
  return (
    <div className={`flex justify-center space-x-2 ${className}`} {...props}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-lg border border-pagination-inactive bg-pagination-inactive hover:bg-pagination-active hover:text-white disabled:opacity-50 ${buttonClassName}`}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-3 py-1 rounded-lg border ${index + 1 === currentPage ? "bg-pagination-active text-white" : "bg-pagination-inactive text-gray-700"} hover:bg-pagination-active hover:text-white ${buttonClassName}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-lg border border-pagination-inactive bg-pagination-inactive hover:bg-pagination-active hover:text-white disabled:opacity-50 ${buttonClassName}`}
      >
        Next
      </button>
    </div>
  );
}
export default Pagination;