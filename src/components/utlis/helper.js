export function filterData(searchTxt, restaurantItem) {
    if (searchTxt === "") {
      const result = allrestaurantItem;
      return result;
    }
    const result = restaurantItem.filter((e) => e?.data?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase()));
    return result;
}



export  const [filteredrestaurantItem, setfilteredRestaurantItem] = useState([]);
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
