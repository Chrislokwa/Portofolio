# Sci-Fi Portfolio

A stunning front-end developer portfolio with a futuristic Sci-Fi UI design, built with modern web technologies.

![Portfolio Preview](https://via.placeholder.com/1200x600/0a0a0f/00f0ff?text=Sci-Fi+Portfolio)

## 🚀 Features

- **Sci-Fi Aesthetic**: Futuristic cyberpunk design with neon glow effects, glassmorphism, and animated backgrounds
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **shadcn/ui Components**: Beautiful, accessible UI components
- **Form Validation**: React Hook Form with Zod validation
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Engaging animations and transitions
- **Project Gallery**: Filterable project showcase with hover effects
- **Contact Form**: Working contact form with real-time validation

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Orbitron](https://fonts.google.com/specimen/Orbitron) + [Rajdhani](https://fonts.google.com/specimen/Rajdhani)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd scifi-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Deployment to Vercel

Vercel is the easiest way to deploy your Next.js application. Here's how to do it:

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/scifi-portfolio.git
   git push -u origin main
   ```

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com) and sign in with your GitHub account
   - Click "Add New..." → "Project"

3. **Import your repository:**
   - Select your `scifi-portfolio` repository from the list
   - Click "Import"

4. **Configure deployment:**
   - Framework Preset should be set to "Next.js" automatically
   - Build Command: `next build` (or leave blank)
   - Output Directory: `.next` (or leave blank)
   - Install Command: `npm install` (or leave blank)

5. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)

6. **Your site is live!**
   - Vercel will provide you with a URL like `https://your-project.vercel.app`
   - You can customize your domain in the project settings

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? → Yes
   - Which scope? → Your account
   - Want to modify settings? → No
   - Project Name: `scifi-portfolio` (or custom)

5. **Your site is live!**

### Option 3: Deploy from Vercel Dashboard

1. **Go to Vercel Dashboard:**
   - Visit [vercel.com/dashboard](https://vercel.com/dashboard)

2. **Create new project:**
   - Click "Add New..." → "Project"

3. **Drag and drop:**
   - You can drag your project folder directly to deploy (without Git)

4. **Deploy:**
   - Wait for deployment to complete
   - Your site will be live instantly

## 🔧 Customization

### Update Personal Information

Edit the following files to customize your portfolio:

- **Name & Title**: `components/hero.tsx`
- **Bio & Skills**: `components/about.tsx`
- **Projects**: `components/projects.tsx`

### Change Colors

All colors are defined in `tailwind.config.ts` under the `scifi` color palette:

```typescript
scifi: {
  bg: "#0a0a0f",
  cyan: "#00f0ff",
  magenta: "#ff00aa",
  purple: "#7c3aed",
  // ... more colors
}
```

### Add Your Own Projects

In `components/projects.tsx`, update the `projects` array:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    tags: ["React", "TypeScript", "Tailwind"],
    category: "webapp",
    github: "https://github.com/your-repo",
    demo: "https://your-demo.com",
  },
  // Add more projects...
]
```

### Update Contact Form

The form currently simulates submission. To make it work:

1. **Formspree (Easiest):**
   - Sign up at [formspree.io](https://formspree.io)
   - Create a new form
   - Replace the form submission in `components/contact.tsx` with:
   ```javascript
   const onSubmit = async (data: ContactFormValues) => {
     await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: JSON.stringify(data),
       headers: { 'Content-Type': 'application/json' }
     })
   }
   ```

2. **EmailJS:**
   - Use [EmailJS](https://www.emailjs.com/) to send emails directly from the browser

## 📁 Project Structure

```
scifi-portfolio/
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
├── components/
│   ├── ui/              # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   ├── header.tsx       # Navigation header
│   ├── hero.tsx         # Hero section
│   ├── about.tsx        # About section
│   ├── projects.tsx     # Projects showcase
│   ├── contact.tsx      # Contact form
│   └── footer.tsx       # Footer
├── lib/
│   ├── utils.ts         # Utility functions
│   └── validations.ts   # Zod validation schemas
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
├── next.config.js       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Orbitron](https://fonts.google.com/specimen/Orbitron) font
- [Rajdhani](https://fonts.google.com/specimen/Rajdhani) font
- [Lucide](https://lucide.dev/) for the icons

---

Built with ❤️ using Next.js and Tailwind CSS

