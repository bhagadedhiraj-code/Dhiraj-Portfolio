# Dhiraj Bhagade — Developer Portfolio

A simple, responsive personal portfolio built with HTML, CSS, and vanilla JavaScript. It uses a white and blue visual theme and is designed to work on mobile, tablet, and desktop.

## Contents

```text
dhiraj_portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg
    └── Dhiraj_Bhagade_Resume.pdf
```

## Run locally

1. Extract the project ZIP.
2. Open `index.html` in a browser, or open the folder in VS Code and use the Live Server extension.
3. Keep `index.html`, `style.css`, `script.js`, and the `assets` folder together.

No build command or package installation is required.

## Customize before publishing

- Replace `assets/profile.jpg` if you want to use a different portrait. Keep the same filename or update the image path in `index.html`.
- Replace `assets/Dhiraj_Bhagade_Resume.pdf` with an updated resume, keeping the same filename so the download button continues to work.
- Check the email, GitHub, and LinkedIn URLs in `index.html`.
- Add a GitHub or live-demo link for the IoT project when available.
- Update project status labels as the work progresses.
- Review all details before publishing publicly.

## Deploy to GitHub Pages

1. Sign in to GitHub and create a new public repository, for example `dhiraj-portfolio`.
2. Upload the contents of this folder (not the ZIP itself). Make sure `index.html` is at the repository root.
3. In the repository, open **Settings → Pages**.
4. Under the build/deployment section, select **Deploy from a branch**, choose `main` and `/ (root)`, then save.
5. Wait for the deployment URL to appear in the Pages section.

## Deploy to Vercel

1. Push this project folder to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import your portfolio repository.
4. Select **Other** as the framework preset if prompted.
5. Leave the build command empty and the output directory as `.` (project root), if Vercel asks.
6. Click **Deploy**. Vercel will serve `index.html` as a static website.
7. For future changes, push commits to the connected GitHub branch and Vercel will redeploy automatically.

## Notes

- The contact section uses a `mailto:` link; it opens the visitor's email app. It is not a backend contact form.
- The website does not use a database, API keys, or server-side code.
- Project descriptions are intentionally phrased as work in development; only update them to completed once that is accurate.
- The Google Fonts link needs an internet connection. System fonts are used as fallback.
