import { apiRequest } from "../services/http-service";

export default function useAPI() {
  return {
    registerUser: (userData) =>
      apiRequest({ method: "POST", url: "/users/register", data: userData }),

    loginUser: (userData) =>
      apiRequest({ method: "POST", url: "/users/login", data: userData }),

    logoutUser: () =>
      apiRequest({ method: "GET", url: "/users/logout" }),
 
  };
}
