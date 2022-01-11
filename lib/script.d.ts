export interface phone {
    name: string;
    number: number;
}
export interface email {
    name: string;
    email: string;
}
interface CountryPhoneNumber {
    code: number;
    contact: number;
}
export interface InternationalPhoneNumbers extends CountryPhoneNumber {
    countryCode: string;
}
export {};
