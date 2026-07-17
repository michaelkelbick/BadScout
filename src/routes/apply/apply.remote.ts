import { form } from "$app/server";
import { type } from "arktype";

export const apply = form(type({ teamNumber: "number", email: "string" }), (e) => {
  console.log("??")
  console.log(e.teamNumber)
})
