import React from 'react'
import './styles.css'


const Table = () => {
  return (
    <div>
      <table className = "table">
        < tbody>
            <tr className="row1">
              <td><label className="label3"> High</label> </td >
            </tr>  
            <tr className="row2">
              <td><label className="label2"> Pressure</label> </td >
            </tr> 
            <tr className="row3">
              <td> <label className="label3">Low</label></td >
            </tr> 
         </tbody>
      </table>
    </div>
  )
}

export default Table