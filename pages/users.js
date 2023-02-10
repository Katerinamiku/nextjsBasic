import React from "react";
import { MainContainer } from "../components/MainContainer";
import Link from "next/link";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={"users"}>
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            <Link href={`/users/${u.id}`}>
              <span>{u.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const users = await response.json();

  return {
    props: { users },
  };
}
