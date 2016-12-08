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
		console.log("Folder is missing.\nCreating folder.")
		fs.mkdir(dataFolder)

	}
}

var exec = require('child_process').exec
exec('scp lf14822@icarus.cs.weber.edu:/home/hvalle/submit/cs3030/files/FRED.csv ./fredData', function(err,stdout,stderr){console.log('Folder exists',stdout)})

	



