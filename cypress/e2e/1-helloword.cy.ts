describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.log("Visita so site")
  });
  it("Typescript Introduction", () => {
    let stringVariable:string = '0';
    let numberVariable:number = 0;
    let booleanVariable:boolean = false;
    let anyVariable:any = 1;

    function addTwoNumbers (a:number,b:number):number{
      return a + b;
    }

    interface User{
      username:string;
      password:string;
    }

    function returnUserInformation(user:User):void{
      console.log("This is the user name" + user.username)
      console.log("This is the password" + user.password)
    }
      
  });
});