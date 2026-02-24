# National Black Canadians Summit 2026

Official website for the 5th National Black Canadians Summit (NBCS 2026), a three-day gathering of leaders, artists, elders, youth, policymakers, and change-makers from across Canada.

## About

The National Black Canadians Summit brings communities together to celebrate Black culture, amplify lived experiences, and collectively shape a more just and inclusive future for a better Canada.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Internationalization:** next-intl (English & French)
- **UI Components:** Radix UI
- **Email Service:** Resend
- **Event Registration:** Bizzabo

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── [locale]/          # Internationalized routes (en, fr)
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── info/          # Information page
│   │   ├── media/         # Media page
│   │   ├── partners/      # Partners/sponsors page
│   │   ├── program/       # Program/schedule page
│   │   └── ticket/        # Ticket registration page
│   └── api/               # API routes
│       └── contact/       # Contact form API
├── components/            # React components
│   ├── svg/              # SVG icon components
│   └── ui/               # UI components (buttons, selects, etc.)
├── hooks/                # Custom React hooks
├── i18n/                 # Internationalization configuration
├── lib/                   # Utility functions
├── messages/              # Translation files (en.json, fr.json)
└── public/              # Static assets (images, etc.)
```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Resend API Key for contact form
RESEND_API_KEY=your_resend_api_key

# Google Maps API Key (if using maps)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

# Bizzabo Event ID
NEXT_PUBLIC_BIZZABO_EVENT_ID=your_bizzabo_event_id
```

## Features

- 🌐 **Bilingual Support:** Full English and French localization
- 📱 **Responsive Design:** Optimized for all device sizes
- 🎫 **Event Registration:** Integrated Bizzabo ticket system
- 📧 **Contact Form:** Email integration via Resend
- 🗺️ **Location Information:** Venue details and maps
- 📅 **Program Schedule:** Interactive event schedule
- 🎨 **Modern UI:** Clean, accessible design

## Deployment

The project is configured for deployment on Vercel. The build process is handled automatically.

### Build for Production

```bash
npm run build
```

## Contributing

This is a private project. For contributions or questions, please contact the project maintainers.

## License

Private - All rights reserved

## Contact

For inquiries about the National Black Canadians Summit:
- Email: nbcs-spcn@fmjf.ca
- Website: [Visit the official site](https://nbcs-spcn.ca)

---

Built with ❤️ for the National Black Canadians Summit 2026
