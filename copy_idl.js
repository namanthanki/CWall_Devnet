import fs from "fs";
import CWall_idl from "./target/idl/CWall.json"
fs.writeFileSync("./app/src/idl.json", JSON.stringify(CWall_idl, null, 2));