import { useEffect, useState } from "react";
// import useSWR from "swr";

export default function useUsers() {
  const [users, setusers] = useState([]);
  //   const url = "https://jsonplaceholder.typicode.com/users";
  //   const fetcher2 = (...args) => fetch(...args).then((res) => res.json());
  //   const fetcher = fetch("https://jsonplaceholder.typicode.com/users").then(
  //     async (res) => await res.json()
  //   );
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then(
      async (res) =>
        await res
          .json()
          .then((data) => setusers(data))
          .catch((error) => console.log(error))
    );
  }, []);
  //   const { data, error } = useSWR(url, fetcher2);
  return {
    users,
  };
}
