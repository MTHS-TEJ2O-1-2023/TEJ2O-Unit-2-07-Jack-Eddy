/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Oct 2023
 * This program is a microbit version of cookie clicker
*/

// variables
let cookies: number
cookies = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// add cookie
input.onButtonPressed(Button.A, function () {
  basic.showNumber(cookies) 
  cookies = cookies + 1
  })

// reset cookies
input.onButtonPressed(Button.B, function () {
  cookies = 0
  basic.showNumber(cookies)
})
