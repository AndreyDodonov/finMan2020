const errorHandler = require('../utils/errorHandler');
const Income = require('../Models/Income');
const config = require('config');

module.exports.getAll = async (req, res) => {
    try {
        const income = await Income.find({owner: req.user.userId});
        await res.json(income);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.create = async (req, res) => {
    try {
        const income = await new Income({
            list: req.body.list,
            user: req.user.id
        }).save();
        res.status(200).json(income);
    } catch (e) {
        errorHandler(res, e);
    }
};

module.exports.update = async(req, res) => {
  try {
        // realize later ))
  }  catch (e) {
      errorHandler(res, e)
  }
};
