import { useState, useRef, useEffect } from "react";
import Card from "./Card";
import SkeletonCard from "./CardSkeleton";
import { FiFilter, FiArrowUp, FiArrowDown } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const CardLayout = ({ items, title, loading, onAdd }) => {
  const [filterColor, setFilterColor] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isColorDropdownOpen, setIsColorDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const colorDropdownRef = useRef(null);
  const sortDropdownRef = useRef(null);

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

  const filteredData = items.filter(
    (item) => filterColor === "All" || item.color === filterColor
  );

  const sortedData = [...filteredData].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  const toggleColorDropdown = () => {
    setIsColorDropdownOpen((prev) => !prev);
    if (isSortDropdownOpen) setIsSortDropdownOpen(false);
  };

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen((prev) => !prev);
    if (isColorDropdownOpen) setIsColorDropdownOpen(false);
  };

  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-4 bg-white rounded-md shadow-md pb-4 px-6">
        <div className="flex-grow text-center">
          <p className="text-xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-800 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            {title}
          </p>
        </div>

        {/* Filter and Sort Options */}
        <div className="flex items-center space-x-4">
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
                className="absolute top-full left-0 mt-2 border border-gray-300 bg-white rounded shadow-md z-10 w-32 sm:w-40"
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
      <div className="mx-12 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
        {loading
          ? Array.from({ length: 9 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : sortedData.map((item) => (
              <NavLink key={item.id} to={`/product/${item.id}`}>
                <Card item={item} loading={loading} onAdd={onAdd} />
              </NavLink>
            ))}
      </div>
    </div>
  );
};

export default CardLayout;
