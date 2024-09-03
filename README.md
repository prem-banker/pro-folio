# Pro-folio

**Pro-folio** is an open-source developer portfolio website designed to showcase your skills, projects, and experience in a visually appealing and interactive manner similar to a VSCode window. The website is built using Next.js, React, and Tailwind CSS, with integration for sending emails via EmailJS.

## Features

- **Responsive Design**: Optimized for both mobile and web with a developer-themed layout.
- **Customizable Content**: Easily update your information through `user.json` and `meta.json`.
- **SEO Optimized**: Pre-configured meta tags and Open Graph (OG) images for improved search engine visibility.

## Installation

To set up the portfolio on your local machine, follow these simple steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/prem-banker/pro-folio.git
   cd pro-folio
   ```

2) **Install deps:**

   ```bash
   npm install
   ```

3. **EmailJS Setup:**

- Create an account on EmailJS.
- Create a new service and template following their [docs](https://www.emailjs.com/docs/tutorial/overview/).
- Update the .env.local file with your EmailJS SERVICE_ID, TEMPLATE_ID, and PUBLIC_KEY

4. **Customise your information**

- Update user.json with your personal details, including your name, bio, and social links.
- Update meta.json with information about your tech stack.

5. **Run in local and make necessary changes**
   ```bash
   npm run dev
   ```

## Deployment

Deploy the website on Vercel or any other hosting service by following their deployment process. For Vercel, simply push your repository to GitHub, link your repo to Vercel, and the platform will handle the rest.

## Future enhancements

- Automation: Streamlining the setup process and reducing manual configurations.
- Flexible Design: Providing more options for customization, including themes and layouts.
- Additional Integrations: Potentially adding other third-party services for analytics, additional forms, or content management

## Contributing

I Love that! Feel free to fork the repo and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

Special thanks to [Yanka](https://www.linkedin.com/in/yanka-darelova/) Who is creator of this [design](https://www.figma.com/community/file/1100794861710979147/portfolio-for-developers-concept-v-2). Her open sourcing this design was important motivation for me to open-source my code as well.
