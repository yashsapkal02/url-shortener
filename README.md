A full-stack URL Shortening application built using **Next.js**, **MongoDB Atlas**, **JWT Authentication**, and **Mongoose**.  
Users can sign up, log in, create short URLs (with custom alias support), manage their own links, and track click counts.  
Each user sees only their own URLs, ensuring secure multi-user separation.

---

## 📌 Project Title & Short Description
**URL Shortener**  
A cloud-based application that converts long URLs into short, easy-to-share links.  
It includes authentication, dashboards, persistent storage, and modern UI styling.

---

##  Tech Stack Used & Reason for Choice

### **Frontend**
- **Next.js (React Framework)**  
  ✔ Server-Side Rendering  
  ✔ Built-in API routes  
  ✔ Perfect for full-stack apps  
  ✔ Easy deployment on Vercel  

### **Backend**
- **Next.js API Routes (Node.js)**  
  ✔ No need for separate backend  
  ✔ Fast, integrated routing  
  ✔ Better performance and simplicity  

### **Database**
- **MongoDB Atlas**  
  ✔ Cloud-hosted  
  ✔ Scalable  
  ✔ Easy integration with Mongoose  

### **Authentication**
- **JWT (JSON Web Token)**  
  ✔ Stateless auth  
  ✔ Secure token-based login  

### **ORM**
- **Mongoose**  
  ✔ Schema-based  
  ✔ Handles MongoDB operations smoothly  

---

## 🛠 How to Run Locally (Step-By-Step)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/url-shortener.git
cd url-shortener
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env.local` file
Include:

```env
MONGODB_URI="your_mongodb_connection_string"
JWT_SECRET="your_secret_key"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### 4️⃣ Start development server
```bash
npm run dev
```

Open app in browser:
👉 http://localhost:3000

---

## 🧪 How to Run Tests (if any)

This project does not include automated test scripts.  
Manual testing can be done through:

- Browser
- Postman / Thunder Client
- API route testing using CURL

---

## 📸 Screenshots (Recommended)

You may upload:

- Signup Page
- <img width="1364" height="652" alt="signup" src="https://github.com/user-attachments/assets/b6ed563e-d14c-449d-aaa8-18fee8fc1a65" />

- Login Page
- <img width="1366" height="647" alt="login" src="https://github.com/user-attachments/assets/e55e7b5e-75e7-4a7e-bdd9-4ca88542c27f" />

- Dashboard
- <img width="1366" height="653" alt="dashboard" src="https://github.com/user-attachments/assets/14d42be5-e35c-4772-a8e0-45c7bad2bb7f" />

- URL List Table
- <img width="1366" height="652" alt="list" src="https://github.com/user-attachments/assets/dcb03358-1c66-4cd2-940c-e8b7e03ab561" />

- MongoDB Atlas Data View
- 
<img width="1366" height="648" alt="mongodb1" src="https://github.com/user-attachments/assets/3fe3a1b8-84fd-4728-b84e-cddb0b7fe0a6" />
<img width="1366" height="651" alt="mongodb2" src="https://github.com/user-attachments/assets/b572d086-f999-4096-a624-c125125c4f3d" />


---

## 📂 Project Structure

```
url-shortener/
│── pages/
│   ├── index.js
│   ├── login.js
│   ├── signup.js
│   ├── dashboard.js
│   └── api/
│       ├── auth/
│       │   ├── signup.js
│       │   └── login.js
│       └── url/
│           ├── create.js
│           ├── delete.js
│           └── list.js
│
│── models/
│   ├── User.js
│   └── Url.js
│
│── lib/
│   ├── auth.js
│   ├── mongodb.js
│   └── generateCode.js
│
│── styles/
│   └── globals.css
│
└── README.md
```
---

## 👨‍💻 Author

**Yash Sapkal**  
GitHub: https://github.com/yashsapkal02  

---

If you want, I can also create:  
✔ GitHub project description  
✔ Repository topics/tags  
✔ Commit message format  
✔ A professional GitHub profile README  

Just tell me!
