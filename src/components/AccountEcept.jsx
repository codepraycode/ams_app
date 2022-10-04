import React from 'react'
import { useSelector } from 'react-redux';
import { getAccount } from '../app/accountSlice';
import { placeholder } from '../constants/assets';

function AccountEcept() {

    const association = useSelector(getAccount);

    return (
        <div className="account_ecept">
            <div className="logo">
                <img src={placeholder} alt="Association Logo" />
            </div>


            <h2>{association.name}</h2>

            <p>
                <span>{association.registration_id}</span>
                <b>&middot;</b>
                <span>{association.email}</span>
            </p>

            <ul>
                <li>
                    <b>Town:</b> <span>{association.town}</span>
                </li>

                <li>
                    <b>Local government:</b> <span>{association.local_government}</span>
                </li>
                <li>
                    <b>Local city:</b> <span>{association.city}</span>
                </li>
                <li>
                    <b>Local country:</b> <span>{association.country}</span>
                </li>
            </ul>


        </div>
    )
}

export default AccountEcept;