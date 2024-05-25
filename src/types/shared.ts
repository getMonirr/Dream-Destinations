export interface IUser {
  name: string;
  email: string;
  role: string;
  id: string;
}

export interface ITrip {
  activities: string[];
  budget: number;
  createdAt: string;
  description: string | null;
  destination: string;
  endDate: string;
  id: string;
  image: string | null;
  photos: string[];
  startDate: string;
  type: string;
  updatedAt: string;
  userId: string;
}

export interface ITravelRequestHistory {
  createdAt: string;
  id: string;
  status: string;
  trip: ITrip;
  tripId: string;
  updatedAt: string;
  userId: string;
}

// trip status
export interface ITripStatus {
  PENDING: string;
  APPROVED: string;
  REJECTED: string;
}
