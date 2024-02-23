module.exports = {
  multipleMongooseToObject: (listArray) =>{
    listArray = listArray.map((array) => array.toObject());
    return listArray;
  },
  singleMongooseToObject: (array) => {
    return array = array.toObject();
  },
};
