import React, { useContext } from "react";
import { FaSpinner } from "react-icons/fa";
import { useStarWars } from "../Context/StarWarsContext";
import { Link } from "react-router-dom";

function List() {
  const { list, loading, searchStarships } = useStarWars();
  console.log(list);
  console.log(searchStarships);
  // inputa yazdığımız değeri almak için
  const filtered = list.filter((starShip) => {
    return starShip.name.toLowerCase().includes(searchStarships.toLowerCase());
  });
  console.log(filtered);
  return (
    <div className="myForm">
      {!loading ? (
        filtered ? (
          filtered.map((starships, index) => (
            <div className="mainCard" key={index}>
              <div className="myCard">
                <div className="img"></div>
                <h5>
                  {/* Aracın isminin gelmesi için; */}
                  {starships.name}
                </h5>
                <p>
                  {/* Aracın modelinin gelmesi için;  */}
                  Model: {starships.model}
                </p>
                <p>
                  {/* Aracın hiper sürücü derecelendirmesi gelmesi için; */}
                  Hyperdrive Rating:{starships.hyperdrive_rating}
                  <button className="detailBtn">
                    <Link to={`/detail/${starships.name}`}>Detail</Link>
                  </button>
                </p>
              </div>
            </div>
          ))
        ) : (
          <h1>Böyle bir araç yok</h1>
        )
      ) : (
        <div className="loading">
          <FaSpinner className="animate-spin mr-2 text-5xl" /> Loading...
        </div>
      )}
    </div>
  );
}

export default List;
