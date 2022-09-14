import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../../api-data/constants";
import Card from "../card/Card";

const DishesContainer = () => {
  const [dishItems, setDishItems] = useState([]);
  const navigate = useNavigate();
  const [isVoting, setIsVoting] = useState(false);
  const [rankOne, setRankOne] = useState(null);
  const [rankTwo, setRankTwo] = useState(null);
  const [rankThree, setRankThree] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBtn, setSelectedBtn] = useState(0);

  useEffect(() => {
    const fetchDishes = async () => {
      const res = await axios.get(`${API_URL}`);
      setDishItems(res.data);
      if (!localStorage.getItem("dishesList")) {
        localStorage.setItem("dishesList", JSON.stringify(res.data)); // itemList will contain list of dishes with corresponding rank
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    fetchDishes();
  }, []);

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

  // update dishes rank accordingly
  function updateDishesRanks(id, value) {
    // creating an array of dishes
    let dishesArr = JSON.parse(localStorage.getItem("dishesList"));
    let newDishAdded = dishesArr.map((item) => {
      if (item.id === id) {
        if (item?.points) {
          item.points += value;
        } else item.points = value;
      } else {
        if (!item?.points) item.points = 0;
      }
      return item;
    });

    // sorting according to ranks (descending order)
    newDishAdded.sort((a, b) => {
      return parseFloat(b.points) - parseFloat(a.points);
    });

    localStorage.setItem("dishesList", JSON.stringify(newDishAdded));
  }

  // handling voting of dishes
  function handleVoting() {
    setIsVoting(true);
    updateDishesRanks(rankOne, 30);
    updateDishesRanks(rankTwo, 20);
    updateDishesRanks(rankThree, 10);

    setTimeout(() => {
      setIsVoting(false);
      navigate("/dishlist/polls");
    }, 1000);
  }

  return (
    <div>
      {rankOne && rankTwo && rankThree ? (
        <div className="flex justify-between gap-4 items-center pt-20 sm:px-12 md:px-40 px-10">
          <button
            className="bg-red-600 hover:bg-red-400 py-2 px-5 text-white rounded"
            onClick={() => navigate("/tabscreen")}
          >
            Go Back
          </button>
          <button
            onClick={handleVoting}
            className="bg-orange-500 hover:bg-orange-700 py-2 px-5 text-white rounded"
          >
            {isVoting ? "Processing" : "Vote"}
          </button>
        </div>
      ) : (
        <div className="flex justify-between gap-4 items-center pt-20 sm:px-12 md:px-40 px-10">
          <span className="py-2 px-5 text-orange-500 text-xl font-semibold">
            Select ranks from below dishes
          </span>
          <button
            className="bg-red-600 hover:bg-red-400 py-2 px-5 text-white rounded"
            onClick={() => navigate("/tabscreen")}
          >
            Go Back
          </button>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-semibold text-teal-800 py-10">
            Loading Dishes...
          </h1>
        </div>
      ) : (
        <div className="flex flex-wrap gap-8 justify-center items-center min-h-screen py-20">
          {dishItems.map((item) => (
            <Card
              content={item}
              key={item.id}
              selectedBtn={selectedBtn}
              handleRankOne={handleRankOne}
              handleRankTwo={handleRankTwo}
              handleRankThree={handleRankThree}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DishesContainer;
