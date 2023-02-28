import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

////// convert callback into promise base
const scryptAsync = promisify(scrypt);

export class Password {
  // static mean that we can asscess without create new instance exp: Password.toHash()
  static async toHash(password: string) {
    const salt = randomBytes(8).toString("hex");
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buf.toString("hex")}.${salt}`;
  }
  static async comparePassword(password: string, currentPassword: string) {
    const [passwordHashed, salt] = password.split(".");
    const buf = (await scryptAsync(currentPassword, salt, 64)) as Buffer;

    return passwordHashed === buf.toString("hex");
  }
}
