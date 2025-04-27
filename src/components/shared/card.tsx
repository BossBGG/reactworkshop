import React from "react";
import { books } from "../../mockdata/data";
import { url } from "inspector";

export function CardComponent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {books.map((book, index) => (
        <div
          key={index}
          className="w-sm h-3xl bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src={'https://ae01.alicdn.com/kf/Ue0417537458348a5b7ff8de0bf2d206bB.jpg_640x640q90.jpg'}
            alt={`ปกหนังสือ: ${book.title}`}
          />
          <div className="p-5">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-300">
              ผู้แต่ง: {book.author}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-300">
              ปีที่พิมพ์: {book.year}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
