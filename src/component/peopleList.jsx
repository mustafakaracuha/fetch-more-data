import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import PeopleDetail from "./peopleDetail";

function PeopleList({ data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState();

  const handleClick = (event, item) => {
    setSelectedPeople(item)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <React.Fragment>
      {data.length > 0 && (
        <>
          {data.map((item) => (
            <div
              onClick={(event)=> handleClick(event, item)}
              className="w-full h-16  mt-4 flex items-center pl-4 rounded-xl justify-start bg-slate-50 transition-all duration-300 hover:cursor-pointer hover:bg-blue-50"
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
    </React.Fragment>
  );
}

export default PeopleList;
