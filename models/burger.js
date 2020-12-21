//orm Import
const orm = require("../config/orm.js");

//ORM invoke
const burger = {
    selectAll: async () => await orm.selectAll("burgers"),
    newBurger: async (results) => await orm.insertOne("burgers", "burger_name", results),
    updateBurger: async (valUpdate, refVal) => await orm.updateOne("burgers", "devoured", valUpdate, "id", refVal, )
};

module.exports = burger;