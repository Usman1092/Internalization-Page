import React from "react";

const UserPage = ({ data }) => {
  console.log("Props", data);
  return (
    <div>
      <h1 className=" pl-20 text-2xl text-center">Profile Page OF {data.firstName}</h1>
      <p className="  pl-20 text-2xl text-center">{data.lastName}</p>
      <p className="  pl-20 text-2xl text-center">{data.gender}</p>
    </div>
  );
};

export const getStaticPaths = async (id) => {
  const data = await (await fetch(`http://localhost:3000/api/users`)).json();
  const allUserIds = data.users.map((user) => user.id.toString());

  return {
    paths: allUserIds.map((userId) => ({ params: { id: userId } })),
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await (await fetch(`http://localhost:3000/api/users/${id}`)).json();
  return {
    props: {
      data,
    },
  };
};

export default UserPage;
