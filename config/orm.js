//Required
const connection = require("./connection.js");
const util = require('util');

module.exports = orm;

const orm = {

    //Select all the burgers in a db
    selectAll: async tableQuery => {
        try {
            const queryString = `SELECT * FROM ${tableQuery};`;
            const result = await queryAsync(queryString);
            return result;
        } catch (err) {
            console.log('Error - orm.js - selectAll -', err);
        }
    },

    //Insert a burger in to the DB

    insertOne: async (tableQuery, columnName, results) => {
        try {
            const queryString = `INSERT INTO ${tableQuery} (${columnName}) VALUES ('${results}')`;
            const result = await queryAsync(queryString);
            return result;
        } catch (err) {
            console.log('Error orm.js - insertOne -', err);
        }
    },


//Update a burger
    updateOne: async (tableQuery, columnName, colVal, refVal, valUpdate, ) => {
        try {
            const queryString = `UPDATE ${tableQuery} SET ${columnName} = '${valUpdate}' WHERE ${colVal} = '${refVal}'`;
            const result = await queryAsync(queryString);
            return result;
        } catch (err) {
            console.log('Error orm.js - UpdateOne', err);
        }
    },
}

