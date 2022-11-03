import React from 'react'

function Footer(prop) {
  return (
    <div className='foot'>
      <footer style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
        <h3>{prop.name}</h3>
      </footer>
    </div>
  )
}

export default Footer
