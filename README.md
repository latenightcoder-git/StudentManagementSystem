# Student Management System

We developed a **full-stack Student Management System** using **Spring Boot** (backend) and **React with Vite** (frontend).  

- On the **backend**, we created a `Student` entity with fields like **id, name, age, and marks**, and built a **repository → service → controller** flow using **Spring Data JPA** for CRUD operations with **pagination and sorting**.  
- We also seeded sample data into an **H2 in-memory database** and exposed REST APIs:  
  - `GET /students`  
  - `POST /students`  
  - `PUT /students/{id}`  
  - `DELETE /students/{id}`  

- On the **frontend**, we built a **React UI** that allows **adding, editing, updating, deleting, sorting, and paginating students**, styled with a **navbar, logo, gradient background, and colorful buttons**.  

---

## 🛠️ Tech Stack

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)
![H2 Database](https://img.shields.io/badge/H2-004088?style=for-the-badge&logo=h2&logoColor=white)  
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=yellow)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)

---

## 📂 Project Structure

```plaintext
StudentManagementSystem
├── backend-springboot     # Spring Boot backend
├── frontend-react         # React + Vite frontend
├── images                 # Screenshots of the project
└── README.md              # Project documentation
```

---

## ✨ Features

- Add, update, delete, and view student records
- Pagination and sorting of records
- Responsive React frontend with gradient UI
- RESTful APIs with Spring Boot + Spring Data JPA
- H2 in-memory database with sample seed data

---

## 📸 Screenshots

### 📊 Initial Output  
| ![Initial Output](images/IntialOutput.png) |  
|:--:|  
*Displays the initial student records fetched from the H2 database.*  

---

### 🗂️ Sort by Age (Descending)  
| ![Sort by Age](images/AgeDesc.png) |  
|:--:|  
*Students sorted by **age in descending order** using pagination and sorting.*  

---

### 🗂️ Sort by Name (Descending)  
| ![Sort by Name](images/NameDesc.png) |  
|:--:|  
*Students sorted by **name in descending order** dynamically.*  

---

### 🗑️ Delete Record  
| ![Delete Student](images/RecordDeleted.png) |  
|:--:|  
*Student record deleted successfully with updated table view. Srija's Record has been deleted which is why it's not appearing in list of names being printed in descending order...*  

---

### ✏️ Update Student Record   

| ![Updated Record](images/UpdateRecordImg1.png) |  
|:--:|  
*Student that is to be updated ..Here marks will be updated , changed from 96 to 98 .*  

| ![Update Record](images/UpdatedRecordImg.png) |  
|:--:|  
*Student's marks changed.* 

---

### 🆔 ID Description  
| ![ID Description](images/IDDesc.png) |  
|:--:|  
*Table demonstrating student records with ID-based sorting and display.*  

---

### 🛢️ H2 Database View  
| ![H2 Database](images/h2-database.png) |  
|:--:|  
*H2 in-memory database console showing stored student records.*  

---


## 🚀 Getting Started

### Backend (Spring Boot) (or Start from IntelliJ run button)
```bash
cd backend-springboot
mvn spring-boot:run
```

API runs at: [http://localhost:8080](http://localhost:8080)

### Frontend (React + Vite)
```bash
cd frontend-react
npm install
npm run dev
```

App runs at: [http://localhost:5173](http://localhost:5173)


Credits : latenightcoder-git

MIT License

© 2025 Madhuchhanda Das
