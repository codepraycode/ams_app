import {createSlice} from '@reduxjs/toolkit';



const initialState = {
    account: {
        "id": 5,
        "logo": "http://127.0.0.1:8000/media/logo/1664294591.jpg",
        "name": "Izian Association",
        "registration_id": "CDA/101/534",
        "contact": "+234 80000000000",
        "town": "oreta",
        "city": "Lagos",
        "local_government": "Ikorodu",
        "country": "Nigeria",
        "email": "izian@gmail.com",
        "group_label": "Street",
    },
    groups: [
        {
            "id": 2,
            "name": "Melanir Street",
            "url": "http://127.0.0.1:8000/api/association/groups/2/",
            "date_created": "2022-09-27T16:23:01.691758Z"
        },
        {
            "id": 3,
            "name": "Melanika Street",
            "url": "http://127.0.0.1:8000/api/association/groups/3/",
            "date_created": "2022-09-27T16:27:39.922556Z"
        }
    ],
    levies: [
        {
            "id": 3,
            "label": "Security",
            "url": "http://127.0.0.1:8000/api/account/levies/3/",
            "date_created": "2022-09-28T12:04:01.253879Z",
            "create_charges_url": "http://127.0.0.1:8000/api/account/levies/charges/create/",
            "charges": [
                {
                    "id": 6,
                    "url": "http://127.0.0.1:8000/api/account/levies/charges/6/",
                    "amount": "2500.00",
                    "payment_url": "http://127.0.0.1:8000/api/account/levies/charges/payment/",
                    "members_url": "http://127.0.0.1:8000/api/account/levies/charges/6/members/",
                    "date_created": "2022-09-28T14:47:08.106746Z"
                }
            ]
        }
    ]
}

const accountSlice = createSlice({
    name:"account",
    initialState,
    reducers:{
        sample: (state,action)=>{
            console.log("Hello world!");
        }
    }
});


// Actions
// Add actions here


// Selectors
export const getAccount = (state)=> state.account.account;
export const getGroups = (state)=> state.account.groups;
export const getLevies = (state)=> state.account.levies;


export default accountSlice;