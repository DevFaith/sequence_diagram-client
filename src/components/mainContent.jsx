import React from 'react';

const MainContent = () => {
  return (
    <div className="flex flex-grow">
      <textarea className="w-1/2 h-full p-4 bg-white border-r border-gray-300"></textarea>
      <div className="w-1/2 h-full p-4 bg-gray-100">
        <div className="text-center mb-4">
          <h1 className="text-2xl">This is a title</h1>
        </div>
        <div className="flex justify-center items-center h-full">
          <div className="border border-black p-2">Alice</div>
          <div className="border border-black p-2 mx-4">Bob</div>
          <div className="border border-black p-2">Double click to edit text</div>
        </div>
        <div className="flex justify-center items-center h-full mt-4">
          <div className="border border-black p-2">Click and drag to create a request</div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
