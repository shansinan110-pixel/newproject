# 🚗 AutoParts World

### 🌎 Global Car Spare Parts Marketplace

AutoParts World is a modern and futuristic **car spare-parts marketplace website** developed using **HTML5, CSS3, and JavaScript**.

The project provides an interactive platform where users can explore automobile spare parts from different countries, search for products, filter products by country, and add products to a shopping cart.

The website was developed with a **futuristic automotive interface** featuring 3D effects, glassmorphism, animated gradients, neon lighting, hover animations, and responsive design.

The application is hosted on **Amazon Web Services (AWS)** using an **EC2 instance**, with **Nginx** configured as the web server to serve the website.

**GitHub Actions** is used as part of the project workflow to automate deployment and updates.

---

# 🌐 Project Architecture

```text
                    ┌──────────────────────┐
                    │       USER           │
                    │  Desktop / Mobile    │
                    └──────────┬───────────┘
                               │
                               │ HTTP / HTTPS
                               ▼
                    ┌──────────────────────┐
                    │        AWS           │
                    │      Cloud           │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │      EC2 Instance    │
                    │      Linux Server    │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │       NGINX          │
                    │    Web Server        │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   AutoParts World    │
                    │ HTML / CSS / JS      │
                    └──────────────────────┘
```

---

# ☁️ AWS Cloud Hosting

The AutoParts World website is hosted using **Amazon Web Services (AWS)**.

An **Amazon EC2 instance** is used as the cloud server where the website files are stored and served to users.

### AWS Components Used

* **Amazon EC2**
* **Linux server**
* **Nginx web server**
* **Security Groups**
* **Public IP address**
* **SSH for server administration**

---

# 🖥️ Amazon EC2

**Amazon EC2 (Elastic Compute Cloud)** provides the virtual server used to host the AutoParts World website.

The EC2 instance acts as the backend hosting environment for the static website.

The general deployment process was:

```text
AWS Account
     ↓
Create EC2 Instance
     ↓
Select Linux AMI
     ↓
Configure Instance
     ↓
Configure Security Group
     ↓
Connect using SSH
     ↓
Install Nginx
     ↓
Upload Website Files
     ↓
Configure Nginx
     ↓
Start Nginx
     ↓
Access Website
```

### EC2 Responsibilities

The EC2 server is responsible for:

* Hosting the website files
* Running the Nginx web server
* Receiving HTTP requests
* Serving HTML, CSS, JavaScript, and image files
* Providing a publicly accessible hosting environment

---

# 🔐 AWS Security Group

The EC2 Security Group controls the network traffic allowed to reach the server.

For a web hosting environment, the required ports include:

| Port | Protocol | Purpose                   |
| ---: | -------- | ------------------------- |
|   22 | TCP      | SSH server administration |
|   80 | TCP      | HTTP web traffic          |
|  443 | TCP      | HTTPS web traffic         |

SSH access on port **22** is used for server administration, while ports **80/443** are used for web traffic.

For production deployments, SSH access should preferably be restricted to trusted IP addresses instead of allowing unrestricted access.

---

# 🌐 Nginx Web Server

**Nginx** is used as the web server for AutoParts World.

Nginx receives requests from users and serves the corresponding website files from the EC2 instance.

The basic architecture is:

```text
Browser
   │
   │ HTTP Request
   ▼
Nginx
   │
   ├── index.html
   ├── style.css
   ├── script.js
   └── images/
           │
           ▼
        Browser
```

### Why Nginx?

Nginx was selected because it is:

* Lightweight
* Fast
* Reliable
* Suitable for static websites
* Easy to configure
* Widely used in production environments
* Capable of handling many simultaneous connections

---

# ⚙️ Nginx Configuration

After installing Nginx on the EC2 server, the website files can be placed in the Nginx web directory.

A typical directory is:

```text
/var/www/html/
```

The project files can be structured as:

