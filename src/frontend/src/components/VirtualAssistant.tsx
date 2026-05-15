import { Send, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: "bot" | "user";
  hasMapLink?: boolean;
  hasWorkshopLink?: boolean;
}

const MAPS_URL =
  "https://www.google.com/maps/place/Tv.+Brites+Gon%C3%A7alves+2,+Tomar/@39.6062876,-8.4049346,17z/data=!3m1!4b1!4m6!3m5!1s0xd187eb1f1578b6f:0x36e95d93eae58f13!8m2!3d39.6062876!4d-8.4023597!16s%2Fg%2F11c1_6rq5y?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D";

function getBotResponse(userMessage: string): {
  text: string;
  hasMapLink?: boolean;
  hasWorkshopLink?: boolean;
} {
  const msg = userMessage
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

  const locationKeywords = [
    "sitio",
    "onde",
    "local",
    "localizacao",
    "morada",
    "endereco",
    "address",
    "where",
    "lugar",
    "fica",
    "ficam",
    "encontrar",
  ];
  const hoursKeywords = [
    "hora",
    "horario",
    "horarios",
    "aberto",
    "abre",
    "fecha",
    "schedule",
    "open",
    "quando",
    "funcionamento",
    "funciona",
  ];
  const priceKeywords = [
    "preco",
    "precos",
    "orcamento",
    "quanto",
    "custa",
    "custo",
    "valor",
    "budget",
    "price",
    "cost",
  ];
  const workshopKeywords = [
    "workshop",
    "workshops",
    "aulas",
    "aula",
    "formacao",
    "curso",
    "cursos",
    "atividade",
    "atividades",
    "oficina",
    "oficinas",
  ];

  if (workshopKeywords.some((kw) => msg.includes(kw))) {
    return {
      text: "Podes ver todos os nossos workshops e atividades criativas aqui:",
      hasWorkshopLink: true,
    };
  }

  if (locationKeywords.some((kw) => msg.includes(kw))) {
    return {
      text: "O nosso ateliê situa-se na Travessa Brites Gonçalves, loja nº2, perto da Escola Gualdim Pais, em Tomar.",
      hasMapLink: true,
    };
  }

  if (hoursKeywords.some((kw) => msg.includes(kw))) {
    return {
      text: "O nosso espaço está aberto das 10h às 19h30 de segunda a sexta; e das 10h às 13h30 ao sábado.",
    };
  }

  if (priceKeywords.some((kw) => msg.includes(kw))) {
    return {
      text: "Para obter um orçamento ou preço de algum artigo, entre em contacto com a nossa loja para o 937 735 944 ou para o email geral.coralatelie@gmail.com",
    };
  }

  return {
    text: "Obrigada pela sua mensagem! Para mais informações, pode contactar-nos pelo 937 735 944 ou pelo email geral.coralatelie@gmail.com",
  };
}

const TOOLTIP_SESSION_KEY = "coral_chat_tooltip_shown";

