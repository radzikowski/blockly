﻿'use strict';

goog.provide('Blockly.Arduino');
goog.require('Blockly.Generator');

var profile = {
	microbit: {
	    description: "micro:bit",
	    BUILTIN_LED: 2,
		picture : "media/microbit.jpg",
		dropdownPWM: [["P0", "pin0"],["P1", "pin1"],["P2", "pin2"],["P3", "pin3"],["P4", "pin4"],["P5", "pin5"],["P6", "pin6"],["P7", "pin7"],["P8", "pin8"],["P9", "pin9"],["P10", "pin10"],["P11", "pin11"],["P12", "pin12"],["P13", "pin13"],["P14", "pin14"],["P15", "pin15"],["P16", "pin16"],["P19", "pin19"],["P20", "pin20"]],
		dropdownAnalog: [["P0", "pin0"],["P1", "pin1"],["P2", "pin2"],["P3", "pin3"],["P4", "pin4"],["P10", "pin10"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		cpu: "cortexM0",
		speed: "115200",
		prog: "python",
		usb: "micro USB",
		voltage: "3,3V",
		inout: "20"
	},
	esp32: {
	    description: "ESP32",
	    BUILTIN_LED: 2,
		picture : "media/esp32.jpg",
		dropdownPWM: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		dropdownAnalog: [["A0", "A0"]],
		interrupt: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		upload_arg: "esp32:esp32:esp32",
		cpu: "esp32",
		speed: "115200",
		prog: "python",
		usb: "micro USB",
		voltage: "3,3V",
		inout: "34"
	},
	esp8266: {
	    description: "ESP8266",
	    BUILTIN_LED: 2,
		picture : "media/esp8266.jpg",
		dropdownPWM: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		dropdownAnalog: [["A0", "A0"]],
		interrupt: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		upload_arg: "esp8266:esp8266",
		cpu: "esp8266",
		speed: "115200",
		prog: "python",
		usb: "micro USB",
		voltage: "3,3V",
		inout: "11"
	},
	pyboard: {
	    description: "pyBoard",
	    BUILTIN_LED: 2,
		picture : "media/pyboard.jpg",
		dropdownPWM: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		dropdownAnalog: [["A0", "0"]],
		interrupt: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		cpu: "cortexM4",
		speed: "115200",
		prog: "python",
		usb: "micro USB",
		voltage: "3,3V",
		inout: "29"
	},
	pro8: {
	    description: "Arduino Pro Mini 3.3V atMega328",
	    BUILTIN_LED: 13,
		picture : "media/pro.jpg",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "pro8",
		upload_arg: "arduino:avr:pro:cpu=8MHzatmega328",
		cpu: "atmega328p",
		speed: "57600",
		prog: "arduino",
		usb: "",
		voltage: "3,3V",
		inout: "20"
	},
	pro16: {
	    description: "Dagu RS040 / Pro ou Pro Mini",
	    BUILTIN_LED: 13,
		picture : "media/rs040.jpg",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "pro16",
		upload_arg: "arduino:avr:pro:cpu=16MHzatmega328",
		cpu: "atmega328p",
		speed: "57600",
		prog: "arduino",
		usb: "mini USB",
		voltage: "5V",
		inout: "18"
	},
	atmegang: {
	    description: "Dagu rs027",
	    BUILTIN_LED: 13,
		picture : "media/rs027.png",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "atmegang",
		upload_arg: "arduino:avr:pro:cpu=8MHzatmega168",
		cpu: "atmega8",
		speed: "19200",
		prog: "arduino",
		usb: "mini USB",
		voltage: "5V",
		inout: "18"
	},
	nano: {
	    description: "Arduino Nano (Old Bootloader)",
	    BUILTIN_LED: 13,
		picture : "media/nano.jpg",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "nano",
		upload_arg: "arduino:avr:nano:cpu=atmega328old",
		cpu: "atmega328p",
		speed: "57600",
		prog: "arduino",
		usb: "mini USB",
		voltage: "5V",
		inout: "20"
	},
	nanooptiboot: {
	    description: "Arduino Nano",
	    BUILTIN_LED: 13,
		picture : "media/nano_optiboot.jpg",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "nanooptiboot",
		upload_arg: "arduino:avr:nano",
		cpu: "atmega328p",
		speed: "115200",
		prog: "arduino",
		usb: "mini USB",
		voltage: "5V",
		inout: "20"
	},
	nona4809: {
	    description: "Arduino Nano Every",
	    BUILTIN_LED: 13,
		picture : "media/nano_every.jpg",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		upload_arg: "arduino:megaavr:nona4809",
		cpu: "atmega4809",
		speed: "115200",
		prog: "arduino",
		usb: "mini USB",
		voltage: "5V",
		inout: "20"
	},
	mini: {
	    description: "Arduino Mini",
	    BUILTIN_LED: 13,
		picture : "media/mini.png",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "mini",
		upload_arg: "arduino:avr:mini",
		cpu: "atmega328p",
		speed: "115200",
		prog: "arduino",
		usb: "",
		voltage: "5V",
		inout: "18"
	},
	micro: {
	    description: "Arduino Micro",
	    BUILTIN_LED: 13,
		picture : "media/micro.jpg",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"], ["13", "13"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6(4)", "4"], ["A7(6)", "6"], ["A8(8)", "8"], ["A9(9)", "9"], ["A10(10)", "10"], ["A11(12)", "12"]],
		interrupt: [["3", "3"], ["2", "2"], ["0", "0"], ["1", "1"], ["7", "7"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'], ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "micro",
		upload_arg: "arduino:avr:micro",
		cpu: "atmega32u4",
		speed: "57600",
		prog: "avr109",
		usb: "micro USB",
		voltage: "5V",
		inout: "20"
	},
	yun: {
	    description: "Arduino Yun",
	    BUILTIN_LED: 13,
		picture : "media/yun.jpg",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"], ["13", "13"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6(4)", "4"], ["A7(6)", "6"], ["A8(8)", "8"], ["A9(9)", "9"], ["A10(10)", "10"], ["A11(12)", "12"]],
		interrupt: [["3", "3"], ["2", "2"], ["0", "0"], ["1", "1"], ["7", "7"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "yun",
		upload_arg: "arduino:avr:yun",
		cpu: "atmega32u4",
		speed: "57600",
		prog: "avr109",
		usb: "micro USB",
		voltage: "5V",
		inout: "20"
	},
	leonardo: {
	    description: "Arduino Léonardo",
	    BUILTIN_LED: 13,
		picture : "media/leonardo.jpg",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"], ["13", "13"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		interrupt: [["3", "3"], ["2", "2"], ["0", "0"], ["1", "1"], ["7", "7"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "leonardo",
		upload_arg: "arduino:avr:leonardo",
		cpu: "atmega32u4",
		speed: "57600",
		prog: "avr109",
		usb: "micro USB",
		voltage: "5V",
		inout: "20"
	},
	uno: {
	    description: "Arduino Uno",
	    BUILTIN_LED: 13,	
		picture : "media/uno.jpg",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"], ["11", "11"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "uno",
		upload_arg: "arduino:avr:uno",
		cpu: "atmega328p",
		speed: "115200",
		prog: "arduino",
		usb: "USB B",
		voltage: "5V",
		inout: "18"
	},
	mega:{
		description: "Arduino Méga 2560 / ADK",
	    BUILTIN_LED: 13,
		picture : "media/mega.jpg",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"],["14","14"],["15","15"],["16","16"],["17","17"],["18","18"],["19","19"],["20","20"],["21","21"],["22","22"],["23","23"],["24","24"],["25","25"],["26","26"],["27","27"],["28","28"],["29","29"],["30","30"],["31","31"],["32","32"],["33","33"],["34","34"],["35","35"],["36","36"],["37","37"],["38","38"],["39","39"],["40","40"],["41","41"],["42","42"],["43","43"],["44","44"],["45","45"],["46","46"],["47","47"],["48","48"],["49","49"],["50","50"],["51","51"],["52","52"],["53","53"],["54","54"],["55","55"],["56","56"],["57","57"],["58","58"],["59","59"],["60","60"],["61","61"],["62","62"],["63","63"],["64","64"],["65","65"],["66","66"],["67","67"],["68","68"],["69","69"],["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"], ["A8", "A8"], ["A9", "A9"], ["A10", "A10"], ["A11", "A11"], ["A12", "A12"], ["A13", "A13"], ["A14", "A14"], ["A15", "A15"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"],["14","14"],["15","15"],["16","16"],["17","17"],["18","18"],["19","19"],["20","20"],["21","21"],["22","22"],["23","23"],["24","24"],["25","25"],["26","26"],["27","27"],["28","28"],["29","29"],["30","30"],["31","31"],["32","32"],["33","33"],["34","34"],["35","35"],["36","36"],["37","37"],["38","38"],["39","39"],["40","40"],["41","41"],["42","42"],["43","43"],["44","44"],["45","45"],["46","46"],["47","47"],["48","48"],["49","49"],["50","50"],["51","51"],["52","52"],["53","53"],["54","54"],["55","55"],["56","56"],["57","57"],["58","58"],["59","59"],["60","60"],["61","61"],["62","62"],["63","63"],["64","64"],["65","65"],["66","66"],["67","67"],["68","68"],["69","69"]],
		dropdownPWM: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["44", "44"], ["45", "45"], ["46", "46"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"], ["A8", "A8"], ["A9", "A9"], ["A10", "A10"], ["A11", "A11"], ["A12", "A12"], ["A13", "A13"], ["A14", "A14"], ["A15", "A15"]],
		interrupt: [["21", "21"], ["20", "20"], ["19", "19"], ["18", "18"], ["6", "6"], ["7", "7"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"], ["Rx1/Tx1", "19"], ["Rx2/Tx2", "17"], ["Rx3/Tx3", "15"]],
		build: "mega",
		upload_arg: "arduino:avr:mega:cpu=atmega2560",
		cpu: "atmega2560",
		speed: "115200",
		prog: "wiring",
		usb: "USB B",
		voltage: "5V",
		inout: "70"
	},
	wemosD1miniPro: {
	    description: "LOLIN(WEMOS) D1 mini Pro",
	    BUILTIN_LED: 2,
		picture : "media/wemos-d1-minipro.jpg",
		dropdownAllPins: [["A0", "A0"],["D0", "16"],["D1", "5"],["D2", "4"],["D3", "0"],["D4", "2"], ["D5", "14"], ["D6", "12"], ["D7", "13"], ["D8", "15"], ["RX", "3"], ["TX", "1"]],
		dropdownDigital: [["D0", "16"],["D1", "5"],["D2", "4"],["D3", "0"],["D4", "2"], ["D5", "14"], ["D6", "12"], ["D7", "13"], ["D8", "15"]],
		dropdownPWM: [["D1", "5"],["D2", "4"],["D3", "0"],["D4", "2"], ["D5", "14"], ["D6", "12"], ["D7", "13"], ["D8", "15"]],
		dropdownAnalog: [["A0", "A0"]],
		interrupt: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		upload_arg: "esp8266:esp8266:d1_mini_pro",
		cpu: "esp8266",
		speed: "115200",
		prog: "arduino",
		usb: "micro USB",
		voltage: "3,3V",
		inout: "11"
	},
	OttoESP: {
	    description: "ESP12E NodeMcu",
	    BUILTIN_LED: 2,
		picture : "media/esp8266.jpg",
		dropdownAllPins: [["A0", "A0"],["D0", "16"],["D1", "5"],["D2", "4"],["D3", "0"],["D4", "2"], ["D5", "14"], ["D6", "12"], ["D7", "13"], ["D8", "15"], ["RX", "3"], ["TX", "1"]],
		dropdownDigital: [["D0", "16"],["D1", "5"],["D2", "4"],["D3", "0"],["D4", "2"], ["D5", "14"], ["D6", "12"], ["D7", "13"], ["D8", "15"]],
		dropdownPWM: [["D1", "5"],["D2", "4"],["D3", "0"],["D4", "2"], ["D5", "14"], ["D6", "12"], ["D7", "13"], ["D8", "15"]],
		dropdownAnalog: [["A0", "A0"]],
		interrupt: [["0", "0"], ["2", "2"], ["4", "4"], ["5", "5"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		upload_arg: "esp8266:esp8266:nodemcuv2",
		cpu: "esp8266",
		speed: "115200",
		prog: "arduino",
		usb: "micro USB",
		voltage: "3,3V",
		inout: "11"
	},
	Ottoky: {
	    description: "Ottoky ESP32",
	    BUILTIN_LED: 18,
		picture : "media/esp32.jpg",
		dropdownAllPins: [["IN1", "34"],["IN2", "33"],["IN3", "32"],["IN4", "39"],["IN5", "35"],["OUT1", "23"], ["OUT2", "26"], ["OUT3", "25"], ["OUT4", "5"], ["OUT5", "27"], ["ECHO", "17"], ["TRIG", "16"], ["SDA", "21"], ["SCL", "22"], ["LED", "18"], ["CAP1", "12"], ["CAP2", "14"], ["CAP3", "13"], ["BTN_A", "36"], ["BTN_B", "2"]],
		dropdownDigital: [["IN1", "34"],["IN2", "33"],["IN3", "32"],["IN4", "39"],["IN5", "35"],["OUT1", "23"], ["OUT2", "26"], ["OUT3", "25"], ["OUT4", "5"], ["OUT5", "27"], ["ECHO", "17"], ["TRIG", "16"], ["SDA", "21"], ["SCL", "22"], ["LED", "18"], ["CAP1", "12"], ["CAP2", "14"], ["CAP3", "13"], ["BTN_A", "36"], ["BTN_B", "2"]],
		dropdownPWM: [["IN1", "34"],["IN2", "33"],["IN3", "32"],["IN4", "39"],["IN5", "35"],["OUT1", "23"], ["OUT2", "26"], ["OUT3", "25"], ["OUT4", "5"], ["OUT5", "27"], ["ECHO", "17"], ["TRIG", "16"]],
		dropdownAnalog: [["IN1", "34"],["IN2", "33"],["IN3", "32"],["IN4", "39"],["IN5", "35"],["OUT1", "23"], ["OUT2", "26"], ["OUT3", "25"], ["OUT4", "5"], ["OUT5", "27"], ["ECHO", "17"], ["TRIG", "16"]],
		interrupt: [["IN1", "34"],["IN2", "33"],["IN3", "32"],["IN4", "39"],["IN5", "35"],["OUT1", "23"], ["OUT2", "26"], ["OUT3", "25"], ["OUT4", "5"], ["OUT5", "27"], ["ECHO", "17"], ["TRIG", "16"], ["CAP1", "12"], ["CAP2", "14"], ["CAP3", "13"], ["BTN_A", "36"], ["BTN_B", "2"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		upload_arg: "esp32:esp32:esp32",
		cpu: "esp32",
		speed: "115200",
		prog: "arduino",
		usb: "micro USB",
		voltage: "3,3V",
		inout: "20"
	},
	mkrwifi1010: {
	    description: "Arduino MKR Wifi 1010",
	    BUILTIN_LED: 6,
		picture : "media/arduino-mkr-wifi-1010.jpg",
		dropdownAllPins: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"], ["A6", "A6"], ["A7", "A7"]],
		dropdownDigital: [["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]],
		dropdownPWM: [["3", "3"], ["5", "5"], ["6", "6"], ["9", "9"], ["10", "10"]],
		dropdownAnalog: [["A0", "A0"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"], ["A5", "A5"],["A6", "A6"],["A7", "A7"]],
		interrupt: [["2", "2"], ["3", "3"]],
		serial: [['300', '300'], ['600', '600'], ['1200', '1200'],
                ['2400', '2400'], ['4800', '4800'], ['9600', '9600'],
                ['14400', '14400'], ['19200', '19200'], ['28800', '28800'],
                ['31250', '31250'], ['38400', '38400'], ['57600', '57600'],
                ['115200', '115200']],
		serialPin: [["Rx/Tx", "0"]],
		build: "",
		upload_arg: "arduino:samd:mkrwifi1010",
		cpu: "atmega4809",
		speed: "115200",
		prog: "arduino",
		usb: "micro USB",
		voltage: "5V",
		inout: "20"
	}
};