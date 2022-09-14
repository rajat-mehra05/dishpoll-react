import React from "react";

const Card = ({
  content,
  selectedBtn,
  handleRankOne,
  handleRankTwo,
  handleRankThree,
}) => {
  return (
    <div className="border-2 border-red-400 w-80 rounded-lg px-2">
      <div className="flex items-center justify-between gap-4 p-4 border-b-2 border-orange-200">
        <div className="w-28 h-38">
          <img
            src={content.image}
            alt={content.dishName}
            className="rounded-full"
            loading="lazy"
          />
        </div>
        <h1 className="text-[#c94815] font-semibold text-xl">
          {content.dishName}
        </h1>
      </div>

      <div className="flex gap-4 p-2 items-center">
        <span className="text-xl"> Vote: </span>
        <button
          className={` ${
            selectedBtn === 1 ? "bg-orange-900" : "bg-amber-600"
          }   text-white py-2 px-4 rounded-lg`}
          onClick={() => handleRankOne(content.id)}
        >
          1
        </button>
        <button
          className={` ${
            selectedBtn === 2 ? "bg-orange-900" : "bg-amber-600"
          }   text-white py-2 px-4 rounded-lg`}
          onClick={() => handleRankTwo(content.id)}
        >
          2
        </button>
        <button
          className={` ${
            selectedBtn === 3 ? "bg-orange-900" : "bg-amber-600"
          }   text-white py-2 px-4 rounded-lg`}
          onClick={() => handleRankThree(content.id)}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default Card;
