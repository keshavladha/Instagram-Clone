# 📸 Instagram Mini Clone

A lightweight Instagram-inspired web application where users can create posts with captions and location details, and also delete them in real-time.  
Built with Node.js, Express, and EJS for a clean, simple, and interactive posting experience.

---

## 🚀 Features

- **Create Posts** — Add a caption and location for your post.
- **Delete Posts** — Remove unwanted posts instantly.
- **Real-time UI Update** — Posts are updated dynamically without refreshing the page.
- **User-friendly Interface** — Simple layout inspired by Instagram for easy navigation.
- **Local Storage** — Data is managed in-memory for simplicity (can be connected to a database).

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, EJS templates
- **Other:** JavaScript (vanilla)

---

## 📂 Project Structure

Instagram-Clone/
│
├── node_modules/ # Installed dependencies
├── public/ # Static assets (CSS, images, client-side JS)
├── views/ # EJS templates for rendering pages
│ ├── index.ejs
│ └── ...
├── index.js # Main server file
├── package.json # Project metadata & dependencies
├── package-lock.json # Lock file for npm dependencies
└── README.md # Documentation (this file)


---



---

## ⚙️ Installation & Setup

Follow these steps to run the project locally on your machine:

### 1️⃣ Clone the repository:
```bash
git clone https://github.com/keshavladha/Instagram-Clone.git
cd Instagram-Clone

2️⃣ Install dependencies:
npm install

3️⃣ Start the server:
node index.js

4️⃣ Open in browser:
http://localhost:8080/cars

📌 Usage

Add a post: Fill in the caption and location fields, then click Post.

Delete a post: Click the Delete button below any post.

View posts: All posts will appear in the feed with their caption and location.

🧩 Future Improvements

Connect to a database (MongoDB, PostgreSQL, etc.) for persistent storage.

Implement user authentication.

Add image uploads to posts.

Improve mobile responsiveness.

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss your ideas.

📄 License

This project is open source and available under the MIT License.

Author: Keshav Ladha

