"use server";

import { cookies } from "next/headers";

export const setTokenInCookie = (key: string, token: string) => {
  cookies().set({
    name: key,
    value: token,
    httpOnly: true,
    secure: true,
  });
};

// remove token from cookie
export const removeTokenFromCookie = (key: string) => {
  cookies().set({
    name: key,
    value: "",
    httpOnly: true,
    secure: true,
    maxAge: 0,
  });
};
