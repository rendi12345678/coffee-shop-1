// src/hooks/useMaps.js
function useMaps() {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const initialLocation = {
    latitude: -7.580784715587559,
    longitude: 112.13238644047685,
  };

  // const pushPin = {
  //   center: {
  //     latitude: initialLocation.latitude,
  //     longitude: initialLocation.longitude,
  //   },
  //   options: {
  //     title: "Rendi Virgantara Setiawan Home",
  //   },
  // };
  //
  // const pushPins = [pushPin];
  //
  // console.log(apiKey); // Ensure this logs your API key
  //
  return { apiKey, initialLocation };
}

export default useMaps;
