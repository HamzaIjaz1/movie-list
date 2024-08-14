import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const PaginationWrapper = styled.div`
  ${tw`flex gap-[16px] items-center justify-center mt-[120px] mb-[110px]`}
`;
const Button = styled.button`
  ${tw`text-[16px] leading-[24px] font-bold text-white disabled:opacity-30 disabled:cursor-not-allowed`}
`;
const PageNumberWrapper = styled.div`
  ${tw`flex items-center gap-[8px]`}
`;
const PageNumberOtr = styled.button`
  ${tw`w-[32px] h-[32px] rounded-4 bg-background2`}
  ${({ active }) => active && tw`bg-primary`}
`;
const PageNumber = styled.span`
  ${tw`text-[16px] leading-[24px] font-bold text-white`}
`;

function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const handleNextPage = () => onPageChange(currentPage + 1);
    const handlePrevPage = () => onPageChange(currentPage - 1);
    return (
        <PaginationWrapper>
            <Button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                active={currentPage === 1}
            >
                Prev
            </Button>
            <PageNumberWrapper>
                {Array.from({ length: totalPages }, (_, index) => (
                    <PageNumberOtr
                        key={index}
                        onClick={() => onPageChange(index + 1)}
                        active={currentPage === index + 1}
                    >
                        <PageNumber>
                            {index + 1}
                        </PageNumber>
                    </PageNumberOtr>
                ))}
            </PageNumberWrapper>
            <Button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                active={currentPage === totalPages}
            >
                Next
            </Button>
        </PaginationWrapper>
    );
}

export default Pagination;
