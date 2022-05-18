import {
  TableCell,
  tableCellClasses,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/system";

export default function TabHead() {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "black",
      color: "white",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>NAME</StyledTableCell>
        <StyledTableCell align="right">USER NAME</StyledTableCell>
        <StyledTableCell align="right">EMAIL</StyledTableCell>
        <StyledTableCell align="right">COMPANY</StyledTableCell>
        <StyledTableCell align="right">ADDRESS</StyledTableCell>
        <StyledTableCell align="right">Action Button</StyledTableCell>
      </TableRow>
    </TableHead>
  );
}
