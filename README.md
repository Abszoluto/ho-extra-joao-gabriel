
## Pré-requisitos

* Instalar o Firebase CLI tools e o Firebase Emulator suite ([instructions](https://firebase.google.com/docs/emulator-suite/install_and_configure))

## How to use

3. Instalar as dependências utilizando o comando:

    ```bash
    $ npm install
    ```

4.  Executar o Webpack:

    ```bash
    $ npx webpack
    ```
5.  Executar o Firebase Serve:
    
    ```bash
    $ firebase serve --only hosting
    ```


5. Executar o Firebase Emulator:

    ```bash
    $ firebase emulators:start --only auth
    ```