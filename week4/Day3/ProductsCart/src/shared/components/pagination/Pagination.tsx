import { useEffect, useState } from "react";
import { usePagination } from "../../context/categoryContext/PaginationContext";
import "./pagination.css";
const Pagination = () => {
  const { setOffsetNumber, setPageNumber, page, offset } = usePagination();
  const [buttonList] = useState<number[]>([1, 2, 3, 4, 5]);
  const [activeButton, setActiveButton] = useState<number | undefined>(undefined);

  const handleOffset = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOffsetNumber(parseInt(e.target.value));
  };

  const handlePage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement

    if (target.tagName === "BUTTON") {
      
      if(target.textContent) {
        setActiveButton(parseInt(target.textContent)) 
        setPageNumber(parseInt(target.textContent));
      }
    }
  };

  const handleArrow = (direction: string) => {
    if (direction === "left") {
      console.log("left");
      console.log(page);
      if (page > 1) {
        setPageNumber(page - 1);
        setActiveButton(page - 1);
      }
    } else {
      console.log("right");
      console.log(page);
      if (page + 1 < 100 / offset) {
        setPageNumber(page + 1);
        setActiveButton(page + 1);
      } else {
        alert("data insufficient");
      }
    }
  };

  useEffect(() => {
    setActiveButton(page);
  }, []);

  return (
    <div className="navigationButtons">
      <div className="pageInfo">
        <i
          className="ri-arrow-left-line"
          id="previous"
          onClick={() => handleArrow("left")}
        ></i>

        <div className="buttonFamily" onClick={(e) => handlePage(e)}>
          {buttonList.map((item) => {
            return (
              <button
                key={item}
                style={{ color: activeButton === item ? "#2771D8" : "" }}
              >
                {item}
              </button>
            );
          })}
        </div>
        <i
          className="ri-arrow-right-line"
          id="next"
          onClick={() => handleArrow("right")}
        ></i>
      </div>
      <div className="offset">
        <select name="offset" onChange={(e) => handleOffset(e)}>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="60">60</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
