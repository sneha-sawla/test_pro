import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TabHead from "./TabHead";
import useUsers from "../services/useUsers";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

export function TableCom() {
  const { users } = useUsers();
  const handledelete = (index) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${index}`, {
      method: "DELETE",
    });
    toast("Data deleted");
  };

  const handleEdit = (index) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${index}`, {
      method: "PUT",
      body: JSON.stringify({
        id: index,
        title: "Added",
        body: "Fresh",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    toast("Data edit successfully");
  };
  const data = dataToList(users);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TabHead />
        <TableBody>
          {data
            ? data?.map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name || "-"}
                  </TableCell>
                  <TableCell align="right">{row.userName || "-"}</TableCell>
                  <TableCell align="right">{row.email || "-"}</TableCell>
                  <TableCell align="right">{row.web || "-"}</TableCell>
                  <TableCell align="right">{row.adr || "-"}</TableCell>
                  <TableCell align="right">
                    <Button>View</Button>
                    <Button onClick={() => handledelete(index)}>Delete</Button>
                    <Button onClick={() => handleEdit(index)}>Edit</Button>
                  </TableCell>
                </TableRow>
              ))
            : "-"}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export const MemorizeTable = React.memo(TableCom);

function dataToList(data) {
  console.log("hiiii", data);
  return data.map((item) => {
    const com = item?.["company"];
    const add = item?.["address"];
    return {
      id: item?.["id"],
      email: item?.["email"],
      name: item?.["name"],
      userName: item?.["username"],
      web: item?.["website"],
      comapany: com?.["name"] + " " + com?.["bs"] + " " + com?.["catchPhrase"],
      adr:
        add?.["suite"] +
        "," +
        add?.["street"] +
        "," +
        add?.["city"] +
        "," +
        add?.["zipcode"],
    };
  });
}