```text
/var/www/html/
│
├── index.html
├── style.css
├── script.js
│
└── images/
    ├── brake-pads.jpg
    ├── engine-piston.jpg
    ├── air-filter.jpg
    ├── clutch-plate.jpg
    ├── exhaust.jpg
    └── battery.jpg
```

Nginx then serves `index.html` as the main webpage.

A typical Nginx server configuration can look like:

```nginx
server {

    listen 80;

    server_name _;

    root /var/www/html;

    index index.html;

    location / {

        try_files $uri $uri/ =404;

    }

}
```

After configuration, Nginx can be restarted:

```bash
sudo systemctl restart nginx
```

The service status can be checked using:

```bash
sudo systemctl status nginx
```

---

# 🔑 SSH Server Administration

SSH is used to remotely connect to the AWS EC2 instance.

A typical connection command is:

```bash
ssh -i your-key.pem username@your-server-ip
```

SSH provides secure command-line access to the cloud server.

It can be used to:

* Install Nginx
* Update server packages
* Upload website files
* Modify configuration files
* Restart services
* Check server status
* Troubleshoot deployment issues

---

# 📁 Project Structure

```text
AutoParts-World/
│
├── index.html
│
├── style.css
│
├── script.js
│
├── README.md
│
├── images/
│   ├── brake-pads.jpg
│   ├── engine-piston.jpg
│   ├── air-filter.jpg
│   ├── clutch-plate.jpg
│   ├── exhaust.jpg
│   └── battery.jpg
│
└── .github/
    └── workflows/
        └── deploy.yml
```

---

# 🔧 Spare Parts

The website currently displays automobile spare parts from different countries.

| Spare Part          | Country          |   Price |
| ------------------- | ---------------- | ------: |
| Brake Pads          | 🇯🇵 Japan       |  ₹3,500 |
| Engine Piston       | 🇩🇪 Germany     |  ₹8,500 |
| Air Filter          | 🇺🇸 USA         |  ₹2,200 |
| Clutch Plate        | 🇮🇳 India       |  ₹4,800 |
| Performance Exhaust | 🇮🇹 Italy       | ₹18,000 |
| Car Battery         | 🇰🇷 South Korea |  ₹7,000 |

> **Note:** The country, price, and product information are demonstration data for this project.

---

# 🔍 Search Functionality

The website contains a JavaScript-powered search system.

Users can search for products such as:

```text
Brake Pads
Air Filter
Battery
Exhaust
Clutch
Piston
```

The JavaScript searches through the product cards and displays matching results.

---

# 🌎 Country Filtering

Users can filter spare parts according to country.

Supported countries include:

* 🇯🇵 Japan
* 🇩🇪 Germany
* 🇺🇸 USA
* 🇮🇳 India
* 🇮🇹 Italy
* 🇰🇷 South Korea

This makes it easier for users to explore products based on their country category.

---

# 🛒 Shopping Cart

A basic shopping cart is implemented using JavaScript.

Users can:

* Add products to the cart
* View the number of selected products
* View products added to the cart
* Calculate the total price

The main JavaScript functions are:

```javascript
addToCart()
showCart()
searchParts()
filterCountry()
scrollToParts()
```

---

# 🎨 Futuristic UI

The website uses a futuristic automotive-inspired interface.

### Visual features include:

* ✨ Neon lighting
* 🌌 Animated backgrounds
* 🧊 Glassmorphism
* 🔷 3D product cards
* 🌀 Animated borders
* 💡 Glowing buttons
* 📡 Scanning-line animation
* 🔲 Animated background grid
* 🔍 Glowing search fields
* 🎯 3D hover effects
* 🌈 Animated gradient text
* 📱 Responsive design

---

# 🖼️ Product Images

The real spare-part images are stored in the `images` directory.

```text
images/
│
├── brake-pads.jpg
├── engine-piston.jpg
├── air-filter.jpg
├── clutch-plate.jpg
├── exhaust.jpg
└── battery.jpg
```

They are referenced from `index.html`.

Example:

