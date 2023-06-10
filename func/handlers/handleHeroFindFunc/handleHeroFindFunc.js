import func from "@/func";

const handleHeroFindFunc = (heroNameFind) => {
  const promiseFind = func.handler.handleFindHeroPic(heroNameFind);
  const arrayFind = Array.from(promiseFind);
  return arrayFind[0];
};

export default handleHeroFindFunc;
