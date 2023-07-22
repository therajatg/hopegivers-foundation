// import { useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";

export const AdminContact = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useOutletContext();

  const deleteHandler = async (id) => {
    try {
      const res = await axios.delete(`/api/contacts/${id}`);
      setContacts(res.data);
      if (!res.data.length) {
        navigate("/admin");
      }
    } catch (error) {}
  };

  return (
    <div className="flex mb-12 gap-x-8 flex-wrap mx-8 gap-y-12">
      {contacts?.map(({ id, name, number, email, message }) => (
        <div
          className="flex flex-col gap-y-6 bg-gray-800 text-white rounded-md w-[24rem] p-8 relative"
          key={id}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 absolute right-0 top-0 m-1 hover:cursor-pointer"
            onClick={() => deleteHandler(id)}
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
              clipRule="evenodd"
            />
          </svg>
          <div className="flex flex-col items-start">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              className="w-full rounded h-8 bg-gray-600 px-1"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="number">Contact No.</label>
            <input
              type="text"
              id="number"
              value={number}
              className="w-full rounded h-8 bg-gray-600 px-1"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              className="w-full rounded h-8 bg-gray-600 px-1"
            />
          </div>
          <div className="flex flex-col items-start">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              id="message"
              value={message}
              className="w-full h-32 rounded bg-gray-600 px-1"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
