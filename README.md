
![85d18137-2e3b-43cb-89d3-674553bf2c35](https://github.com/Alvaromoreiro/nodemailer-template/assets/57747327/f3060b71-d370-479c-a66a-0b600ecc6aed)

# Nodemailer Template
This repository contains a template for using Nodemailer, a module for Node.js applications that allows you to send emails easily.

## Usage

To use this project, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Create a `.env` file in the root directory of the project.
4. Populate the `.env` file with the following configuration:

```env
    PORT=8080
    EMAIL_USER='your-email'
    EMAIL_PASSWORD='your-password'
    EMAIL_SERVICE='your-service'
    EMAIL_HOST='your-host'
    EMAIL_PORT=587
```
You can find the appropriate values for `EMAIL_SERVICE` and `EMAIL_HOST` in the [Nodemailer documentation](https://community.nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/).

5. Customize the email templates and configurations according to your requirements.
6. Run the application using `npm run dev`.

## Contributing

Feel free to contribute to this project by submitting pull requests or reporting issues.

## Gmail

1. Go to your Google account at https://myaccount.google.com/
2. Go to Security
3. Choose 2-Step Verification - here you have to verify yourself, in my case it was with phone number and a confirmation code send as text message. After that you will be able to enabled 2-Step Verification
4. Visit https://myaccount.google.com/apppasswords to create your app.
5. Put a name e.g. nodemailer to your app and create it.
6. A modal dialog will appear with the password. Get that password and use it in your code.

## License

This project is licensed under the [MIT License](LICENSE).
