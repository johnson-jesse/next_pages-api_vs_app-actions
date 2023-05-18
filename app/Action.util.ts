'use server';

import { cookies } from "next/headers";

export async function smash() {

  // @ts-ignore
  cookies().set({
    name: "smash",
    value: "I was set via server actions",
    httpOnly: true,
  });

  return Promise.resolve({
    actionNow: Date.now(),
  });
}
