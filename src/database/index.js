import { Database } from 'react-native-database';
import Realm from 'realm';

class School { }

class User { }
User.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: 'int',
    username: 'string',
    auth_token: 'string',
    break_time: { type: 'int', default: 0 },
    isBreakStop: { type: 'bool', default: true },
    email: 'string',
    name: 'string',
    login_time: 'string?',
    is_trainee: 'bool',
    status: 'bool',
  },
};

const schema = { schema: [ User], schemaVersion: 1 };
const database = new Database(schema);
export const realm = new Realm(schema);

export const saveTODB = (className, props, callback) => {
  
  try {
    database.write(() => { database.create(className, props); });
    callback(true, 'saved sucessfuly');
  } catch (error) {
    //  debugger
    callback(false, JSON.stringify(error));
  }
};

export const fetchDataWithIdFromDB = (className, query, callback) => {
  // debugger;
  try {
    callback(true, database.objects(className).filtered(query));
  } catch (error) {
    // debugger;
    callback(false, []);
  }
};

export const fetchDataWithIdWithANDFromDB = (className, query, andQuery, callback) => {
  // debugger;
  try {
    callback(true, database.objects(className).filtered(query).filtered(andQuery));
  } catch (error) {
    // debugger;
    callback(false, []);
  }
};

export const fetchListFromDB = (className, callback) => {
  try {
    callback(true, database.objects(className));
  } catch (error) {
    callback(false, []);
  }
};

export const deleteFromDB = (className, props, callback) => {
  try {
    database.delete(className, props);
    callback(true);
  } catch (error) {
    //  debugger;
    callback(false);
  }
};

