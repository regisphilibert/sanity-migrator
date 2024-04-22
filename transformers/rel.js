import getID from "../utils/getID.js"

export default  (id, type) => ({
  _type: 'reference',
  _ref: getID(id, type)
})