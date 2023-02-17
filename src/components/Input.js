import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Input({ data, setData }) {

    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const newInput = {id: Math.floor(Math.random() * 100), text: input}
        setData([...data, newInput])
        setInput('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <TextField id="outlined-basic" label="Task to do" variant="outlined" type='text' value={input} onChange={(e) => setInput(e.target.value)} /> 
            </label>
            <Button type='submit' variant="contained" endIcon={<SendIcon />}>Add to List</Button>
        </form>
    </div>
  )
}

export default Input