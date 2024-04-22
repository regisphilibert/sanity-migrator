export default (id) => {
  const types = {
    taxonomyGenre: [
      363, //Fiction
      50, //Non Fiction
    ],
    taxonomySubgenre: [
      1253, // Biographical Fiction
      236, // Biographies
      384, // Novels
      1248, // Memoirs
      200, // Essays
      1251 // Anthologies
    ],
    taxonomySeries: [
      1210, // The Art of the Essay Series
      1222, // American Novels Series
      1208, // Bellevue Lterary Press Pathographies Series
    ]
  }
  let termType = 'taxonomyBookTag'
  for (var taxonomyType in types) {
    if(types[taxonomyType].includes(id)) {
      termType = taxonomyType
    }
  }
  return termType
}