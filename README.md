# tractian-fullstack

Backend
- Installation:
  1) Clone this repository,
  2) Run "npm i" to install all modules.
  3) Run "npm run dev" at backend folder to start api in devlopment mode.

- Endpoints:
  1) user endpoints:
    - POST /user - { name: string, compayId: number } to create a user.
    - GET /user - { userId: number } to get a user information.
    - PUT /user - { Work In Progress } to change a user credentials.
    - DELETE /user - { userId : number } to delete user. (The document won`t be deleted, but the user will have the status "deleted").
    - GET /users - { companyId:number } to get all users from a company.
