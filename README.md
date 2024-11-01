# Get Me A Chai 🍵
## Description
Get Me A Chai is an open-source platform inspired by Patreon, allowing creators to receive support from their fans through a simple, intuitive donation system. Built with [Next.js](https://nextjs.org/), the application enables users to create personalized pages where supporters can donate using [Razorpay](https://razorpay.com/).

Live Demo: [https://get-me-a-chai-sk.vercel.app](https://get-me-a-chai-sk.vercel.app)

## Table of Contents
- [Project Title](#get-me-a-chai-🍵)
- [Description](#description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

## Features
- 🔐 GitHub Authentication
- 💰 Integrated Razorpay Payment Gateway
- 👤 Personalized User Dashboards
- 🖼️ Customizable Profile and Cover Images
- 📊 Donation Tracking
  - View top 10 donation amounts
  - Track total money raised
- 📝 Easy Profile Management

## Prerequisites
Before you begin, ensure you have met the following requirements:
- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (v9 or later)
- A [GitHub](https://github.com/) account for authentication
- A [Razorpay](https://razorpay.com/) account for payment integration

## Installation
1. Clone the repository
```bash
git clone https://github.com/suryanshkushwaha/project-get-me-a-chai.git
cd project-get-me-a-chai
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file in the root directory with the following variables:
```
GITHUB_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret
NEXT_PUBLIC_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
```

4. Run the development server
```bash
npm run dev
```

## Usage
1. Sign in using GitHub
2. Complete your profile in the dashboard
3. Set up your Razorpay credentials
4. Share your unique page URL with potential supporters
5. Supporters can donate via your personalized page

## Configuration
### Authentication
- Currently supports [GitHub OAuth](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
- Future plans to add more authentication providers

### Payment Integration
- Uses [Razorpay](https://razorpay.com/) for secure payment processing
- Users can configure their Razorpay ID and secret in the dashboard

## Technologies Used
- **Frontend**
  - [Next.js 14](https://nextjs.org/)
  - [React](https://reactjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [React Toastify](https://fkhadra.github.io/react-toastify/introduction)

- **Backend**
  - [Next.js API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)
  - [MongoDB](https://www.mongodb.com/) (via [Mongoose](https://mongoosejs.com/))
  - [NextAuth.js](https://next-auth.js.org/)
  - [Razorpay SDK](https://razorpay.com/docs/payments/server-integration/nodejs/standard/)

- **Authentication**
  - [GitHub OAuth](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
  - [NextAuth.js](https://next-auth.js.org/)

## Contributing
Contributions are welcome! Here's how you can help:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Suggested Improvements
- Add more OAuth providers
- Implement email notifications
- Create analytics dashboard
- Add more customization options

## Acknowledgments
- [Next.js](https://nextjs.org/)
- [Razorpay](https://razorpay.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)

## License
Distributed under the [MIT License](https://opensource.org/licenses/MIT). See `LICENSE` for more information.

## Contact
Your Name - [@sillysurry](https://www.instagram.com/sillysurry/)

Project Link: [https://github.com/suryanshkushwaha/project-get-me-a-chai](https://github.com/suryanshkushwaha/project-get-me-a-chai)

---
**Made with ❤️ and 🍵**