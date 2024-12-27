const { booking, hotel, image, city } = require('../models');

const getAllBooking = async (hotelId) => {
  const where = hotelId ? { hotelId } : {}
  return await booking.findAll({
    where,    //include anidadas: dentro del modelo hotel incluir a image y city
    include: [{
      model: hotel,
      include: [image, city]
    }]
  });
}

const createBooking = async (body) => {
  return await booking.create(body);
}

const getoneBooking = async (id) => {  //include anidadas: dentro del modelo hotel incluir a image y city
  return await booking.findByPk(id, { include: [{
    model: hotel,
    include: [image, city]
  }]});
}

const putBooking = async (body, id) => {
  return await booking.update(
    body,
    { where: { id }, returning: true }
  );
}

const removeBooking = async (id) => {
  return await booking.destroy({ where: { id } });
}


module.exports = {
  getAllBooking,
  createBooking,
  getoneBooking,
  putBooking,
  removeBooking,
}