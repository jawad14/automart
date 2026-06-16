'use client';

import { useMemo, useState } from 'react';
import { makes, models } from '@/lib/automart/data';
import { emitToast } from '@/lib/automart/toast';

export function Finder() {
  const currentYear = new Date().getFullYear();
  const years = useMemo(() => {
    const out: number[] = [];
    for (let y = currentYear; y >= 2005; y--) out.push(y);
    return out;
  }, [currentYear]);

  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  const modelList = make ? (models[make] ?? []) : [];

  const onFind = () => {
    const parts = [year, make, model].filter(Boolean);
    if (parts.length < 2) {
      emitToast('Pick a year and make to search — or call us to get it done faster.');
      return;
    }
    emitToast(
      `Searching parts for ${parts.join(' ')} — a specialist can confirm fitment on (773) 762-1000.`,
    );
    document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="am-finder">
      <h3>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" strokeLinecap="round" />
        </svg>
        Find your part fast
      </h3>
      <div className="am-grid3">
        <div className="am-field">
          <label htmlFor="f-year">Year</label>
          <select id="f-year" value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Year</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>
        <div className="am-field">
          <label htmlFor="f-make">Make</label>
          <select
            id="f-make"
            value={make}
            onChange={(e) => {
              setMake(e.target.value);
              setModel('');
            }}
          >
            <option value="">Make</option>
            {makes
              .filter((m) => models[m])
              .map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
          </select>
        </div>
        <div className="am-field">
          <label htmlFor="f-model">Model</label>
          <select
            id="f-model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            disabled={!modelList.length}
          >
            <option value="">Model</option>
            {modelList.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button type="button" className="am-btn am-btn-dark" onClick={onFind}>
        Find parts
      </button>
      <p className="am-or">
        Prefer to talk? <a href="tel:17737621000">Call a parts specialist →</a>
      </p>
    </div>
  );
}
