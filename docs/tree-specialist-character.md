# Tree Specialist Character

A personlike SVG character representing the Trefellingsspesialisten AS tree felling service company.

## Overview

This character is a friendly, professional illustration of a tree specialist wearing proper safety equipment. It serves as a mascot and visual identity element for the company.

## Character Design

The character features:
- **Red Safety Helmet** - Essential head protection for tree work
- **Yellow High-Visibility Safety Vest** - With reflective orange stripes
- **Smiling Face** - Friendly and approachable expression
- **Chainsaw Tool** - Professional tree felling equipment
- **Work Boots** - Protective dark footwear
- **Tree Symbol** - Subtle background element (30% opacity)
- **Green Circle Background** - Company brand color (#10B981, 10% opacity)

## Files

- `/public/images/tree-specialist-character.svg` (2KB) - Static SVG file
- `/src/components/TreeSpecialistCharacter.tsx` - React component with TypeScript

## Usage

### As Static SVG (HTML)

```html
<img src="/images/tree-specialist-character.svg" 
     alt="Tree Specialist" 
     width="200" 
     height="200">
```

### As React Component (Recommended)

```tsx
import TreeSpecialistCharacter from '@/components/TreeSpecialistCharacter'

// With default size (200x200)
<TreeSpecialistCharacter />

// With custom size
<TreeSpecialistCharacter width={80} height={80} />
```

## Current Implementation

The character is currently displayed on:
- **About Page** (`/om-oss`) - In the page header next to "Om oss" title (80x80px)
