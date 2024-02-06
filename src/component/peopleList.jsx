import React from "react";

function PeopleList({ data }) {
  return (
    <React.Fragment>
      {data.length > 0 && (
        <>
          {data.map((item) => (
            <div
              className="w-full h-14 mb-4 flex items-center pl-4 rounded-xl justify-start bg-slate-50 transition-all duration-300 hover:cursor-pointer hover:bg-slate-200"
              key={item.id}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </>
      )}
    </React.Fragment>
  );
}

export default PeopleList;
