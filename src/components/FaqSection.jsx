import React from 'react';
import { faqs } from '../data/faqs.js';

function FaqSection() {
  const [openItemId, setOpenItemId] = React.useState(faqs[0]?.id ?? null);
  const contentRefs = React.useRef({});

  return (
    <section className="faq" id="faq">
      <div className="faq-header">
        <div className="header-decor">
          <div
            className="decor-shape"
            style={{ background: 'rgba(0,0,0,0.1)', borderColor: 'rgba(0,0,0,0.15)' }}
          />
          <div
            className="decor-shape"
            style={{ background: 'rgba(0,0,0,0.1)', borderColor: 'rgba(0,0,0,0.15)' }}
          />
          <div
            className="decor-shape"
            style={{ background: 'rgba(0,0,0,0.1)', borderColor: 'rgba(0,0,0,0.15)' }}
          />
        </div>
        <div className="container">
          <div className="section-label">
            <span className="section-number">04</span>
            <span className="section-name">FAQ</span>
          </div>
          <h2 className="section-title">
            자주 묻는 질문
            <span className="section-title-en">
              Everything you want to know before joining
            </span>
          </h2>
        </div>
      </div>

      <ul className="faq-list">
        {faqs.map((item) => {
          const isOpen = item.id === openItemId;

          return (
            <li className={`faq-item${isOpen ? ' open' : ''}`} key={item.id}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${item.id}-answer`}
                onClick={() => setOpenItemId(isOpen ? null : item.id)}
              >
                {item.question}
                <span className="faq-toggle">+</span>
              </button>
              <div
                className="faq-answer"
                id={`${item.id}-answer`}
                style={{
                  maxHeight: isOpen
                    ? `${contentRefs.current[item.id]?.scrollHeight ?? 0}px`
                    : undefined
                }}
              >
                <div
                  className="faq-answer-inner"
                  ref={(node) => {
                    contentRefs.current[item.id] = node;
                  }}
                >
                  {item.answer}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FaqSection;
