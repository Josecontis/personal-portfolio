import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsChatDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import "./ChatBot.css";

function ChatBot() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [answering, setAnswering] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, open]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const question = input.trim();
    if (!question || answering) return;

    const shown = [...messages, { role: "user", content: question }];
    setMessages([...shown, { role: "assistant", content: "" }]);
    setInput("");
    setAnswering(true);

    let reply;
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Each question is answered on its own, the server does not accept a history
        body: JSON.stringify({ question }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 429) {
        reply = t("chatbot.limit");
      } else if (!res.ok) {
        reply = t("chatbot.answerError");
      } else {
        reply = data.answer || t("chatbot.empty");
      }
    } catch (error) {
      reply = t("chatbot.answerError");
    }
    setMessages([...shown, { role: "assistant", content: reply }]);
    setAnswering(false);
  };

  return (
    <>
      <button
        type="button"
        className="chatbot-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? t("chatbot.close") : t("chatbot.open")}
      >
        {open ? <IoClose /> : <BsChatDots />}
      </button>

      {open && (
        <div className="chatbot-window">
          <div className="chatbot-header">{t("chatbot.title")}</div>

          <div className="chatbot-messages" ref={listRef}>
            <div className="chatbot-message assistant">{t("chatbot.intro")}</div>
            {messages.map((message, index) => (
              <div key={index} className={`chatbot-message ${message.role}`}>
                {message.content || t("chatbot.thinking")}
              </div>
            ))}
          </div>

          <form className="chatbot-form" onSubmit={sendMessage}>
            <input
              className="chatbot-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("chatbot.placeholder")}
              // Same limit as MAX_QUESTION_CHARS in netlify/functions/ask.mjs
              maxLength={300}
              aria-label={t("chatbot.placeholder")}
            />
            <button
              type="submit"
              className="chatbot-send"
              disabled={answering || !input.trim()}
            >
              {t("chatbot.send")}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatBot;
