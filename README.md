# Gimmi Liquid AI - installable PWA

Aapke diye hue React code (Gimmi Liquid AI) ka production build, PWA ke roop me.

## Kya kaam karta hai
- Liquid-glass chat UI, personas, starter prompts, chat history (localStorage me save)
- Voice input (Web Speech API) + "Suno" TTS (browser speech; Gemini TTS agar API key ho)
- Image attach (vision), AI Art Studio (Gemini image model, API key ke saath)
- Chat export (.md), mobile sidebar, offline shell (service worker)
- Installable: Chrome me "Add to Home screen" / "Install app"

## Real AI (optional)
App ke andar **Activation** panel me apni Google Gemini API key daalein (aistudio.google.com/apikey).
Key sirf aapke browser ke localStorage me rehti hai. Key ke bina app **demo mode** me chalta hai -
jawab template-based hote hain, real AI ke nahi. VIP codes sirf cosmetic badge hain.

## Build
    npm install
    npm run build
    npx vite preview
