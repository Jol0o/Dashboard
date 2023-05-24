function TopCards() {
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-5">
      <div className="flex justify-between w-full col-span-1 p-4 rounded-lg bg-gray-400/50 lg:col-span-2">
        <div>
          <h1 className="text-[24px] font-bold">$7,846</h1>
          <p className="text-sm font-medium text-[#D8E9A8]">Daily Revenue</p>
        </div>
        <div className="flex items-center h-full px-1 bg-[#4E9F3D] rounded-md">
          <p>+18%</p>
        </div>
      </div>
      <div className="flex justify-between w-full col-span-1 p-4 rounded-lg bg-gray-400/50 lg:col-span-2">
        <div>
          <h1 className="text-[24px] font-bold">$1,437,876</h1>
          <p className="text-sm font-medium text-[#D8E9A8]">YTD Revenue</p>
        </div>
        <div className="flex items-center h-full px-1 bg-[#4E9F3D] rounded-md">
          <p>+11%</p>
        </div>
      </div>
      <div className="flex justify-between w-full p-4 rounded-lg bg-gray-400/50">
        <div>
          <h1 className="text-[24px] font-bold">11,437</h1>
          <p className="text-sm font-medium text-[#D8E9A8]">Customers</p>
        </div>
        <div className="flex items-center h-full px-1 bg-[#4E9F3D] rounded-md">
          <p>+17%</p>
        </div>
      </div>
    </div>
  );
}

export default TopCards;
