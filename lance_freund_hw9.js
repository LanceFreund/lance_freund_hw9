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
dataFolder = process.argv[3]
dataFile = process.argv[5]

//Erase these print statments at the end before submission of assignment
console.log(dataFolder) // This should equal -c
console.log(dataFile) // This should equal customerDataFolder

/*
if (dataFolder == null || process.argv[2] != '-c')
{
console.log(usage1)
console.log(usage2)
}
*/

if(process.argv[2] != "-c" || ! process.argv[3])
{
	console.log(usage1)
	console.log(usage2)
}

if(process.argv[4] != "-f" || ! process.argv[5])
{
	console.log(usage1)
	console.log(usage2)
}




