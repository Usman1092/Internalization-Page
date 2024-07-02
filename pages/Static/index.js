import React from "react";
import Link from "next/link";
function getStatic({ data }) {
  console.log(data);
  return (
    <div>
      <h1 className="text-5xl text-center text-bold pt-20">getStaticProps</h1>
      <ul>
        {data.data.users &&
          data.data.users.map((user) => (
            <Link href={`/users/${user.id}`} key={user.id}>
              <div className="ml-40"> {user.firstName}</div>
            </Link>
          ))}
      </ul>
    </div>
  );
}
export const getStaticProps = async () => {
  const data = await (await fetch(`http://localhost:3000/api/users`)).json();
  return {
    props: {
      data: { data },
    },
  };
};
export default getStatic;
