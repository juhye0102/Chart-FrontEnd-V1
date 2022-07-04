import React from "react";
import styled from "styled-components";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { AiOutlineEllipsis } from "react-icons/ai";

import usePagination from "../../hooks/usePaginaion";

const Navigation = styled.nav``;

const Button = styled.button<{ selected?: boolean }>`
  color: ${({ selected }) => (selected ? "#000" : "#9F9F9F")};
  border: 0;
  margin: 0;

  font-size: 16px;
  font-weight: normal;
  background-color: ${({ selected }) => (selected ? "#f4f5f8" : "#f4f5f8")};
  cursor: pointer;
  width: 40px;
  height: 40px;
  &:hover {
    color: #000;
  }
  &:active {
    opacity: 0.8;
  }
`;

const PaginationItem = styled.li`
  padding: 0px 10px 0px 5px;
  display: inline;
  border-left: 1px solid #c0c0c0;
  &:first-child,
  &:nth-child(2),
  &:last-child {
    border-left: none;
  }
`;

const PaginationItemList = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  list-style: none;
`;

interface Props {
  count: number;
  page: number;
  onPageChange: (page: number) => void;
  disabled?: boolean;
  siblingCount?: number;
  boundaryCount?: number;
}

const Pagination: React.FC<Props> = ({
  count,
  page,
  onPageChange,
  disabled,
  siblingCount = 1,
  boundaryCount = 1,
}) => {
  const getLabel = (item: number | string) => {
    if (typeof item === "number") return item;
    else if (item.indexOf("ellipsis") > -1) return <AiOutlineEllipsis />;
    else if (item.indexOf("prev") > -1) return <BsChevronLeft />;
    else if (item.indexOf("next") > -1) return <BsChevronRight />;
    else return item;
  };

  const { items } = usePagination({
    count,
    page,
    onPageChange,
    disabled,
    siblingCount,
    boundaryCount,
  });

  return (
    <Navigation>
      <PaginationItemList>
        {items.map(({ key, disabled, selected, onClick, item }) => (
          <PaginationItem key={key}>
            <Button disabled={disabled} selected={selected} onClick={onClick}>
              {getLabel(item)}
            </Button>
          </PaginationItem>
        ))}
      </PaginationItemList>
    </Navigation>
  );
};

export default Pagination;
