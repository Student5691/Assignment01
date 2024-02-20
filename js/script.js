// STEP 1 Convert the following highlighted identifiers to Camel Case notation:
// let someMonth
// function theMonth()
// let currentMonth
// let summerMonth
// let myLibraryFunction

// STEP 2 Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.
// let numLit = 4.8
// let strLit = 'hello world'
// let boolLit = true
// let nullLit = null

// STEP 3 Give me two examples of complex / variable expressions.
// let hypotenuse = 5 ** 2 + 3 ** 2
// let fullName = 'Frank' + ' ' + 'Johnson'

// STEP 4 Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.
// var strFirstName, strLastName, strAddress, strCity, strState, strZipCode, intYourAge, strReferralSource, strMayWeContactYou

// STEP 5 Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
// let strMayWeContactYou
// strMayWeContactYou = 'No'
// const strReferralSource = 'Family or friend"
// var intYourAge
// intYourAge = 30

// STEP 6 Create a variable. Add a number and a string and display the coerced result in the browser’s console window.
// let fNameAndAge = 'John' + ' ' + 23
// console.log(fNameAndAge)

// STEP 7 Create two variables. For the first variable, add a Boolean and a string and display the coerced result. For the second variable, add a number and a Boolean and display the coerced result.
// let boolAndStr = false + 'Negative'
// console.log(boolAndStr)
// let intAndBool = 76 + true
// console.log(intAndBool)

// STEP 8 Is the following string literal valid? If not, how would you fix it? let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."'
// No, the apostrophe in the contraction " I'm " causes the program to think the string ends after the " I " in " I'm ". must "escape" the apostrophe using a "\".
// let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
// console.log(someString)

// STEP 9 Create a variable that produces a null value in the console window. Then, create a variable that produces an undefined value in the console window.
// let nullVal = null
// console.log(nullVal)
// let undefVal
// console.log(undefVal)

// STEP 10 Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
// let strLit = 'name'
// let numLit = 32
// let boolLit = true
// let objLit = [1,2,3]
// let undefLit
// console.log(typeof strLit + '\n' + typeof numLit + '\n' + typeof boolLit + '\n' + typeof objLit + '\n' + typeof undefLit)

// STEP 11 Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
// alert('Hello ' + 'Mason Leavitt' + ', welcome to the JavaScript class!')

// STEP 12 Declare a variable called name and set it equal to your name. Substitute your name in the previous alert string with the variable instead.
// let studentName = 'Mason Leavitt'
// alert('Hello ' + studentName + ', welcome to the JavaScript class!')

// STEP 13 Declare a variable called course and set it equal to “JavaScript”. Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
// let studentName = 'Mason Leavitt'
// let course = 'JavaScript'
// alert('Hello ' + studentName + ', welcome to the ' + course + ' class!')

// STEP 14 Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:
// let studentName = 'Mason Leavitt'
// let course = 'JavaScript'
// alert('Hello ' + studentName + '.\nWelcome to the ' + course + ' class!')

// STEP 15 Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.
// let studentName = prompt('Enter your first and last name:')
// let course = 'JavaScript'
// alert('Hello ' + studentName + '.\nWelcome to the ' + course + ' class!')

// STEP 16 Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
// let studentName = prompt('Enter your first and last name:')
// let course = prompt('What course are you taking?')
// alert('Hello ' + studentName + '.\nWelcome to the ' + course + ' class!')

// STEP 17 Declare a variable called x and assign it a value of 10. Declare a variable called y and assign it a value of 20. Display the sum of those two numbers in the console window.
// let x = 10
// let y = 20
// console.log(x+y)

// STEP 18 Declare a variable called x and assign it a value of 20. Add and assign 20 to that variable and display the result in the console window. The result should be 40.
// let x = 20
// x += 20
// console.log(x)

// STEP 19 Declare a variable called x and assign it a value of 20. Multiply and assign 5 to that variable and display the result in the console window. The result should be 100.
// let x = 20
// x *= 5
// console.log(x)

// STEP 20 Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3. Divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.
// let x = 20 % 3
// x /= 1
// console.log(x)

// STEP 21 Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
// let carCost = 30000
// let availableFunds = 45000
// let canAffordCar = carCost <= availableFunds
// console.log(canAffordCar)

// STEP 22 Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
// let numOfGasStationsAlongRoute = 15
// let greatestDistanceBetweenGasStationsMiles = 50
// let fuelCapacity = 12
// let avgMilesPerGallon = 25
// let tripDistanceMiles = 1000
// let canMakeIt = fuelCapacity*avgMilesPerGallon*numOfGasStationsAlongRoute >= tripDistanceMiles && greatestDistanceBetweenGasStationsMiles <= fuelCapacity*avgMilesPerGallon
// console.log(canMakeIt)