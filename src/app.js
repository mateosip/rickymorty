import yargs from 'yargs';
import {searchID,list,listAlives,listDead,getURL} from './utils';

const baseURL = "https://rickandmortyapi.com/api/";
const URLcharacters = `${baseURL}${"character"}`;


const results = [];
yargs.command({
    command: 'list',
    describe: 'list all the characters',
    builder: {
        pag: {
            describe: 'list the characters',
            demandOption: false,
            type: 'number',
        },
    },
    handler: function(args){
       list(URLcharacters,args.pag);
    }
})
yargs.command({
    command: 'listAlives',
    describe: 'list all the alive characters',
    builder: {
        pag: {
            describe: 'list the alives characters',
            demandOption: false,
            type: 'number',
        }
    },
    handler: function(args){
       listAlives(URLcharacters,args.pag);
    }
})
yargs.command({
    command: 'listDead',
    describe: 'list all the dead characters',
    builder: {
        pag: {
            describe: 'list the dead characters',
            demandOption: false,
            type: 'number',
        }
    },
    handler: function(args){
       listDead(URLcharacters,args.pag);
    }
})
yargs.command({
    command: 'searchID',
    describe: 'shows a determinated character',
    builder: {
        id: {
            describe: 'shows a determinated character',
            demandOption: true,
            type: 'number',
        }
    },
    handler: function(args){
       searchID(URLcharacters,args.id);
    }
})

yargs.command({
    command: 'getURL',//This is the function which search by name
    describe: 'shows a determinated character',
    builder: {
        name: {
            describe: 'shows a determinated character',
            demandOption: true,
            type: "string",
        }
    },
    handler: function(args){
       getURL(URLcharacters,results, args.name);
    }
})

yargs.parse();
