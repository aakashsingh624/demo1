import { CountryEnum } from "../Enums/country";
import { LaywerTypeEnum } from "../Enums/lawyerType";

export interface IExpertsData {
    userId: string;
    imageUrl: string;
    name: string;
    type: LaywerTypeEnum;
    country: CountryEnum;
    speciality: string[];
    startingPrice: number;
    rating: number;
    numberOfRatings: number;
    numberOfProjects: number;
}
export const expertsData: IExpertsData[] = [
    {
        userId: "testUser1",
        imageUrl: "/img/a.png",
        name: "Lawyer1",
        type: LaywerTypeEnum["Legal Adviser | Criminal Lawyer"],
        country: CountryEnum["United States"],
        speciality: ["Business Law", "Oil"],
        startingPrice: 600,
        rating: 4.9,
        numberOfRatings: 350,
        numberOfProjects: 201,
    },
    {
        userId: "testUser1",
        imageUrl: "/img/b.png",
        name: "Lawyer2",
        type: LaywerTypeEnum["Legal Adviser | Divorce Lawyer"],
        country: CountryEnum["United States"],
        speciality: ["Business Law", "Custody"],
        startingPrice: 400,
        rating: 4.4,
        numberOfRatings: 250,
        numberOfProjects: 261,
    },
    {
        userId: "testUser1",
        imageUrl: "/img/c.png",
        name: "Lawyer3",
        type: LaywerTypeEnum["Criminal Lawyer"],
        country: CountryEnum["United States"],
        speciality: ["Violence", "Theft"],
        startingPrice: 240,
        rating: 4.2,
        numberOfRatings: 216,
        numberOfProjects: 184,
    },
];
