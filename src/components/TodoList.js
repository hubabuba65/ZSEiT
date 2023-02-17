import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

function TodoList({ data, setData }) {

    const [check, setCheck] = useState(false)
    console.log(check)

    const deleteTask = (id) => {
        const suprimer = data.filter(res => res.id !== id)
        setData(suprimer)
    }

  return (
    <div>
        {data.map((res) => { 
            const {id, text} = res
            return (
                <div key={id}>
                    <Checkbox value={check} onClick={() => setCheck(!check)} />
                    <p>{text}</p>
                    <IconButton aria-label="delete" size="large" onClick={() => deleteTask(id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            )
        })}
    </div>
  )
}

export default TodoList