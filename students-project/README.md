# Students Project backend

## Stack:

- NodeJS,
- ExpressJS,
- MongoDB,
- Mongoose,
- Postman

## Routes:

- GET /students/all
- POST /students
- PUT /students
- DELETE /students
- More routes based on requirement
  ]

## Mongoose

- Schema
- Model

## Deployment

- Heroku

1. Assumming your code works on localhost

2. Sign Up to www.heroku.com and setup your billing information (it won't charge anything but we need it to create a MongoDB add-on to our app on heroku. It won't accept without billing info)

3. On root create a `.env` file.
   Inside write `MONGO_DB_URI=mongodb+srv://Ulan:<yourPassword>@cluster1.qcpvo.mongodb.net/Students?retryWrites=true&w=majority` (Your own uri without any string " ")

4. Then change in **index.js**:

   `const uri = 'mongodb+srv://Ulan:<yourPassword>@cluster1.qcpvo.mongodb.net/Students?retryWrites=true&w=majority';`

   TO

   `const uri = process.env.MONGO_DB_URI || 'mongodb+srv://Ulan:123@cluster1.qcpvo.mongodb.net/Students?retryWrites=true&w=majority'; `

5. On root directory create **Procfile** file.

   - On terminal run:
   - `touch Procfile`
   - Inside Profile write `web: npm start`

6. On terminal run these commmands **by order**:

   - `git init `

   - `git add .`

   - `git commit -m" deployment"`

   - `heroku login` (it will open a browser to confirm login. Hit login and get back to terminal)

   - `heroku create students-seytech` (this will output something like this: Creating ⬢ students-seytech... done)

   - `heroku addons:create mongolab:sandbox` (It installs mLab MongoDB add-on with the "Sandbox" plan which is free)

   - `heroku config:set MONGO_DB_URI='mongodb+srv://Ulan:<yourPassword>@cluster1.qcpvo.mongodb.net/Students?retryWrites=true&w=majority'`

   - `git push heroku master` (push it to heroku master)

   - `heroku open` (or open from heroku app dashboard)

7. Try CRUD operations with your new deployed link. (Ex: https://students-seytech.herokuapp.com/api/students/all)

###### P.S: mLab is shutting down its Heroku add-on on November 10, 2020. You will lose access to your data unless you detach from Heroku or migrate to **MongoDB Atlas** before then.
