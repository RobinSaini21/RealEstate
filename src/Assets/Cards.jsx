import React from "react";
import { useAppContext } from "../Context/ContextProvider";
import {useLocation} from "react-router-dom"

let arr = []
function Cards({ City, Price, Address, Beds, Bathrooms, Area, key,filterData,id }) {
  const [{ fav }, dispatch] = useAppContext();
const { pathname } = useLocation()
const addToFav = (id_) =>{

const fav = filterData.filter((data) => data.id === id_)
arr.push(...fav)


dispatch({type:"ADD_FAV" ,payload:arr})
}
console.log(pathname)
  return (
    <>
      <div
        class="img-card iCard-style1"
        style={{ margin: "10px", objectFit: "cover" }}
        key={Area + Bathrooms + Beds}
      >
        <div class="card-content">
          <div class="card-image">
            <span class="card-title">{City}</span>
            <img src="https://www.dropbox.com/s/u330jm6faybxrvb/fog-3461451_640.jpg?raw=1" />
          </div>

          <div class="card-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Image by{" "}
              <a
                href="https://pixabay.com/users/Hans-2/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451"
                style={{ color: "#795548" }}
              >
                Hans Braxmeier
              </a>{" "}
              from{" "}
              <a
                href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3461451"
                style={{ color: "#795548" }}
              >
                Pixabay
              </a>
            </p>
            <div>
             {pathname === "/rent"?  <button onClick={() =>addToFav(id)}>Add to Fav</button> : null}
            </div>
          </div>
        </div>

        <div class="card-link">
          <a href="#" title="Read Full">
            <span>{Price}$</span>
          </a>
        </div>
      </div>
    </>
  );
}
// flex contain
export default Cards;
