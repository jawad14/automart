'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { siteConfig } from '@/config/site.config';
import { emitToast } from '@/lib/automart/toast';
import { Reveal } from './Reveal';

type FormState = {
  name: string;
  phone: string;
  email: string;
  year: string;
  mkmodel: string;
  parts: string;
};

const initial: FormState = {
  name: '',
  phone: '',
  email: '',
  year: '',
  mkmodel: '',
  parts: '',
};

const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const requiredKeys: (keyof FormState)[] = ['name', 'phone', 'year', 'mkmodel', 'parts'];
const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function Quote() {
  const { quote } = siteConfig.content;
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((er) => {
        const next = { ...er };
        delete next[name];
        return next;
      });
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Record<string, boolean> = {};
    for (const key of requiredKeys) {
      if (!values[key].trim()) next[key] = true;
    }
    if (values.email && !emailRe.test(values.email)) next.email = true;
    setErrors(next);
    if (Object.keys(next).length > 0) {
      emitToast('Please fill in the highlighted fields.');
      return;
    }
    setSubmitted(true);
  };

  const firstName = values.name.trim().split(' ')[0];

  return (
    <section className="am-quote am-section" id="quote">
      <div className="am-wrap">
        <Reveal>
          <div className="am-quote-intro">
            <span className="am-eyebrow">{quote.eyebrow}</span>
            <h2>{quote.headline}</h2>
            <p className="am-qlede">{quote.lede}</p>
            <div className="am-qbadges">
              {quote.badges.map((b) => (
                <div className="am-qbadge" key={b}>
                  <span className="am-qb">
                    <Check />
                  </span>
                  {b}
                </div>
              ))}
            </div>
            <div className="am-qcall">
              <small>{quote.callLabel}</small>
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              <p>{quote.callHoursLine}</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          {submitted ? (
            <div className="am-form">
              <div className="am-form-success">
                <div className="am-sc">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>
                  {firstName
                    ? quote.successHeadline.replace('Thanks', `Thanks, ${firstName}`)
                    : quote.successHeadline}
                </h3>
                <p>
                  {quote.successBody}{' '}
                  <a className="am-success-link" href={siteConfig.phoneHref}>
                    {siteConfig.phone}
                  </a>
                  .
                </p>
              </div>
            </div>
          ) : (
            <form className="am-form" onSubmit={onSubmit} noValidate>
              <div className="am-frow">
                <div className="am-fg">
                  <label htmlFor="q-name">Your name</label>
                  <input
                    id="q-name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={values.name}
                    onChange={onChange}
                    className={errors.name ? 'am-err' : ''}
                  />
                </div>
                <div className="am-fg">
                  <label htmlFor="q-phone">Phone</label>
                  <input
                    id="q-phone"
                    name="phone"
                    type="tel"
                    placeholder="(773) 000-0000"
                    value={values.phone}
                    onChange={onChange}
                    className={errors.phone ? 'am-err' : ''}
                  />
                </div>
              </div>
              <div className="am-fg">
                <label htmlFor="q-email">
                  Email <span className="am-label-optional">(optional)</span>
                </label>
                <input
                  id="q-email"
                  name="email"
                  type="email"
                  placeholder="you@email.com"
                  value={values.email}
                  onChange={onChange}
                  className={errors.email ? 'am-err' : ''}
                />
              </div>
              <div className="am-frow">
                <div className="am-fg">
                  <label htmlFor="q-yr">Year</label>
                  <input
                    id="q-yr"
                    name="year"
                    type="text"
                    placeholder="2021"
                    value={values.year}
                    onChange={onChange}
                    className={errors.year ? 'am-err' : ''}
                  />
                </div>
                <div className="am-fg">
                  <label htmlFor="q-mk">Make &amp; model</label>
                  <input
                    id="q-mk"
                    name="mkmodel"
                    type="text"
                    placeholder="Ford F-150"
                    value={values.mkmodel}
                    onChange={onChange}
                    className={errors.mkmodel ? 'am-err' : ''}
                  />
                </div>
              </div>
              <div className="am-fg">
                <label htmlFor="q-parts">What parts do you need?</label>
                <textarea
                  id="q-parts"
                  name="parts"
                  placeholder="Front bumper cover, left headlight assembly, hood…"
                  value={values.parts}
                  onChange={onChange}
                  className={errors.parts ? 'am-err' : ''}
                />
              </div>
              <button className="am-btn am-btn-red am-btn-lg" type="submit">
                Send quote request
              </button>
              <p className="am-fnote">{quote.formNote}</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
