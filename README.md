# This is just an example repo to test flow export from a package

Even though they're under the same directory `packages`, this is not a monorepo.

Assume that they live in different repo.

### How do I test it?

* Run `npm install` in `my-app` directory.
* Run `npm run flow` and make sure there is no error.

### How do I deliver updated changes into `my-app` from `my-library`?

* First time only, run `npm install` in `my-library` directory.
* Make any changes.
* `npm run transpile && npm pack`.
* Go to `my-app` directory and run `npm install --save ../my-library/ardo-test-library-0.0.0.tgz` (or you could just do `rm -rf node_modules && npm install` for simplicity)
* Then run `npm run flow` under `my-app` directory to make sure everything works.
