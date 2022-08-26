import React from "react";
import { useAppContext } from "../Context/ContextProvider";
import Cards from "../Assets/Cards";

function Favorite() {
  const [{ fav }, dispatch] = useAppContext();
  console.log("FAV",fav)
  return (
   <div style={{marginTop:"100px"}}>
     <>
      {fav === null ? (
        <h1>You dont have any Favorite</h1>
      ) : (
        <>
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
          {fav.map(
            ({ City, Price, Address, Beds, Bathrooms, Area, id }, idx) => (
              <Cards
                id={id}
                // filterData={filterData}
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
        </>
      )}
    </>
   </div>
  );
}

export default Favorite;
