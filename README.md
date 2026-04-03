#  Finance Dashboard UI

##  Overview

This is a Finance Dashboard web application built using React and Tailwind CSS. It allows users to track their financial activities, view transactions, and understand spending patterns through visualizations.

---

##  Features

* Dashboard overview with:

  * Total Balance
  * Total Income
  * Total Expenses

*  Transactions Section:

  * View all transactions
  * Search transactions by category
  * Add new transaction (Admin only)

*  Role-Based UI:

  * Viewer → Can only view data
  * Admin → Can add transactions

*  Insights:

  * Shows highest transaction

*  Data Visualization:

  * Balance trend over time (Line Chart)
  * Category-wise spending breakdown (Pie Chart)

*  Data Persistence:

  * Data is stored in localStorage

---

##  Tech Stack

* React (Vite)
* Tailwind CSS
* Recharts (for charts)
* Context API (state management)

---

##  Project Structure

* `components/` → Reusable UI components
* `pages/` → Dashboard, Transactions, Insights
* `context/` → Global state management

---

##  How to Run the Project

1. Clone the repository:
   git clone https://github.com/jacobhimanshu/Finance-Dashboard-UI.git

2. Navigate to project folder:
   cd Finance-Dashboard-UI

3. Install dependencies:
   npm install

4. Start the development server:
   npm run dev

---

##  Approach

I structured the project into reusable components and used Context API for managing global state such as transactions, user role, and filters. I implemented features like filtering, role-based UI, and dynamic data updates. I also added charts for better visualization of financial data.

---

##  Live Demo (Optional)

https://finance-dashboard-woad-nine.vercel.app/

---


---

##  Author

Himanshu Maurya
