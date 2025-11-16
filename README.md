# URL Shortener

Simple URL Shortener built with **Next.js** and **MongoDB Atlas**.  
Implements signup/login, user dashboard to create short URLs (custom alias supported), persistent storage, and redirect functionality.

## Tech stack
- Frontend & API routes: **Next.js**
- Database: **MongoDB Atlas** (hosted)
- Authentication: **JWT**
- ORM: **Mongoose**
- Fetch caching/usage: **SWR** (optional)

## Features
- Signup & Login (name, email, password)
- Dashboard to create short URLs (custom alias/label supported)
- List of user URLs: Label, Long URL, Short URL, Created At, Clicks
- Delete URL
- Short URL redirect handler that increments click count
- All user URLs are separated by account (users only manage their own URLs)

## Setup (local)
1. Clone the repo:
   ```bash
   git clone https://github.com/<your-username>/<repo>.git
   cd url-shortener
