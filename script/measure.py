#!/usr/bin/python3

import RPi.GPIO as GPIO
import time
import json
#GPIO.setwarnings(False)
TRIG = 11
ECHO = 12
loopTimes = 10
prev = 0
disList = []

def setup():
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(TRIG, GPIO.OUT)
    GPIO.setup(ECHO, GPIO.IN)

def distance():
    GPIO.output(TRIG, 0)
    time.sleep(0.000002)

    GPIO.output(TRIG, 1)
    time.sleep(0.00001)
    GPIO.output(TRIG, 0)

    while GPIO.input(ECHO) == 0:
        a = 0
    time1 = time.time()
    while GPIO.input(ECHO) == 1:
        a = 1
    time2 = time.time()

    during = time2 - time1
    return during * 340 / 2 * 100

def loop():
    global disList
    prev = distance()
    time.sleep(0.3)
    count = 0
    while count < loopTimes :
        dis = distance()
        if(prev * 1.1 >= dis and prev * 0.9 <= dis) :
            count += 1
            disList.append(dis)
        else :
            count = 0
            disList = []
        prev = dis
        time.sleep(0.3)


def destroy():
    GPIO.cleanup()

setup()
loop()
destroy()
avg = round(sum(disList)/len(disList),2)
data = {
    'distance': avg
}

print("Content-Type: application/json\n")
#print("Content-Type: text/html\n")
print(json.dumps(avg))




