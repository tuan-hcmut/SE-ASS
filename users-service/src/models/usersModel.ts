import mongoose from "mongoose";
import { Password } from "../services/password";

interface UserAttribute {
  email: string;
  password: string;
  fullName: string;
  photo?: string;
  role?: string;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  fullName: string;
  photo?: string;
  role: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attribute: UserAttribute): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    fullName: {
      type: String,
      require: true,
    },

    password: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      require: true,
      default: "640f3f4a676e2fa7c7bfb3c0/user-default/logo.png",
    },

    role: {
      type: String,
      enum: ["BackOfficer", "Janitor", "Collector", null],
      default: null,
    },

    vehicle: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
    },

    MCPsPoint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MCPs",
    },

    route: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Route",
    },
  },
  {
    toJSON: {
      transform(doc: any, ret: any) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre("save", async function (next) {
  /// rehash if user update password feild
  if (this.isModified("password")) {
    const hasded = await Password.toHash(this.get("password"));
    this.set("password", hasded);
  }

  next();
});

/////// create new method  //////////
userSchema.statics.build = (attribute: UserAttribute) => {
  return new User(attribute);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
