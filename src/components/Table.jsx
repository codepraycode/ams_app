import React from 'react'
import Button from '../widgets/Button'

const Table = ({header, size, tableHeadData, tableBodyData, checkable}) => {
    
  return (
    <div className={`table_container ${size || ''}`}>
        

        <h3 className='table_container--header'>{header || "Table Header"}</h3>

        <table>

            <thead>
                  {/* tableHeadData is an array of strings */}
                <tr>
                    {checkable && <th>{" "}</th>}
                    {
                        tableHeadData.map((each, i) => (<th key={i}>{each}</th>))
                    }
                    
                </tr>
            </thead>

            <tbody>
                {
                    // tableBodyData is an array of arrays

                    tableBodyData.map((each_item,i)=>(
                        <tr key={i}>
                            {checkable && <td>{i+1}</td>}

                            {/* each_item is an array */}

                            {each_item.map((each, i) => (<td key={i}>{each}</td>))}

                        </tr>
                    ))
                      
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table