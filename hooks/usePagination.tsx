import { useEffect, useState } from 'react';

const usePagination = ({ data, pageSize }: any) => {
  const [filteredData, setFilteredData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  useEffect(() => {
    const dataLength = data.length;

    if (dataLength) {
      setTotalPages(Math.ceil(dataLength / pageSize));
    } else {
      setFilteredData(data);
    }
  }, [pageSize, data]);

  useEffect(() => {
    if (data.length && totalPages > 1) {
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      const filteredContent: any = data.slice(start, end);

      setFilteredData(filteredContent);

      setShowPrev(currentPage > 1);
      setShowNext(currentPage < totalPages);
    } else {
      setShowPrev(false);
      setShowNext(false);
    }
  }, [totalPages, currentPage, data]);

  const handlePrevClick = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return { filteredData, showPrev, showNext, handlePrevClick, handleNextClick };
};

export default usePagination;
