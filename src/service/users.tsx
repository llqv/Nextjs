import instance from "./instance";
export interface users
{
     username: string,
     password : string
}

export const registerUser = async (user : users) => {
     const response = await instance.post("api/users", user);
     console.log(response);
     return response.data;
   };
   
   export const loginUser = async (user : users) => {
     const response = await instance.post("api/users", {
       params: {
         username: user.username,
         password: user.password,
       },
     });
     return response.data;
   };