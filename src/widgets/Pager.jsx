import React from 'react'

function Pager({row, active}) {

    const temp = [];

    

    for (let i=0; i<row; i++){
        let status = '';

        if (active === i+1){
            status = 'active'
        }else if (active > i+1){
            status = 'passed'
        }

        temp.push(<li key={i} className={status}>{i+1}</li>);
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