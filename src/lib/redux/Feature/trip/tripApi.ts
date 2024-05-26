import baseApi from "../../API/baseApi";
import { tags } from "../../API/tag";

const tripApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all trips
    getTrip: build.query({
      query: ({
        destination,
        startDates,
        endDates,
        searchTerm,
        limit,
        page,
        type,
      }) => {
        const params = new URLSearchParams();

        if (destination) {
          params.append("destination", destination);
        }
        if (startDates) {
          params.append("startDate", startDates);
        }
        if (endDates) {
          params.append("endDate", endDates);
        }
        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        if (limit) {
          params.append("limit", limit);
        }
        if (page) {
          params.append("page", page);
        }
        if (type) {
          params.append("type", type);
        }

        return {
          url: "trips",
          method: "GET",
          params,
        };
      },
      providesTags: [tags.TRAVEL],
    }),

    // create trip
    createTrip: build.mutation({
      query: (trip: any) => ({
        url: "trips",
        method: "POST",
        body: trip,
      }),

      invalidatesTags: [tags.TRAVEL],
    }),

    // update trip
    updateTrip: build.mutation({
      query: ({ id, trip }) => ({
        url: `trips/${id}`,
        method: "PUT",
        body: trip,
      }),

      invalidatesTags: [tags.TRAVEL],
    }),

    // delete trip
    deleteTrip: build.mutation({
      query: (id) => ({
        url: `trips/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: [tags.TRAVEL],
    }),

    // get trip by id
    getTripById: build.query({
      query: (id) => ({
        url: `trips/${id}`,
        method: "GET",
      }),
      providesTags: [tags.TRAVEL],
    }),

    // send a travel buddy request
    sendTravelBuddyRequest: build.mutation({
      query: ({ id, data }) => ({
        url: `trip/${id}/request`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [tags.TRAVEL],
    }),

    // check travel buddy request
    checkTravelBuddyRequest: build.query({
      query: (id) => ({
        url: `/travel-buddies/${id}/check`,
        method: "GET",
      }),
      providesTags: [tags.TRAVEL],
    }),

    // get my trips
    getMyTravelBuddies: build.query({
      query: () => ({
        url: "/trip/my-travel-buddies",
        method: "GET",
      }),
      providesTags: [tags.TRIP],
    }),

    // get my posted trips/travels
    getMyPostedTrips: build.query({
      query: () => ({
        url: "/trip/my-trips",
        method: "GET",
      }),
      providesTags: [tags.TRIP],
    }),
  }),
});

export const {
  useGetTripQuery,
  useCreateTripMutation,
  useUpdateTripMutation,
  useDeleteTripMutation,
  useGetTripByIdQuery,
  useSendTravelBuddyRequestMutation,
  useCheckTravelBuddyRequestQuery,
  useGetMyTravelBuddiesQuery,
  useGetMyPostedTripsQuery,
} = tripApi;
