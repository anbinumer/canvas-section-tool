# Canvas Section Management Tool

A lightweight, educator-friendly interface built directly within Canvas LMS to streamline the creation, allocation, and management of student sections.

## Features

- Educator-driven section creation and management
- Automated student allocation with fairness enforcement
- Manual student assignment interface
- Census date handling and section locking
- Privacy-safe section naming
- Real-time dashboard and audit trail

## Tech Stack

- Next.js 14 (React)
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL)
- Canvas LTI 1.3 Integration

## Prerequisites

- Node.js 18+
- npm or yarn
- Canvas Developer Key
- Supabase Account
- Canvas Beta Instance Access (aculeo.beta.instructure.com)

## Setup

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd canvas-section-tool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   CANVAS_API_URL=https://aculeo.beta.instructure.com
   CANVAS_API_KEY=your_canvas_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Access the application at `http://localhost:3000`

## Canvas LTI Setup

1. In Canvas Beta (aculeo.beta.instructure.com):
   - Go to Developer Keys
   - Create a new Developer Key
   - Configure LTI 1.3 settings
   - Add the tool to your course

2. Configure the tool with:
   - Platform: aculeo.beta.instructure.com
   - Client ID: [from Developer Key]
   - Authentication URL: [your-domain]/api/auth
   - JWKS URL: [your-domain]/api/jwks

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utility functions
├── types/           # TypeScript types
└── styles/          # Global styles
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License
