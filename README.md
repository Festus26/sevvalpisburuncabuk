# Transfermarkt Player Profile

A complete replica of Transfermarkt's player profile page, featuring all the sections and functionality found on the original site. This is a client-side only implementation that's easy to customize and edit.

## Features

### Complete Player Profile Sections
- **Player Header** - Player name, number, and current club
- **Player Information** - Comprehensive details including:
  - Personal information (birth date, place, nationality, height)
  - Position and playing style
  - Contract details
  - Agent information
  - Social media links
- **Market Value** - Current valuation with historical chart
- **Youth Career** - Early career information
- **Performance Data** - Season-by-season statistics
- **National Team Performance** - All national team levels and statistics
- **Achievements & Honors** - Trophies and awards
- **Player Comparison** - Interactive voting system
- **Market Value Chart** - Interactive Chart.js visualization

### Interactive Features
- **Responsive Design** - Works on all devices
- **Interactive Charts** - Market value progression over time
- **Voting System** - Player comparison with vote tracking
- **Hover Effects** - Enhanced user experience
- **Smooth Animations** - Professional transitions and effects

## Quick Start

1. **Open the project:**
   ```bash
   cd /Users/semih/Documents/Projects/TransfermarktProfile
   ```

2. **Open in browser:**
   - Double-click `index.html` or
   - Use a local server for best experience

3. **Customize the player:**
   - Edit player data in `script.js`
   - Modify styles in `styles.css`
   - Update content in `index.html`

## Easy Editing Guide

### Changing Player Information

#### Method 1: Edit JavaScript Data Object
Open `script.js` and modify the `playerData` object:

```javascript
const playerData = {
    name: "Your Player Name",
    number: 10,
    club: "Your Club",
    nationality: ["Country1", "Country2"],
    birthDate: "DD MMM YYYY",
    age: 25,
    marketValue: "50.00 mil. €",
    // ... add more fields
};
```

#### Method 2: Use Edit Mode
Add `#edit` to the URL (e.g., `index.html#edit`) to enable the visual editor.

### Updating Performance Data
In `script.js`, modify the `performanceData` array:

```javascript
const performanceData = [
    { season: "24/25", club: "Club Name", league: "League", matches: 30, goals: 10, assists: 8 },
    // Add more seasons...
];
```

### Customizing National Team Data
Edit the `nationalTeamData` array in `script.js`:

```javascript
const nationalTeamData = [
    { team: "Country", debut: "DD MMM YYYY", caps: 50, goals: 10 },
    // Add more national teams...
];
```

### Styling Customization
Key CSS variables and sections in `styles.css`:

```css
/* Main Colors */
.header { background-color: #00b2ff; } /* Transfermarkt blue */
.player-header { background: linear-gradient(135deg, #1b3251 0%, #2a4a6b 100%); }

/* Responsive breakpoints */
@media (max-width: 768px) { /* Tablet styles */ }
@media (max-width: 480px) { /* Mobile styles */ }
```

## File Structure

```
TransfermarktProfile/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive functionality and data
└── README.md           # This documentation
```

## Key Components

### HTML Structure
- Semantic HTML5 structure
- Modular sections for easy editing
- Accessibility-friendly markup
- CDN-linked Font Awesome icons

### CSS Features
- CSS Grid and Flexbox for layouts
- Mobile-first responsive design
- CSS animations and transitions
- Print-friendly styles
- Custom properties for easy theming

### JavaScript Functionality
- Chart.js integration for market value visualization
- Interactive voting system
- Dynamic data updates
- Smooth scrolling and animations
- Easy-to-use update functions

## Customization Examples

### Adding a New Achievement
```javascript
// In script.js, add to achievements section in HTML:
<div class="achievement-item">
    <i class="fas fa-trophy"></i>
    <span>Your New Achievement</span>
</div>
```

### Changing Team Colors
```css
/* In styles.css */
:root {
    --primary-color: #your-color;
    --secondary-color: #your-secondary-color;
}
```

### Adding Social Media Links
```javascript
// In playerData object:
socialMedia: {
    twitter: "https://twitter.com/username",
    instagram: "https://instagram.com/username",
    // Add more platforms
}
```

## Browser Compatibility

- **Modern Browsers:** Full feature support
- **Internet Explorer 11+:** Basic functionality
- **Mobile Browsers:** Optimized responsive experience

## Dependencies

- **Chart.js** - For market value visualization (loaded via CDN)
- **Font Awesome** - For icons (loaded via CDN)
- **No build process required** - Pure HTML/CSS/JS

## Development Tips

1. **Use browser dev tools** to inspect and modify styles in real-time
2. **Console methods available:**
   ```javascript
   PlayerProfile.updatePlayerData({name: "New Name"})
   PlayerProfile.calculateCareerStats()
   ```
3. **Enable edit mode** by adding `#edit` to URL for visual editing
4. **All images use external URLs** for easy deployment

## Performance Features

- **Optimized images** - Proper sizing and compression
- **Minimal external dependencies** - Only Chart.js and Font Awesome
- **Efficient CSS** - Minimal reflows and repaints
- **Lazy loading ready** - Structure supports progressive enhancement

## Accessibility

- **ARIA labels** where needed
- **Keyboard navigation** support
- **Screen reader friendly** markup
- **High contrast** color combinations
- **Scalable text** and responsive design

This implementation provides a complete, professional-looking player profile that's easy to customize for any player while maintaining the authentic Transfermarkt look and feel.
