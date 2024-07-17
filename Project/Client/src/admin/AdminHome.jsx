import axios from "axios"
import { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Home() {
  const [users,setUsers] = useState([])
  useEffect(()=>{
  axios.get('http://localhost:5000/api/getusers')
  .then(res => {setUsers(res.data)
  console.log(res.data)})
  },[])
  

  function createData(name, calories, fat ) {
  return { name, calories, fat};
}

const rows = 
  users && users.map((user)=>{
   return createData(user.email,user._id,user.password)
  });
// console.log(rows)
  return (
    <>
    <div className="container">
        <h1 className="text-3xl font-bold text-center">Admin Panel</h1>
        <div className="users">
            <div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>Users Information</caption>
        <TableHead>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell align="right">User ID</TableCell>
            <TableCell align="right">Password</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        </div>
    </div>
      
    </>
  )
}
