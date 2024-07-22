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
            <TableCell>Nome</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Criado em</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.length > 0 &&
            reservations.map((reservation) => (
              <TableRow key={reservation.id}>
                <TableCell>{"nome da sala"}</TableCell>
                <TableCell>{"descrição da sala"}</TableCell>
                <TableCell>{"usuário que reservou"}</TableCell>
                <TableCell>
                  {new Date(reservation.created_at).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReservationTable;
