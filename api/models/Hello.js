/**
 * Hello.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  tableName: 'hello',
  primaryKey: 'id',

  attributes: {
    userId: {
      type: 'string',
      required: true,
      unique: true,
      columnName: 'user_id',
    },
    userName: {
      type: 'string',
      columnName: 'user_name',
      defaultsTo: '',
    },
  },

  async beforeCreate(data, next) {
    return await next()
  },

  async afterCreate(data, next) {
    return await next()
  },

};

