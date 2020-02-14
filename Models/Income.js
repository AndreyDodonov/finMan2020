const {Schema, model, Types} = require('mongoose');

/**
 * @description
 *  list - массив с доходами
 *  title - название
 *  sum - сумма
 *  date - дата
 *  owner - привязка к юзеру
 * @type {module:mongoose.Schema<any>}
 */
const schema = new Schema ({
    list: [
        {
            title: { type: String, require: true},
            sum: {type: Number, default: 0},
            category: {type: String},
            date: {type: Date, default: Date.now}
        }
    ],
    owner: {type: Types.ObjectId, ref: 'User'}
});

module.exports = model('Stats', schema);
