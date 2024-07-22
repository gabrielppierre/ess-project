import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { ReservationModel } from "../models/Reservations";

interface ReservationTableProps {
  reservations: ReservationModel[];
}

const ReservationTable: React.FC<ReservationTableProps> = ({
  reservations,
}) => {
  useEffect(() => {
    console.log(reservations);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome da sala</TableCell>
            <TableCell>Nome do usuário</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Data inicial</TableCell>
            <TableCell>Data final</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.length > 0 &&
            reservations.map((reservation) => (
              <TableRow key={reservation.id}>
                <TableCell>{reservation.room.name}</TableCell>
                <TableCell>{reservation.user.name}</TableCell>
                <TableCell>{reservation.status}</TableCell>
                <TableCell>
                  {new Date(reservation.start_date).toLocaleDateString()} -{" "}
                  {new Date(reservation.start_date).toLocaleTimeString()}
                </TableCell>
                <TableCell>
                  {new Date(reservation.end_date).toLocaleDateString()} -{" "}
                  {new Date(reservation.end_date).toLocaleTimeString()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReservationTable;
