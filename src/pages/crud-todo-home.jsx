import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, updateUser } from "../redux/reducer/userSlice";
import { useState } from "react";

// const countries = [
//   { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
//   { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
//   { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
// ];

const CrudTodoHome = () => {
  // const arr = ["play cricket", "play video game", "read book"];
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [editUser, setEditUser] = useState();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });
  // const [country, setCountry] = useState();
  // const [game, setGame] = useState(arr);

  // const [selectedItem, setSelectedItem] = useState([]);

  const handleUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (id) => {
    dispatch(
      updateUser({
        id: id,
        name: userData.name,
        email: userData.email,
      })
    );
    setEditUser(null)
  };

  if (!Array.isArray(users)) {
    return <div>Loading...</div>;
  }

  // const handleValue = (item) => {
  //   const games = game.filter((gm) => gm !== item);
  //   setGame(games);
  // };

  // const handleCheck = (item) => {
  //   // setSelectedItem((prev) =>
  //   //   prev.includes(item)
  //   //     ? prev.filter((prev) => prev !== item)
  //   //     : [...selectedItem, item]
  //   // );
  //   if (selectedItem.includes(item)) {
  //     setSelectedItem([selectedItem.filter((prev) => prev !== item)]);
  //   } else {
  //     setSelectedItem([...selectedItem, item]);
  //   }
  // };
  return (
    <div className="container">
      <h2>Crud App</h2>

      {/* interview question  */}

      {/* {game.map((item, index) => {
        return (
          <div key={index} className="flex gap-4 justify-center mb-3">
            <input
              type="checkbox"
              checked={selectedItem.includes(item)}
              onClick={() => handleCheck(item)}
            />
            <p>{item}</p>

            {selectedItem.includes(item) && (
              <button
                className="border-2 rounded-md border-black p-1"
                onClick={() => handleValue(item)}
              >
                Delete
              </button>
            )}
          </div>
        );
      })} */}

      {/* interview question  */}
      {/* <select onChange={(e) => setCountry(e.target.value)}>
        {countries.map((country, index) => {
          return (
            <option key={index} value={index}>
              {country.name}
            </option>
          );
        })}
      </select>

      <select>
        {countries[country]?.cities?.map((country, index) => {
          return (
            <option key={index} value={index}>
              {country}
            </option>
          );
        })}
      </select> */}
      <Link to="/create">Create +</Link>
      <div className="flex justify-center items-center">
        <table className="table-auto">
          <thead className="border-b-2 border-black">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => {
              return editUser === user.id ? (
                <tr key={index} >
                  <td>{user.id}</td>
                  <td>
                    <input
                      className="border-2 border-black"
                      name="name"
                      type="text"
                      placeholder="Name"
                      defaultValue={user.name}
                      onChange={(e) => {
                        handleUserData(e);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      className="border-2 border-black"
                      type="email"
                      name="email"
                      placeholder="Email"
                      defaultValue={user.email}
                      onChange={(e) => handleUserData(e)}
                    />
                  </td>
                  <td>
                    <button
                      type="submit"
                      className="border-2 border-black"
                      onClick={() => handleSubmit(user.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ) : (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="p-3">
                    <button
                      className="m-4 p-5 bg-black text-white rounded-lg"
                      onClick={() => setEditUser(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className=" p-5 bg-black text-white rounded-lg "
                      onClick={() => dispatch(deleteUser(user.id))}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudTodoHome;
