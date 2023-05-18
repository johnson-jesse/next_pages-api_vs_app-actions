"use client";

import React, { useTransition } from "react";
import { smash } from "../Action.util";

export default function Sub() {
  const [time, setTime] = React.useState(Date.now());
  let [, startTransition] = useTransition();

  const handleUpdateUsingApi = async () => {
    const result = await fetch("/api/smash", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = (await result.json()) as unknown as { apiNow: number };
    console.log(data);
    setTime(data.apiNow);
  };

  const handleUpdateUsingAction = async () => {
    startTransition(async () => {
      const { actionNow } = await smash();
      setTime(actionNow);
    });
  };

  return (
    <fieldset className="ml-auto mr-auto">
      <legend>Leaf Component - use client</legend>
      <div className="flex gap-3">
        <button onClick={handleUpdateUsingApi}>w/API</button>
        <button onClick={handleUpdateUsingAction}>w/Action</button>
      </div>
      <div className="text-right">
        timestamp: <span className="text-purple-400 ">{time}</span>
      </div>
    </fieldset>
  );
}
