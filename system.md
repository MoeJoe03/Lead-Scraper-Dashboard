# LeadFlow Project Overview

LeadFlow is a high-performance, internal SaaS dashboard designed for lead generation and automated web scraping. Built with a modern "Frosted Glass" aesthetic, it provides a premium, data-driven experience for managing scraping pipelines and lead data.

## 🚀 Tech Stack

- **React 19**: Functional components with Hooks.
- **Tailwind CSS 4**: Utilized for the entire design system and glassmorphism effects.
- **Vite**: Ultra-fast build tool and development server.
- **Lucide React**: Clean, consistent iconography throughout the app.
- **React Router Dom**: Client-side navigation between dashboard modules.
- **Motion**: Used for smooth transitions and hover micro-animations.

## 🎨 Design System

The application follows a strictly defined design system located in the `src/index.css` and reinforced by reusable UI components.

- **Theme**: "Frosted Glass" – characterized by high transparency, heavy backdrop blurs (`backdrop-blur-xl`), and subtle white borders.
- **Color Palette**:
  - **Background**: Deep Navy (`#0f172a`) with ambient radial gradients.
  - **Accents**: Neon Cyan (`#22d3ee`) and Indigo (`#6366f1`).
  - **Status**: Emerald for success, Amber for warnings, and Red for danger zones.
- **Typography**: Inter (Sans-serif) with high-contrast weights for hierarchy.
- **Components**: Rounded corners (16px - 32px) and neon glow effects.

## 📂 Project Structure

### Reusable UI Components (`/src/components/ui`)
- **`GlassCard`**: The base container for all modules, providing the frosted blur effect and hover lifts.
- **`Button`**: Supports multiple variants (Primary, Secondary, Ghost, Danger) with custom neon shadows.
- **`ProgressBar`**: Themed progress indicators for usage limits and active scraping jobs.
- **`Badge`**: Status labels (Running, Completed, processing) with semantic coloring.
- **`Toggle`**: Custom-built switch components for scraper filters and system settings.

### Layout System (`/src/components/layout`)
- **`Sidebar`**: Persistent navigation with active state tracking and global "New Job" CTA.
- **`Topbar`**: Global search and user-context area (profile, role notifications).
- **`LayoutWrapper`**: Ensures consistent spacing and scroll behavior across the app.

## 📄 Pages & Modules

### 1. Dashboard
- **Overview Stats**: Real-time cards for total leads, active jobs, and success rates.
- **Running Scrapers**: A summary table of live extraction pipelines.
- **Activity Feed**: Log of recent team actions and system events.

### 2. Scraper Command
- **Configuration Form**: Multi-platform target selection (Instagram, Google Maps, LinkedIn).
- **Advanced Filtering**: Platform-specific extraction filters (Location, Followers, Website requirements).
- **Live Status**: Sidebar panel monitoring current job progress with real-time percentage updates.

### 3. Results (Lead Manager)
- **Advanced Leads Table**: High-density table featuring profile previews, contact statuses, and bio snippets.
- **Global Filters Bar**: Real-time filtering by platform, location, and data availability.
- **Lead Preview Panel**: A contextual sidebar for deep-diving into specific lead metadata and adding internal notes.

### 4. Export Management
- **History Tracker**: A log of all generated files with size and expiration tracking.
- **Multi-Format Support**: Dedicated UI for CSV and Google Sheets exports.
- **Storage Monitoring**: Visual indicators for remaining cloud storage.

### 5. Workspace Settings
- **Integration Manager**: Instagram Session handling and Google Maps API key configuration.
- **Team Access**: Role-based management of workspace collaborators.
- **Danger Zone**: Critical actions like clearing database or deleting the workspace.

## 🛠️ Development & Maintenance

The codebase is organized following best practices for scalability:
- **Type Safety**: Fully typed with TypeScript interfaces.
- **Modularity**: Every major section is a separate component, making it easy to swap themes or add data sources.
- **Responsiveness**: Desktop-first design optimized for high-productivity dashboard usage.
