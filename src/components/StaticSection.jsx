import React from 'react';

const staticSections = import.meta.glob('../content/*.html', {
  eager: true,
  import: 'default',
  query: '?raw'
});

function StaticSection({ className = '', src }) {
  const html = staticSections[`../content/${src}`];

  if (!html) {
    return (
      <section className={`static-section static-section--missing ${className}`.trim()}>
        <div className="container">
          <p>Static section not found: {src}</p>
        </div>
      </section>
    );
  }

  return (
    <div
      className={`static-section ${className}`.trim()}
      data-static-src={src}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default StaticSection;
