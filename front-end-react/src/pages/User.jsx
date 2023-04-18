import { useState, useEffect } from "react";
import { UserRandomAPI } from "../utils/axios";
import UserRandomAPICard from "../components/user-random/UserRandomAPICard";
import Pagination from "../components/user-random/UserRandomAPIPagination";

function filter(usersData, search) {
  const lowerSearch = search.toLowerCase();

  return usersData.filter((user) => {
    const fullname = `${user.name.first} ${user.name.last}`;
    return (
      user.email.toLowerCase().includes(lowerSearch) ||
      fullname.toLowerCase().includes(lowerSearch) ||
      user.login.username.toLowerCase().includes(lowerSearch)
    );
  });
}

export default function User() {
  const [usersData, setUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(18);
  const [search, setSearch] = useState("");
  const [usersPage, setUsersPage] = useState([]);
  const [totalUsers, setTotalUsers] = useState(180);

  useEffect(() => {
    async function fetch() {
      const response = await UserRandomAPI.get("", {
        params: { results: totalUsers, seed: "Ada" },
      });
      setUsersData(response.data.results);
    }
    fetch();
  }, []);

  useEffect(() => {
    const filteredUserData = filter(usersData, search);
    setTotalUsers(filteredUserData.length);
    const start = (currentPage - 1) * postsPerPage;
    const end = currentPage * postsPerPage;
    setUsersPage(filteredUserData.slice(start, end));
  }, [currentPage, postsPerPage, usersData, search]);

  function onSearch(value) {
    setSearch(value);
    setCurrentPage(1);
  }

  return (
    <div className="container mt-24 px-6 mx-auto mb-10">
      <input
        type="search"
        className="form-control flex-auto block w-full px-3 py-1.5 text-white bg-neutral-800 border border-solid border-gray-300 rounded m-0 focus:outline-none mb-4"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
        onChange={(ev) => onSearch(ev.target.value)}
      />
      <section className="text-center lg:text-left">
        <h2 className="text-3xl font-bold m-12 text-center text-white">
          Users Gallery
        </h2>
        <div className="grid md:grid-cols-3 gap-6 xl:gap-x-12">
          {usersPage.map((user, index) => {
            return (
              <UserRandomAPICard
                key={index}
                image={user.picture.large}
                name={user.name}
                email={user.email}
                username={user.login.username}
                age={user.dob.age}
              />
            );
          })}
        </div>

        <Pagination
          postsPerPage={postsPerPage}
          total={totalUsers}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
    </div>
  );
}
