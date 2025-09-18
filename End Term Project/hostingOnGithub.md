# 🚀 Hosting Your HTML & CSS Code on GitHub Pages

## 1️⃣ Prerequisites
- A [GitHub account](https://github.com/)
- Basic HTML & CSS files (e.g., `index.html`, `style.css`)

---

## 2️⃣ Steps to Host

### Step 1: Create a New Repository
1. Log in to GitHub.
2. Click on **New Repository**.
3. Name it (e.g., `my-website`).
4. Keep it **Public** (required for GitHub Pages).
5. Check ✅ *"Add a README file"*.
6. Click **Create Repository**.

---

### Step 2: Upload Your Code
1. Open your repo.
2. Click on **Add file → Upload files**.
3. Drag & drop your HTML, CSS, and assets (images, etc.).
4. Make sure you have an `index.html` (this is the entry point).
5. Click **Commit changes**.

---

### Step 3: Enable GitHub Pages
1. Go to **Settings → Pages** (left sidebar).
2. Under **Source**, select **Deploy from branch**.
3. Choose **Branch: main** and **/ (root)** folder.
4. Click **Save**.
5. Wait a few minutes, then your site will be live at:  

> `https://<your-username>.github.io<repository-name>/`


---

### Step 4: Access Your Website
- Open the URL in your browser.
- 🎉 Your website is live!

---

## 3️⃣ Things to Take Care Of (First-Timers)
- Your **main file must be `index.html`**, otherwise GitHub Pages won’t load it.
-  Keep file names lowercase & without spaces (e.g., `style.css`, not `Style Sheet.CSS`).
-  Check **relative paths** in HTML (`./style.css`, `./images/pic.png`).
-  For updates:
- Upload again OR use Git from VS Code (`git add . → git commit → git push`).
- ⚠️ GitHub Pages takes a minute or two to update after each commit.
- ⚠️ Large files (videos > 100MB) are not supported. Use external hosting (e.g., YouTube, Google Drive) if needed.


