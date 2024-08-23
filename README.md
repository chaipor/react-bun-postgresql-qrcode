# Project CT65 - Simple Web App with QR Login

## Description
This project is a simple web app running on AWS with Docker compose. The app allows users to log in using Username and password and QRCode. Once logged in, the app will display notifications and other information.

## Technologies
- **Backend:** BUN
- **Frontend:** React
- **Database:** PostgreSQL
- **Additional Login:** QRCode


## How to Run
1. **Clone the repository:**
```sh
git clone https://github.com/jinnygym/CT648_Jinny_Final.git

2. **Navigate to the project directory:**
cd CT648_FINAL

3. **Run Docker compose:**
docker-compose build
docker-compose up -d
docker-compose down
docker-compose up -d

4. **Visit the application:**
Home : http://44.223.77.133:3000/
research : http://44.223.77.133:3000/research
History Login : http://44.223.77.133:3000/history

**การทำงานร่วมกัน:**
- ใช้ Docker Compose เพื่อสร้าง environment ที่แยกออกจากกันอย่างชัดเจนสำหรับ Backend (BUN), Frontend (React), และ Database (PostgreSQL) ที่สามารถเริ่มต้นระบบทั้งหมดได้โดยง่าย.