export default function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Sou o assistente virtual do Coral Ateliê, em que posso ajudar?",
      sender: "bot",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  // Show tooltip "Fale connosco" after 10s, only once per session
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem(TOOLTIP_SESSION_KEY);
    if (alreadyShown) return;

    const showTimer = setTimeout(() => {
      setShowTooltip(true);
      sessionStorage.setItem(TOOLTIP_SESSION_KEY, "1");

      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 10000);

      return () => clearTimeout(hideTimer);
    }, 10000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: ref-only effect triggered by messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: nextId.current++,
      text: trimmed,
      sender: "user",
    };

    const response = getBotResponse(trimmed);
    const botMsg: Message = {
      id: nextId.current++,
      text: response.text,
      sender: "bot",
      hasMapLink: response.hasMapLink,
      hasWorkshopLink: response.hasWorkshopLink,
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInputValue("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 16 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="w-[320px] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            style={{
              maxHeight: "420px",
              background: "#fff",
              border: "1px solid #f5c6c9",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ background: "#f18c94" }}
            >
              <div className="flex items-center gap-2">
                <img
                  src="/assets/uploads/Coral-logo-01-1-1.jpg"
                  alt="Assistente Virtual Coral Ateliê"
                  className="rounded-full object-cover flex-shrink-0"
                  style={{
                    width: 36,
                    height: 36,
                    border: "2px solid rgba(255,255,255,0.6)",
                  }}
                />
                <span className="text-white font-semibold text-sm tracking-wide">
                  Assistente Virtual
                </span>
              </div>
              <button
                type="button"
                data-ocid="chat.close_button"
                onClick={() => setIsOpen(false)}
                className="text-white hover:opacity-75 transition-opacity rounded-full p-0.5"
                aria-label="Fechar chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 overflow-y-auto p-3 flex flex-col gap-2"
              style={{ minHeight: 0, maxHeight: "300px" }}
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`rounded-2xl px-3 py-2 text-sm max-w-[85%] leading-relaxed ${
                      msg.sender === "user"
                        ? "text-white rounded-br-sm"
                        : "bg-gray-100 text-gray-800 rounded-bl-sm"
                    }`}
                    style={
                      msg.sender === "user" ? { background: "#f18c94" } : {}
                    }
                  >
                    <p>{msg.text}</p>
                    {msg.hasMapLink && (
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-medium mt-1 block"
                        style={{ color: "#f18c94" }}
                      >
                        Ver no Google Maps →
                      </a>
                    )}
                    {msg.hasWorkshopLink && (
                      <button
                        type="button"
                        onClick={() => {
                          const el = document.getElementById("workshops");
                          if (el) {
                            el.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="underline font-medium mt-1 block text-left bg-transparent border-0 cursor-pointer p-0"
                        style={{ color: "#f18c94" }}
                      >
                        Ver workshops →
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div
              className="flex items-center gap-2 px-3 py-2 border-t"
              style={{ borderColor: "#f5c6c9" }}
            >
              <input
                ref={inputRef}
                data-ocid="chat.input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escreva a sua pergunta..."
                className="flex-1 text-sm outline-none bg-transparent text-gray-800 placeholder:text-gray-400"
                aria-label="Mensagem para o assistente virtual"
              />
              <button
                type="button"
                data-ocid="chat.submit_button"
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="rounded-full p-1.5 transition-opacity disabled:opacity-40 hover:opacity-80"
                style={{ background: "#f18c94" }}
                aria-label="Enviar mensagem"
              >
                <Send className="h-3.5 w-3.5 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button with tooltip */}
      <div className="relative flex items-center">
        {/* Tooltip "Fale connosco" */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -14, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, x: -10, scale: 0.85 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              className="absolute left-[68px] whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold shadow-lg"
              style={{
                background: "#ffffff",
                color: "#f18c94",
                border: "1px solid #f5c6c9",
              }}
            >
              Fale connosco
              {/* Tail pointing left */}
              <span
                className="absolute top-1/2 -left-[7px] -translate-y-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderRight: "7px solid #f5c6c9",
                }}
              />
              <span
                className="absolute top-1/2 -left-[6px] -translate-y-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "6px solid transparent",
                  borderBottom: "6px solid transparent",
                  borderRight: "7px solid #ffffff",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          data-ocid="chat.open_modal_button"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setShowTooltip(false);
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="h-14 w-14 rounded-full shadow-xl flex items-center justify-center transition-shadow hover:shadow-2xl"
          style={{
            background: "#f18c94",
            padding: 0,
            outline: "2px solid white",
            outlineOffset: "0px",
          }}
          aria-label="Abrir assistente virtual"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-6 w-6 text-white" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-center"
              >
                <svg
                  width="32"
                  height="34"
                  viewBox="0 0 32 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Fully rounded bubble body — slightly taller */}
                  <rect
                    x="2"
                    y="3"
                    width="28"
                    height="23"
                    rx="9"
                    ry="9"
                    fill="white"
                  />
                  {/* Soft small tail pointing down-left */}
                  <path d="M7 26 Q6 29 5 31.5 Q9 29.5 13 26 Z" fill="white" />
                  <circle cx="11" cy="14.5" r="1.7" fill="#f18c94" />
                  <circle cx="16" cy="14.5" r="1.7" fill="#f18c94" />
                  <circle cx="21" cy="14.5" r="1.7" fill="#f18c94" />
                </svg>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
