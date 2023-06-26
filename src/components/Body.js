import { pizzaHotelList } from "../../constants";
import PizzaCard from "./PizzaCard";
import Shimmer from "./Shimmer";
import { useState,useEffect} from "react";
import useIsOnline from "./utlis/useIsOnline";
const Body = () => {
  const [filteredrestaurantItem, setfilteredRestaurantItem] = useState([]);
  const [allrestaurantItem, setallRestaurantItem] = useState([]);
  const [searchTxt, setSearchTxt] = useState();

  useEffect(() => {
    getlists();
  }, [])

  function filterData(searchTxt, restaurantItem) {
    if (searchTxt === "") {
      const result = allrestaurantItem;
      return result;
    }
    const result = restaurantItem.filter((e) => e?.data?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase()));
    return result;
  }
  
  async function getlists() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    setallRestaurantItem(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurantItem(json?.data?.cards[2]?.data?.data?.cards);
  }

  
  const isOnline = useIsOnline();
  if (!isOnline) {
    return <h1>🔴Offline please check your connection...</h1>;
  }
  if (!allrestaurantItem) return null;


  return (allrestaurantItem?.length===0)?<Shimmer/>:(
    <>
      <div className="search-container">
        <input
          type="text"
          id="src-field"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e?.target?.value)
          }}
          />
        <button className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt ,allrestaurantItem);
            setfilteredRestaurantItem(data);
            
          }
        }
        >Search</button>
      </div>

    <div className="main-container">
        { 
          filteredrestaurantItem.length === 0 ? <h1>Data not found</h1>:filteredrestaurantItem.map((item) => (
              <PizzaCard {...item.data}  key={item?.data?.id}/>
            )
      )}
      </div>
      </>
  );
}

export default Body;