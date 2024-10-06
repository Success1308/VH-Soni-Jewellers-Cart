import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import { FiFilter, FiArrowUp, FiArrowDown } from "react-icons/fi";

const CardLayout = ({ items, title }) => {
  const [filterColor, setFilterColor] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isColorDropdownOpen, setIsColorDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const colorDropdownRef = useRef(null);
  const sortDropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        colorDropdownRef.current &&
        !colorDropdownRef.current.contains(event.target)
      ) {
        setIsColorDropdownOpen(false);
      }
      if (
        sortDropdownRef.current &&
        !sortDropdownRef.current.contains(event.target)
      ) {
        setIsSortDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter and sort data
  const filteredData = items.filter(
    (item) => filterColor === "All" || item.color === filterColor
  );

  const sortedData = [...filteredData].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  // Function to toggle dropdowns and ensure only one is open
  const toggleColorDropdown = () => {
    setIsColorDropdownOpen((prev) => !prev);
    if (isSortDropdownOpen) setIsSortDropdownOpen(false);
  };

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen((prev) => !prev);
    if (isColorDropdownOpen) setIsColorDropdownOpen(false);
  };

  return (
    <div className="p-4">
      {/* Section Heading with Filter and Sort Options */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        {/* Title */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center sm:text-left mb-2 sm:mb-0 bg-gradient-to-r from-yellow-800 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          {title}
        </p>

        {/* Container for Filter and Sort Options */}
        <div className="flex items-center space-x-4">
          {/* Color Filter */}
          <div className="relative" ref={colorDropdownRef}>
            <label
              className="cursor-pointer flex items-center"
              onClick={toggleColorDropdown}
            >
              <FiFilter className="text-2xl mr-1" />
              <span className="hidden sm:inline">Filter</span>
            </label>
            {isColorDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 border border-gray-300 bg-white rounded shadow-md z-10 w-32 sm:w-40 max-h-48 overflow-y-auto"
                style={{ right: 0, left: "auto" }}
              >
                <div className="flex flex-col">
                  {["All", "Gold", "Silver", "Rose Gold"].map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        setFilterColor(color);
                        setIsColorDropdownOpen(false);
                      }}
                      className="p-2 hover:bg-gray-100 text-left"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sort Order */}
          <div className="relative" ref={sortDropdownRef}>
            <label
              className="cursor-pointer flex items-center"
              onClick={toggleSortDropdown}
            >
              {sortOrder === "asc" ? (
                <FiArrowUp className="text-2xl mr-1" />
              ) : (
                <FiArrowDown className="text-2xl mr-1" />
              )}
              <span className="hidden sm:inline">Sort</span>
            </label>
            {isSortDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 border border-gray-300 bg-white rounded shadow-md z-10 w-32 sm:w-40"
                style={{ right: 0, left: "auto" }}
              >
                <div className="flex flex-col">
                  <button
                    onClick={() => {
                      setSortOrder("asc");
                      setIsSortDropdownOpen(false);
                    }}
                    className="p-2 hover:bg-gray-100 text-left"
                  >
                    Low to High
                  </button>
                  <button
                    onClick={() => {
                      setSortOrder("desc");
                      setIsSortDropdownOpen(false);
                    }}
                    className="p-2 hover:bg-gray-100 text-left"
                  >
                    High to Low
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Jewelry Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mx-2 sm:mx-4">
        {sortedData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
