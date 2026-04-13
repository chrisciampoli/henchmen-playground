# Design System Documentation

This document outlines the design tokens and components available in our Tailwind CSS-based design system.

## Color Palette

### Primary Colors
- **Primary**: Blue scale (`primary-50` to `primary-950`)
  - Main brand color for primary actions and emphasis
  - Use: Primary buttons, links, focus states

### Secondary Colors
- **Secondary**: Green scale (`secondary-50` to `secondary-950`)
  - Supporting brand color for secondary actions
  - Use: Success states, secondary buttons, positive feedback

### Accent Colors
- **Accent**: Purple scale (`accent-50` to `accent-950`)
  - Accent color for highlights and special elements
  - Use: Badges, highlights, special call-outs

### Neutral Colors
- **Neutral**: Gray scale (`neutral-50` to `neutral-950`)
  - Base colors for text, backgrounds, and borders
  - Use: Text, backgrounds, dividers, subtle elements

### Semantic Colors
- **Success**: Green scale for positive states
- **Warning**: Yellow/Orange scale for caution states
- **Error**: Red scale for error states

## Typography

### Font Families
- **Sans**: Inter, system-ui (default)
- **Serif**: Georgia, Cambria
- **Mono**: Menlo, Monaco, Consolas
- **Display**: Inter (for headings)

### Font Sizes
- `text-xs` to `text-9xl` with corresponding line heights
- Each size includes optimized line-height for readability

### Font Weights
- `font-thin` (100) to `font-black` (900)
- Semantic weights: `font-normal`, `font-medium`, `font-semibold`, `font-bold`

## Spacing

### Custom Spacing Values
- `18` (4.5rem) - 72px
- `88` (22rem) - 352px
- `128` (32rem) - 512px
- `144` (36rem) - 576px

Use these for consistent spacing throughout the application.

## Border Radius

### Available Sizes
- `rounded-none` to `rounded-3xl`
- `rounded-full` for circular elements

## Shadows

### Shadow Scale
- `shadow-xs` - Very subtle
- `shadow-sm` - Small
- `shadow` - Default
- `shadow-md` - Medium
- `shadow-lg` - Large
- `shadow-xl` - Extra large
- `shadow-2xl` - Maximum

## Animations

### Available Animations
- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up from bottom
- `animate-slide-down` - Slide down from top
- `animate-scale-in` - Scale in effect
- `animate-bounce-subtle` - Subtle bounce

## Component Classes

### Buttons
```html
<!-- Primary button -->
<button class="btn-primary">Primary Action</button>

<!-- Secondary button -->
<button class="btn-secondary">Secondary Action</button>
```

### Cards
```html
<!-- Basic card -->
<div class="card">Content</div>

<!-- Interactive card with hover effects -->
<div class="card-hover">Content</div>
```

## Responsive Breakpoints

- `xs`: 475px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px
- `3xl`: 1920px

## Usage Guidelines

### Color Usage
1. Use primary colors for main actions and navigation
2. Use secondary colors for supporting actions and success states
3. Use neutral colors for text and backgrounds
4. Use semantic colors (success, warning, error) for status indicators

### Typography Hierarchy
1. Use display font for main headings
2. Use sans font for body text and UI elements
3. Use mono font for code and technical content
4. Maintain consistent line heights for readability

### Spacing Consistency
1. Use the spacing scale for margins and padding
2. Prefer consistent spacing values throughout the design
3. Use larger spacing for section separation
4. Use smaller spacing for related elements

### Component Composition
1. Combine utility classes to create consistent components
2. Use the provided component classes for common patterns
3. Maintain hover and focus states for interactive elements
4. Consider accessibility in all component designs

## Examples

See the homepage (`pages/index.vue`) for comprehensive examples of the design system in action, including:
- Color palette showcase
- Typography scale demonstration
- Component examples
- Animation usage