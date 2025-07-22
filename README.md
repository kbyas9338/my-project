# 🚀 React Role-Based Protected Routes App  

An interactive **ReactJS application** demonstrating **role-based routing, reusable components, and data visualization**.  
Built with **React Router v6**, **Formik**, and **Bootstrap**, this app is perfect for learning or showcasing **authentication-based navigation** in React.  

![React](https://img.shields.io/badge/React-18-blue?logo=react)  
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0-purple?logo=bootstrap)  
![License](https://img.shields.io/badge/License-MIT-green)  
![Stars](https://img.shields.io/github/stars/kbyas9338/my-project?style=social)  

---

## 🌟 Features  

✅ **Role-Based Access Control** (Admin/User) using a custom `ProtectedRoute`  
✅ **Dynamic Navigation** based on user role  
✅ **Interactive Components**  
- 📝 **Formik Form** – Form handling with validations  
- 🎨 **Color Selector** – Choose and apply colors dynamically  
- 🔢 **Number Color Changer** – Changes number colors interactively  
- 👤 **User Context** – React `useContext` example  
- 📄 **Pagination** – Client-side pagination  
- 📊 **Charts & Dashboard** – Admin-only visualization  
✅ **404 Page Not Found** handling  
✅ **Responsive Design** with Bootstrap 5  

---

## 🛠️ Tech Stack  

- **React** (18+)  
- **React Router DOM (v6)**  
- **Formik** (Form handling)  
- **Bootstrap 5** (UI styling)  

---

## 📂 Project Structure  

```

src/
│── App.js                  # Main app with routing and role-based navigation
│── App.css                 # Custom styles
│── MyForm.js               # Formik form component
│── ColorSelector.js        # Color selection feature
│── NumberColorChanger.js   # Number color-changing component
│
├── Components/
│   ├── ProtectedRoute.js   # Role-based route protection logic
│   ├── UserComponent.js    # Context API example
│   ├── Pagination.js       # Pagination component
│   ├── Chart.js            # StackBars chart
│   ├── Dashboard.js        # Dashboard for admin
│
└── index.js                # React entry point

```

---

## 🚦 Role-Based Access Table  

| Page/Feature         | Admin | User |
|-----------------------|:-----:|:----:|
| Formik Form          | ✅    | ✅   |
| Subscription (Color Selector) | ✅    | ✅   |
| Color Change Number  | ✅    | ❌   |
| UseContext Example    | ✅    | ❌   |
| Pagination           | ✅    | ❌   |
| Chart Visualization  | ✅    | ❌   |
| Dashboard            | ✅    | ❌   |

---

## ⚡ Getting Started  

### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/kbyas9338/my-project.git
cd my-project
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the App

```bash
npm start
```

Open **[http://localhost:3000](http://localhost:3000)**

---

## 🔑 Changing Roles

In **`App.js`**, update the role:

```javascript
const [role, setRole] = useState("admin"); // Change to "user" or "admin"
```

---

## 📬 Contact

👨‍💻 **Author**: Balaji Yaswanth Kadali
🐙 **GitHub**: [@kbyas9338](https://github.com/kbyas9338)
🔗 **Portfolio**: *(Coming Soon)*

---

🔥 **If you like this project, don’t forget to give it a ⭐ on GitHub!**
