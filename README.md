# store_api

### Libraries & Dependencies

    "@prisma/client": "^5.0.0",
    "bcrypt": "^5.1.0",
    "body-parser": "^1.20.2",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-rate-limit": "^6.7.1",
    "express-session": "^1.17.3",
    "joi": "^17.9.2",
    "jsonwebtoken": "^9.0.1",
    "mysql2": "^3.5.1",
    "nodemon": "^3.0.1",
    "prisma": "^5.0.0"

##

### Configuration (After cloning/downloading)

    1. Type `npm install`.
    2. Create `.env` file in root directory.
    3. Copy the value of `.env.development` & Paste to `.env`.
    4. Create a database or schema in any MySQL IDE (ex. MySQL Workbench).
    5. After creating the schema, define/put the schema name to the `.env` file.
    `DATABASE_URL="mysql://root:root@localhost:3306/schema"`
    -- replace the the values base on your database configuration. Follow this structure: `DATABASE_URL="mysql://user:password@hostname:port/db_name"`.
    6. To the terminal, make sure that you are inside to your folder, type `npx prisma migrate dev --name init` (this will initialize the model and will sync to your database/schema)
    7. npm run dev

##
