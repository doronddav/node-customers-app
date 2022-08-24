const cardModel = require("./cardModel");

async function createCardInMongoDB(cardDetails) {
  try {
    const createdCardInDB = await new cardModel(cardDetails).save();

    return createdCardInDB;
  } catch {
    return null;
  }
}

async function getAllCards() {
  try {
    const cards = await cardModel.find();
    return cards;
  } catch {
    return null;
  }
}

async function getCardsByUserId(idOfUSer) {
  try {
    const cardsOfThatUser = await cardModel.find({ userId: idOfUSer });
    return cardsOfThatUser;
  } catch {
    return null;
  }
}

async function getOneCardbyUserIDAndCardID(userId, cardId) {
  try {
    const oneCard = await cardModel.find({
      userId: userId,
      _id: cardId,
    });
    return oneCard;
  } catch {
    return null;
  }
}

async function deleteOneCard(cardid, userid) {
  try {
    return await cardModel.findOneAndDelete({
      _id: cardid,
      userId: userid,
    });
  } catch {
    return null;
  }
}

async function updateOneCard(cardid, userid, cardUpdatedData) {
  try {
    const filter = {
      _id: cardid,
      userId: userid,
    };
    return await cardModel.findOneAndUpdate(filter, cardUpdatedData);
  } catch {
    return null;
  }
}

module.exports = {
  createCardInMongoDB,
  getAllCards,
  getCardsByUserId,
  getOneCardbyUserIDAndCardID,
  deleteOneCard,
  updateOneCard,
};
