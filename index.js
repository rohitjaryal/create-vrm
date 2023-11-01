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
        shell.exec(`sh bin.sh ${answers["project-name"]}`)
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

