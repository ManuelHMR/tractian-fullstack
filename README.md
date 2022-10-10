# tractian-fullstack

Backend

user endpoints:
  - POST /user { name: string, compayId: number } to create a user.
  - GET /user { userId: number } to get a user information.
  - PUT /user { Work In Progress } to change a user credentials.
  - DELETE /user { userId : number } to delete user. (The document won`t be deleted, but the user will have the status "deleted").
  - GET /users { companyId:number } to get all users from a company.
