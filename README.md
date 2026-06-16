# 💕 Forever Yours - A Romantic Love Website

A beautiful, interactive romantic website created with love for **Atoyebi Victoria Oluwapelumi** from **Ajao Emmanuel Olaoluwa**.

## ✨ Features

### 🔒 Password Protection
- Secure password screen to unlock the website
- Password hint: Anniversary date (DDMMYYYY format)
- Default password: `21122024` (December 21, 2024)

### 🌙 Visual Effects
- **Starry Night Background**: Twinkling stars throughout the page
- **Floating Hearts**: Animated hearts that float upward
- **Falling Roses**: Beautiful roses falling from the sky
- **Smooth Animations**: Elegant transitions and scroll effects

### 💌 Content Sections
- **Hero Section**: Personalized greeting with names and subtitle
- **Love Letter**: Heartfelt message from Emmanuel to Victoria
- **Timeline**: Love story timeline with key moments
- **Photo Gallery**: Placeholder gallery for memories (customizable with real photos)
- **Forever Section**: Interactive "Will You Be Mine Forever?" proposal

### ⏳ Anniversary Timer
- Live countdown timer from December 21, 2024
- Displays days, hours, minutes, and seconds
- Updates in real-time

### 🎵 Audio & Effects
- Background music integration
- Fireworks animation on celebration
- Confetti animation
- Sound effects for interactions

### 📱 Responsive Design
- Fully mobile-responsive
- Works on desktop, tablet, and mobile devices
- Optimized for all screen sizes

### 🚀 Performance
- Lightweight and fast-loading
- No external dependencies (vanilla JavaScript)
- Optimized animations and effects

## 🎯 How to Use

### 1. **Access the Website**
- Open `index.html` in your web browser
- Enter the password: `21122024`
- Click "Unlock My Heart ❤️"

### 2. **Customize the Website**

#### Change the Password
Edit `script.js` and find the `checkPassword()` function:
```javascript
const correctPassword = '21122024'; // Change this to your desired password
```

#### Update the Anniversary Date
Edit `script.js` and find the `startCountdown()` function:
```javascript
const anniversaryDate = new Date('2024-12-21T00:00:00').getTime();
```

#### Add Your Photos
Replace the gallery placeholders with your actual photos:
1. Add your images to the project folder
2. Update the gallery items in `index.html` with `<img>` tags

#### Customize Text
- Edit the love letter in the "Letter Section"
- Update timeline events in the "Timeline Section"
- Modify any text in `index.html`

#### Change Colors
Edit `style.css` and modify the CSS variables:
```css
:root {
    --primary-color: #ff1493;      /* Pink */
    --secondary-color: #ff69b4;    /* Hot Pink */
    --dark-bg: #0a0e27;            /* Dark Blue */
    --light-text: #ffffff;         /* White */
    --gold-accent: #ffd700;        /* Gold */
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy the Project**
```bash
vercel
```

3. **Follow the prompts** and your website will be live!

### Deploy to GitHub Pages

1. **Create a GitHub repository**
```bash
git init
git add .
git commit -m "Initial commit: Love website"
git remote add origin https://github.com/yourusername/love-website.git
git push -u origin main
```

2. **Enable GitHub Pages**
   - Go to repository settings
   - Scroll to "GitHub Pages"
   - Select "main" branch as source
   - Your site will be available at `https://yourusername.github.io/love-website`

### Deploy to Netlify

1. **Connect your GitHub repository** to Netlify
2. **Configure build settings**:
   - Build command: (leave empty)
   - Publish directory: `.` (root)
3. **Deploy!**

## 📁 Project Structure

```
love-website/
├── index.html          # Main HTML file
├── style.css           # Styling and animations
├── script.js           # Interactive features and logic
├── vercel.json         # Vercel deployment configuration
└── README.md           # This file
```

## 🎨 Customization Guide

### Add Background Music
Replace the audio source in `index.html`:
```html
<audio id="backgroundMusic" loop>
    <source src="YOUR_MUSIC_URL" type="audio/mpeg">
</audio>
```

### Modify Animation Speed
Edit the animation durations in `style.css`:
```css
@keyframes floatHeart {
    /* Change 6s to your desired duration */
    animation: floatHeart 6s ease-in forwards;
}
```

### Change Font
Update the font-family in `style.css`:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

## 🔐 Security Notes

- The password is stored in plain text in the JavaScript file
- This is suitable for a personal romantic website
- For production applications, implement proper backend authentication

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Special Message

> Dear Victoria,
> 
> Meeting you has been one of the greatest blessings in my life. Thank you for your love, your patience, and every beautiful moment we've shared together.
> 
> No matter what happens, always remember that you are precious to me and will forever have a special place in my heart.
> 
> I thank God every day for bringing you into my life.
> 
> Forever and always,
> 
> Ajao Emmanuel Olaoluwa ❤️

## 💝 Credits

Created with ❤️ by **Ajao Emmanuel Olaoluwa** for **Atoyebi Victoria Oluwapelumi**

## 📄 License

This project is personal and created with love. Feel free to customize and use it for your special someone!

---

**Made with ❤️ | Forever Yours ∞**
