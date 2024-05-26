
# PizzasOnly Price Calculator

This price calculator application is intended for authorized use by Gelos Enterprises' clients, specifically PizzasOnly.


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)



## Usage Statement


## Authors

- Dang Pham

GitHub (from my private gmail): [@DDN741](https://github.com/DDN741)


## License

Csv is open-sourced software licensed under the MIT License:

[MIT](https://choosealicense.com/licenses/mit/)


## Version and Date Information

- Version: 1.0
- Date: 25-May-2024
## Installation

Install my-project with npm

To install and run the Price Calculator application, please follow these steps:

1. **Clone the Repository:**

Open your terminal or command prompt and run the following command to clone the repository:

```bash
  git clone https://github.com/DDN741/pizzasonly-price-calculator.git
```

2. **Navigate to the Project Directory:**

Change to the directory where the project was cloned:

```bash
  cd pizzasonly-price-calculator
```

3. **Open Your Browser to page "PizzasOnly ordering form"**

After you done step 2, you can see in Command Prompt's Screen, with the line: 
"C:\..\..\pizzasonly-price-calculator>"

You coppy that line "C:\..\..\pizzasonly-price-calculator>", but not the character ">".

==> So the copy correct line is this one: "C:\..\..\pizzasonly-price-calculator".

Now, open File Explorer, 

Click to the Address Bar, Delete empty that Bar and paste the copy correct line to Bar.

Click Enter.

Now, we will at Folder "pizzasonly-price-calculator"

Click File **"order_form.html"**

## Special instructions
**! Node.js App**

- Verify that you computer has Node.js App.

- If you don't have, you need to download Node.js App: [Node.js](https://nodejs.org/)

**!! Alternative: Open Browser by Command Prompt:**

- Install my-project with npm

- To install and run the Price Calculator application, please follow these steps:

1. **Clone the Repository:**

- Open your terminal or command prompt and run the following command to clone the repository:

```bash
  git clone https://github.com/DDN741/pizzasonly-price-calculator.git
```

2. **Install Dependencies:**

- Install concurrently as a development dependency:

```bash
  npm install concurrently --save-dev
```

- Install http-server Globally:

```bash
  npm install -g http-server
```

3. **Check file 'package.json':**

- If you already done the Installation above, you can go to pizzasonly-price-calculator folder.
- Verify that there is a 'package.json' file in the 'pizzasonly-price-calculator' directory.

***If you don't have the 'package.json'** 

- You can create one by running the following command in the pizzasonly-price-calculator directory:

```bash
  npm init -y
```
- It line in Command Prompt is exacly like this below: 

"C:\Users\ACER\pizzasonly-price-calculator>npm init -y"

- This will generate a basic package.json file, in Folder.

***Example 'package.json' File:**

```bash
{
  "name": "pizzasonly-price-calculator",
  "version": "1.0.0",
  "description": "",
  "main": "linked.js",
  "scripts":   {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/DDN741/pizzasonly-price-calculator.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/DDN741/pizzasonly-price-calculator/issues"
  },
  "homepage": "https://github.com/DDN741/pizzasonly-price-calculator#readme"
}
```

****The correct 'package.json' File need for this project:**
```bash
{
  "name": "pizzasonly-price-calculator",
  "version": "1.0.0",
  "description": "A price calculator for PizzasOnly promotional sales.",
  "main": "linked.js",
  "scripts": {
    "start": "concurrently \"npx http-server -c-1 -o order_form.html\" \"npm run server\"",
    "server": "node linked.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/DDN741/pizzasonly-price-calculator.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/DDN741/pizzasonly-price-calculator/issues"
  },
  "homepage": "https://github.com/DDN741/pizzasonly-price-calculator#readme"
}
```
4. **Navigate to the Project Directory:**
- Go to Command Prompt

- Change to the directory where the project was cloned:
```bash
    cd price-calculator
```
5. **Open the Application in Your Browser:**
- Start with the following command:
```bash
    npm start
```
- or:
```bash
    npx http-server -c-1 -o order_form.html
```
