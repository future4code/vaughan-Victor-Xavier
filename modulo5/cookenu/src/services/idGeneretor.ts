import { v4 } from "uuid";


export class IdGeneretor {
generateId(): string{
    return v4()
}


}