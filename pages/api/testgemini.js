import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  try {
    const prompt = req.query.ques || "Hi";

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const reply = result.response.text(); // ✅ this gets the full generated response

    res.status(200).json({ reply });
  } catch (err) {
    console.error("API Error:", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
}
