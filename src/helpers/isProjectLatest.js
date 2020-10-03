import projects from "../data/current";
const isProjectLatest = () => {
  let filteredList = projects.filter((project) => project.latest === true);
  return filteredList;
};
export default isProjectLatest;
