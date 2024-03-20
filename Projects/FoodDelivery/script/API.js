const dataShow = document.querySelector("#dataShow");

const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.595578591654718&lng=77.33441691845655&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
const API_DATA = {
  restaurants: [],
  avgRatingString: "",
  cloudinaryImageId: "",
  costForTwo: "",
  cuisines: [],
  id: "",
  sla: {
    deliveryTime: 0,
    lastMileTravel: 0,
    slaString: "",
  },
  name: "",
  areaName: "",
};

window.addEventListener("load", () => {
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let COMMON_URL =
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      API_DATA.restaurants.push(COMMON_URL);
      console.log(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      API_DATA.restaurants = COMMON_URL.map((restaurant) => ({
        avgRatingString: restaurant.info.avgRatingString,
        cloudinaryImageId: restaurant.info.cloudinaryImageId,
        costForTwo: restaurant.info.costForTwo,
        cuisines: restaurant.info.cuisines,
        id: restaurant.info.id,
        name: restaurant.info.name,
        areaName: restaurant.info.areaName,
        sla: {
          deliveryTime: restaurant.info.sla?.deliveryTime || 0,
          lastMileTravel: restaurant.info.sla?.lastMileTravel || 0,
          slaString: restaurant.info.sla?.slaString || 0,
        },
      }));
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});

dataShow.addEventListener("click", () => {
  API_DATA.restaurants.map((ele) => console.log(ele));
});

// export default API_DATA;
