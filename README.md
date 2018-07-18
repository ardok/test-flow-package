# This is just an example repo to test flow export from a package

Even though they're under the same directory `packages`, this is not a monorepo.

Assume that they live in different repo.

### How do I test it?

* Run `npm install` in `my-library` directory.
* Make any changes you want in `my-library`.
* Once you're done, do `npm run flow` in `my-library` directory to make sure there's nothing funky there.
* Do `npm run transpile && npm pack`.
* (this would be done best if you have 2 terminal window) Go to `my-app` directory and run `npm install --save ../my-library/ardo-test-library-0.0.0.tgz`
* Then run `npm run flow` under `my-app` directory to make sure everything works.

### How do I deliver updated changes into `my-app` from `my-library`?

You just need to do the exact same thing like above.

Run `npm run transpile && npm pack` in `my-library` directory. It will produce updated `.tgz` file.

Running `npm install --save ../my-library/ardo-test-library-0.0.0.tgz` in `my-app` directory will replace the old one with the newest `.tgz` file.
