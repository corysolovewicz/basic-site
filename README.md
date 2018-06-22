# basic-test

This is a sample Grommet application for reference.

To run this application, execute the following commands:

  1. Install NPM modules

    ```command
    $ npm install (or yarn install)
    ```

  2. Start the front-end dev server:

    ```command
    $ npm run dev
    ```
    or
    ```command
    NODE_ENV=production grommet pack
    ```

  3. Create the app distribution to be used by a back-end server

    ```command
    $ npm run dist

    ```
    or
    ```command
    $ NODE_ENV=production grommet pack

    ```

  4. Test and run linters:

    ```command
    $ npm test
    ```
    or
    ```command
    grommet check
    ```
