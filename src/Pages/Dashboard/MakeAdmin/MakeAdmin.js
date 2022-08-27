import { Alert, Button, TextField } from '@mui/material';
import React,{useState} from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail] =useState('');
    const [success,setSuccess] = useState(false);
    const {token} =useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value) ;
        
    }
    const handleAdminSubmit = e =>{
        const user ={email}
        e.preventDefault();
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'authorization':`Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
                console.log(data);
                setSuccess(true);
            }
        })
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField
                            sx={{ width: '35%', m: 1 }}
                            
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                            <br />
                            <Button sx={{ width: '35%', m: 1 }} type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;