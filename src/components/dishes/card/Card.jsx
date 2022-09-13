import React from "react";
import Button from "../Button";

const Card = ({
  content,
  rankOne,
  rankTwo,
  rankThree,
  setRankOne,
  setRankTwo,
  setRankThree,
}) => {
  // handling rank one functionality
  function handleRankOne(id) {
    if (id !== rankTwo && id !== rankThree) {
      setRankOne(id);
    }

    // switch rank within same dish item
    if (id === rankTwo) {
      setRankTwo(null);
      setRankOne(id);
    }

    if (id === rankThree) {
      setRankThree(null);
      setRankOne(id);
    }
  }

  function handleRankTwo(id) {
    if (id !== rankOne && id !== rankThree) {
      setRankTwo(id);
    }

    // switch rank within same dish item
    if (id === rankOne) {
      setRankOne(null);
      setRankTwo(id);
    }

    if (id === rankThree) {
      setRankThree(null);
      setRankTwo(id);
    }
  }

  function handleRankThree(id) {
    if (id !== rankOne && id !== rankTwo) {
      setRankThree(id);
    }

    // switch rank within same dish item
    if (id === rankOne) {
      setRankOne(null);
      setRankThree(id);
    }

    if (id === rankTwo) {
      setRankTwo(null);
      setRankThree(id);
    }
  }

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
        <Button onClick={(id) => handleRankOne(id)} isActive>
          1
        </Button>
        <Button onClick={(id) => handleRankTwo(id)} isActive>
          2
        </Button>
        <Button onClick={(id) => handleRankThree(id)} isActive>
          3
        </Button>
      </div>
    </div>
  );
};

export default Card;
