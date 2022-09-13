import React, { useState } from "react";
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
  const [selectedBtn, setSelectedBtn] = useState(0);

  // handling rank one functionality
  function handleRankOne(id) {
    if (id !== rankTwo && id !== rankThree) {
      setRankOne(id);
      setSelectedBtn(1);
    }

    // switch rank within same dish item
    if (id === rankTwo) {
      setRankTwo(null);
      setRankOne(id);
      setSelectedBtn(2);
    }

    if (id === rankThree) {
      setRankThree(null);
      setRankOne(id);
      setSelectedBtn(3);
    }
  }

  function handleRankTwo(id) {
    if (id !== rankOne && id !== rankThree) {
      setRankTwo(id);
      setSelectedBtn(2);
    }

    // switch rank within same dish item
    if (id === rankOne) {
      setRankOne(null);
      setRankTwo(id);
      setSelectedBtn(1);
    }

    if (id === rankThree) {
      setRankThree(null);
      setRankTwo(id);
      setSelectedBtn(3);
    }
  }

  function handleRankThree(id) {
    if (id !== rankOne && id !== rankTwo) {
      setRankThree(id);
      setSelectedBtn(3);
    }

    // switch rank within same dish item
    if (id === rankOne) {
      setRankOne(null);
      setRankThree(id);
      setSelectedBtn(1);
    }

    if (id === rankTwo) {
      setRankTwo(null);
      setRankThree(id);
      setSelectedBtn(2);
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
        <Button
          isActive={selectedBtn === 1}
          onClick={(id) => handleRankOne(id)}
        >
          1
        </Button>
        <Button
          isActive={selectedBtn === 2}
          onClick={(id) => handleRankTwo(id)}
        >
          2
        </Button>
        <Button
          isActive={selectedBtn === 3}
          onClick={(id) => handleRankThree(id)}
        >
          3
        </Button>
      </div>
    </div>
  );
};

export default Card;
