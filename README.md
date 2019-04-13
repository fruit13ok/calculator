# Calculator
## This is a take home project given by interviewer, user React to build a simple calculator in 1 week.

### outline
Basic calculator has 17 components<br>
1 input field for display only<br>
16 buttons: 0,1,2,3,4,5,6,7,8,9,+,-,*,/,=,DELETE
Each button is reusing the button component, so it can pass value back to parent.
Parent keep a state variable as string tracking all button press.
Calculate base on that string variable.

### 4-10-2019
1. Begin the project with<br>
`create-react-app calculator`
2. Remove default files
3. Create some basic files<br> `index.js`, `components/App.js`, `components/App.css`
4. Start writing<br> `README.md`
5. Create and push to github.
6. Start from front end, build static input and buttons.
7. Build input field only to display string variable trask all button presses, and result.
8. Build button component takes 2 props button text and lift up function to pass button text onClick.

### 4-11-2019
9. Think about how to store input into a math expression, keep it valid, evaluate the expression.
10. Change placeholder curExpression from string to array to store input in operator / operand format.<br>
[123,+,40,-,1]
11. Set some constraints to keep this project simple, only deal with integer input.
12. Google how to eveluate math expression stored in array.<br>
The way is to convert from array to string then use<br>
`eval()`

### 4-12-2019
13. To keep the store math expression valid, created the following condition.
```
if [] empty
    only allow cancat digit 1 to 9, NOT start with 0, nor operator
if not empty
    if last index is digit
        if input is digit
            reassign to that index with new concat string
        if input is +/-*
            push / concat to next index
        if input is =
            array to string, eval string
        if input is DELETE
            pop / slice out last index
    if last index is +/-*
        if input is digit
            push / concat to next index
        if input is +/-*=
            ignore
        if input is DELETE
            pop / slice out last index
```
14. Implement onButtonPressed() to take care input and math expression validation.
15. Test run the calculator, debug, fixed, repeat, it work, stop functional implementation.
16. Start to add some style.
17. Create a grid to wrap the 17 components.
18. Set some colors, which added one more prop 'color' pass to Button child component to set button color.
19. Added Title and user instruction, which changed the way of centering using flexbox.
20. Basic milestone completed. Think about what to do next.