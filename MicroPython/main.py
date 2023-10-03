"""
Created by: Jack Eddy
Created on: Oct 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *


# variable for microbit temperature
cookies = 0

display.clear()
display.show(Image.HAPPY)

while True:
    if button_a.is_pressed():
        cookies = cookies + 1
        display.scroll(cookies)
    if button_b.is_pressed():
        cookies = 0
        display.show(cookies)
