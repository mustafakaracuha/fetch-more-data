import { useState, useEffect, useRef } from "react";
import axios from "axios";

import { CgSpinner } from "react-icons/cg";
import { FiPlusCircle } from "react-icons/fi";

import PeopleList from "./component/peopleList";
import { Button } from "@mui/material";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [spinnerIsVisible, setSpinnerIsVisible] = useState(false);
  const [isDataEnd, setIsDataEnd] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const endPoint = `https://swapi.dev/api/people/?page=${page}`;

  const fetchData = async () => {
    setSpinnerIsVisible(true);
    try {
      const response = await axios.get(endPoint);
      const { results } = response.data;

      if (response.status === 200) {
        setPage(page + 1);
        setData([...data].concat(results));
      }

      setTimeout(() => {
        if (contentRef.current) {
          console.log(contentRef);
          contentRef.current.scrollTo({
            top: contentRef.current.scrollHeight,
            behavior: "smooth",
          });
        }
      }, 300);
    } catch (e) {
      console.log(e);
      setIsDataEnd(true);
    }
    setSpinnerIsVisible(false);
  };

  return (
    <div className="w-full h-screen bg-slate-100 overflow-auto">
      <div className="max-w-md h-[49rem] mt-10 mx-auto pt-12 px-10 rounded-[20px] bg-white shadow-xl shadow-slate-300 overflow-auto">
        <h1 className="font-black text-xl bg-white mb-6 flex items-center justify-between">
          Fetch more data one click{" "}
          {data.length > 0 && (
            <span className="text-[1.2rem] text-slate-400 font-semibold">{data.length}</span>
          )}
        </h1>
        <div ref={contentRef} className="w-full h-[35rem] overflow-auto">
          {data.length > 0 ? (
            <PeopleList data={data} />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <CgSpinner size={40} className="animate-spin text-blue-600 " />
            </div>
          )}
        </div>
        {spinnerIsVisible && data.length > 0 && (
          <Button
            disabled
            className="!bg-blue-100 !w-full !text-blue-700 !mt-6 !mb-10 !rounded-[10px] !p-3"
            endIcon={<CgSpinner size={20} className="animate-spin" />}
          >
            Loading
          </Button>
        )}
        {!isDataEnd ? (
          !spinnerIsVisible && (
            <Button
              onClick={fetchData}
              className="!w-full !bg-yellow-100 !text-yellow-800 !mt-6 !mb-10 !rounded-[10px] !p-3"
              endIcon={<FiPlusCircle size={20} />}
            >
              Load More
            </Button>
          )
        ) : (
          <p className="text-center flex items-center justify-center text-red-600 h-14 rounded-xl mt-10 mb-10 bg-red-50">
            No More Data
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
