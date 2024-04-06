import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import getUsersAll from "../users/hooks/getUsersAll";

const AllUsers = ({user}) => {
  console.log(user, 'usuario')
  const [users, setUsers]= useState([]);
  const getList = async () => {
    const usersList = await getUsersAll();
    setUsers(usersList)
  };

  useEffect(()=>{
    getList();
  }, []);

  return (
      <Box m={2} p={2}>
        <Typography style={{ fontWeight: 'bold',fontSize: '16'}}>
        {`Bienvenido a la aplicacion ${user.name}, otros usuarios que tambien se preinscribieron son:`}
        </Typography>
      { users.map( user => (
        <div key={user.id}>
          {user.email}
        </div>
      )) }
      </Box>
  );
};

export default AllUsers;