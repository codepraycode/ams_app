//  form configurations for AMS frontend

const associationSignUpFormConfig = {
    logo:{
        type:"image",
        accept:".png .jpg .jpeg",
        name:"logo",
        required:true,
    },
    association_reg_id:{
        type: "text",
        name: "association_reg_id",
        placeholder: "Association registration id",
        required:true,
        label:"Registration ID"
    },

    name:{
        type:"text",
        name:"name",
        placeholder:"Association name",
        required:true,
        label: "Association name"
    },
    
    contact:{
        type:"text",
        name:"contact",
        placeholder:"Association contact",
        required:true,
    },
    
    country:{
        type:"text",
        name:"country",
        placeholder:"Association country",
        required:true,
    },
    city:{
        type:"text",
        name:"city",
        placeholder:"Association city",
        required:true,
    },
    local_government:{
        type:"text",
        name:"local_government",
        placeholder:"Association local government",
        required:true,
    },
    town: {
        type: "text",
        name: "town",
        placeholder: "Association town",
        required: true,
    },

    email: {
        type: "email",
        name: "email",
        placeholder: "Association official email",
        required: true,
        label: "Association email"
    },
    password: {
        type: "password",
        name: "password",
        placeholder: "Password",
        required: true,
    },
    confirm_password: {
        type: "password",
        name: "confirm_password",
        placeholder: "Confirm password",
        required: true,
    },

}


const associationSignInFormConfig = {
    
    email: {
        type: "email",
        name: "email",
        label:"Email",
        placeholder: "Association official email",
        required: true,
    },
    password: {
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "Password",
        required: true,
    },

}

const associationGroupFormConfig = {
    
    name: {
        type: "text",
        name: "name",
        // placeholder: "Association ",
        required: true,
    },

}

const associationLevyFormConfig = {
    
    label: {
        type: "text",
        name: "label",
        // placeholder: "Association ",
        required: true,
    },

}

const associationMemberFormConfig = {
    passport: {
        type: "file",
        accept: ".png .jpg .jpeg",
        name: "passport",
        required: false,
    },
    first_name: {
        type: "text",
        name: "first_name",
        placeholder: "First name",
        required: true,
    },
    last_name: {
        type: "text",
        name: "last_name",
        placeholder: "Last name",
        required: true,
    },
    gender: {
        type: "text",
        name: "gender",
        placeholder: "Gender",
        options:['male', 'female'],
        required: true,
    },

    occupation: {
        type: "text",
        name: "occupation",
        placeholder: "Occupation",
        required: true,
    },
    date_of_birth: {
        type: "text",
        name: "date_of_birth",
        placeholder: "Date of birth",
        required: true,
    },
    religion: {
        type: "text",
        name: "religion",
        placeholder: "Religion",
        options: ['christianity', 'Islamic', 'other'],
        required: true,
    },
    contact: {
        type: "text",
        name: "contact",
        placeholder: "Contact",
        required: true,
    },

    local_government_of_origin: {
        type: "text",
        name: "local_government_of_origin",
        placeholder: "Local government of origin",
        required: true,
    },
    state_of_origin: {
        type: "text",
        name: "state_of_origin",
        placeholder: "State of origin",
        required: true,
    },
    ethnicity: {
        type: "text",
        name: "ethnicity",
        placeholder: "Ethnicity",
        required: true,
    },

    next_of_kin: {
        type: "text",
        name: "next_of_kin",
        placeholder: "Next of kin",
        required: true,
    },
    next_of_kin_contact: {
        type: "tel",
        name: "next_of_kin_contact",
        placeholder: "Next of kin contact",
        required: true,
    },

    group: {
        type: "text",
        name: "group",
        placeholder: "Group",
        required: true,
    },
    group_id: {
        type: "text",
        name: "group_id",
        placeholder: "Group id",
        required: true,
    },

}


export {
    associationSignUpFormConfig,
    associationSignInFormConfig,
    associationGroupFormConfig,
    associationLevyFormConfig,
    associationMemberFormConfig,
}