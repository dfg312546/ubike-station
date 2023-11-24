import style from "./SearchOutcome.module.css";
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/ContextProvider";

function SearchOutcome(props) {
  const Ctx = useContext(Context);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = Ctx.filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(Ctx.filteredData.length / itemsPerPage);
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredAreaData = props.data.filter((areaData) =>
    Ctx.selectedArea.includes(areaData.sarea)
  );
  useEffect(() => {
    Ctx.setFilteredData(filteredAreaData);
  }, [Ctx.selectedArea]);
  console.log(Ctx.filteredData);

  return (
    <div className={style.SearchOutcomeContainerStyle}>
      <ul className={style.SearchOutcomeStyle}>
        <li className={style.SearchOutcomeHeaderStyle}>
          <span style={{ width: "12%" }}>縣市</span>
          <span style={{ width: "20%" }}>區域</span>
          <span style={{ width: "32%" }}>站點名稱</span>
          <span className={style.ava}>可借車輛</span>
          <span className={style.ava}>可還空位</span>
        </li>
        {props.data
          ? currentData.map((item, index) => (
              <SearchOutcomeList
                sarea={item.sarea}
                sna={item.sna}
                sbi={item.sbi}
                bemp={item.bemp}
                index={index}
              />
            ))
          : null}
      </ul>
      <section className={style.SearchOutcomeListButtonSection}>
        <button
          variant="contained"
          onClick={prevPage}
          disabled={currentPage === 1}
          className={style.SearchOutcomeListButton}
        >
          Pre
        </button>
        <span className={style.SearchOutcomeListPageText}>
          {currentPage} / {totalPages}
        </span>
        <button
          variant="contained"
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={style.SearchOutcomeListButton}
        >
          Next
        </button>
      </section>
    </div>
  );
}

export default SearchOutcome;

export const SearchOutcomeList = (props) => {
  return (
    <li
      className={style.SearchOutcomeListStyle}
      style={{ backgroundColor: props.index % 2 === 1 ? "#F6F6F6" : "white" }}
    >
      <span style={{ width: "12%" }}>台北市</span>
      <span style={{ width: "20%" }}>{props.sarea}</span>
      <span style={{ width: "32%" }}>{props.sna}</span>
      <span className={style.sbibemp}>{props.sbi}</span>
      <span className={style.sbibemp}>{props.bemp}</span>
    </li>
  );
};
