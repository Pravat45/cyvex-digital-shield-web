// File: components/chatbot/FloatingChatBot.js
import React, { useState, useRef, useEffect } from "react";
import { PaperAirplaneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import confetti from "canvas-confetti";

const FloatingChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [botTriggered, setBotTriggered] = useState(false);
  const chatEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const questions = [
    "👋 Hi there! What’s your name?",
    "📱 Can I get your phone number?",
    "📧 What's your email address?",
    "💬 Lastly, what's your query?",
  ];

  const askNext = (stepIndex) => questions[stepIndex];

  useEffect(() => {
    const triggerBot = () => {
      if (!botTriggered) {
        setTimeout(() => {
          setIsOpen(true);
          setBotTriggered(true);
        }, 5000);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 300 && !botTriggered) {
        setIsOpen(true);
        setBotTriggered(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    triggerBot();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [botTriggered]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTyping(true);
      setTimeout(() => {
        setMessages([{ text: askNext(0), fromUser: false }]);
        setTyping(false);
      }, 1000);
    }
  }, [isOpen]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const handleSend = () => {
    const fieldNames = ["name", "phone", "email", "query"];
    const currentField = fieldNames[step];
    if (inputValue.trim() === "") return;

    const userResponse = {
      text: inputValue,
      fromUser: true,
    };

    setFormData({ ...formData, [currentField]: inputValue });
    setMessages((prev) => [...prev, userResponse]);
    setInputValue("");
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      if (step < questions.length - 1) {
        setMessages((prev) => [
          ...prev,
          { text: askNext(step + 1), fromUser: false },
        ]);
        setStep(step + 1);
      } else {
        fetch("https://formsubmit.co/ajax/083d0934cd146857e5629c94a358b6a1", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: formData.name,
            Phone: formData.phone,
            Email: formData.email,
            Query: inputValue,
          }),
        });

        setMessages((prev) => [
          ...prev,
          {
            text: "✅ Thank you for reaching out! We'll contact you soon.",
            fromUser: false,
          },
        ]);

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });

        setTimeout(() => {
          setIsOpen(false);
          setStep(0);
          setMessages([]);
          setFormData({ name: "", phone: "", email: "", query: "" });
        }, 4000);
      }
    }, 1200);
  };

  return (
    <div>
      <div
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-cyber-red to-red-600 text-white p-4 rounded-full shadow-xl cursor-pointer z-50 hover:scale-105 transition-transform"
      >
        🤖 Chat
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 max-h-[80vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden z-50 border border-gray-200 animate-fade-in">
          <div className="bg-cyber-red px-4 py-3 flex justify-between items-center">
            <h2 className="text-lg font-bold text-white">AI Assistant</h2>
            <button onClick={toggleChat}>
              <XMarkIcon className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl max-w-[80%] text-sm flex items-start space-x-2 ${
                  msg.fromUser
                    ? "bg-cyber-red text-white self-end ml-auto justify-end"
                    : "bg-white text-gray-900 shadow-sm"
                }`}
              >
                <span className="inline-block w-6 h-6 rounded-full bg-gray-200 text-xs text-center leading-6">
                  {msg.fromUser ? "🧑" : "🤖"}
                </span>
                <span>{msg.text}</span>
              </div>
            ))}
            {typing && (
              <div className="text-gray-500 text-sm animate-pulse">
                🤖 typing...
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          <div className="border-t p-3 bg-white flex items-center space-x-2">
            <input
              type={step === 1 ? "tel" : step === 2 ? "email" : "text"}
              placeholder="Type your response..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-cyber-red hover:bg-red-600 text-white p-2 rounded-full"
            >
              <PaperAirplaneIcon className="w-5 h-5 rotate-45" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingChatBot;
