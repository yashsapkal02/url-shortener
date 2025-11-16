🚀 URL Shortener

A full-stack URL Shortening application built using Next.js, MongoDB Atlas, JWT Authentication, and Mongoose.

Users can sign up, sign in, create custom short URLs, view/edit/delete their own links, and track click counts.
Each user only sees their own shortened URLs.
The app includes clean UI styling and secure backend API routes.

📌 Tech Stack
Layer	Technology
Frontend	Next.js (React)
Backend	Next.js API Routes (Node.js)
Database	MongoDB Atlas (Cloud Database)
ORM	Mongoose
Auth	JWT (JSON Web Tokens)
Styling	Custom Global CSS
✨ Features
🔐 Authentication

User Signup (name, email, password)

User Login

Passwords stored securely (hashed)

JWT-based session protection

Protected routes (Dashboard only accessible after login)

🔗 URL Shortening

Create short URLs from any long URL

Optional custom alias (/youtube, /yt, /g, etc.)

Optional label for organization

Auto-generate unique short codes

Redirect handler on domain.com/[shortCode]

Click counter increments on each visit

📊 User Dashboard

Create new short URLs

View list of your URLs with:

Label

Long URL

Short URL

Created date

Click count

Delete any URL you created

Users only see their own URLs (Account-isolated)

📁 Project Structure (meets assignment expectations)
/url-shortener
 ├── pages
 │    ├── api
 │    │    ├── auth
 │    │    │    ├── login.js
 │    │    │    └── signup.js
 │    │    └── url
 │    │         ├── create.js
 │    │         ├── list.js
 │    │         └── delete.js
 │    ├── dashboard.js
 │    ├── login.js
 │    ├── signup.js
 │    └── index.js
 ├── models
 │    ├── User.js
 │    └── Url.js
 ├── lib
 │    ├── mongodb.js
 │    └── auth.js
 ├── public
 ├── styles
 │    └── globals.css
 ├── .env.local
 └── README.md


This structure aligns with:

📌 “Frontend + API + DB + README in one repo”
📌 “Clear file separation and modular backend routes”

⚙️ Local Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/<your-username>/url-shortener.git
cd url-shortener

2️⃣ Install dependencies
npm install

3️⃣ Add environment file

Create .env.local in the project root:

MONGODB_URI=your_mongo_atlas_uri
JWT_SECRET=your_secret_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000

4️⃣ Start development server
npm run dev


The app runs at:
👉 http://localhost:3000

🔀 Redirect Route

When a user visits:

/abc123


It will:

✔ Look up the shortCode
✔ Increase the click counter
✔ Redirect to the long URL

🗄 Database (MongoDB Collections)
users

Contains registered users

name, email, passwordHash, timestamps

urls

Stores user-specific URLs

userId, shortCode, longUrl, label, clicks, timestamps


User → URL relationship is strictly maintained.

🧠 Design Rationale (1 sentence)

The app is designed with clean separation of concerns—API routes handle business logic, MongoDB stores persistent data, and the UI provides a simple, secure interface for managing personal short links.

📬 Submission

Provide your GitHub repo link in the assignment email.
