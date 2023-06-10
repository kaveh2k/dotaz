import Fuse from "fuse.js";
import { heroIconName } from "@/model/heroesPic.model";

const options = {
  threshold: 0.4,
  includeScore: true,
  keys: ["name"],
};

const fuse = new Fuse(heroIconName, options);

export default fuse;

// TODO: put it to func folder
