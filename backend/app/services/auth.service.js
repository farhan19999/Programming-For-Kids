const e = require("express");
const userModels = require("../models/user.model");

exports.login = async (email_address, password) => {
  try {
    const user = await userModels.findUser(email_address, password);
    
    if (user) {
      return {
        success: true,
        userid: user.userid,
      };
    } else {
      return {
        success: false,
        message: "User not found",
      };
      
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};
