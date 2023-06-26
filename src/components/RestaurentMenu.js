import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../../constants";
import Shimmer from "./Shimmer";

const RestaurentMenu = () => {
    const { resId } = useParams()
    const [menuItems, setMenuItems] = useState([])
    const [restaurentMenu,setRestaurentMenu]=useState({})

    useEffect(() => {
        getRestaurentItems();
    },[])

    async function getRestaurentItems() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.5061743&lng=80.6480153&restaurantId=${resId}`);
        const json = await data.json();
        const menuCategories = json.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards;

        menuCategories?.map((category) => {
            if (category?.card?.card?.itemCards && category?.card?.card?.itemCards?.length > 0) {
                console.log("First", category?.card?.card?.itemCards)
                setMenuItems((menuItems) => [...menuItems, category?.card?.card?.itemCards])
            }
            if (category?.card?.card?.categories && category?.card?.card?.categories?.length > 0) {
                category?.card?.card?.categories?.map(category => {
                    console.log("Second", category?.itemCards);
                    setMenuItems([...menuItems, category?.itemCards]);
                })
            }
        });

        console.log(menuItems);
    }
    
    return (restaurentMenu.length===0)?<Shimmer/>:(
        <div>
            <h1>name</h1>
            <img src={IMG_CDN_URL + {resId}} />
            <h4>{restaurentMenu.length}</h4>
        </div>
    );
}

export default RestaurentMenu;