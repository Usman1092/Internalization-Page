import React from "react";

const UserPage = ({ data }) => {
  console.log("Props", data);
  return (
    <div>
      <h1 className=" pl-20 text-2xl text-center">Profile Page OF {data.firstName}</h1>
      <p className="  pl-20 text-2xl text-center">{data.lastName}</p>
    </div>
  );
};

export const getStaticPaths = async (id) => {
  const data = await (await fetch(`https://dummyjson.com/users`)).json();
  const allUserIds = data.users.map((user) => user.id.toString());

  return {
    paths: allUserIds.map((userId) => ({ params: { id: userId } })),
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
  return {
    props: {
      data,
    },
  };
};

export default UserPage;
