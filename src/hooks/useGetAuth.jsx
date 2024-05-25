export const useGetAuth = () => {
  const userAuth = JSON.parse(localStorage.getItem("auth"));

  return { userAuth };
};
