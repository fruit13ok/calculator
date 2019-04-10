# Calculator
## This is a take home project given by interviewer, user React to build a simple calculator in 1 week.

### outline
Basic calculator has 17 components<br>
1 input field for display<br>
16 buttons: 0,1,2,3,4,5,6,7,8,9,+,-,*,/,=,clear
Each button is reusing the button component, so it can pass value back to parent.
Parent keep a state variable as string tracking all button press.
Calculate base on that string variable.

### 4-10-2019
1. Begin the project with<br>
`create-react-app calculator`
2. Remove default files
3. Create some basic files `index.js`, `components/App.js`, `components/App.css`
4. Start writing `README.md`
5. Create and push to github.
6. Start from front end, build static input and buttons.
7. Build input field only to display string variable trask all button presses, and result.
8. Build button component takes 2 props button text and lift up function to pass button text onClick.
