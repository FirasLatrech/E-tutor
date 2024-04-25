import { useEffect, useState } from 'react';
import useCourseStore from 'modules/instructor/store/course/courseStore';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from 'modules/shared/components/ui/pagination';

function PaginationSection() {
  const { data, query, setData, isLoading } = useCourseStore((state) => state);
  const [totalPageCount, setTotalPageCount] = useState(0);

  useEffect(() => {
    if (data) {
      // Calculate total page count based on data length and limit per page
      const totalCount = data.length; // You should replace this with the actual total count from your API response
      const limit = query?.limit || 10; // Default limit per page
      const totalPages = Math.ceil(totalCount / limit);
      setTotalPageCount(totalPages);
    }
  }, [data, query]);

  const handlePageChange = (page: number) => {
    setData({ ...query, page });
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageChange((query?.page || 0) - 1)}
          />
        </PaginationItem>
        {[...Array(totalPageCount || 0).keys()].map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              href="#"
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              {pageNumber + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => handlePageChange((query?.page || 0) + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default PaginationSection;
