import getID from "../utils/getID.js"

export default  (entry, type) => {
  return {
    _type: type,
    _id: getID(entry.id, type),
    title: entry.venue,
    address_1: entry.address,
    city: entry.city,
    country: entry.country,
    state: entry.stateprovince,
    zip: entry.zip,
  }
}