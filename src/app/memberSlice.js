import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    members: [
        {
            "id": 3,
            "url": "http://127.0.0.1:8000/api/association/members/3/",
            "passport_url": "http://127.0.0.1:8000/media/passport/1664296128.png",
            "first_name": "Lajo",
            "last_name": "Imole",
            "gender": "male",
            "occupation": "fisherman",
            "contact": "+234 80000000",
            "date_of_birth": "2022-02-02",
            "religion": "Crhistian",
            "nationality": "Nigerian",
            "state_of_origin": "Lagos",
            "ethnicity": "Yoruba",
            "local_government_of_origin": "Lagos",
            "next_of_kin": "Lajo Mary",
            "date_joined": "2022-09-27T16:28:48.202220Z",
            "group_id": "12",
            "group_url": "http://127.0.0.1:8000/api/association/groups/3/",
            "account": {
                "account_id": 8,
                "topup_url": "http://127.0.0.1:8000/api/account/member/topup/",
                "transactions_url": "http://127.0.0.1:8000/api/account/member/8/transactions/",
                "balance": "1100.00",
                "last_updated": "2022-09-28T15:01:08.985415Z"
            }
        },
        {
            "id": 10,
            "url": "http://127.0.0.1:8000/api/association/members/10/",
            "passport_url": "http://127.0.0.1:8000/media/passport/1664365440.png",
            "first_name": "Sharon",
            "last_name": "Millit",
            "gender": "female",
            "occupation": "fisherman",
            "contact": "+234 80000000",
            "date_of_birth": "2022-02-02",
            "religion": "Crhistian",
            "nationality": "Nigerian",
            "state_of_origin": "Lagos",
            "ethnicity": "Yoruba",
            "local_government_of_origin": "Lagos",
            "next_of_kin": "Lajo Mary",
            "date_joined": "2022-09-28T11:44:00.976629Z",
            "group_id": "12",
            "group_url": "http://127.0.0.1:8000/api/association/groups/3/",
            "account": {
                "account_id": 7,
                "topup_url": "http://127.0.0.1:8000/api/account/member/topup/",
                "transactions_url": "http://127.0.0.1:8000/api/account/member/7/transactions/",
                "balance": "3600.00",
                "last_updated": "2022-09-28T11:44:01.213758Z"
            }
        }
    ],
}

const memberSlice = createSlice({
    name: "member",
    initialState,
    reducers: {
        sample: (state, action) => {
            console.log("Hello world!");
        }
    }
});


// Actions
// Add actions here


// Selectors
export const getMembers = (state) => state.member.members;


export default memberSlice;