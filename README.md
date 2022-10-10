# tractian-fullstack

Deploy
- Frontend was deployed at Vercel - https://tractian-fullstack.vercel.app/
- API was deployed at heroku - https://tractian-fullstack.herokuapp.com/
- Database was deployed at Mongo Atlas.

Backend

- Installation:
  1) Clone this repository,
  2) Run "npm i" to install all modules.
  3) Run "npm run dev" at backend folder to start api in devlopment mode.

<h2>ENDPOINTS:</h2>
     <h3><strong>COMPANY ENDPOINTS:</strong></h3>
      1) POST /company - { name: string } to create a company. </br>
      2) GET /company - { no req.body } to read all companies registered. </br>
      3) PUT /company - { name: string, companyId: number } to update company`s name. </br>
      4) DELETE /company - { companyId: number } to delete a company. (The document won't be deleted, but the company will have the status "deleted"). </br>
    <h3><strong>USER ENDPOINTS:</strong></h3>
    5) POST /user - { name: string, compayId: number } to create a user. </br>
    6) GET /user - { userId: number } to read a user information. </br>
    7) PUT /user - { Work In Progress } to update user`s name. </br>
    8) DELETE /user - { userId : number } to delete user. (The document won't be deleted, but the user will have the status "deleted"). </br>
    9) GET /users - { companyId:number } to get all users from a company.
    <h3><strong>UNITS ENDPOINTS:</strong></h3>
    10) POST /unit - { name: string, companyId: number } to create a unit of a company.</br>
    11) GET /unit - { companyId: number } to read all companies' units.</br>
    12) PUT /unit - { name: string, unitId: number } to change unit's name.</br>
    13) DELETE /unit - { unitId: number } to delete a unit (The document won't be deleted, but the unit will have the status "deleted").</br>
    <h3><strong>ASSET ENDPOINTS:</strong></h3>
    11) POST /asset - { name: string, image: string, description: string, model: string, health: number, workStatus: "running" |" alerting" | "stopped",   unitId: number } to create an asset to a unit. </br>
    12) GET /asset - { unitId: number } to read all assets of an unit. </br>
    13) PUT /asset - { assetId:number, name: string, image: string, description: string, model: string, health: number,  workStatus: "running" | "alerting" | "stopped", unitId: number } to update an asset</br>
    14) DELETE /asset - { assetId } to delete an asset. (The document won't be deleted, but the asset will have the status "deleted").</br>
    

