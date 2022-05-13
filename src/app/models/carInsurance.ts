import { CarBrand } from "./carBrand";

export class CarInsurance {
    id: string = "";
    carBrand: CarBrand = new CarBrand();
    carModel: string = "";
    carOwnerName: string = "";
    carPlate: string = "";
}