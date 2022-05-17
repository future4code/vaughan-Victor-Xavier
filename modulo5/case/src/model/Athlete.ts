export class Athlete{
    constructor(
    private id: string,
    private competition: string,
    private athlete: string,
    private value: string,
    private unity: string,
    private role: AthleteRole
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.competition
    }

    getEmail(){
        return this.athlete;
    }

    getPassword(){
        return this.value;
    }
    getUnity(){
        return this.unity;
    }

    getRole(){
        return this.role;
    }

    setId(id: string){
        this.id = id;
    }

    setName(competition: string){
        this.competition = competition;
    }

    setEmail(athlete: string){
        this.athlete = athlete;
    }

    setPassword(value: string){
        this.value = value;
    }
    setUnity(unity: string){
        this.unity = unity;
    }

    setRole(role: AthleteRole){
        this.role = role;
    }

   static stringToAthleteRole(input: string): AthleteRole{
        switch (input) {
            case "RUNNER":
              return AthleteRole.RUNNER;
            case "DART":
              return AthleteRole.DART;
            default:
              throw new Error("Invalid user role");
          }
    }

    static toUserModel(athlete: any): Athlete {
        return new Athlete(athlete.id, athlete.competition, athlete.athlete, athlete.value,athlete.unity, athlete.stringToAthleteRole(athlete.role));
      }


}

export interface UserInputDTO{
    email: string;
    password: string;
    name: string;
    role: string;
}

export interface LoginInputDTO{
    email: string;
    password: string;
}

export enum AthleteRole{
    RUNNER = "RUNNER",
    DART = "DART"
}