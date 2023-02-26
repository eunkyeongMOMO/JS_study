declare let Name: string;
declare let birthYear: number;
declare let my_pet: string[];
declare let my_pets: {
    name: string;
    age: number;
};
declare let my_name: string;
declare let my_age: number;
declare let my_plcBrt: string;
declare let favoriteSinger: {
    [key: string]: string;
};
type Project = {
    member: string[];
    days: number;
    started: boolean;
};
declare let project: Project;
declare let age: string | number;
declare let members: (number | string)[];
declare let newMembers: {
    new: boolean | number;
    name: string;
};
declare let age2: string | number;
declare let User1: string;
declare let user_age: undefined | number;
declare let married: boolean;
declare let simba: (string | number | undefined | boolean)[];
declare let shcool: {
    score: (boolean | number)[];
    teacher: string;
    ftiend: string | string[];
};
declare let person: {
    name?: string;
};
type TypeSN = string | number;
declare let time: TypeSN;
declare function my_function(num: number): number;
type Member = [number, boolean, string];
declare let john: Member;
type Today = {
    [key: string]: string;
};
declare class User {
    name: String;
    constructor(name: string);
}
