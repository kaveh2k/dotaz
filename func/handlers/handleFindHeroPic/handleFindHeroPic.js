import func from "@/func";

const handleFindHeroPic = (q) => {
  return func.fuse.search(q);
};
export default handleFindHeroPic;
