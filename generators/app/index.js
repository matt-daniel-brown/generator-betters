'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the sublime ' + chalk.red('generator-betters') + ' generator!')
    );

    var prompts = [
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option?',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('base'),
      // This.templatePath('dummyfile.txt'),
      // this.destinationPath('dummyfile.txt')
      this.destinationPath('base')
    );
  }

  install() {
    // This.installDependencies();

    console.log(
      chalk.cyan('\n\tAll done!\n\tBetters styles installed to directory ') +
        chalk.magenta.underline.bold('base/')
    );
    console.log(
      chalk.red('\n\tWARNING: YOU MUST FIRST INSTALL BOURBON TO USE THESE STYLES!!!')
    );
    console.log(chalk.underline('\n\tYou have 3 options: '));
    console.log(
      "\n\t\t1. Install using the gem file ('bourbon install',\n\t\tand then import bourbon before importing betters"
    );
    console.log("\t\t2. Install Bourbon via npm ('npm install --save bourbon')");
    console.log("\t\t3. Install via Bower ('bower install --save bourbon')");
  }
};
