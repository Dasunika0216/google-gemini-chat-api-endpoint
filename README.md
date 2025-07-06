# Gemini Bard API Server

This project is a [Next.js](https://nextjs.org) API server that provides an endpoint for interacting with Google Gemini (Bard) via the official `@google/generative-ai` package.

## Features
- Exposes an API endpoint to generate responses using Google Gemini/Bard.
- Built with Next.js API routes.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Environment Variables

Create a `.env.local` file in the root of the `bard-api` directory and add your Gemini API key:

```
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the app.

## API Usage

### Endpoint

```
GET /api/testgemini?ques=YOUR_QUESTION
```

- **ques**: The user's question or prompt to send to Gemini/Bard.

#### Example Request

```
GET http://localhost:3000/api/testgemini?ques=Hello%20there
```

#### Example Response

```json
{
  "reply": "Hello! How can I assist you today?"
}
```

## Project Structure
- `pages/api/testgemini.js`: Main API route for Gemini/Bard integration.
- `package.json`: Project dependencies, including `@google/generative-ai`.

## Learn More
- [Google Generative AI Node.js SDK](https://www.npmjs.com/package/@google/generative-ai)
- [Next.js Documentation](https://nextjs.org/docs)

## License
MIT
