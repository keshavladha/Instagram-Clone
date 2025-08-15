# 📸 Instagram Mini Clone

A lightweight Instagram-inspired web application where users can create posts with captions and location details, and also delete them in real-time.  
Built with **Node.js**, **Express**, and **EJS** for a clean, simple, and interactive posting experience.

---

## 🚀 Features

- **Create Posts** — Add a caption and location for your post.
- **Delete Posts** — Remove unwanted posts instantly.
- **Real-time UI Update** — Posts update dynamically without refreshing.
- **User-friendly Interface** — Minimal layout inspired by Instagram.
- **In-Memory Storage** — Simple post handling without database.

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Frontend:** HTML, CSS, EJS templates  
- **Other:** Vanilla JavaScript

---

## 📂 Project Structure

```
Instagram-Clone/
│
├── node_modules/       # Installed dependencies
├── public/             # Static assets (CSS, JS, images)
├── views/              # EJS templates for rendering UI
│   ├── index.ejs
│   └── ...
├── index.js            # Main server file
├── package.json        # Dependencies & scripts
├── package-lock.json   # Lock file for npm dependencies
└── README.md           # Documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/keshavladha/Instagram-Clone.git
cd Instagram-Clone
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the server
```bash
node index.js
```
or
```bash
npm start
```

### 4️⃣ Open in browser
Default:
```
http://localhost:8080/cars
```

---

## 📌 Usage

1. **Add a Post:** Enter caption & location → Click **Post**.  
2. **Delete a Post:** Click **Delete** under the post.  
3. **View Feed:** Posts appear instantly in the feed.

---

## 🧩 Future Improvements

- Add database (MongoDB) for persistence.
- User authentication system.
- Mobile UI improvements.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue to discuss your ideas.

---

## 📄 License

This project is licensed under the MIT License.

---

**Author:** [Keshav Ladha](https://github.com/keshavladha)
