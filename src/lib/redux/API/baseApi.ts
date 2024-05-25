import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import { config } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { appTags } from "./tag";

// Create a baseQuery with the baseUrl and credentials
const baseQuery = fetchBaseQuery({
  baseUrl: `${config.apiUrl}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryModifiedForValidationError: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  console.log({ result });

  // if (result?.error?.status === 404) {
  //   toast.error(
  //     result.error.data?.errorMessage ||
  //       result.error.data?.message ||
  //       "Resource not found"
  //   );
  // } else
  //   if (result?.error?.status === 401) {
  //     toast.error(
  //       result.error.data?.errorMessage ||
  //         result.error.data?.message ||
  //         "Unauthorized"
  //     );
  //   } else if (result?.error?.status === 400) {
  //     toast.error(
  //       result.error.data?.errorMessage ||
  //         result.error.data?.message ||
  //         "Bad request"
  //     );
  //   }

  return result;
};

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryModifiedForValidationError,
  endpoints: () => ({}),
  tagTypes: appTags,
});

export default baseApi;
