import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "redux/selectors";

import { removeContact, changeContactStatus } from "redux/contactSlice";
import Avatar from "react-avatar";
export const ContactTable = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(getContacts);

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
          <th>Options</th>
        </tr>
      </thead>
      {contacts && (
        <tbody>
          {contacts.map((contact, index) => {
            const { id, name, age, avatar, status } = contact;
            return (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>
                  <Avatar name={avatar} round={true} size="30" />
                </td>
                <td>{name}</td>
                <td>{age}</td>
                <td>
                  {
                    <span
                      onClick={() => {
                        dispatch(changeContactStatus(id));
                      }}
                    >
                      {status === "yes" ? "online" : "offline"}
                    </span>
                  }
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => dispatch(removeContact(id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};
