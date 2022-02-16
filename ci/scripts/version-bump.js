const { program } = require('commander');
const { exec } = require('child_process');

const setPackages = (options) => {
  let bumpType = Object.keys(options)[1];

  options.package.map(option => {
    option
      ? exec(`./libs/${ option }/package.json npm version --${ bumpType } --force`, (error, stdout) => {
        !error
          ? console.log(`You choose a ${ option } bump. Updated to ${ stdout }`)
          : console.log('error: ', error);
        })
      : console.log('Option not specified. Please select an option?');
  });
}

program
  .name('Version Bump')
  .description('Updates package version')
  .version('0.0.0')

program
  .requiredOption('-P, --package [package...]', 'Add package name')
  .option('-M, --major', 'major npm package')
  .option('-m, --minor', 'minor npm package')
  .option('-p, --patch', 'patch npm package')
  .action((options) => {
    setPackages(options);
  })
  .parse();
