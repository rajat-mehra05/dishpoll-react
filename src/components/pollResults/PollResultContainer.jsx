import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PollResultContainer = () => {
  const [dishProducts, setDishProdcuts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("dishesList")) {
      let dishesArr = JSON.parse(localStorage.getItem("dishesList"));
      setDishProdcuts(dishesArr);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  }, []);

  return (
    <div>
      <div className="flex justify-between gap-4 items-center pt-20 sm:px-12 md:px-40 px-10">
        <button
          className="bg-red-600 hover:bg-red-400 py-2 px-5 text-white rounded"
          onClick={() => navigate("/dishlist")}
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-orange-700 py-2 px-5 text-white rounded"
        >
          Logout
        </button>
      </div>
      <div className="flex flex-col gap-4 text-center py-8 sm:px-40">
        <h1 className="text-[#e25a24] text-xl py-2 font-semibold border-b-2 border-b-orange-200">
          List of dishes (rank wise)
        </h1>

        {isLoading ? (
          <div className="flex justify-center items-center">
            <h1 className="text-2xl font-semibold text-teal-800 py-10">
              Loading poll results ...
            </h1>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <table className="border-separate border border-orange-700">
              <thead>
                <tr>
                  <th className="border border-orange-600 p-2">Rank</th>
                  <th className="border border-orange-600 p-2">Dish Name</th>
                  <th className="border border-orange-600 p-2">Dish Points</th>
                </tr>
              </thead>
              <tbody>
                {dishProducts !== null &&
                  dishProducts.map((item, index) => {
                    if (index >= 0) {
                      return (
                        <tr key={item.id}>
                          <td className="border border-orange-300 p-2">
                            {index + 1}
                          </td>
                          <td className="border border-orange-300 p-2">
                            {item.dishName}
                          </td>
                          <td className="border border-orange-300 p-2">
                            {item.points}
                          </td>
                        </tr>
                      );
                    }

                    return null;
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PollResultContainer;
