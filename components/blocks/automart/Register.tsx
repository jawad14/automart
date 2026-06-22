'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { siteConfig } from '@/config/site.config';
import { emitToast } from '@/lib/automart/toast';

type FormState = {
  shop: string;
  contact: string;
  phone: string;
  email: string;
  address: string;
  ein: string;
  monthly: string;
  notes: string;
};

const initial: FormState = {
  shop: '',
  contact: '',
  phone: '',
  email: '',
  address: '',
  ein: '',
  monthly: '',
  notes: '',
};

const required: (keyof FormState)[] = ['shop', 'contact', 'phone', 'email', 'address'];
const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function Register() {
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
    for (const k of required) if (!values[k].trim()) next[k] = true;
    if (values.email && !emailRe.test(values.email)) next.email = true;
    setErrors(next);
    if (Object.keys(next).length) {
      emitToast('Fill in the required fields so we can set up the account.');
      return;
    }
    setSubmitted(true);
    emitToast('Application received — a specialist will reach out within one business day.');
  };

  return (
    <section className="am-section am-section-alt" id="register-form">
      <div className="am-wrap">
        <div className="am-sec-head am-sec-head-center">
          <span className="am-eyebrow">Application</span>
          <h2>Tell us about the shop.</h2>
          <p>
            Fill the form and a specialist gets back to you within one business day. Required fields
            are marked with *.
          </p>
        </div>

        {submitted ? (
          <div className="am-form" style={{ maxWidth: 760, margin: '38px auto 0' }}>
            <div className="am-form-success">
              <div className="am-sc">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="m5 13 4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Application received.</h3>
              <p>
                A specialist will reach out within one business day to verify details and open your
                account. Need it sooner? Call{' '}
                <a className="am-success-link" href={siteConfig.phoneHref}>
                  {siteConfig.phone}
                </a>
                .
              </p>
            </div>
          </div>
        ) : (
          <form
            className="am-form"
            onSubmit={onSubmit}
            noValidate
            style={{ maxWidth: 760, margin: '38px auto 0' }}
          >
            <div className="am-fg">
              <label htmlFor="r-shop">Shop / business name *</label>
              <input
                id="r-shop"
                name="shop"
                value={values.shop}
                onChange={onChange}
                placeholder="Smith Collision LLC"
                className={errors.shop ? 'am-err' : ''}
              />
            </div>

            <div className="am-frow">
              <div className="am-fg">
                <label htmlFor="r-contact">Primary contact *</label>
                <input
                  id="r-contact"
                  name="contact"
                  value={values.contact}
                  onChange={onChange}
                  placeholder="Jane Smith"
                  className={errors.contact ? 'am-err' : ''}
                />
              </div>
              <div className="am-fg">
                <label htmlFor="r-phone">Phone *</label>
                <input
                  id="r-phone"
                  name="phone"
                  inputMode="tel"
                  value={values.phone}
                  onChange={onChange}
                  placeholder="(630) 000-0000"
                  className={errors.phone ? 'am-err' : ''}
                />
              </div>
            </div>

            <div className="am-fg">
              <label htmlFor="r-email">Email *</label>
              <input
                id="r-email"
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
                placeholder="you@shop.com"
                className={errors.email ? 'am-err' : ''}
              />
            </div>

            <div className="am-fg">
              <label htmlFor="r-address">Shop address *</label>
              <input
                id="r-address"
                name="address"
                value={values.address}
                onChange={onChange}
                placeholder="123 Main St, City, IL 60101"
                className={errors.address ? 'am-err' : ''}
              />
            </div>

            <div className="am-frow">
              <div className="am-fg">
                <label htmlFor="r-ein">
                  EIN <span className="am-label-optional">(optional)</span>
                </label>
                <input id="r-ein" name="ein" value={values.ein} onChange={onChange} />
              </div>
              <div className="am-fg">
                <label htmlFor="r-monthly">
                  Monthly volume <span className="am-label-optional">(optional)</span>
                </label>
                <input
                  id="r-monthly"
                  name="monthly"
                  placeholder="$"
                  value={values.monthly}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="am-fg">
              <label htmlFor="r-notes">
                Notes <span className="am-label-optional">(optional)</span>
              </label>
              <textarea
                id="r-notes"
                name="notes"
                rows={4}
                value={values.notes}
                onChange={onChange}
              />
            </div>

            <button type="submit" className="am-btn am-btn-red am-btn-lg">
              Submit application
            </button>
            <p className="am-fnote">
              We’ll only use your info to set up the account. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
