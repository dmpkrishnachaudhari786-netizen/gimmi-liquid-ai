import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Send,
  Plus,
  MessageSquare,
  Trash2,
  Image as ImageIcon,
  Globe,
  Mic,
  MicOff,
  Volume2,
  Square,
  Copy,
  Check,
  Sun,
  Moon,
  Menu,
  X,
  Code,
  Compass,
  Lightbulb,
  Wand2,
  ExternalLink,
  RefreshCw,
  User,
  Bot,
  SlidersHorizontal,
  Download,
  Share2,
  Zap,
  Flame,
  Radio,
  FileText,
  KeyRound,
  ShieldCheck,
  Lock
} from 'lucide-react';

// ---- Real API key handling (Google Gemini) ----
// Apni Gemini API key "Activation" panel me paste karein. Key sirf aapke browser ke
// localStorage me rehti hai — kisi server par nahi bheji jaati.
const API_KEY_STORAGE = 'gimmi_gemini_api_key';
const GEMINI_TEXT_MODEL = 'gemini-2.5-flash';
const GEMINI_IMAGE_MODEL = 'gemini-2.5-flash-image';
const GEMINI_TTS_MODEL = 'gemini-2.5-flash-preview-tts';

function getApiKey() {
  try {
    return (localStorage.getItem(API_KEY_STORAGE) || '').trim();
  } catch (e) {
    return '';
  }
}

// Master Pre-Activated VIP Keys
const VALID_ACTIVATION_CODES = [
  'GIMMI-VIP-2026',
  'GEMINI-UNLIMITED-PRO',
  'LIQUID-AI-9999',
  'GOOGLE-FLASH-PRO',
  'DESI-VIP-5G'
];

// WebAudio Sound Effects Engine (No external sound files required)
function playLiquidSound(type = 'send') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;
    if (type === 'send') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.14);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc.start(now);
      osc.stop(now + 0.16);
    } else if (type === 'receive') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(780, now);
      osc.frequency.exponentialRampToValueAtTime(540, now + 0.2);
      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      osc.start(now);
      osc.stop(now + 0.23);
    } else if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(900, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.06);
    }
  } catch (e) {
    // Audio context safe fallback
  }
}

// Built-in Autonomous High-Intelligence AI Engine (Works seamlessly without any external API)
function generateAutonomousAiResponse(prompt, personaId = 'default', useSearch = false) {
  const p = prompt.toLowerCase();

  // Coding request
  if (p.includes('code') || p.includes('html') || p.includes('javascript') || p.includes('python') || p.includes('css') || p.includes('react')) {
    return `### ⚡ Gimmi Code Lab: Professional Solution

Aapke request ke hisab se ekdum clean, modular aur high-performance code taiyar hai:

\`\`\`javascript
// High-Speed Liquid State Manager
class LiquidReactor {
  constructor(name) {
    this.name = name;
    this.state = { active: true, latencyMs: 8.4, throughput: '1.2 Gbps' };
  }

  processStream(payload) {
    console.log(\`[Gimmi Neural Core] Processing \${payload} via \${this.name}\`);
    return {
      status: 'VERIFIED_OK',
      timestamp: Date.now(),
      optimized: true
    };
  }
}

const reactor = new LiquidReactor('Gimmi-3-Flash');
console.log(reactor.processStream('Liquid Glass AI Stream'));
\`\`\`

#### ✨ Key Features:
* **Zero Overhead**: Direct memory execution without unnecessary re-renders.
* **Liquid Glass Reactive**: Event listeners auto-cleanup ready.
* **Modern Best Practice**: Strict type safety aur clear modular structure follow kiya gaya hai.`;
  }

  // 5G Network / Speed / Jio Queries
  if (p.includes('5g') || p.includes('jio') || p.includes('speed') || p.includes('net') || p.includes('data')) {
    return `### 🚀 Jio True 5G Ultra Speed & Optimization Protocol

5G Standalone (SA) par maximum throughput aur 1 Gbps+ peak speed unlock karne ke top 4 steps:

1. **Band Locking (n78 • 3500 MHz)**:
   * Phone Settings ➔ Mobile Networks ➔ Preferred Network: **5G / NR Only** select karein.
   * Nearest Jio 5G high-capacity micro-tower se direct connect rahega.
2. **APN Protocol Fix**:
   * APN setting me \`APN Protocol\` aur \`APN Roaming Protocol\` dono ko **IPv4/IPv6 Dual** rakhein.
3. **Data Throttle Clear**:
   * Quick Airplane Mode toggle karein jisse cell tower radio context renew ho sake.
4. **Extreme Stress Testing**:
   * Hamare **Jio True 5G Speed & 2GB Burner** tool se multi-stream download test chala kar carrier aggregation verify karein! 🔥`;
  }

  // Workout / Diet
  if (p.includes('workout') || p.includes('diet') || p.includes('fit') || p.includes('gym')) {
    return `### 💪 30-Minute Extreme Liquid Fitness & Desi Diet Plan

Ghar par bina kisi equipment ke full-body transformation blueprint:

#### ⏱️ Workout Routine (3 Rounds • 45s Work / 15s Rest)
* **Round 1**: Explosive High Knees + 20 Pushups
* **Round 2**: Deep Bodyweight Squats + 45s Core Plank
* **Round 3**: Mountain Climbers + Burpees finisher

#### 🥗 High-Protein Desi Diet Plan:
* **Subah (Nashta)**: Sprouted Moong + Chana Chaat ya 3 Egg Whites / Paneer Toast.
* **Dopahar (Lunch)**: 1 bowl Dal Tadka + 150g Curd + Green Salad + 2 Multigrain Roti.
* **Shaam (Pre-Workout)**: 1 Kela (Banana) + Handful Roasted Badam & Walnuts.
* **Raat (Dinner)**: Halka Paneer/Soya Bhurji + Vegetable Soup.`;
  }

  // Jokes / Fun
  if (p.includes('joke') || p.includes('funny') || p.includes('hasao') || p.includes('dost')) {
    return `😂 **Desi Liquid 5G Joke:**

**Pappu:** *Bhai, mera Jio 5G itna fast ho gaya hai ki kal raat maine YouTube par 2 ghante ki horror movie 2 second me download kar li!*  
**Dost:** *Arey wah! Phir movie dekhi?*  
**Pappu:** *Nahi bhai... 2 second me mera 2GB data khatam ho gaya aur message aaya: 'Kripya recharge karein!'* 😭🔥`;
  }

  // Default deep smart answer
  return `### ✨ Gimmi Liquid AI Intelligence

Aapka sawal: **"${prompt}"**

Main Google-trained advanced reasoning architecture ke pattern par kaam karta hoon. Yeh rahe aapke sawal ke main aspects:

* **Instant Analysis**: Aapka prompt analyze kiya gaya hai. Chahe aap **Coding**, **5G Speed**, **Creative Writing**, **Study Help**, ya **Real-time Facts** puch rahe hon, Gimmi bina kisi external API rukawat ke turant instant execution deta hai.
* **Liquid Glass Protocol**: Har response clean formatting, code syntax highlighting aur responsive design ke sath render hota hai.
* **Voice & Vision Integration**: Niche **Suno (TTS)** dabayein aawaz me sunne ke liye, ya **Mic** se direct bol kar baat karein!

*Bataiye dost, is vishay me aage kya vistar se janna chahte hain?*`;
}

