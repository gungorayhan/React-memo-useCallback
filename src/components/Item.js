import React,{memo} from 'react'
const Item = memo(({id,value,onChange}) => {
  return (
    <form className='Item'>
      <h5 className='Item-render'>Re-Render {(Math.random() * 100).toFixed(0)}</h5>
      <label htmlFor="text">Item</label>
      <input className='Item-input' type='text' name='text' id='text' 
        onChange={e=>onChange(id,e.target.value)} value={value}
      />
    </form>
  )
})

export default Item