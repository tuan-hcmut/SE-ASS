import { DoneCallback } from "passport";
import { User } from "../models/usersModel";

const passport = require("passport");

interface UserAtr {
  id: string;
}
//// sau khi authentication, user.id se dc luu trong session
passport.serializeUser((user: UserAtr, done: DoneCallback) => {
  done(null, user);
});

///// lay user.id dc luu trong session roi get full thong tin user
passport.deserializeUser((user: UserAtr, done: DoneCallback) => {
  User.findById(user.id).then((userInfor) => {
    done(null, userInfor);
  });
});
