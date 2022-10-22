import React from 'react';
import { useNavigate } from 'react-router-dom';

const BreadCrumb = ({header}) => {

    const navigate = useNavigate();

    return (
        <div className="breadcrumb">
            
            <div className="left_side">
                <span className='back_icon' onClick={()=>navigate(-1)}>
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </span>

                <h4>{header}</h4>
            </div>

        </div>
    )
}

export default BreadCrumb;
