export const getCoordinates = new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(resolve, reject)
})
