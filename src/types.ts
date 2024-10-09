interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
}

interface Bank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban?: string;  // Optional field if it's present in other cases
}

interface Company {
  department: string;
  name: string;
  title: string;
}

interface Crypto {
  coin: string;
  wallet: string;
  network: string;
}

interface Hair {
  color: string;
  type: string;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  address: Address;
  bank: Bank;
  birthDate: string;
  bloodGroup: string;
  company: Company;
  crypto: Crypto;
  ein: string;
  email: string;
  eyeColor: string;
  hair: Hair;
  height: number;
  image: string;
  ip: string;
  macAddress: string;
  password: string;
  phone: string;
  role: string;
  ssn: string;
  university: string;
  userAgent: string;
  username: string;
  weight: number;
}

interface NewUser {
  id?: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}


export { User, NewUser };
