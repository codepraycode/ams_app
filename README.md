# Association management system

A web application for associations to digitaize activies, keep adequate track records and provides digitized accounting features.

# Features

Features includes:
- Association account signup
- Association account Login
- Creating levies
- Creating Member account
- Creating and grouping members
- Creating Levy charge
- Managing levy charge responses
- Receiving payments on levy charge
- Member's account topup


# App Structure

- `/signin` - Login page

- `/signup` - Create association account

- `/` - Dashboard
    > On this page,
    - Association Levies
    - Association groups

- `/members` - Display association members (segregated by groups)

- `/members/memberId` - Display association member profile
    > On this page,
    - Member info(which covers editing)
    - Member account balance
    - Member transactions
    - charges that assigned to member

- `/levy/levyId/` - Display created association levy charges
    > On this page, a modal will be displayed to implement charge payment.

- `/setting` - Display association info
    > This page will feature,
    - Association info/update info,
    - Association invoices


# Data schema
- Association
    - id (api response)
    - logo: string
    - name: string
    - registration_id: string,
    - contact: string,
    - town: string,
    - city: string,
    - local_government: string,
    - email: string,
    - group_label: string,

- Association Member
    - id (api response)
    - url: url_string (api response),
    - passport: url_string,
    - first_name: string,
    - last_name: string,
    - gender: string,
    - occupation: string,
    - contact: string,
    - date_of_birth: date_string,
    - religion: string,
    - nationality: string,
    - state_of_origin: string,
    - ethnicity: string,
    - local_government_of_origin: string,
    - next_of_kin: string,
    - date_joined: date_string (api_response),
    - group_id: string,
    - group_url: string (api_response),

- Member account
    - account_id (api response)
    - topup_url: url_string (api response),
    - transactions_url: url_string (api response),
    - balance: string,
    - last_updated: date_string (api response),

- Group
    - id (api response)
    - url: url_string (api response),
    - name: string,
    - date_created: date_string (api response),

- Levy
    - id (api response)
    - url: url_string (api response),
    - create_charge_url: url_string (api response),
    - label: string,
    - date_created: date_string (api response),


# How to install

Make sure to have nodejs installed, then clone this repository, and run `yarn install` or  `npm install`.

> run `npm start` or `yarn start` to start application.