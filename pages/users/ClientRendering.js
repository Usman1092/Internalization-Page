

import React from "react";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function ClientRendering() {
  const { data, error } = useSWR("http://localhost:3000/api/users", fetcher);

  if (error) return <h1>Error loading data</h1>;
  if (!data) return <h1>Loading...</h1>;

  return (
    <div>
      <h1 className="text-center text-2xl font-bold pt-20">Users</h1>
      {data.users &&
        data.users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <div>{user.firstName}</div>
          </Link>
        ))}
    </div>
  );
}

export default ClientRendering;
