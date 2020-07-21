This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Title

Frontend project for the application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

Also note that it is adviseable to run the backend portion of the app first.

### Prerequisites

You need to have nodejs installed on your machine.

```
NodeJS
```
You need to have nodejs installed on your machine. If you don't please go to https://nodejs.org and download the latest version. We need this because we will use `yarn` (package manager) to manage all the dependencies and packages in this project.

```
Terminal
```
We need the terminal to run commands. For unix users, terminals are easily available. For windows users, access either your Windows command line (search > cmd > right-click > run as administrator) OR Windows PowerShell (Search > Powershell > right-click > run as administration)

### Installing

After verifying if the prerequisites are met, here are additional stuff you need to run the project.

Install NodeJS
```
Install nodejs using this link https://nodejs.org. Follow the guide accdg to your OS.
```

Install Git by following the guide in this link.
```
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
```

Setup ssh for your account using the link below (only if you haven't set it up yet)
```
https://docs.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account
```

Go to the git repository
```
https://github.com/aleisley/ta_frontend
```

Clone the repo to a directory of your choosing.
```
$ git clone git@github.com:aleisley/ta_frontend.git
```

Note: you don't have to type the `$` sign. It just signifies that it's the command entered in the command line.


Install yarn package manager.
```
Go here https://classic.yarnpkg.com/en/docs/install/#windows-stable and choose your operating system.
Follow the guide for your OS.
```

### Running the project
Once all essential stuff are installed, go through the ones below to run the project. If successful, it will open a new browser page to http://localhost:3000

In your command line `cd` inside the project directory
```
$ cd <where you saved>/ta_frontend
```

Since yarn is already installed, we want to install all of our node modules.
```
$ yarn install
```

Run the project using yarn
```
$ yarn start run
```

Note: If you're using linux and run into a problem with ENOSPC, do this
```
$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
