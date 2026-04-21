import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Bot, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "";

const PORTFOLIO_CONTEXT = `
Eres el asistente virtual de Daniel Vidales Bautista. Tu objetivo es responder preguntas sobre Daniel basándote en la información de su portafolio.

Información sobre Daniel:
- Nombre: Daniel Vidales Bautista
- Perfil: Desarrollador Multiplataforma, Web y Especialista en IA.
- Ubicación: Toledo, España.
- Experiencia: 4+ años de experiencia, 15+ proyectos entregados.
- Especialidades: Integración de modelos generativos, automatizaciones inteligentes, aplicaciones multiplataforma de alto rendimiento.

Habilidades:
- Desarrollo de Apps: Java, Kotlin, C#, Python, Android Studio.
- Desarrollo Web: HTML, Tailwind CSS, JavaScript, Node.js, EJS, Bootstrap.
- Bases de Datos: Oracle, MySQL, MongoDB, Mongoose, JSON.
- IA: Automatizaciones, Vibe Coding, Chatbots.

Proyectos destacados:
1. Plataforma Multi-Chatbot IA: Gestión de múltiples chatbots con base de conocimientos personalizada.
2. Local Commerce Hub (TFG): Digitalización del comercio local.
3. Ecosistema de Apps Vibe Coding: Aplicaciones optimizadas mediante Vibe Coding.
4. Web crawler: Scraping avanzado con IA.
5. Asistente Zalando: Automatización de incidencias de pedidos.
6. Integración HTTP para sistema de tickets: Conector robusto con autenticación y reintentos.
7. Transformador: Conversión de Word a PDFs y PowerPoints con diseño profesional mediante IA.
8. Incidencias Glovo: Gestión en tiempo real y reportes diarios.

Educación:
- Programa Superior en Inteligencia Artificial (Fedeto).
- CFGS Desarrollo de Aplicaciones Multiplataforma (IES Julio Verne).
- CFGM Sistemas Microinformáticos y Redes (IES Azarquiel).

Experiencia Laboral:
- Técnico en reparación en Servicio oficial Samsung (Electrónica Jopal S.L.).
- Desarrollador web en Intelligentlife (Rastreador Python, posicionamiento web, landing pages).

Instrucciones:
- Responde de manera profesional, amable y concisa.
- Si te preguntan algo que no está en el contexto, di amablemente que no tienes esa información específica pero que pueden contactar a Daniel directamente a través del formulario de contacto o su email: danielvidalesbautista@gmail.com.
- Usa un tono entusiasta sobre la tecnología y la IA.
`;

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: "¡Hola! Soy el asistente de Daniel. ¿En qué puedo ayudarte?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      if (!GEMINI_API_KEY) {
        throw new Error("API Key no configurada");
      }

      const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
      
      // Build history for the logic
      const history = messages.map(m => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.text }]
      }));

      // Find original bot message and replace it with context if it's the first turn
      // But actually, we should just use generateContent with the context and history
      
      const contents = [
        { role: "user", parts: [{ text: PORTFOLIO_CONTEXT }] },
        { role: "model", parts: [{ text: "Entendido. Soy el asistente de Daniel Vidales Bautista y responderé basándome en su información profesional." }] },
        ...history.map(h => ({
            role: h.role,
            parts: h.parts
        })),
        { role: "user", parts: [{ text: userMessage }] }
      ];

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: contents as any
      });

      const text = response.text || "Lo siento, no pude generar una respuesta.";

      setMessages(prev => [...prev, { role: "bot", text }]);
    } catch (error) {
      console.error("Error calling Gemini:", error);
      setMessages(prev => [...prev, { role: "bot", text: "Lo siento, ha ocurrido un error al procesar tu pregunta. Por favor, inténtalo de nuevo más tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-slate-900 border border-outline-variant/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-primary/10 border-b border-outline-variant/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface">Asistente Daniel IA</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">En línea</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors text-on-surface-variant"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === "user" 
                      ? "bg-primary text-on-primary rounded-tr-none" 
                      : "bg-surface-container-high text-on-surface rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-surface-container-high text-on-surface p-3 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <Loader2 size={16} className="animate-spin text-primary" />
                    <span className="text-xs">Pensando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-outline-variant/10 bg-slate-900/50">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pregunta sobre Daniel..."
                  className="flex-1 bg-surface-container border border-outline-variant/20 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-primary text-on-primary rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:grayscale"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-on-primary rounded-full shadow-[0_0_20px_rgba(129,236,255,0.4)] flex items-center justify-center relative group"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-tertiary rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-slate-950">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
};
