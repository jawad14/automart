'use client';

import { useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/config/site.config';

type Message = {
  id: number;
  from: 'bot' | 'user';
  text: string;
  quick?: string[];
};

type Step =
  | 'idle'
  | 'find_part_ask'
  | 'find_part_vehicle'
  | 'find_part_result'
  | 'quote_ask'
  | 'quote_done'
  | 'delivery'
  | 'rep'
  | 'done';

const { phone, phoneHref, hours } = siteConfig;

const INITIAL: Message = {
  id: 0,
  from: 'bot',
  text: "Hi! 👋 I'm the Automart Parts Assistant. I can help you find parts, get a quote, or connect you with our team. What can I help you with today?",
  quick: ['🔍 Find a Part', '💬 Get a Quote', '🚚 Delivery Info', '📞 Talk to a Rep'],
};

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState<Step>('idle');
  const [typing, setTyping] = useState(false);
  const [partName, setPartName] = useState('');
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextId = useRef(1);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  function toggleOpen() {
    setOpen((o) => !o);
    setUnread(0);
  }

  function addBot(text: string, quick?: string[], delayMs = 900) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { id: nextId.current++, from: 'bot', text, quick }]);
    }, delayMs);
  }

  function addUser(text: string) {
    setMessages((prev) => [...prev, { id: nextId.current++, from: 'user', text }]);
  }

  function handleQuick(label: string) {
    addUser(label);
    setInput('');
    route(label);
  }

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    addUser(text);
    setInput('');
    route(text);
  }

  function route(text: string) {
    const t = text.toLowerCase();

    if (step === 'idle') {
      if (t.includes('find') || t.includes('part') || t.includes('search')) {
        setStep('find_part_ask');
        addBot(
          'Sure! What part are you looking for? (e.g. front bumper, headlight, mirror, grille…)',
        );
      } else if (t.includes('quote')) {
        setStep('quote_ask');
        addBot(
          "I'll get you a quote! Please describe the parts you need and include your vehicle's year, make, and model.",
        );
      } else if (t.includes('delivery') || t.includes('shipping') || t.includes('zone')) {
        setStep('delivery');
        addBot(
          '🚚 We run same-day delivery across Chicagoland with our own fleet — twice-daily routes to collision shops and drivers across the metro.\n\nWant the full zone map, cutoff times, and regional schedules?',
          ['📦 View Delivery Page', '📞 Talk to a Rep', '🔍 Find a Part'],
        );
      } else if (
        t.includes('rep') ||
        t.includes('call') ||
        t.includes('talk') ||
        t.includes('human') ||
        t.includes('person')
      ) {
        setStep('rep');
        addBot(
          `I'll connect you with our team! 📞\n\nOur parts specialists are available:\n**${hours}**\n\nCall us directly at **${phone}** or click below.`,
          ['📞 Call Now', '✉️ Request a Quote', '🔍 Find a Part'],
        );
      } else {
        addBot(
          'I can help with finding parts, getting a quote, delivery info, or connecting you with a rep. What would you like?',
          ['🔍 Find a Part', '💬 Get a Quote', '🚚 Delivery Info', '📞 Talk to a Rep'],
        );
      }
    } else if (step === 'find_part_ask') {
      setPartName(text);
      setStep('find_part_vehicle');
      addBot(
        `Got it — **${text}**! What's the year, make, and model of your vehicle? (e.g. 2019 Toyota Camry)`,
      );
    } else if (step === 'find_part_vehicle') {
      setStep('find_part_result');
      addBot(`Checking availability for a **${partName}** on a **${text}**…`, undefined, 600);
      setTimeout(() => {
        addBot(
          `✅ Great news! We very likely carry that part in stock. Our inventory covers 500+ makes and models with OEM-comparable quality parts at honest prices.\n\nTo confirm fitment and get your best price, call or request a quote now:`,
          [`📞 Call ${phone}`, '💬 Request a Quote', '🔍 Find Another Part'],
          1800,
        );
        setStep('done');
      }, 1800);
    } else if (step === 'quote_ask') {
      setStep('quote_done');
      addBot(
        `Thanks! For the fastest response, call us directly at **${phone}** or use the quote form on our site.`,
        ['📞 Call Now', '✉️ Go to Quote Form', '🔍 Find Another Part'],
        1000,
      );
    } else if (step === 'delivery') {
      routeFallback(t);
    } else if (step === 'rep' || step === 'done') {
      if (t.includes('call') || t.includes('phone')) {
        addBot(`Great! Just dial **${phone}** — our team picks up fast. ${hours}. 🙂`, [
          '🔍 Find Another Part',
          '💬 Get a Quote',
        ]);
      } else if (t.includes('quote') || t.includes('form')) {
        addBot("Head to our quote form and we'll get back to you quickly!", [
          '✉️ Go to Quote Form',
          '🔍 Find a Part',
        ]);
      } else if (t.includes('find') || t.includes('another') || t.includes('part')) {
        setStep('find_part_ask');
        addBot('What part are you looking for this time?');
      } else {
        routeFallback(t);
      }
    } else {
      routeFallback(t);
    }
  }

  function routeFallback(t: string) {
    if (t.includes('thank')) {
      addBot("You're welcome! Is there anything else I can help you with?", [
        '🔍 Find a Part',
        '📞 Talk to a Rep',
      ]);
    } else {
      addBot(
        "I'm best at helping with parts lookup, quotes, and delivery info. What would you like to do?",
        ['🔍 Find a Part', '💬 Get a Quote', '📞 Talk to a Rep'],
      );
    }
    setStep('idle');
  }

  function handleQuickAction(label: string) {
    if (label === '📞 Call Now' || label.startsWith('📞 Call')) {
      window.location.assign(phoneHref);
      return;
    }
    if (
      label === '✉️ Request a Quote' ||
      label === '✉️ Go to Quote Form' ||
      label === '💬 Request a Quote'
    ) {
      window.location.assign('/#quote');
      return;
    }
    if (label === '📦 View Delivery Page') {
      window.location.assign('/delivery');
      return;
    }
    if (label === '🔍 Find Another Part') {
      addUser(label);
      setStep('find_part_ask');
      addBot('What part are you looking for?');
      return;
    }
    handleQuick(label);
  }

  return (
    <>
      <button
        className={`am-chat-fab ${open ? 'am-chat-fab--open' : ''}`}
        onClick={toggleOpen}
        aria-label={open ? 'Close chat' : 'Open parts assistant'}
      >
        {open ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 10H6v-2h12v2zm0-3H6V7h12v2z" />
            </svg>
            {unread > 0 && <span className="am-chat-fab__badge">{unread}</span>}
          </>
        )}
      </button>

      {open && (
        <div className="am-chatbox" role="dialog" aria-label="Automart Parts Assistant">
          <div className="am-chatbox__head">
            <div className="am-chatbox__avatar">AM</div>
            <div>
              <div className="am-chatbox__name">Automart Parts Assistant</div>
              <div className="am-chatbox__status">
                <span className="am-chatbox__dot" />
                Online now
              </div>
            </div>
            <button className="am-chatbox__close" onClick={() => setOpen(false)} aria-label="Close">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="am-chatbox__body">
            {messages.map((msg) => (
              <div key={msg.id} className={`am-chat-msg am-chat-msg--${msg.from}`}>
                {msg.from === 'bot' && <div className="am-chat-msg__avatar">AM</div>}
                <div className="am-chat-msg__bubble">
                  {msg.text.split('\n').map((line, i) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                          .replace(/\*(.*?)\*/g, '<em>$1</em>'),
                      }}
                    />
                  ))}
                  {msg.quick && (
                    <div className="am-chat-quick">
                      {msg.quick.map((q) => (
                        <button
                          key={q}
                          className="am-chat-quick__btn"
                          onClick={() => handleQuickAction(q)}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {typing && (
              <div className="am-chat-msg am-chat-msg--bot">
                <div className="am-chat-msg__avatar">AM</div>
                <div className="am-chat-msg__bubble am-chat-typing">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="am-chatbox__foot">
            <input
              ref={inputRef}
              className="am-chatbox__input"
              type="text"
              placeholder="Type a message…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              className="am-chatbox__send"
              onClick={handleSend}
              aria-label="Send"
              disabled={!input.trim()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
          <div className="am-chatbox__powered">Powered by {siteConfig.name}</div>
        </div>
      )}
    </>
  );
}
