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

## License

This project is licensed under the [MIT License](LICENSE).
