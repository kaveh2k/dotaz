import { heroesName } from "@/model/heroesNameAndID.model";

const handleFindHeroName = (id) => {
  return heroesName.find((element) => element.id === id);
};

export default handleFindHeroName;