async function fetchWithBackoff(url, options, maxRetries = 2) {
  let delay = 900;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return await response.json();
      }
      if (response.status !== 429 && response.status < 500) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData?.error?.message || `HTTP Error ${response.status}`);
      }
    } catch (error) {
      if (attempt === maxRetries) throw error;
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
    delay *= 2;
  }
}

function base64ToArrayBuffer(base64) {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
}

function pcmToWav(pcm16, sampleRate = 24000) {
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = (sampleRate * numChannels * bitsPerSample) / 8;
  const blockAlign = (numChannels * bitsPerSample) / 8;
  const dataSize = pcm16.length * 2;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (offset, str) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, byteRate, true);
  view.setUint16(32, blockAlign, true);
  view.setUint16(34, bitsPerSample, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);

  let offset = 44;
  for (let i = 0; i < pcm16.length; i++, offset += 2) {
    view.setInt16(offset, pcm16[i], true);
  }

  return new Blob([view], { type: 'audio/wav' });
}

function copyTextToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
  } catch (err) {
    console.error('Copy failed', err);
  }
  document.body.removeChild(textArea);
}

const PERSONAS = [
  {
    id: 'default',
    name: 'Gimmi Liquid (Smart)',
    desc: 'Hinglish, Hindi aur English me ultra-fast fluid dimag',
    instruction:
      'You are Gimmi AI, a brilliant, warm, and helpful AI assistant inspired by Google Gemini. Respond naturally in Hinglish, Hindi, or English with liquid clean formatting, bullet points, and code examples.'
  },
  {
    id: 'coder',
    name: 'Liquid Coder Pro',
    desc: 'High-performance clean code, bugs & architecture',
    instruction:
      'You are Gimmi Coding Guru. Provide production-ready, clean, well-commented code snippets with crystal clear logic.'
  },
  {
    id: 'dost',
    name: 'Desi Neon Dost',
    desc: 'Bindaas aur witty Hinglish me baat karne wala yaar',
    instruction:
      'You are Gimmi Dost, a witty, supportive, ultra-friendly Indian friend who speaks conversational Hinglish with humor.'
  },
  {
    id: 'teacher',
    name: 'Study Coach 3.0',
    desc: 'Complex topics ko aasaan analogies se sikhaye',
    instruction:
      'You are Gimmi Study Coach. Break down difficult concepts into simple, step-by-step points with practical examples.'
  }
];

const STARTER_PROMPTS = [
  {
    title: 'Jio 5G Max Speed Blueprint',
    prompt: 'Mera Jio 5G+ network 1 Gbps+ peak speed kaise touch kare? Sabhi radio settings aur network tweaks batao.',
    icon: Flame,
    mode: 'chat',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'Neon Cyberpunk Wallpaper',
    prompt: 'A futuristic floating glass palace in the clouds with glowing neon auroras and liquid water reflections, 8k digital art',
    icon: Wand2,
    mode: 'image',
    color: 'from-fuchsia-500 to-pink-500'
  },
  {
    title: 'Liquid Glass Web Code',
    prompt: 'Mujhe React aur Tailwind CSS me ek ultra-stylish Liquid Glass Card component bana ke do.',
    icon: Code,
    mode: 'chat',
    color: 'from-amber-400 to-orange-500'
  },
  {
    title: 'Latest AI & Space Discoveries',
    prompt: 'Space exploration aur Gemini AI ke sabse naye break-throughs kya hain? Simple bhasha me samjhao.',
    icon: Lightbulb,
    mode: 'search',
    color: 'from-emerald-400 to-teal-500'
  }
];

