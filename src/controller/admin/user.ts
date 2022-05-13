import { RequestHandler } from "express";
import { AddUserService } from "../../services/admin/user";
import { ValidateError } from "../../utils/errorHandler";

export const AddUserController: RequestHandler = async (req, res, next) => {
  try {
    console.log("reached : add user controller");
    
    await AddUserService(req.body);
    res.json({ message: "user created sucessfully" }).status(200);
  } catch (err:any) {
    return next(new ValidateError(err));
  }
};

export const GetUsersController:RequestHandler=async(req,res,next)=>{
  try {
    await res.json({message:"user responded successfully"}).status(200);
  } catch (error) {
    return res.json({message:"something went wrong"}).status(501);
  }
}