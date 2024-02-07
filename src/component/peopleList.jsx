import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import PeopleDetail from "./peopleDetail";
import { BiSolidUserDetail } from "react-icons/bi";

function PeopleList({ data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState();

  const handleClick = (event, item) => {
    setSelectedPeople(item);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      {data.length > 0 && (
        <>
          {data.map((item) => (
            <div
              onClick={(event) => handleClick(event, item)}
              className="w-full h-16  mt-4 flex items-center pl-6 pr-2 rounded-[15px] justify-start bg-slate-50 transition-all duration-300 hover:cursor-pointer hover:bg-indigo-50"
              key={item.id.value}
            >
              <Avatar
                sx={{ width: 42, height: 42 }}
                alt={item.name.first + " " + item.name.last}
                src={item.picture.large}
              />
              <p className="text-md ml-4">
                {item.name.first + " " + item.name.last}
              </p>
              <BiSolidUserDetail
                size={21}
                className="ml-auto mr-4 text-slate-400"
              />
            </div>
          ))}
          <PeopleDetail
            selectedPeople={selectedPeople}
            open={open}
            id={id}
            anchorEl={anchorEl}
            handleClose={handleClose}
          />
        </>
      )}
    </>
  );
}

export default PeopleList;
