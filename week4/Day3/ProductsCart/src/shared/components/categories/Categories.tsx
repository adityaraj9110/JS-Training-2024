import { useEffect, useRef, useState } from "react";
import "./categories.css";
import { useCategory } from "../../context/categoryContext/CategoryContext";
import { apiProvider } from "../../utilityClasses/ApiProvider";

const Categories = () => {
  const [categories, setCategories] = useState<string[]>();
  const [selected, setSelected] = useState<null | string>(null);
  const { selectCategory } = useCategory();
  const categoryContainerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);

  const fetchData = async () => {
    const data = await apiProvider.getAllCategories();
    setCategories(data);
  };
  // Try to carefull about types, please do not avoid anything about typescript
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    selectCategory(target.textContent);
    setSelected(target.textContent);
  };

  const handleScroll = (direction: "left" | "right") => {
    const container = categoryContainerRef.current;
    if (container) {
      const scrollAmount = 100;
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
      setScrollPosition(container.scrollLeft);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="categories">
      <i
        className="ri-arrow-left-line previous"
        onClick={() => handleScroll("left")}
      ></i>
      <div className="categoryItem" ref={categoryContainerRef}>
        <div className="category" onClick={(e) => handleClick(e)}>
          <h3 style={{ color: selected === "All Item" ? "#2771D8 " : "" }}>
            All Item
          </h3>
        </div>
        {categories?.map((category) => (
          <div
            className="category"
            key={category}
            onClick={(e) => handleClick(e)}
          >
            <h3 style={{ color: selected === category ? "#2771D8 " : "" }}>
              {category}
            </h3>
          </div>
        ))}
      </div>
      <i
        className="ri-arrow-right-line next"
        onClick={() => handleScroll("right")}
      ></i>
    </div>
  );
};

export default Categories;
