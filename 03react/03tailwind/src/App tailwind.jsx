import React from "react";

function App() {
  return (
    <div>
      <h1>test</h1>
      {/* font */}
      <div className="text-xs ">text-xs</div>
      <div className="text-sm text-[rgb(100,100,100)]">text-sm</div>
      <div className="text-lg font-bold text-red-500">text-lg bold</div>
      <div className="text-[20px]">text-20px</div>
      <div className="text-xl">text-xl</div>
      <div className="text-2xl">text-2xl</div>

      {/* backgrount */}
      <div className="bg-amber-500">bg-amber-500</div>
      <div className="bg-blue-500 w-20">bg-blue-500 w-20</div>
      <div className="bg-blue-300 w-[300px] h-[300px]">
        bg-blue-300 w-[300px] h-[300px]
      </div>

      {/* padding */}
      <div className="bg-gray-300 w-[400px] h-[400px] py-5 gap-3 border flex flex-row lg:flex-wrap">
        <div className="bg-amber-300 w-1/2 sm:w-1/2 lg:w-full h-[300px] mx-10 p-5">
          inner1
        </div>
        <div className="bg-amber-300 w-1/2 sm:w-1/2 lg:w-full  mx-10 p-5">
          inner2
        </div>
      </div>

      {/* border */}
      <div className="border-3 border-green-400 rounded-2xl mb-5">
        border border-3 border-green-400 rounded-2xl p-5
      </div>

      {/* flex */}
      <div className="flex gap-4 flex-row items-center justify-center">
        <div className="h-10 w-10 border">a </div>
        <div className="h-20 w-10 border flex-1">b </div>
        <div className="h-30 w-10 border flex-1">c </div>
        <div className="h-40 w-10 border">d </div>
      </div>
    </div>
  );
}

export default App;
