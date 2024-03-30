import {
  Form,
  useLoaderData,
  redirect,
  useNavigate,
} from "react-router-dom";
import { updateContact } from "../contact";

export async function action({ request, params }) {
  const formData = await request.formData();
  console.log("params:", params)
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}


export default function EditContact() {

  const contact = useLoaderData();
  const navigate = useNavigate()

  return (
    <>
      <h1>What</h1>
      <Form method="post" id="contact-form">
        <p>
          <span>Name</span>
          <input
            placeholder="First"
            aria-label="First name"
            type="text"
            name="first"
            defaultValue={contact.first}
          />
          <input
            placeholder="Last"
            aria-label="Last name"
            type="text"
            name="last"
            defaultValue={contact.last}
          />
        </p>
        <label>
          <span>Twitter</span>
          <input
            type="text"
            name="twitter"
            placeholder="@jack"
            defaultValue={contact.twitter}
          />
        </label>
        <label>
          <span>Avatar URL</span>
          <input
            placeholder="https://placebear.com/200/300"
            aria-label="Avatar URL"
            type="text"
            name="avatar"
            defaultValue={contact.avatar}
          />
        </label>
        <p>
          <button type="submit">Save</button>
        </p>
        <p>
          <button
            type="button"
            onClick={() => {
              navigate(-1);
            }}
          >
            Cancel
          </button>
        </p>
      </Form>
    </>
  )
}
