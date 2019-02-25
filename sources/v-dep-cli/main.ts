
import './polyfills'
import * as commander from 'commander'
import * as inquirer from 'inquirer'
import chalk from 'chalk'
import RepoManager from './sources/managers/RepoManager'



commander
    .version('1.0.0')
    .description('V-DEP CLI');

commander
    .command('repo')
    .description("Manage the V-DEP local repos")
    .option('ls', "List loca repos")
    .action(() => {
        console.log(chalk.yellow('=========*** REPO List ***=========='))
        let repoManager = new RepoManager();
        repoManager.executeLS();
    })


if(!process.argv.slice(2).length/* || !/[arudl]/.test(process.argv.slice(2))*/) {
    commander.outputHelp()
    process.exit()
}
commander.parse(process.argv)