```html
<img
    src="images/brake-pads.jpg"
    alt="Japanese Brake Pads"
>
```

---

# 💻 Technologies Used

## Frontend

### HTML5

Used to create the structure of the website.

### CSS3

Used for:

* Layout
* Responsive design
* Animations
* 3D transformations
* Glassmorphism
* Gradients
* Neon effects
* Hover effects

### JavaScript

Used for:

* Search
* Country filtering
* Shopping cart
* Dynamic cart counter
* Smooth navigation

---

# ☁️ Cloud & DevOps Technologies

The project also demonstrates basic cloud hosting and deployment concepts.

| Technology     | Purpose                                      |
| -------------- | -------------------------------------------- |
| AWS EC2        | Cloud hosting server                         |
| Linux          | Server operating system                      |
| Nginx          | Web server                                   |
| SSH            | Remote server administration                 |
| Git            | Version control                              |
| GitHub         | Source-code repository                       |
| GitHub Actions | Deployment automation                        |
| GitHub Pages   | Optional repository-based preview/deployment |

---

# 🔄 GitHub Actions

GitHub Actions is used to automate the project workflow.

The workflow file is located at:

```text
.github/workflows/deploy.yml
```

A typical workflow can be configured to run whenever code is pushed to the `main` branch.

Example:

```yaml
name: AutoParts World Deployment

on:

  push:

    branches:
      - main

permissions:

  contents: read

  pages: write

  id-token: write

concurrency:

  group: "pages"

  cancel-in-progress: true

jobs:

  deploy:

    environment:

      name: github-pages

      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest

    steps:

      - name: Checkout Repository

        uses: actions/checkout@v4


      - name: Setup GitHub Pages

        uses: actions/configure-pages@v5


      - name: Upload Website

        uses: actions/upload-pages-artifact@v3

        with:

          path: .


      - name: Deploy Website

        id: deployment

        uses: actions/deploy-pages@v4
```

**If your actual GitHub Actions workflow deploys directly to AWS EC2 instead of GitHub Pages, use your actual workflow here rather than this example.**

---

# 🚀 Deployment Workflow

The overall development and deployment workflow is:

```text
                 Developer
                     │
                     ▼
              Edit Website
                     │
                     ▼
             HTML / CSS / JS
                     │
                     ▼
                  Git
                     │
                     ▼
                 GitHub
                     │
                     ▼
             GitHub Actions
                     │
                     ▼
             Automated Workflow
                     │
                     ▼
                AWS EC2
                     │
                     ▼
                  Nginx
                     │
                     ▼
              Live Website
```

---

# 🔄 Deployment Process Explained

### Step 1 — Development

The website is developed using:

```text
HTML
CSS
JavaScript
```

The project files are maintained locally.

---

### Step 2 — Version Control

Git is used to track changes.

```bash
git init
```

Files are added:

```bash
git add .
```

A commit is created:

```bash
git commit -m "Initial AutoParts World website"
```

---

### Step 3 — Push to GitHub

The project is uploaded to GitHub:

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/yourusername/AutoParts-World.git
```

```bash
git push -u origin main
```

---

### Step 4 — GitHub Actions

After pushing changes, GitHub Actions can automatically start the configured workflow.

The workflow can:

```text
Detect Push
     ↓
Checkout Code
     ↓
Run Deployment Steps
     ↓
Deploy Application
```

---

### Step 5 — AWS EC2

The website is hosted on an AWS EC2 instance.

The server provides the computing environment required to run the web server.

---

### Step 6 — Nginx

Nginx serves the website files stored on the EC2 instance.

When a user requests the website:

```text
User Browser
      ↓
AWS EC2 Public IP
      ↓
Nginx
      ↓
index.html
      ↓
style.css + script.js + images
      ↓
Web Browser
```

---

# 📤 Git Commands

The basic Git commands used for the project are:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial AutoParts World website"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/yourusername/AutoParts-World.git
```

```bash
git push -u origin main
```

For future updates:

```bash
git add .
```

