# 💊 Medical Store Management System

A full-stack **Express + MongoDB** web application that allows store managers to manage medicines, track stock, and maintain records securely with authentication and session management.

---

## 🚀 Overview

This system helps a **medical store manager** efficiently handle medicine inventory with features like login authentication, CRUD operations, search, pagination, and stock tracking.

Each user manages **their own medicines**, and all records are stored securely in MongoDB.

---

## ✨ Features

### 🔐 User Authentication

* User Signup with validation
* Secure Login using **bcrypt password hashing**
* Session-based authentication
* Logout functionality

---

### 💊 Medicine Management

* Add new medicines with stock quantity
* Each medicine stores:

  * Name
  * Stock
  * Added date & time
* Edit medicine details
* Delete medicines

---

### ⚠️ Business Rule

* A logged-in user can add **maximum 10 medicines**
* After reaching the limit, an error message is shown

---

### 🔎 Search & Pagination

* Search medicines by name
* Pagination for medicine listing
* Displays newest medicines first

---

### 👤 User-Specific Data

* Each user can only:

  * View their own medicines
  * Manage their own records

---

## 🧠 How It Works

### Authentication Flow

1. User registers → stored in MongoDB
2. Password is hashed using bcrypt
3. Login creates a session
4. Protected routes require login

---

### Medicine Flow

1. User adds medicine → saved with user ID
2. Data is displayed in list page
3. Supports edit, delete, search & pagination

---

## 🗂️ Project Structure

```
MEDICAL STORE MANAGEMENT SYSTEM
│
├── bin/
│   └── www
│
├── models/
│   ├── medicineModel.js
│   └── userModel.js
│
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       └── style.css
│
├── routes/
│   ├── medicines.js
│   └── users.js
│
├── views/
│   ├── addMedicine.ejs
│   ├── editMedicine.ejs
│   ├── error.ejs
│   ├── home.ejs
│   ├── login.ejs
│   ├── medicineList.ejs
│   └── signup.ejs
│
├── app.js
├── package.json
└── package-lock.json
```

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* EJS Template Engine
* Express Session
* Bcrypt (Password Security)
* CSS

---

## ▶️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/medical-store-management.git
cd medical-store-management
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally:

```
mongodb://127.0.0.1:27017/medical_store
```

---

### 4️⃣ Run the Application

```bash
npm start
```

---

### 5️⃣ Open in Browser

```
http://localhost:3000
```

---

## 📸 Screenshots


### 🔐 Login Page

```
<img width="730" height="483" alt="login" src="https://github.com/user-attachments/assets/b77b1220-0c85-41d5-9123-5acb077e65a4" />

```

---

### 🔐 Signup Page

```
<img width="689" height="538" alt="signup" src="https://github.com/user-attachments/assets/1bd39360-8d88-4234-8598-b92e433daa59" />

```

---

### 💊 Medicine List with pagination

```
<img width="1098" height="708" alt="List_with_pagination" src="https://github.com/user-attachments/assets/bbd7aa55-1db1-4a44-ab6c-465f28e015c6" />

```

---

### ➕ Edit Medicine Page

```
<img width="740" height="440" alt="Edit" src="https://github.com/user-attachments/assets/a100fb6e-d196-4002-b1db-a9125776560b" />

```

---
### 🔐 Search 

```
<img width="1116" height="610" alt="Search" src="https://github.com/user-attachments/assets/2751e5ee-2854-498c-80d4-6c32abf49973" />

```

---
### 🔐 Logout Comfirmation

```
<img width="1006" height="695" alt="logout" src="https://github.com/user-attachments/assets/f0fd5f13-9fc7-4775-928d-3a357c1dbb2a" />

```

---

## 🎯 Future Improvements

* REST API version
* Admin dashboard
* Role-based authentication
* Graphical stock analytics
* Cloud deployment

---

## 👨‍💻 Author

Developed as a **Express based Full Stack Web Application Project** using MERN-style architecture principles.

---

## 📜 License

This project is licensed under the **MIT License**.


