<p align="center">
  <img src="https://github.com/user-attachments/assets/de1a6a72-3d71-4692-b359-886fa6b9ec66" alt="Project Logo" width="150" height="150">
</p>

<h1 align="center">TipTapLearn</h1>

<p align="center">
  A decentralized, peer-to-peer learning platform designed to connect learners and mentors in real-time, powered by blockchain and Web3 technology.
</p>

---


# TipTapLearn

**TipTapLearn** is a decentralized, peer-to-peer learning platform designed to empower users with seamless and secure access to a wide range of educational resources. Utilizing blockchain technology and a decentralized authentication system, TipTapLearn provides a secure, user-focused platform where users can access lessons, connect with peers, and explore a variety of learning paths. The platform ensures that learning resources are accessible to everyone, with a special focus on privacy, autonomy, and a user-first experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

### 1. **User Authentication and Wallet Integration**
   - **ThirdWeb Authentication**: Decentralized login via ThirdWeb, allowing users to sign in with various authentication providers including Google, GitHub, and wallet-based logins like MetaMask and Coinbase Wallet.
   - **Wallet Options**: Users can choose from multiple wallet options for secure access to the platform, ensuring user autonomy and data privacy.

### 2. **Lesson Management System**
   - **Browse Lessons**: Users can browse and search for lessons by topic, difficulty level, or instructor.
   - **Save and Resume**: Track your learning progress, save lessons, and resume from where you left off.
   - **Peer Reviews and Ratings**: Read and leave feedback on lessons to help others in the community find high-quality content.

### 3. **Personalized Learning Dashboard**
   - **Recommendations**: AI-powered lesson recommendations based on learning history and preferences.
   - **Progress Tracking**: Users can monitor their progress across multiple courses, see which lessons are completed, in-progress, or not started.
   - **Achievement Badges**: Earn badges as you complete lessons and milestones.

### 4. **P2P Learning & Community Interaction**
   - **Direct Messaging and Peer Discussions**: Communicate with peers, participate in lesson discussions, and share resources.
   - **Live Collaboration**: Engage in live collaborative sessions for group studies, code reviews, or Q&A sessions.

### 5. **Secure Document & Note Storage**
   - **Document Storage**: Securely store course certificates, notes, and learning documents on the blockchain.
   - **Zoop Wallet Integration**: A dedicated wallet solution for document and credential management.

### 6. **Engaging and User-Friendly Interface**
   - **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop use.
   - **Dynamic Animations**: Beautiful animations for a more engaging user experience.
   - **Customizable Themes**: Choose from different themes to personalize the platform according to user preferences.

### 7. **Advanced Search and Filter Options**
   - **Search Bar**: Quickly find lessons, topics, and instructors with ease.
   - **Filters**: Filter by difficulty level, topic, or popularity to make finding content easy.

### 8. **Future Development (Planned Features)**
   - **Gamification and Rewards System**: Earn rewards for completing courses, participating in discussions, and contributing resources.
   - **Teacher/Instructor Portal**: A dedicated portal for instructors to upload content, track engagement, and interact with learners.
   - **Enhanced P2P Features**: Decentralized features to support peer-based learning through a trustless review and rating system.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express
- **Blockchain Integration**: ThirdWeb for blockchain and wallet integrations, Zoop Wallet for document storage
- **Database**: MongoDB
- **Hosting**: Vercel (frontend), GCP (backend)
- **Others**: GitHub Actions for CI/CD, Postman for API testing

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following:

- Node.js and npm installed on your local machine
- Git installed
- MongoDB database setup
- ThirdWeb account for authentication integration
- API keys for ThirdWeb and Zoop Wallet

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/rahulkhandait-sde/TipTapLearn.git
   cd TipTapLearn
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   - Create a `.env` file at the root of your project.
   - Add your ThirdWeb API key, Zoop Wallet API key, and MongoDB URI:
     ```plaintext
     THIRDWEB_CLIENT_ID=your_client_id
     ZOOP_WALLET_API_KEY=your_zoop_api_key
     MONGO_URI=your_mongodb_uri
     ```

4. **Run the Application**:
   ```bash
   npm run dev
   ```

5. **Access the Application**:
   - Go to `http://localhost:3000` in your browser to access the platform.

---

## Usage

### User Authentication

- On the sign-up page, users can choose their preferred authentication method (e.g., Google, GitHub, MetaMask).
- ThirdWeb authentication and wallet integration ensure a secure login experience.

### Browsing Lessons

- Navigate through the lesson catalog and select a topic of interest.
- Track progress and leave feedback on lessons to help other users find high-quality content.

### Document Storage

- Users can securely upload certificates, notes, or other documents for easy access and sharing using Zoop Wallet.

### P2P Learning

- Access direct messaging and discussion forums to connect with peers.
- Use live sessions for collaborative learning and group studies.

---

## Contributing

We welcome contributions to improve TipTapLearn! To get started, please follow these steps:

1. **Fork the repository** and clone it locally.
2. **Create a new branch** for each feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes** with clear messages.
4. **Push the branch** to your forked repository:
   ```bash
   git push origin feature-name
   ```
5. **Open a pull request** with a detailed description of your changes.

For major changes, please open an issue first to discuss your ideas.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

- **Project Maintainer**: [Rahul Khandait](https://github.com/rahulkhandait)
- **Email**: rahulkhandait84206@gmail.com
