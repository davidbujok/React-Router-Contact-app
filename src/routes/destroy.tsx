import { redirect } from "react-router-dom";
import { deleteContact } from "../contact";

export async function action({ params }) {
  deleteContact(params.contactId);
  return redirect("/");
}

