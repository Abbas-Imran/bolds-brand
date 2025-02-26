"use client";
import { useState } from "react";
import { monsterrat } from "@/app/styles/font";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-end items-center space-x-2 sm:space-x-4 text-gray-600 mt-4 sm:mt-6  mr-16 sm:mr-32 text-sm sm:text-base">
      {/* Previous Button */}
      <button
        className={`${monsterrat.className} ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-[#148BE7]"
        } `}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {"< Prev"}
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <span
            key={page}
            className={`cursor-pointer ${
              currentPage === page ? "font-bold text-black" : "text-[#B2B2B2]"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        );
      })}

      {/* Next Button */}
      <button
        className={`${monsterrat.className} ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-[#148BE7]"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {"Next >"}
      </button>
    </div>
  );
}
