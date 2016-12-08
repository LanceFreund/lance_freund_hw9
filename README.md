# lance_freund_hw9
Final Project. Redo bash assignment 2 (bash module 3) in javascript using Nodejs

---------------------------------Installing Node js--------------------------------
I installed node js from their website by using option 2:
http://www.hostingadvice.com/how-to/install-nodejs-ubuntu-14-04/

Option 2 steps:
To install Node.js, type the following command in your terminal:
1. sudo apt-get install nodejs
Then install the Node package manager, npm:
2. sudo apt-get install npm
Create a symbolic link for node, as many Node.js tools use this name to execute.
3. sudo ln -s /usr/bin/nodejs /usr/bin/node
Now we should have both the Node and npm commands working:
$ node -v
v0.10.25

$ npm -v
1.3.10

---------------------------------Running node js .js files-------------------------

To call the program type:
node [filename.js]

for my script it's:
node lance_freund_hw9.js

this will execute the file.

------------------------------------ Script Description ---------------------------

This .js script accepts 2 arguments [-c customerFolder -f customerFile]

Once both arguments are accepted, the script checks to see if the folder currently exists.

If the folder exists it copies the file from lf14822@icarus.cs.weber.edu:/home/hvalle/submit/cs3030/files/
to the appropriate folder for the current month folder and appends the filename with a date added to the end.

If the folder doesn't exist it builds the customer a folder with 12 subfolders (one for each month) 
and copies the file from lf14822@icarus.cs.weber.edu:/home/hvalle/submit/cs3030/files/ to the appropriate
folder for the current month folder that was just created and appends the filename with a date added to the end.

