#!usr/bin/nodejs
/*
 * #This is a javascript file
 *
 * #Owner: Lance Freund
 * #email: lancefreund@mail.weber.edu
 * #Organization: Weber State University
 *
 *
 * #Write source code below this text*/

usage1 = 'lance_freund_hw9.js [-c customerDataFolder] [-f dataFile]'
usage2 = 'Both arguments are required'

// arguments passed by user
var dataFolder = process.argv[3]
var dataFile = process.argv[5]

//var fso = require('fso').default
//var FileSystemObject = require('fso').FileSystemObject

//Erase these print statments at the end before submission of assignment
console.log(dataFolder) // This should equal -c
console.log(dataFile) // This should equal customerDataFolder


if(process.argv[2] != "-c" || ! process.argv[3])
{
	console.log(usage1)
	console.log(usage2)
}
else if(process.argv[4] != "-f" || ! process.argv[5])
{
	console.log(usage1)
	console.log(usage2)
}
else
{
	var fs = require('fs')
	if(fs.existsSync(dataFolder))
	{
		console.log("Folder exists!")
	}
	else
	{
		console.log("Customer " + dataFolder + " folder is missing.\nCreating folder.")
		fs.mkdir(dataFolder)
		fs.mkdir(dataFolder + '/01')
		fs.mkdir(dataFolder + '/02')
		fs.mkdir(dataFolder + '/03')
		fs.mkdir(dataFolder + '/04')
		fs.mkdir(dataFolder + '/05')
		fs.mkdir(dataFolder + '/06')
		fs.mkdir(dataFolder + '/07')
		fs.mkdir(dataFolder + '/08')
		fs.mkdir(dataFolder + '/09')
		fs.mkdir(dataFolder + '/10')
		fs.mkdir(dataFolder + '/11')
		fs.mkdir(dataFolder + '/12')

	}
}

var date = new Date()

var day = date.getDate()
var month = date.getMonth() + 1
var year = date.getFullYear()

if(day.length != 2)
{
	day = '0' + day
}else
{
	day = day
}

if(month.length < 2)
{
	month = '0' + month
}else
{
	month = month
}

exdate = year + '-' + month + '-' + day

var exec = require('child_process').exec
exec('scp lf14822@icarus.cs.weber.edu:/home/hvalle/submit/cs3030/files/FRED.csv ./' + dataFolder + '/' + month + '/' + dataFile + '.' + exdate, function(err,stdout,stderr){console.log('Getting file from customer server',stdout)})

//exec('cp ./fredData/12/FRED.csv ./fredData/12/FRED.csv.'+exdate, function(err,stdout,stderr){console.log('File located',stdout)})
//

console.log(exdate)
