# CONCEPS - React App

A multi-page React application built to match the Figma design reference.

## 📁 Folder Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx          # Collapsible sidebar navigation
│   │   ├── TopHeader.jsx        # Header with breadcrumb + icons
│   │   └── DashboardLayout.jsx  # Layout wrapper (sidebar + main)
│   └── shared/
│       └── ProductModal.jsx     # Product detail modal popup
├── data/
│   └── mockData.js              # Mock data (teams, products, users)
├── pages/
│   ├── auth/
│   │   ├── SignIn.jsx           # Sign In page
│   │   ├── SignUp.jsx           # Sign Up page
│   │   └── Verify.jsx          # Phone OTP verification page
│   ├── dashboard/
│   │   ├── Dashboard.jsx        # Main dashboard with stats & charts
│   │   ├── RegistrationForm.jsx # User registration form
│   │   └── List.jsx             # Data table list view
│   └── store/
│       └── StoreGrid.jsx        # Product search results grid
├── styles/
│   └── global.css              # Global CSS (no CSS framework needed)
├── App.js                      # Routes
└── index.js                    # Entry point
```

## 🚀 Pages Implemented

| Route | Page |
|---|---|
| `/signin` | Sign In |
| `/signup` | Sign Up |
| `/verify` | Phone OTP Verification |
| `/dashboard` | Dashboard (stats, chart, teams) |
| `/dashboard/registration` | Registration Form |
| `/dashboard/list` | User List Table |
| `/dashboard/store` | Store - Search Results Grid + Product Modal |

## 🛠️ Setup & Run

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🔗 Navigation Flow

Sign In → OTP Verify → Dashboard → (Sidebar navigation to all pages)

## 📦 Dependencies

- `react` + `react-dom`
- `react-router-dom` - routing
- `recharts` - earnings line chart

No CSS framework required - uses pure CSS with CSS variables.