```bash
git commit -m "Update AutoParts World"
```

```bash
git push
```

---

# 🖥️ Local Development

To run the website locally:

### Clone the repository

```bash
git clone https://github.com/yourusername/AutoParts-World.git
```

### Enter the project directory

```bash
cd AutoParts-World
```

### Run the website

Open:

```text
index.html
```

in a web browser.

For development, **Visual Studio Code + Live Server** can also be used.

---

# ☁️ AWS Deployment Summary

The cloud deployment can be summarized as:

```text
1. Create AWS EC2 instance
        ↓
2. Connect to EC2 using SSH
        ↓
3. Update Linux packages
        ↓
4. Install Nginx
        ↓
5. Configure Security Group
        ↓
6. Upload website files
        ↓
7. Place files in Nginx web directory
        ↓
8. Configure Nginx
        ↓
9. Start / restart Nginx
        ↓
10. Access website using EC2 public IP
```

---

# 🔐 Basic Security Considerations

For a real production deployment, additional security should be implemented.

Recommended improvements include:

* Use HTTPS instead of plain HTTP
* Configure SSL/TLS certificates
* Restrict SSH access
* Use strong authentication
* Keep the Linux server updated
* Avoid exposing unnecessary ports
* Use IAM best practices
* Monitor server activity
* Configure backups
* Use a domain name
* Configure a firewall
* Use AWS monitoring services

---

# 📱 Responsive Design

The website is designed to work across:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

Responsive CSS automatically adjusts:

* Navigation
* Product cards
* Hero section
* Search controls
* Country cards
* 3D effects

---

# 🎯 Project Objectives

The main objectives of this project are:

1. Develop a modern automobile spare-parts website.
2. Display spare parts from different countries.
3. Implement product searching.
4. Implement country-based filtering.
5. Implement a basic shopping cart.
6. Create an attractive futuristic UI.
7. Implement CSS animations and 3D effects.
8. Practice JavaScript-based interactivity.
9. Learn Git and GitHub version control.
10. Host a website using AWS EC2.
11. Configure Nginx as a web server.
12. Practice remote Linux server administration using SSH.
13. Understand basic cloud hosting concepts.
14. Use GitHub Actions for deployment automation.
15. Deploy and maintain a live web application.

---

# 🧠 Skills Demonstrated

This project demonstrates practical experience in:

```text
Frontend Development
        │
        ├── HTML5
        ├── CSS3
        └── JavaScript
        │
        ▼
Version Control
        │
        ├── Git
        └── GitHub
        │
        ▼
Cloud Computing
        │
        └── AWS EC2
        │
        ▼
Linux Administration
        │
        └── SSH
        │
        ▼
Web Server
        │
        └── Nginx
        │
        ▼
Automation
        │
        └── GitHub Actions
```

---

# 🔮 Future Improvements

Future versions of AutoParts World can include:

* 👤 User registration and login
* 💳 Online payment integration
* 📦 Order management
* ❤️ Wishlist
* ⭐ Product reviews and ratings
* 🔎 Advanced product filtering
* 🏷️ Discount and coupon system
* 📊 Admin dashboard
* 🗄️ Database integration
* 🔐 Secure user authentication
* 📍 Order tracking
* 🌍 More countries
* 🚘 Vehicle/model-based spare-part search
* 🤖 AI-powered spare-part recommendations
* 🧊 Interactive 3D car models
* 🌐 Interactive world map
* 🔒 HTTPS with SSL/TLS
* 🌐 Custom domain
* 📈 AWS monitoring and logging
* ⚡ CDN integration
* 🔄 Fully automated CI/CD deployment

---

# ⚠️ Disclaimer

This project is developed primarily for **educational and demonstration purposes**.

The products, prices, country information, and descriptions displayed on the website are example/demo data and should not be considered actual commercial listings unless independently verified.

---

# 👨‍💻 Author

**Mohamed Sinan vk**

GitHub:

https://github.com/shansinan110

