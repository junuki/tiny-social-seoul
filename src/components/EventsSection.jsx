import React from 'react';
import { getEvents } from '../services/events.js';

function ArrowIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-card-inner">
        <div className="event-main">
          <div
            className="event-badge"
            style={event.theme === 'mint' ? { background: 'var(--mint)' } : undefined}
          >
            {event.status}
          </div>

          <h3 className="event-title">{event.titleKo}</h3>
          <p className="event-title-en">{event.titleEn}</p>

          <div className="event-details">
            <div className="event-detail">
              <div className="event-detail-icon">📅</div>
              <div className="event-detail-label">Date / 날짜</div>
              <div className="event-detail-value">
                {event.date}
                <br />
                {event.dayLabel}
              </div>
            </div>
            <div className="event-detail">
              <div className="event-detail-icon">⏰</div>
              <div className="event-detail-label">Time / 시간</div>
              <div className="event-detail-value">
                {event.timeText}
                <br />
                {event.durationText}
              </div>
            </div>
            <div className="event-detail">
              <div className="event-detail-icon">📍</div>
              <div className="event-detail-label">Location / 장소</div>
              <div className="event-detail-value">
                {event.venue}
                <br />
                {event.city}
              </div>
            </div>
            <div className="event-detail">
              <div className="event-detail-icon">👥</div>
              <div className="event-detail-label">Capacity / 인원</div>
              <div className="event-detail-value">
                {event.capacityText}
                <br />
                {event.capacityLabel}
              </div>
            </div>
          </div>

          <div className="event-description">
            <p>
              <span className="speaker">화자: {event.speakerName}</span>
              {' — '}
              {event.speakerRole}
            </p>
            <p>{event.summary}</p>
            <p className="note">{event.note}</p>
          </div>

          <div className="event-cta">
            <a
              href={event.applyUrl}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              참여신청하기
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div
          className={`event-sidebar${event.theme === 'mint' ? ' event-sidebar--mint' : ''}`}
        >
          <div className="event-sidebar-title">Event Info</div>

          <div className="event-sidebar-item">
            <div className="event-sidebar-label">Speaker</div>
            <div className="event-sidebar-value">{event.speakerBio}</div>
          </div>

          <div className="event-sidebar-item">
            <div className="event-sidebar-label">{event.sidebarTitle}</div>
            <div className="event-sidebar-value">{event.sidebarValue}</div>
          </div>

          <div className="event-sidebar-item">
            <div className="event-sidebar-label">Venue</div>
            <div className="event-sidebar-value">
              <a
                href={event.venueUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                {event.venue}
              </a>
              {`, ${event.city}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventsSection() {
  const [events, setEvents] = React.useState([]);
  const [status, setStatus] = React.useState('loading');

  React.useEffect(() => {
    let isMounted = true;

    getEvents()
      .then((response) => {
        if (!isMounted) {
          return;
        }

        setEvents(response);
        setStatus('ready');
      })
      .catch((error) => {
        console.error('Failed to load events:', error);

        if (isMounted) {
          setStatus('error');
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="events" id="events">
      <div className="events-header">
        <div className="header-decor">
          <div className="decor-shape" />
          <div className="decor-shape" />
          <div className="decor-shape" />
        </div>
        <div className="container">
          <div className="section-label">
            <span className="section-number">03</span>
            <span className="section-name">Upcoming</span>
          </div>
          <h2 className="section-title">
            다가오는 모임
            <span className="section-title-en">Your next recharge session</span>
          </h2>
        </div>
      </div>

      {status === 'loading' && (
        <div className="section-status">
          <div className="container">이벤트를 불러오는 중입니다.</div>
        </div>
      )}

      {status === 'error' && (
        <div className="section-status section-status--error">
          <div className="container">이벤트 정보를 불러오지 못했습니다.</div>
        </div>
      )}

      {status === 'ready' && events.map((event) => <EventCard key={event.id} event={event} />)}
    </section>
  );
}

export default EventsSection;
