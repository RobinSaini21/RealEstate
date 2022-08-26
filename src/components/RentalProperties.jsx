import React, { useEffect } from "react";
import Cards from "../Assets/Cards";
import data from "../database/properties.json";
import cities from "../database/cities.json";
import houseType from "../database/houseType.json"
import { useState } from "react";


function RentalProperties() {
  const [properties, setProperties] = useState(data);


  const [fill, setFill] = useState("");
  const filterPrice = (min, max) => {
    const filteredProperties = properties.filter(
      (data) => data.Price > min && data.Price < max
    );
    setProperties(filteredProperties);
  };
  const filterCity = (city) => {
    const filteredCity = properties.filter((data) => data.City === city);
    setProperties(filteredCity);
  };
  const filterHouseType = (house) =>{
    const filterData = data.filter(({HouseType}) => HouseType === house)
    setProperties(filterData)
  }
  const handleSearch = (e) => {
    const {
      target: { value },
    } = e;
    setFill(value);
  };
  const filterData = properties.filter(
    ({ City, Price }) =>
      City.toLowerCase().includes(fill.toLowerCase()) || Price >= parseInt(fill)
  );

  return (
    <div style={{ zIndex: "1" }}>
      <div className="c" style={{ marginTop: "100px" }}>
        <div className="dd">
          <div className="dd-a">
            <span>Price</span>
          </div>
          <input type="checkbox" />
          <div className="dd-c">
            <ul>
              <li>
                <span
                  className="drop-down-menu"
                  onClick={() => filterPrice(500, 2500)}
                >
                  500$ - 2500$
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="dd">
          <div className="dd-a">
            <span>City</span>
          </div>
          <input type="checkbox" />
          <div className="dd-c">
            <ul>
              {cities.map(({ City }, idx) => (
                <li key={idx}>
                  <span
                    className="drop-down-menu"
                    onClick={() => filterCity(City)}
                  >
                    {City}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="dd">
          <div className="dd-a">
            <span>House Types</span>
          </div>
          <input type="checkbox" />
          <div className="dd-c">
            <ul>
              {houseType.map(({ HouseType }, idx) => (
                <li key={idx}>
                  <span
                    className="drop-down-menu"
                    onClick={() => filterHouseType(HouseType)}
                  >
                    {HouseType}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="dd">
          <div className="dd-a">
            <span>Dropdown menu</span>
          </div>
          <input type="checkbox" />
          <div className="dd-c">
            <ul>
              {cities.map(({ City }, idx) => (
                <li key={idx}>
                  <span
                    className="drop-down-menu"
                    onClick={() => filterCity(City)}
                  >
                    {City}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="search-box">
          <input
            style={{ border: "2px solid black" }}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div
        style={{
          zIndex: "-1",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", width: "1300px" }}>
          {filterData.map(
            ({ City, Price, Address, Beds, Bathrooms, Area, id }, idx) => (
              <Cards
                id={id}
                filterData={filterData}
                City={City}
                Price={Price}
                Address={Address}
                Beds={Beds}
                Bathrooms={Bathrooms}
                Area={Area}
                key={idx}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default RentalProperties;
