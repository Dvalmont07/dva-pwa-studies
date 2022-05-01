import { CarBrand } from "./carBrand";

export interface CarInsurance{
    carBrand:CarBrand;
    carModel:string;
    ownerName:string;
    carPlate:string;
}