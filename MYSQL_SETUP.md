# MySQL Setup Guide for Vidhya Code Gurukul

## Step 1: Install MySQL (if not already installed)

### macOS
```bash
brew install mysql
brew services start mysql
```

### Windows
Download and install from: https://dev.mysql.com/downloads/mysql/

### Linux
```bash
sudo apt-get install mysql-server
sudo systemctl start mysql
```

## Step 2: Create Database and Tables

1. Open MySQL terminal:
```bash
mysql -u root -p
```

2. When prompted, enter your MySQL password (or press Enter if no password)

3. Copy and paste the contents of `database/schema.sql` to create tables:
```sql
CREATE DATABASE IF NOT EXISTS vidhya_code_gurukul;
USE vidhya_code_gurukul;

CREATE TABLE IF NOT EXISTS contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  course_interest VARCHAR(100),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## Step 3: Update Configuration

### Frontend (.env)
Update `/Users/chetansolanki/Downloads/project 2/.env`:
```
VITE_DB_HOST=localhost
VITE_DB_USER=root
VITE_DB_PASSWORD=your_mysql_password
VITE_DB_NAME=vidhya_code_gurukul
VITE_DB_PORT=3306
VITE_API_URL=http://localhost:5000
```

Replace `your_mysql_password` with your actual MySQL password.

### Backend (`server/.env`)
Update `/Users/chetansolanki/Downloads/project 2/server/.env`:
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=vidhya_code_gurukul
DB_PORT=3306
```

## Step 4: Install Server Dependencies

```bash
cd server
npm install
```

## Step 5: Run the Application

### Terminal 1 - Start Backend Server
```bash
cd server
npm run dev
```
Should see: `Server running on http://localhost:5000`

### Terminal 2 - Start Frontend (already running on localhost:5173)
The frontend is already running from earlier setup.

## Step 6: Test the Form

1. Open http://localhost:5173 in your browser
2. Click "Join Free Demo" button
3. Fill in the form and submit
4. Check if data is saved in MySQL

## Verify Data in MySQL

Open MySQL and run:
```bash
mysql -u root -p vidhya_code_gurukul
SELECT * FROM contact_submissions;
```

## Troubleshooting

### Error: "Cannot connect to MySQL"
- Check if MySQL is running: `mysql -u root -p`
- Verify credentials in `.env` and `server/.env`
- Check if port 3306 is available

### Error: "CORS error"
- Make sure backend is running on port 5000
- Check `VITE_API_URL` in frontend `.env`

### Error: "Module not found"
- Run `npm install` in the server directory
- Make sure you're in the correct directory

## API Endpoints

- `POST /api/demo-request` - Submit a demo request
- `GET /api/demo-requests` - Get all demo requests
- `GET /api/demo-requests/:id` - Get a specific demo request
- `GET /health` - Health check endpoint
