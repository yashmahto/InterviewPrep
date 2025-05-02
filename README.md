# 🤖 AI Mock Interview Agent

A Next.js-based AI agent that conducts mock interviews using **Vapi (Voice Agent API)** and **Firebase**. Users can simulate real interview environments, receive AI-generated questions, record answers via voice, and get constructive feedback to improve.

---

## ✨ Features

- 🎙️ Real-time voice interviews using [Vapi.ai](https://vapi.ai)
- 📄 Dynamic AI-generated questions (HR, Technical, Behavioral)
- 🗣️ Voice input and response handling
- 🔐 User authentication with Firebase Auth
- 🗃️ Interview data saved in Firestore
- 📊 Detailed feedback and improvement suggestions after each session
- 🌐 Built with Next.js and React

---

## 📚 Tech Stack

| Technology | Purpose                    |
|------------|----------------------------|
| Next.js    | Frontend + Server-side Logic |
| Vapi       | Voice AI Interview Agent   |
| Firebase   | Auth + Firestore Database  |
| React      | UI Components              |
| TailwindCSS| Styling                    |

---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/ai-mock-interview-agent.git
cd ai-mock-interview-agent

```

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

NEXT_PUBLIC_VAPI_API_KEY=your_vapi_key

npm run dev


