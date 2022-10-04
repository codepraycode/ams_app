import React from 'react'

function Pager({row}) {

    const temp = [];

    for (let i=0; i<row; i++){
        temp.push(<li key={i}>{i+1}</li>);
    }

  return (
      <div className="form_pager">

          <ul>
              {temp}
          </ul>

      </div>
  )
}

export default Pager;