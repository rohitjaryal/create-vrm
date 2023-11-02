#!/usr/bin/env node
import shell from "shelljs";
import inquirer from 'inquirer';

const prompt = inquirer.createPromptModule();

const questions=[
    {
        type: 'input',
        name: 'project-name',
        message: 'What should be the name of project?',
        validate:(value)=>{
            return !!value;
        }
    }
]
const answers=[];

prompt(questions,answers)
    .then((answers) => {
        const PROJECT_NAME=answers["project-name"];

        // Code to clone repo and setup project
        if (!shell.which('git')) {
            shell.echo('Sorry, this script requires git');
            shell.exit(1);
        }

        shell.mkdir(PROJECT_NAME);
        shell.cd(PROJECT_NAME);
        shell.exec("git clone https://github.com/rohitjaryal/scaffold-vrm.git",()=>{
            shell.cp("-r","./scaffold-vrm/.",`../${PROJECT_NAME}/`);
            shell.rm("-rf","./scaffold-vrm/");
            shell.rm("-rf",".git");
            console.info(`Finished setting up ${PROJECT_NAME}`)
        });

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error(error);
            // Prompt couldn't be rendered in the current environment
        } else {
            console.error(error);
            // Something else went wrong
        }
    });

