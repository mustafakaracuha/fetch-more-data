import React from "react";

import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Chip from "@mui/material/Chip";

function PeopleDetail({ selectedPeople, open, id, anchorEl, handleClose }) {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      onClose={handleClose}
    >
      <div className="w-[35rem] flex h-[20rem] p-12">
        <div className="w-full flex items-start justify-between">
          <Avatar
            sx={{ width: 70, height: 70 }}
            alt={selectedPeople?.name.first + " " + selectedPeople?.name.last}
            src={selectedPeople?.picture.large}
          />
          <div className="w-full flex flex-col items-start justify-between">
            <p className="ml-4 mt-1 text-lg font-semibold">
              {" "}
              {selectedPeople?.name.first + " " + selectedPeople?.name.last}
            </p>
            <p className="ml-4 text-md mt-3 font-normal text-slate-400">
              {" "}
              {selectedPeople?.email}
            </p>
          </div>
          <Chip className="!bg-blue-500 !text-white" label={"Age" + " " + selectedPeople?.dob.age} />
        </div>
      </div>
    </Popover>
  );
}

export default PeopleDetail;
