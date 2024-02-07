import React from "react";

import Avatar from "@mui/material/Avatar";
import Popover from "@mui/material/Popover";
import Chip from "@mui/material/Chip";

import { FaPhoneAlt } from "react-icons/fa";

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
      <div className="w-[35rem] max-sm:w-[30rem] max-md:w-[30rem] flex h-[10.5rem] p-12">
        <div className="w-full flex items-start justify-between">
          <Avatar
            sx={{ width: 70, height: 70 }}
            alt={selectedPeople?.name.first + " " + selectedPeople?.name.last}
            src={selectedPeople?.picture.large}
          />
          <div className="w-full flex flex-col items-start justify-between">
            <p className="ml-4 mt-1 text-lg font-semibold">
              {selectedPeople?.name.first + " " + selectedPeople?.name.last}
            </p>
            <p className="ml-4 text-md mt-3 font-normal text-slate-400">
              {selectedPeople?.email}
            </p>
          </div>
          <div className="flex flex-col">
            <Chip
              className="!bg-indigo-400 !text-white mb-3 -mt-1"
              label={"Age" + " " + selectedPeople?.dob.age}
            />
            <Chip
              onClick={() =>
                (window.location.href = `tel:${selectedPeople?.phone}`)
              }
              className="!bg-green-200 transition-all duration-300 !pl-2 group/item !text-green-700 !cursor-pointer"
              label={"Call"}
              icon={
                <FaPhoneAlt
                  size={15}
                  className="!text-green-700 transition-all duration-300 group-hover/item:rotate-12"
                />
              }
            />
          </div>
        </div>
      </div>
    </Popover>
  );
}

export default PeopleDetail;
