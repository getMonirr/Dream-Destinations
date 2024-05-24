export interface IUser {
  name: string;
  email: string;
  role: string;
  id: string;
}

export interface ITrip {
  id: string;
  userId: string;
  destination: string;
  startDate: string;
  endDate: string;
  budget: number;
  activities: string[];
  createdAt: string;
  updatedAt: string;
}
