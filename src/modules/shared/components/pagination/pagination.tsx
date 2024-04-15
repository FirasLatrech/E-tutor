import React from 'react';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Pagination as ReactPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from './../ui/pagination';
interface PaginationProps {
  currentPage: number;

  hasNextPage: boolean;
  onPageChange: (page: number) => void;
}
const Pagination = ({
  currentPage,

  hasNextPage,
  onPageChange,
}: PaginationProps) => {
  const totalPages = currentPage + (hasNextPage ? 1 : 0);
  const handlePreviousPage = () => {
    onPageChange(currentPage > 1 ? currentPage - 1 : 1);
  };

  const handleNextPage = () => {
    onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages);
  };
  return (
    <ReactPagination>
      <PaginationContent>
        <PaginationItem>
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="flex items-center gap-1 bg-transparent text-1 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <ArrowLeft />
          </Button>
        </PaginationItem>
        {Array.from({ length: totalPages }).map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              isActive={currentPage === index + 1}
              onClick={() => onPageChange(index + 1)}
              href={`courses?page=${currentPage}`}
              className={`${currentPage === index + 1 && 'bg-1/10'}`}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <Button
            onClick={handleNextPage}
            className="flex items-center gap-1 bg-transparent cursor-not-allowed text-1 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={currentPage === totalPages}
          >
            <ArrowRight />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </ReactPagination>
  );
};

export default Pagination;
