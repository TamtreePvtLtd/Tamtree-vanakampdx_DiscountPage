export interface IDiscountPage {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  percentageValue?: number; 
  dollarsValue?: number;
}

export interface ILoginFormInputs {
  email: string;
  password: string;
}