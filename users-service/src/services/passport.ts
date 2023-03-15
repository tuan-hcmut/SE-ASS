import { DoneCallback } from "passport";
import { VerifyCallback, Profile } from "passport-google-oauth20";
import jwt from "jsonwebtoken";

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

import { User } from "../models/usersModel";

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

passport.use(
  new GoogleStrategy(
    {
      callbackURL: "/api/users/auth/google/callback",
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      proxy: true,
    },
    async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
      try {
        const email = profile.emails ? profile.emails[0].value : undefined;
        const existingUser = await User.findOne({ email: email });

        if (existingUser) {
          return done(null, existingUser);
        }
        const user = await User.build({
          email: email!,
          password: profile.id,
          fullName: profile.displayName,
        }).save();

        //// authentication success
        done(undefined, user);
      } catch (err: any) {
        done(err, undefined);
      }
    }
  )
);
