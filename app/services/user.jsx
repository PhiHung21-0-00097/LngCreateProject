import { axiosIntanceAuth } from ".";
const getCourse = () => {
  return axiosIntanceAuth.get("/courses/detail");
};
export { getCourse };
