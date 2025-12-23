# 🚀 Portfolio Code Standards & Conventions

> **High-performance, professional portfolio built with modern web technologies**

## 📋 Table of Contents

- [🏗️ Project Overview](#️-project-overview)
- [💻 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🎨 Code Conventions](#-code-conventions)
- [📝 Naming Conventions](#-naming-conventions)
- [💬 Commenting Standards](#-commenting-standards)
- [🎯 TypeScript Guidelines](#-typescript-guidelines)
- [⚡ Performance Standards](#-performance-standards)
- [🔧 Development Workflow](#-development-workflow)

---

## 🏗️ Project Overview

This is a modern, high-performance portfolio website showcasing cutting-edge web technologies and best practices. Built with performance, accessibility, and developer experience as core principles.

**Key Features:**
- ⚡ Next.js 15 with Turbopack for blazing-fast development
- 🎨 Modern animations with Framer Motion & GSAP
- 🌐 3D experiences with Three.js and React Three Fiber
- 🎯 Smooth scrolling with Lenis
- 🎨 Tailwind CSS v4 for utility-first styling
- 📱 Fully responsive and accessible design

---

## 💻 Tech Stack

### **Core Framework**
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript

### **Styling & Animation**
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Production-ready motion library
- **GSAP 3.13.0** - Professional-grade animation library

### **3D & Interactions**
- **Three.js 0.180.0** - 3D graphics library
- **React Three Fiber 9.3.0** - React renderer for Three.js
- **React Three Drei 10.7.4** - Useful helpers for R3F

### **User Experience**
- **Lenis 1.3.11** - Smooth scroll library
- **Studio Freight Lenis 1.0.42** - Enhanced scroll experience

### **Development Tools**
- **ESLint 9** - Code linting and formatting
- **PostCSS** - CSS processing
- **Turbopack** - Next-generation bundler

---

## 📁 Project Structure

```
portfolio/
├── 📁 public/                    # Static assets
│   ├── 📁 fonts/                 # Custom fonts
│   ├── 📁 models/                # 3D models (.gltf, .glb)
│   ├── 📁 images/                # Optimized images
│   └── 📁 icons/                 # SVG icons and favicons
│
├── 📁 src/
│   ├── 📁 app/                   # Next.js App Router
│   │   ├── 📁 (routes)/          # Route groups
│   │   ├── 📁 api/               # API routes
│   │   ├── 📄 layout.tsx         # Root layout
│   │   ├── 📄 page.tsx           # Home page
│   │   ├── 📄 globals.css        # Global styles
│   │   └── 📄 loading.tsx        # Loading UI
│   │
│   ├── 📁 components/            # Reusable UI components
│   │   ├── 📁 ui/                # Basic UI components
│   │   ├── 📁 layout/            # Layout components
│   │   ├── 📁 sections/          # Page sections
│   │   ├── 📁 three/             # 3D components
│   │   └── 📁 animations/        # Animation components
│   │
│   ├── 📁 hooks/                 # Custom React hooks
│   │   ├── 📄 useScrollAnimation.ts
│   │   ├── 📄 useThree.ts
│   │   └── 📄 useMediaQuery.ts
│   │
│   ├── 📁 utils/                 # Utility functions
│   │   ├── 📄 animations.ts      # Animation utilities
│   │   ├── 📄 constants.ts       # App constants
│   │   ├── 📄 helpers.ts         # Helper functions
│   │   └── 📄 types.ts           # Type definitions
│   │
│   ├── 📁 styles/                # Additional styles
│   │   ├── 📄 components.css     # Component-specific styles
│   │   └── 📄 animations.css     # Animation keyframes
│   │
│   └── 📁 data/                  # Static data
│       ├── 📄 projects.ts        # Project data
│       ├── 📄 skills.ts          # Skills data
│       └── 📄 experience.ts      # Experience data
│
├── 📄 tailwind.config.ts         # Tailwind configuration
├── 📄 next.config.ts             # Next.js configuration
├── 📄 tsconfig.json              # TypeScript configuration
├── 📄 eslint.config.mjs          # ESLint configuration
└── 📄 package.json               # Dependencies and scripts
```

---

## 🎨 Code Conventions

### **General Principles**
- **Consistency First**: Maintain consistent patterns across the codebase
- **Performance Focused**: Write efficient, optimized code
- **Accessibility**: Ensure all components are accessible (WCAG 2.1 AA)
- **Type Safety**: Leverage TypeScript for bulletproof code

### **File Organization**
```typescript
// ✅ Good: Organized imports
import { ReactNode } from 'react'
import { NextPage, GetStaticProps } from 'next'

import { Button } from '@/components/ui'
import { useScrollAnimation } from '@/hooks'
import { ANIMATION_DURATION } from '@/utils/constants'

// Component definition...
```

### **Component Structure**
```typescript
// ✅ Good: Well-structured component
interface HeroSectionProps {
  title: string
  subtitle?: string
  children?: ReactNode
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  children
}) => {
  // Hooks first
  const scrollY = useScrollAnimation()
  
  // Event handlers
  const handleScroll = useCallback(() => {
    // Implementation
  }, [])
  
  // Render
  return (
    <section className="hero-section">
      {/* JSX */}
    </section>
  )
}
```

---

## 📝 Naming Conventions

### **Files & Directories**
- **Components**: `PascalCase.tsx` (e.g., `HeroSection.tsx`)
- **Pages**: `lowercase.tsx` or `[param].tsx` for dynamic routes
- **Hooks**: `camelCase.ts` starting with `use` (e.g., `useScrollAnimation.ts`)
- **Utilities**: `camelCase.ts` (e.g., `animations.ts`)
- **Constants**: `SCREAMING_SNAKE_CASE` (e.g., `API_ENDPOINTS`)
- **Directories**: `kebab-case` (e.g., `three-components/`)

### **Variables & Functions**
```typescript
// ✅ Good naming examples
const animationDuration = 300
const isScrollingDown = true
const userPreferences = getUserPreferences()

// Functions: verb + noun
const calculateScrollProgress = () => {}
const handleButtonClick = () => {}
const fetchUserData = async () => {}

// Components: PascalCase, descriptive
const NavigationHeader = () => {}
const ProjectCard = () => {}
const ThreeScene = () => {}

// Custom hooks: use + PascalCase
const useScrollProgress = () => {}
const useThreeModel = () => {}
const useAnimationFrame = () => {}
```

### **CSS Classes (Tailwind)**
```typescript
// ✅ Good: Organized utility classes
<div className={`
  // Layout
  flex items-center justify-between
  // Spacing
  px-6 py-4 mx-auto
  // Typography
  text-lg font-semibold text-gray-800
  // States
  hover:bg-gray-100 focus:outline-none focus:ring-2
  // Responsive
  md:px-8 lg:py-6
`}>
```

---

## 💬 Commenting Standards

### **Component Documentation**
```typescript
/**
 * Interactive 3D hero section with scroll-based animations
 * 
 * Features:
 * - Parallax scrolling effects
 * - 3D model interactions
 * - Responsive design
 * - Accessibility optimized
 * 
 * @param title - Main heading text
 * @param model - 3D model configuration
 * @param onInteraction - Callback for user interactions
 */
export const HeroSection3D: React.FC<HeroSection3DProps> = ({
  title,
  model,
  onInteraction
}) => {
  // Component implementation...
}
```

### **Complex Logic Comments**
```typescript
// Calculate scroll-based animation progress
// Maps scroll position (0 to window height) to animation progress (0 to 1)
const animationProgress = useMemo(() => {
  if (!scrollY || !windowHeight) return 0
  
  return Math.min(Math.max(scrollY / windowHeight, 0), 1)
}, [scrollY, windowHeight])

/**
 * GSAP Timeline for complex animations
 * 
 * Timeline structure:
 * 1. Fade in hero text (0-0.5s)
 * 2. Scale in 3D model (0.2-0.8s) 
 * 3. Animate particles (0.5-1.5s)
 */
const animationTimeline = useMemo(() => {
  return gsap.timeline({ paused: true })
    .fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 })
    .fromTo('.three-model', { scale: 0 }, { scale: 1, duration: 0.6 }, 0.2)
    .fromTo('.particles', { opacity: 0 }, { opacity: 1, duration: 1 }, 0.5)
}, [])
```

### **TODO Comments**
```typescript
// TODO: Implement WebGL fallback for older devices
// FIXME: Memory leak in Three.js scene cleanup
// OPTIMIZE: Debounce scroll events for better performance
// ACCESSIBILITY: Add keyboard navigation for 3D interactions
```

### **Comment Style Regulations**
```typescript
// ✅ Good: Clean, professional comments without emojis
// Calculate animation progress based on scroll position
const progress = scrollY / maxScroll

// Handle user interaction events
const handleClick = (event: MouseEvent) => {
  // Implementation details...
}

// ❌ Avoid: Using emojis in code comments
// 🎯 Calculate animation progress based on scroll position
// 🚀 Handle user interaction events
```

**Important**: This project maintains a **strict no-emoji policy** for all code comments. While emojis may be used in documentation files (like this one) for improved readability, they should **never** be used within TypeScript, JavaScript, or any source code files for comments. This ensures:
- Professional code appearance
- Better compatibility with development tools
- Consistent code formatting across different editors
- Improved readability in code review processes

---

## 🎯 TypeScript Guidelines

### **Type Definitions**
```typescript
// ✅ Good: Comprehensive type definitions
export interface ProjectData {
  id: string
  title: string
  description: string
  technologies: Technology[]
  images: ImageAsset[]
  links: {
    live?: string
    github?: string
    demo?: string
  }
  featured: boolean
  createdAt: Date
}

export type AnimationDirection = 'up' | 'down' | 'left' | 'right'
export type ThemeMode = 'light' | 'dark' | 'system'

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? never : K }[keyof T]
```

### **React Component Props**
```typescript
// ✅ Good: Properly typed props
interface AnimatedButtonProps extends 
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>
}

// Generic components
interface DataVisualizationProps<T> {
  data: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  keyExtractor: (item: T) => string
  onItemSelect?: (item: T) => void
}
```

### **Custom Hooks Types**
```typescript
// ✅ Good: Properly typed custom hooks
export const useScrollAnimation = (options?: {
  threshold?: number
  rootMargin?: string
}): {
  scrollY: number
  scrollProgress: number
  isScrollingDown: boolean
  isInView: boolean
} => {
  // Hook implementation...
}

export const useThreeModel = <T extends THREE.Object3D>(
  modelPath: string,
  options?: LoaderOptions
): {
  model: T | null
  isLoading: boolean
  error: Error | null
  progress: number
} => {
  // Hook implementation...
}
```

---

## ⚡ Performance Standards

### **React Performance**
```typescript
// ✅ Use React.memo for expensive components
export const ProjectCard = React.memo<ProjectCardProps>(({ project }) => {
  // Component implementation...
}, (prevProps, nextProps) => {
  return prevProps.project.id === nextProps.project.id
})

// ✅ Optimize re-renders with useMemo and useCallback
const ExpensiveComponent: React.FC = () => {
  const expensiveValue = useMemo(() => {
    return heavyCalculation(data)
  }, [data])
  
  const handleClick = useCallback((id: string) => {
    onItemClick(id)
  }, [onItemClick])
  
  return <div>{/* Component JSX */}</div>
}
```

### **Next.js Optimization**
```typescript
// ✅ Use dynamic imports for code splitting
const ThreeScene = dynamic(() => import('@/components/three/Scene'), {
  ssr: false,
  loading: () => <div className="loading-skeleton" />
})

// ✅ Optimize images
import Image from 'next/image'

export const ProjectImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={800}
    height={600}
    priority={false}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,..."
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
)
```

### **Bundle Optimization**
```typescript
// ✅ Tree-shake libraries
import { motion } from 'framer-motion'  // ❌ Imports entire library
import { motion } from 'framer-motion/dist/framer-motion'  // ✅ Specific import

// ✅ Lazy load heavy dependencies
const HeavyLibrary = lazy(() => import('heavy-library'))
```

---

## 🔧 Development Workflow

### **Git Commit Messages**
```bash
# Format: type(scope): description
feat(animations): add scroll-triggered hero animations
fix(three): resolve memory leak in model cleanup
perf(images): optimize image loading with WebP
docs(readme): update installation instructions
refactor(hooks): simplify scroll animation logic
test(components): add unit tests for ProjectCard
```

### **Branch Naming**
```bash
# Features
feature/hero-3d-animations
feature/project-gallery
feature/contact-form

# Fixes
fix/scroll-performance
fix/mobile-responsive
hotfix/safari-animation-bug

# Improvements
improve/loading-states
improve/accessibility
optimize/bundle-size
```

### **Code Review Checklist**
- [ ] **Performance**: No unnecessary re-renders, optimized images
- [ ] **Accessibility**: Proper ARIA labels, keyboard navigation
- [ ] **Type Safety**: No `any` types, proper error handling
- [ ] **Responsive**: Works on mobile, tablet, desktop
- [ ] **SEO**: Proper meta tags, semantic HTML
- [ ] **Animation**: Smooth 60fps animations, respects `prefers-reduced-motion`

### **Testing Standards**
```typescript
// ✅ Component testing example
import { render, screen, fireEvent } from '@testing-library/react'
import { ProjectCard } from '@/components/ProjectCard'

describe('ProjectCard', () => {
  it('should render project information correctly', () => {
    const mockProject = {
      id: '1',
      title: 'Test Project',
      description: 'A test project',
      // ... other properties
    }
    
    render(<ProjectCard project={mockProject} />)
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
    expect(screen.getByText('A test project')).toBeInTheDocument()
  })
  
  it('should handle click interactions', () => {
    const handleClick = jest.fn()
    render(<ProjectCard project={mockProject} onClick={handleClick} />)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledWith(mockProject.id)
  })
})
```

---

## 🚀 Deployment Standards

### **Build Optimization**
- Use Next.js static generation where possible
- Implement proper caching strategies
- Optimize for Core Web Vitals (LCP, FID, CLS)
- Enable compression and CDN delivery

### **Environment Variables**
```typescript
// ✅ Proper environment variable handling
const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID,
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
} as const

// Type-safe environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string
      NEXT_PUBLIC_ANALYTICS_ID?: string
      DATABASE_URL: string
    }
  }
}
```

---

**Last Updated**: December 2024  
**Version**: 1.0.0  
**Maintainer**: Portfolio Team

---

> 💡 **Remember**: These standards evolve with the project. Suggest improvements through pull requests and keep this document updated as the codebase grows.