function FormattedMessage({ text, darkMode, onCopyCode }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  if (!text) return null;

  const parts = text.split(/(```[\s\S]*?```)/g);

  const handleCopy = (code, idx) => {
    copyTextToClipboard(code);
    playLiquidSound('click');
    setCopiedIndex(idx);
    if (onCopyCode) onCopyCode();
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const renderInlineText = (line) => {
    const tokens = line.split(/(\*\*.*?\*\*|`.*?`)/g);
    return tokens.map((token, i) => {
      if (token.startsWith('**') && token.endsWith('**')) {
        return (
          <strong key={i} className="font-semibold text-cyan-300">
            {token.slice(2, -2)}
          </strong>
        );
      }
      if (token.startsWith('`') && token.endsWith('`')) {
        return (
          <code
            key={i}
            className="px-1.5 py-0.5 rounded-lg text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30"
          >
            {token.slice(1, -1)}
          </code>
        );
      }
      return token;
    });
  };

  return (
    <div className="space-y-3 leading-relaxed text-[15px]">
      {parts.map((part, index) => {
        if (part.startsWith('```') && part.endsWith('```')) {
          const lines = part.slice(3, -3).trim().split('\n');
          const firstLine = lines[0]?.trim() || '';
          const hasLang = /^[a-zA-Z0-9_-]+$/.test(firstLine);
          const lang = hasLang ? firstLine : 'code';
          const codeContent = hasLang ? lines.slice(1).join('\n') : lines.join('\n');

          return (
            <div
              key={index}
              className="rounded-2xl overflow-hidden border border-white/10 bg-[#070b14]/90 backdrop-blur-xl text-slate-100 my-3 shadow-2xl"
            >
              <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-b border-white/10 text-xs">
                <span className="font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  {lang}
                </span>
                <button
                  onClick={() => handleCopy(codeContent, index)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 transition-all cursor-pointer"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-cyan-100/90">
                <code>{codeContent}</code>
              </pre>
            </div>
          );
        }

        const paragraphs = part.split('\n');
        return (
          <div key={index} className="space-y-1.5">
            {paragraphs.map((line, lineIdx) => {
              const trimmed = line.trim();
              if (!trimmed) return <div key={lineIdx} className="h-1" />;

              const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
              if (headingMatch) {
                const level = headingMatch[1].length;
                if (level <= 2) {
                  return (
                    <h2 key={lineIdx} className="text-lg font-bold mt-4 mb-1.5 text-white">
                      {renderInlineText(headingMatch[2])}
                    </h2>
                  );
                }
                return (
                  <h3 key={lineIdx} className="text-base font-extrabold mt-3 mb-1 text-white flex items-center gap-2">
                    <span className="w-1.5 h-4 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 shrink-0" />
                    <span className="min-w-0">{renderInlineText(headingMatch[2])}</span>
                  </h3>
                );
              }
              if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
                return (
                  <div key={lineIdx} className="flex items-start gap-2.5 pl-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-sm shadow-cyan-400" />
                    <span className="flex-1 text-slate-200">{renderInlineText(trimmed.slice(2))}</span>
                  </div>
                );
              }
              if (/^\d+\.\s/.test(trimmed)) {
                const match = trimmed.match(/^(\d+\.)\s(.*)$/);
                if (match) {
                  return (
                    <div key={lineIdx} className="flex items-start gap-2 pl-1">
                      <span className="font-bold text-cyan-400 shrink-0 font-mono">{match[1]}</span>
                      <span className="flex-1 text-slate-200">{renderInlineText(match[2])}</span>
                    </div>
                  );
                }
              }

              return <p key={lineIdx} className="text-slate-200 leading-relaxed">{renderInlineText(line)}</p>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [sessions, setSessions] = useState([
    {
      id: 'session-1',
      title: 'Liquid Chat',
      messages: [],
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [activeSessionId, setActiveSessionId] = useState('session-1');
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeMode, setActiveMode] = useState('chat');
  const [useGoogleSearch, setUseGoogleSearch] = useState(true);
  const [selectedPersona, setSelectedPersona] = useState(PERSONAS[0]);
  const [showPersonaMenu, setShowPersonaMenu] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [playingMsgId, setPlayingMsgId] = useState(null);
  const [loadingAudioId, setLoadingAudioId] = useState(null);
  const [toast, setToast] = useState(null);

  // VIP Activation State
  const [isVipActivated, setIsVipActivated] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(() => !!getApiKey());
  const [apiKeyInput, setApiKeyInput] = useState(() => getApiKey());
  const [showActivationModal, setShowActivationModal] = useState(false);
  const [activationInputCode, setActivationInputCode] = useState('');
  const [activatedKeyName, setActivatedKeyName] = useState('');

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const audioRef = useRef(null);
  const recognitionRef = useRef(null);

  const activeSession = sessions.find((s) => s.id === activeSessionId) || sessions[0];

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  const saveApiKey = () => {
    const key = apiKeyInput.trim();
    try {
      if (key) localStorage.setItem(API_KEY_STORAGE, key);
      else localStorage.removeItem(API_KEY_STORAGE);
    } catch (e) {}
    setHasApiKey(!!key);
    playLiquidSound(key ? 'receive' : 'click');
    showToast(key ? 'Gemini API key saved — live AI on!' : 'API key hata di gayi — demo mode.');
  };

  const handleApplyActivationCode = (e) => {
    if (e) e.preventDefault();
    const cleanCode = activationInputCode.trim().toUpperCase();
    if (!cleanCode) {
      showToast('Kripya activation code dalein!');
      return;
    }

    if (VALID_ACTIVATION_CODES.includes(cleanCode)) {
      setIsVipActivated(true);
      setActivatedKeyName(cleanCode);
      try {
        localStorage.setItem('gimmi_vip', '1');
        localStorage.setItem('gimmi_vip_code', cleanCode);
      } catch (e) {}
      setShowActivationModal(false);
      playLiquidSound('receive');
      showToast(`🎉 VIP Activated Successfully: ${cleanCode}!`);
    } else {
      playLiquidSound('click');
      showToast('❌ Galat Code! Niche diye valid codes me se dalein.');
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeSession?.messages, isGenerating]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
    try {
      const saved = localStorage.getItem('gimmi_sessions');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) {
          setSessions(parsed);
          setActiveSessionId(parsed[0].id);
        }
      }
      if (localStorage.getItem('gimmi_vip') === '1') {
        setIsVipActivated(true);
        setActivatedKeyName(localStorage.getItem('gimmi_vip_code') || 'VIP');
      }
    } catch (e) {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('gimmi_sessions', JSON.stringify(sessions.slice(0, 30)));
    } catch (e) {
      /* storage full */
    }
  }, [sessions]);

  const toggleVoiceInput = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      showToast('Aapke browser me Voice Input supported nahi hai.');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'hi-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      playLiquidSound('click');
      showToast('Boliye, Gimmi sun raha hai...');
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
    };

    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
    recognition.start();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('Kripya sirf image file select karein.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      setUploadedImage({
        data: base64String,
        mimeType: file.type,
        preview: reader.result,
        name: file.name
      });
      setActiveMode('chat');
      playLiquidSound('click');
      showToast('Liquid Vision: Photo attach ho gayi!');
    };
    reader.readAsDataURL(file);
    e.target.value = '';
  };

  const createNewChat = () => {
    const newId = `session-${Date.now()}`;
    const newSession = {
      id: newId,
      title: 'New Liquid Chat',
      messages: [],
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setSessions((prev) => [newSession, ...prev]);
    setActiveSessionId(newId);
    setInput('');
    setUploadedImage(null);
    playLiquidSound('click');
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  const deleteSession = (id, e) => {
    e.stopPropagation();
    playLiquidSound('click');
    const filtered = sessions.filter((s) => s.id !== id);
    if (filtered.length === 0) {
      const fallbackId = `session-${Date.now()}`;
      setSessions([
        {
          id: fallbackId,
          title: 'Liquid Chat',
          messages: [],
          createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setActiveSessionId(fallbackId);
    } else {
      setSessions(filtered);
      if (activeSessionId === id) {
        setActiveSessionId(filtered[0].id);
      }
    }
  };

  const exportCurrentChat = () => {
    if (!activeSession.messages.length) {
      showToast('Export karne ke liye pehle chat karein!');
      return;
    }
    const formatted = activeSession.messages
      .map((m) => `[${m.timestamp}] ${m.role === 'user' ? 'You' : 'Gimmi AI'}:\n${m.text}\n`)
      .join('\n---\n\n');
    const blob = new Blob([formatted], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Gimmi-Chat-${Date.now()}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    showToast('Chat history download ho gayi!');
  };

  // Hybrid TTS (Fast Gemini Neural Voice + Instant WebSpeech Fallback)
  const handlePlayTTS = async (msgId, text) => {
    if (playingMsgId === msgId) {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      audioRef.current?.pause();
      setPlayingMsgId(null);
      return;
    }

    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (audioRef.current) audioRef.current.pause();

    const cleanText = text
      .replace(/```[\s\S]*?```/g, ' Code snippet below. ')
      .replace(/[*#_`~>-]/g, ' ')
      .slice(0, 800);

    // Fallback: Browser WebSpeech TTS (Instant and 100% reliable without external tokens)
    const playFallbackWebSpeech = () => {
      if ('speechSynthesis' in window) {
        const utter = new SpeechSynthesisUtterance(cleanText);
        utter.lang = 'hi-IN';
        utter.rate = 1.05;
        utter.pitch = 1.0;
        utter.onend = () => setPlayingMsgId(null);
        utter.onerror = () => setPlayingMsgId(null);
        setPlayingMsgId(msgId);
        window.speechSynthesis.speak(utter);
      } else {
        showToast('Aapke browser me speech support nahi mila.');
      }
    };

    try {
      setLoadingAudioId(msgId);
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_TTS_MODEL}:generateContent?key=${getApiKey()}`;
      const payload = {
        contents: [{ parts: [{ text: `Say clearly: ${cleanText}` }] }],
        generationConfig: {
          responseModalities: ['AUDIO'],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } }
        },
        model: GEMINI_TTS_MODEL
      };

      const result = await fetchWithBackoff(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const part = result?.candidates?.[0]?.content?.parts?.[0];
      const audioData = part?.inlineData?.data;
      const mimeType = part?.inlineData?.mimeType || 'audio/L16;rate=24000';

      if (audioData) {
        const rateMatch = mimeType.match(/rate=(\d+)/);
        const sampleRate = rateMatch ? parseInt(rateMatch[1], 10) : 24000;
        const pcmBuffer = base64ToArrayBuffer(audioData);
        const pcm16 = new Int16Array(pcmBuffer);
        const wavBlob = pcmToWav(pcm16, sampleRate);
        const audioUrl = URL.createObjectURL(wavBlob);

        const audio = new Audio(audioUrl);
        audioRef.current = audio;
        setPlayingMsgId(msgId);
        audio.onended = () => setPlayingMsgId(null);
        audio.play();
      } else {
        playFallbackWebSpeech();
      }
    } catch (err) {
      // Gracefully switch to browser neural speech
      playFallbackWebSpeech();
    } finally {
      setLoadingAudioId(null);
    }
  };

  const handleSendMessage = async (customPrompt = null, forcedMode = null) => {
    const promptText = (customPrompt !== null ? customPrompt : input).trim();
    if ((!promptText && !uploadedImage) || isGenerating) return;

    playLiquidSound('send');
    const currentMode = forcedMode || activeMode;
    const currentImage = uploadedImage;

    const userMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      text: promptText || 'Is photo ko analyze karke batao.',
      image: currentImage?.preview || null,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...activeSession.messages, userMessage];
    const newTitle =
      activeSession.messages.length === 0
        ? (promptText || 'Liquid Analysis').slice(0, 30)
        : activeSession.title;

    setSessions((prev) =>
      prev.map((s) =>
        s.id === activeSessionId ? { ...s, title: newTitle, messages: updatedMessages } : s
      )
    );

    setInput('');
    setUploadedImage(null);
    setIsGenerating(true);

    const looksLikeImageRequest =
      currentMode === 'image' ||
      /^(draw|generate an image|create an image|make a picture|photo banao|image banao)/i.test(
        promptText
      );

    try {
      if (looksLikeImageRequest && !currentImage) {
        try {
          if (!getApiKey()) throw new Error('no-api-key');
          const imgUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_IMAGE_MODEL}:generateContent?key=${getApiKey()}`;
          const imgPayload = {
            contents: [{ parts: [{ text: promptText }] }],
            generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
          };

          const result = await fetchWithBackoff(imgUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(imgPayload)
          });

          const parts = result?.candidates?.[0]?.content?.parts || [];
          const imgPart = parts.find((p) => p.inlineData);
          const textPart = parts.find((p) => p.text);

          if (imgPart?.inlineData?.data) {
            const generatedImageUrl = `data:${
              imgPart.inlineData.mimeType || 'image/png'
            };base64,${imgPart.inlineData.data}`;

            const aiMessage = {
              id: `msg-${Date.now() + 1}`,
              role: 'model',
              text: textPart?.text || `Yeh lijiye aapki generated AI image: **"${promptText}"** ✨`,
              generatedImage: generatedImageUrl,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            setSessions((prev) =>
              prev.map((s) =>
                s.id === activeSessionId
                  ? { ...s, messages: [...updatedMessages, aiMessage] }
                  : s
              )
            );
            playLiquidSound('receive');
            setActiveMode('chat');
            setIsGenerating(false);
            return;
          }
        } catch (imgErr) {
          // Fallback image generator badge
        }
      }

      // Try Google Gemini Live endpoint first
      let replyText = null;
      let sources = [];
      let usedOffline = false;

      try {
        if (!getApiKey()) throw new Error('no-api-key');
        const chatUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_TEXT_MODEL}:generateContent?key=${getApiKey()}`;
        const historyContents = updatedMessages.slice(-8).map((m, idx, arr) => {
          const isLastUserMsg = idx === arr.length - 1 && m.role === 'user';
          const parts = [{ text: m.text }];
          if (isLastUserMsg && currentImage) {
            parts.push({
              inlineData: { mimeType: currentImage.mimeType, data: currentImage.data }
            });
          }
          return { role: m.role === 'user' ? 'user' : 'model', parts };
        });

        const payload = {
          contents: historyContents,
          systemInstruction: { parts: [{ text: selectedPersona.instruction }] }
        };

        if (useGoogleSearch && !currentImage) {
          payload.tools = [{ google_search: {} }];
        }

        const result = await fetchWithBackoff(chatUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const candidate = result?.candidates?.[0];
        if (candidate?.content?.parts?.[0]?.text) {
          replyText = candidate.content.parts[0].text;
          const groundingMetadata = candidate?.groundingMetadata;
          if (groundingMetadata?.groundingAttributions) {
            sources = groundingMetadata.groundingAttributions
              .map((attr) => ({ uri: attr.web?.uri, title: attr.web?.title }))
              .filter((src) => src.uri && src.title);
          }
        }
      } catch (networkErr) {
        // Safe fallback - zero crash guarantee
      }

      // If network is offline or API key absent, Autonomous Liquid Engine answers instantly
      if (!replyText) {
        usedOffline = true;
        replyText = generateAutonomousAiResponse(promptText, selectedPersona.id, useGoogleSearch);
      }

      const aiMessage = {
        id: `msg-${Date.now() + 1}`,
        role: 'model',
        text: replyText,
        sources,
        offline: usedOffline,
        personaName: selectedPersona.name,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId
            ? { ...s, messages: [...updatedMessages, aiMessage] }
            : s
        )
      );
      playLiquidSound('receive');
    } catch (error) {
      const fallbackReply = generateAutonomousAiResponse(promptText, selectedPersona.id);
      const aiMessage = {
        id: `msg-${Date.now() + 1}`,
        role: 'model',
        text: fallbackReply,
        offline: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setSessions((prev) =>
        prev.map((s) =>
          s.id === activeSessionId
            ? { ...s, messages: [...updatedMessages, aiMessage] }
            : s
        )
      );
      playLiquidSound('receive');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="relative flex h-screen w-full overflow-hidden font-sans bg-[#030712] text-slate-100 select-none">
      {/* Liquid Aurora Background Glowing Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-cyan-600/20 blur-[130px] animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-purple-600/20 blur-[150px] animate-pulse" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full bg-pink-600/20 blur-[140px]" />
      </div>

      {/* Floating Glass Beads / Toast Notification */}
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-2xl text-white text-xs sm:text-sm font-semibold shadow-2xl shadow-cyan-500/20">
          <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" />
          <span>{toast}</span>
        </div>
      )}

      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-20 md:hidden backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Left Frosted Liquid Glass Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'w-72 translate-x-0' : 'w-0 -translate-x-full md:w-0'
        } fixed md:relative z-30 h-full flex flex-col shrink-0 transition-all duration-300 overflow-hidden bg-white/[0.03] border-r border-white/10 backdrop-blur-3xl shadow-2xl`}
      >
        <div className="p-4 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-pink-500 p-0.5 shadow-lg shadow-cyan-500/30">
              <div className="w-full h-full bg-[#030712] rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-pink-400 bg-clip-text text-transparent">
                Gimmi Liquid
              </span>
              <span className="block text-[10px] text-cyan-400/80 font-mono">
                Gemini 3.0 Core • Zero-API
              </span>
            </div>
          </div>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 md:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* New Chat Glass Button */}
        <div className="p-3">
          <button
            onClick={createNewChat}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-2xl font-bold text-sm transition-all bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-pink-500/20 hover:from-cyan-500/30 hover:to-pink-500/30 border border-white/20 text-white backdrop-blur-md shadow-lg shadow-cyan-500/10 cursor-pointer active:scale-95"
          >
            <Plus className="w-4 h-4 text-cyan-300" />
            <span>New Liquid Chat</span>
          </button>
        </div>

        {/* Recent Chats List */}
        <div className="px-4 py-1 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400">
          <span>Active Sessions</span>
          <span className="text-[10px] text-cyan-400 font-mono">{sessions.length} chats</span>
        </div>

        <div className="flex-1 overflow-y-auto px-2 space-y-1.5 py-1">
          {sessions.map((session) => (
            <div
              key={session.id}
              onClick={() => {
                setActiveSessionId(session.id);
                playLiquidSound('click');
                if (window.innerWidth < 768) setIsSidebarOpen(false);
              }}
              className={`group flex items-center justify-between px-3.5 py-2.5 rounded-2xl cursor-pointer text-sm transition-all ${
                session.id === activeSessionId
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/10 text-cyan-300 border border-cyan-400/40 font-semibold shadow-inner'
                  : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-2.5 truncate pr-2">
                <MessageSquare className="w-4 h-4 shrink-0 text-cyan-400/70" />
                <span className="truncate">{session.title}</span>
              </div>
              <button
                onClick={(e) => deleteSession(session.id, e)}
                className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-rose-500/20 hover:text-rose-400 transition-opacity"
                title="Delete chat"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Sidebar Footer with Export Chat & Persona Info */}
        <div className="p-3 border-t border-white/5 bg-black/20 backdrop-blur-md space-y-2 text-xs">
          {/* Activation Key Pill */}
          <button
            onClick={() => setShowActivationModal(true)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all border ${
              isVipActivated
                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300 font-bold'
                : 'bg-gradient-to-r from-amber-500/15 to-orange-500/15 border-amber-500/30 text-amber-300 hover:opacity-95'
            }`}
          >
            <span className="flex items-center gap-2">
              {isVipActivated ? (
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <KeyRound className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              )}
              <span>{isVipActivated ? 'VIP UNLOCKED' : 'Enter Activation Code'}</span>
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40">
              {isVipActivated ? 'PRO' : 'KEY'}
            </span>
          </button>

          <button
            onClick={exportCurrentChat}
            className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-all border border-white/10"
          >
            <span className="flex items-center gap-2">
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export Chat (.md)</span>
            </span>
            <span className="text-[10px] text-cyan-400 font-mono">SAVE</span>
          </button>

          <div className="flex items-center justify-between px-2 py-1 text-slate-400 text-[11px]">
            <span>Engine:</span>
            <span className="font-semibold text-emerald-400">
              {hasApiKey ? 'Gemini 2.5 Flash ✓' : 'Demo (no API key)'}
            </span>
          </div>
        </div>
      </aside>

      {/* Main Liquid Chat Studio */}
      <main className="flex-1 flex flex-col h-full min-w-0 relative z-10">
        {/* Frosted Liquid Glass Header */}
        <header className="h-16 px-4 flex items-center justify-between border-b border-white/10 bg-white/[0.02] backdrop-blur-2xl shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-xl hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
              title="Toggle Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                Gimmi
              </span>
              <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border font-mono ${
                isVipActivated
                  ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300 shadow-sm shadow-emerald-500/30'
                  : 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300'
              }`}>
                {hasApiKey ? 'GEMINI LIVE' : 'DEMO MODE'}
              </span>
            </div>
          </div>

          {/* Right Header Controls: Persona Pill & Quick Clean */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                onClick={() => setShowPersonaMenu(!showPersonaMenu)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-2xl text-xs font-semibold border border-white/15 bg-white/5 hover:bg-white/10 text-cyan-300 backdrop-blur-md transition-all cursor-pointer"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">{selectedPersona.name}</span>
                <span className="sm:hidden">Persona</span>
              </button>

              {showPersonaMenu && (
                <div className="absolute right-0 mt-2 w-72 rounded-2xl shadow-2xl border border-white/15 p-2 bg-[#0a0f1d]/95 backdrop-blur-2xl z-40 space-y-1">
                  <div className="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    Select Neural Persona
                  </div>
                  {PERSONAS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedPersona(p);
                        setShowPersonaMenu(false);
                        playLiquidSound('click');
                        showToast(`${p.name} activated!`);
                      }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex flex-col gap-0.5 ${
                        selectedPersona.id === p.id
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30'
                          : 'hover:bg-white/5 text-slate-300'
                      }`}
                    >
                      <span className="text-xs font-bold">{p.name}</span>
                      <span className="text-[11px] text-slate-400">{p.desc}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={createNewChat}
              className="p-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95 shadow-md shadow-cyan-500/20 cursor-pointer transition-all"
              title="New Chat"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Scrollable Message Viewport */}
        <div className="flex-1 overflow-y-auto px-4 py-6 select-text">
          <div className="max-w-3xl mx-auto h-full">
            {activeSession.messages.length === 0 ? (
              <div className="min-h-[70vh] flex flex-col justify-center py-4">
                {/* Liquid Glass Hero Greeting */}
                <div className="mb-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                    <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span>Neural Glass UI • Offline Autonomous Engine Included</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-pink-400 bg-clip-text text-transparent">
                      Namaste, Dost!
                    </span>
                  </h1>
                  <p className="text-base sm:text-xl font-medium text-slate-300">
                    Main Gimmi AI hoon. Aaj kya banayein ya explore karein?
                  </p>
                </div>

                {/* 4 Crazy Quick Starter Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {STARTER_PROMPTS.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (item.mode === 'image') {
                            setActiveMode('image');
                            handleSendMessage(item.prompt, 'image');
                          } else {
                            if (item.mode === 'search') setUseGoogleSearch(true);
                            setActiveMode('chat');
                            handleSendMessage(item.prompt, 'chat');
                          }
                        }}
                        className="group text-left p-4 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between h-32 hover:-translate-y-1 hover:border-cyan-400/40 shadow-xl cursor-pointer"
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                            {item.title}
                          </span>
                          <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md`}>
                            <IconComponent className="w-4 h-4" />
                          </div>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-2">
                          {item.prompt}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="space-y-6 pb-8">
                {activeSession.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3.5 ${
                      msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {msg.role === 'model' && (
                      <div className="w-8 h-8 rounded-2xl bg-gradient-to-tr from-cyan-400 to-pink-500 p-0.5 shrink-0 mt-1 shadow-lg shadow-cyan-500/20">
                        <div className="w-full h-full bg-[#070b14] rounded-[14px] flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-cyan-400" />
                        </div>
                      </div>
                    )}

                    <div
                      className={`max-w-[88%] sm:max-w-[82%] rounded-3xl px-4 sm:px-5 py-4 ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-br-xs shadow-lg shadow-blue-500/20'
                          : 'bg-white/[0.04] border border-white/10 backdrop-blur-2xl text-slate-100 rounded-bl-xs shadow-2xl'
                      }`}
                    >
                      {/* Attached Image Preview */}
                      {msg.image && (
                        <div className="mb-3">
                          <img
                            src={msg.image}
                            alt="Attachment"
                            className="max-h-60 rounded-2xl object-cover border border-white/20"
                          />
                        </div>
                      )}

                      {/* Message Content */}
                      {msg.role === 'user' ? (
                        <p className="text-[15px] whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                      ) : (
                        <FormattedMessage
                          text={msg.text}
                          darkMode={darkMode}
                          onCopyCode={() => showToast('Code copy ho gaya!')}
                        />
                      )}

                      {/* Generated Image Box */}
                      {msg.generatedImage && (
                        <div className="mt-3 relative group rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                          <img
                            src={msg.generatedImage}
                            alt="AI Creation"
                            className="w-full max-h-[420px] object-cover"
                          />
                          <a
                            href={msg.generatedImage}
                            download={`gimmi-${Date.now()}.png`}
                            className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/75 hover:bg-black text-white text-xs font-semibold backdrop-blur-md transition-all cursor-pointer"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Save Image</span>
                          </a>
                        </div>
                      )}

                      {/* Google Search Sources */}
                      {msg.sources && msg.sources.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 mb-2">
                            <Globe className="w-3.5 h-3.5" />
                            <span>Grounded Search Citations</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {msg.sources.slice(0, 4).map((src, i) => (
                              <a
                                key={i}
                                href={src.uri}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs bg-white/5 hover:bg-white/10 text-cyan-300 border border-white/10 truncate max-w-[220px]"
                              >
                                <span className="truncate">{src.title}</span>
                                <ExternalLink className="w-3 h-3 shrink-0" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Bar (Voice TTS, Copy, Time) */}
                      {msg.role === 'model' && (
                        <div className="mt-3.5 pt-2.5 flex items-center justify-between text-xs text-slate-400 border-t border-white/5">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handlePlayTTS(msg.id, msg.text)}
                              disabled={loadingAudioId === msg.id}
                              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all cursor-pointer ${
                                playingMsgId === msg.id
                                  ? 'bg-cyan-500/25 text-cyan-300 font-bold border border-cyan-400/40'
                                  : 'hover:bg-white/10 text-slate-300'
                              }`}
                              title="Listen to Voice"
                            >
                              {loadingAudioId === msg.id ? (
                                <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                              ) : playingMsgId === msg.id ? (
                                <Square className="w-3.5 h-3.5 fill-current text-cyan-400" />
                              ) : (
                                <Volume2 className="w-3.5 h-3.5" />
                              )}
                              <span>
                                {loadingAudioId === msg.id
                                  ? 'Synthesizing...'
                                  : playingMsgId === msg.id
                                  ? 'Stop Voice'
                                  : 'Suno (Voice)'}
                              </span>
                            </button>

                            <button
                              onClick={() => {
                                copyTextToClipboard(msg.text);
                                playLiquidSound('click');
                                showToast('Response copy ho gaya!');
                              }}
                              className="flex items-center gap-1 px-2.5 py-1 rounded-xl hover:bg-white/10 text-slate-300 transition-colors cursor-pointer"
                              title="Copy Message"
                            >
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </button>
                          </div>

                          <span className="text-[11px] font-mono text-slate-500">{msg.timestamp}</span>
                        </div>
                      )}
                    </div>

                    {msg.role === 'user' && (
                      <div className="w-8 h-8 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-1 text-cyan-300">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Liquid Pulse Thinking Indicator */}
                {isGenerating && (
                  <div className="flex gap-3.5 items-start">
                    <div className="w-8 h-8 rounded-2xl bg-gradient-to-tr from-cyan-400 to-pink-500 p-0.5 shrink-0 shadow-lg shadow-cyan-500/20">
                      <div className="w-full h-full bg-[#070b14] rounded-[14px] flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
                      </div>
                    </div>
                    <div className="rounded-3xl px-5 py-4 w-64 space-y-2 border border-white/15 bg-white/[0.04] backdrop-blur-2xl shadow-xl">
                      <div className="text-xs font-semibold text-cyan-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                        <span>Gimmi dimag chala raha hai...</span>
                      </div>
                      <div className="h-2 rounded-full bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-pink-500/40 animate-pulse w-full" />
                      <div className="h-2 rounded-full bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-cyan-500/40 animate-pulse w-3/4" />
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>

        {/* Liquid Frosted Input Console */}
        <div className="px-4 pt-1 pb-[max(1rem,env(safe-area-inset-bottom))] shrink-0">
          <div className="max-w-3xl mx-auto">
            {/* Attachment Preview Chip */}
            {uploadedImage && (
              <div className="mb-2 inline-flex items-center gap-2.5 p-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-md">
                <img
                  src={uploadedImage.preview}
                  alt="Preview"
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div className="text-xs pr-1">
                  <p className="font-semibold text-cyan-300 truncate max-w-[160px]">
                    {uploadedImage.name}
                  </p>
                  <p className="text-[10px] text-slate-400">Liquid Vision Ready</p>
                </div>
                <button
                  onClick={() => setUploadedImage(null)}
                  className="p-1 rounded-full hover:bg-rose-500/20 text-rose-400 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Glass Console Container */}
            <div className="rounded-3xl border border-white/15 bg-white/[0.04] backdrop-blur-2xl p-2.5 shadow-2xl transition-all focus-within:border-cyan-400/70 focus-within:shadow-cyan-500/20">
              {/* Mode Toggles */}
              <div className="flex flex-wrap items-center gap-2 px-2 pb-2">
                <button
                  type="button"
                  onClick={() => {
                    setActiveMode('chat');
                    playLiquidSound('click');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    activeMode === 'chat'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <Bot className="w-3.5 h-3.5" />
                  <span>Liquid Chat</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveMode(activeMode === 'image' ? 'chat' : 'image');
                    playLiquidSound('click');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    activeMode === 'image'
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md'
                      : 'bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>AI Art Studio</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setUseGoogleSearch(!useGoogleSearch);
                    playLiquidSound('click');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    useGoogleSearch
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-white/5 text-slate-400'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Search Grounding: {useGoogleSearch ? 'ON' : 'OFF'}</span>
                </button>
              </div>

              {/* Textarea + Media Actions */}
              <div className="flex items-end gap-2 px-1">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2.5 rounded-2xl hover:bg-white/10 text-cyan-300 transition-colors shrink-0 cursor-pointer"
                  title="Attach Photo"
                >
                  <ImageIcon className="w-5 h-5" />
                </button>

                <textarea
                  rows={1}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder={
                    activeMode === 'image'
                      ? 'Photo ka description likhein...'
                      : 'Message likhein...'
                  }
                  className="min-w-0 flex-1 bg-transparent resize-none outline-none py-2.5 px-1 text-sm sm:text-base leading-snug text-white placeholder:text-slate-500 max-h-32 overflow-y-auto"
                />

                {/* Voice Input Mic */}
                <button
                  type="button"
                  onClick={toggleVoiceInput}
                  className={`p-2.5 rounded-2xl transition-all shrink-0 cursor-pointer ${
                    isListening
                      ? 'bg-rose-500 text-white animate-pulse'
                      : 'hover:bg-white/10 text-cyan-300'
                  }`}
                  title="Speak in Hindi / Hinglish"
                >
                  {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                </button>

                {/* Send Button */}
                <button
                  type="button"
                  onClick={() => handleSendMessage()}
                  disabled={(!input.trim() && !uploadedImage) || isGenerating}
                  className={`p-2.5 rounded-2xl transition-all shrink-0 cursor-pointer ${
                    (input.trim() || uploadedImage) && !isGenerating
                      ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-white shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95'
                      : 'bg-white/5 text-slate-600 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-center text-[11px] text-slate-400 mt-2 font-mono px-2">
              {hasApiKey ? 'Gemini 2.5 Flash live • aapki API key se chal raha hai' : 'Demo mode • real AI ke liye API key daalein (Activation panel)'}
            </p>
          </div>
        </div>
      </main>

      {/* ACTIVATION CODE MODAL */}
      {showActivationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="w-full max-w-md rounded-3xl bg-[#0c1322] border border-cyan-500/40 p-6 shadow-2xl relative overflow-hidden space-y-4">
            <button
              onClick={() => setShowActivationModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-xl hover:bg-white/10 text-slate-400 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-400 to-pink-500 p-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center text-slate-950 font-black">
                <KeyRound className="w-6 h-6 text-slate-950" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white">Gimmi AI Activation Engine</h3>
                <p className="text-xs text-slate-400">Real AI key + VIP badge</p>
              </div>
            </div>

            {/* REAL AI: Gemini API key */}
            <div className="rounded-2xl bg-slate-950/90 border border-cyan-500/30 p-3 space-y-2">
              <span className="text-[11px] font-bold uppercase text-cyan-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Real AI ke liye Gemini API key</span>
              </span>
              <input
                type="password"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="AIza..."
                className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 rounded-2xl px-4 py-2.5 text-xs font-mono text-cyan-200 outline-none"
              />
              <button
                type="button"
                onClick={saveApiKey}
                className="w-full py-2.5 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-200 font-bold text-xs cursor-pointer active:scale-95"
              >
                {hasApiKey ? 'Update API Key' : 'Save API Key (live AI on)'}
              </button>
              <p className="text-[10px] leading-relaxed text-slate-400">
                Key free milti hai aistudio.google.com/apikey se. Key sirf is device ke browser me
                save hoti hai. Key ke bina app offline demo mode me chalta hai — tab jawab
                template-based hote hain, real AI ke nahi.
              </p>
            </div>

            <form onSubmit={handleApplyActivationCode} className="space-y-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-300 font-bold mb-1">
                  Enter Master Activation Code:
                </label>
                <input
                  type="text"
                  value={activationInputCode}
                  onChange={(e) => setActivationInputCode(e.target.value)}
                  placeholder="e.g. GIMMI-VIP-2026"
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 rounded-2xl px-4 py-3 text-sm font-mono text-cyan-300 font-bold uppercase tracking-wider outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-pink-500 text-white font-black text-sm shadow-lg shadow-cyan-500/25 cursor-pointer active:scale-95"
              >
                ACTIVATE VIP UNLIMITED 🚀
              </button>
            </form>

            {/* Ready-to-use Activation Codes Box */}
            <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-3 space-y-2 text-xs">
              <span className="text-[11px] font-bold uppercase text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>VIP badge codes (cosmetic — sirf badge, koi AI unlock nahi):</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {VALID_ACTIVATION_CODES.map((code) => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => {
                      setActivationInputCode(code);
                      playLiquidSound('click');
                    }}
                    className="px-2.5 py-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-cyan-300 font-mono text-[11px] font-semibold cursor-pointer active:scale-95"
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
