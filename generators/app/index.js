'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay('Welcome to the sublime ' + chalk.red('generator-betters') + ' generator!')
    );

    const prompts = [
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
      // this.templatePath('dummyfile.txt'),
      // this.destinationPath('dummyfile.txt')
      this.destinationPath('base')
    );
  }

  install() {
    // this.installDependencies();
    console.log(chalk.cyan("\n\tAll done!\n\tBetters styles installed to directory ") + chalk.magenta.underline.bold("base/"));
    
  }
};
