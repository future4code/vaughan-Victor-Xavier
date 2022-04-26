export enum USER_ROLES{
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}
export type authenticationData = {
    id: string
    role:string
  }

  export type user = {

    id: string,
    email:string,
    password:string,
    role:string,
  }