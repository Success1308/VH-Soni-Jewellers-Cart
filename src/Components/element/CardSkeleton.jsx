const CardSkeleton = () => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="h-45 bg-gray-300 mb-2 rounded-md"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-1"></div>
        <div className="h-4 bg-gray-300 rounded mb-1"></div>
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
