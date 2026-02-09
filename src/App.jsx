function App() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="nav-inner container" style={{ padding: 0 }}>
          <div className="nav-logo">
            <span className="nav-logo-dot"></span>
            TINY SOCIAL
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#events" className="nav-cta">Join Event →</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-main">
          <div className="hero-content">
            <div className="hero-label">
              <span className="sticker sticker--sky">Seoul</span>
              <span className="sticker sticker--mint" style={{ transform: 'rotate(3deg)' }}>SF</span>
            </div>

            <h1 className="hero-title">
              <span className="hero-title-line">TINY</span>
              <span className="hero-title-line">SOCIAL</span>
            </h1>

            <div className="hero-tagline">
              <p className="hero-tagline-ko">
                <span className="highlight">정답보다 질문을</span>, 지식보다 맥락을.
                퇴근 후, 생각 하나만 가지고 집에 돌아오는 시간.
              </p>
              <p className="hero-tagline-en">Questions over answers. After work gatherings where you take home just one thought.</p>
            </div>

            <a href="#events" className="hero-cta">
              다음 모임 보기
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Playful Art Composition */}
          <div className="hero-art">
            {/* Color Blocks */}
            <div className="color-block block-1"></div>
            <div className="color-block block-2"></div>
            <div className="color-block block-3"></div>
            <div className="color-block block-4"></div>
            <div className="color-block block-5"></div>

            {/* Coffee Cup - Hero Graphic */}
            <div className="coffee-cup">
              <div className="coffee-steam">
                <span className="steam"></span>
                <span className="steam"></span>
                <span className="steam"></span>
                <span className="steam"></span>
              </div>
              <div className="coffee-cup-body">
                <div className="coffee-cup-handle"></div>
              </div>
            </div>

            {/* Accent Dots */}
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-number">90<span className="hero-stat-plus">+</span></div>
            <div className="hero-stat-label">Minutes / 분</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">15<span className="hero-stat-plus">+</span></div>
            <div className="hero-stat-label">Attendees / 참여자</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">30<span className="hero-stat-plus">+</span></div>
            <div className="hero-stat-label">Questions / 질문</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">01</div>
            <div className="hero-stat-label">Thought / 생각</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-header">
          {/* Decorative shapes */}
          <div className="about-header-decor">
            <div className="decor-shape"></div>
            <div className="decor-shape"></div>
            <div className="decor-shape"></div>
          </div>
          <div className="container">
            <div className="section-label">
              <span className="section-number">02</span>
              <span className="section-name">About</span>
            </div>
            <h2 className="section-title">
              새로운 생각을<br />시작하는 공간
              <span className="section-title-en">A playground for grownups where new thoughts begin</span>
            </h2>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              <span className="emphasis">Tiny Social</span>은 네트워킹도, 클래스도 아닙니다.
              말 안 해도 되는 강의에 갔다가, 생각 하나를 가져와서 집에 돌아오는 경험입니다.
            </p>
            <p>
              20-30대 직장인이 퇴근 후, &apos;일하는 나&apos;가 아닌
              <span className="emphasis">&apos;이해하는 나&apos;</span>로 돌아오는 시간.
            </p>
            <p>
              사람을 억지로 연결하는 게 아니라,
              사람들이 스스로를 유지할 수 있게 해주는 공간입니다.
            </p>
            <p className="muted">
              Not networking, not a class. A cup of coffee for your mind—
              come tired, leave refreshed with one new thought.
            </p>
          </div>

          <div className="about-principles">
            <div className="principle">
              <div className="principle-header">
                <span className="principle-number">01</span>
                <span className="principle-title-en">Low Social Debt</span>
              </div>
              <h4 className="principle-title-ko">낮은 소셜 부담</h4>
              <p className="principle-desc">연락, 답장, 관계 유지 부담 없이. &quot;안 와도 되는&quot; 분위기</p>
            </div>

            <div className="principle">
              <div className="principle-header">
                <span className="principle-number">02</span>
                <span className="principle-title-en">Identity-Safe Space</span>
              </div>
              <h4 className="principle-title-ko">정체성 안전 공간</h4>
              <p className="principle-desc">결혼, 자녀, 연봉 같은 비교 없이. &apos;지금의 나&apos;만으로 충분한 자리</p>
            </div>

            <div className="principle">
              <div className="principle-header">
                <span className="principle-number">03</span>
                <span className="principle-title-en">Learning as Pretext</span>
              </div>
              <h4 className="principle-title-ko">배움이라는 명분</h4>
              <p className="principle-desc">&quot;사람 만나러 왔다&quot;가 아니라 &quot;생각 정리하러 왔다&quot;</p>
            </div>

            <div className="principle">
              <div className="principle-header">
                <span className="principle-number">04</span>
                <span className="principle-title-en">Weak-Tie Magic</span>
              </div>
              <h4 className="principle-title-ko">약한 연결의 축적</h4>
              <p className="principle-desc">강한 친밀감보다, 약하지만 반복되는 연결</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events" id="events">
        <div className="events-header">
          {/* Decorative shapes */}
          <div className="events-header-decor">
            <div className="decor-shape"></div>
            <div className="decor-shape"></div>
            <div className="decor-shape"></div>
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

        <div className="events-content">
          <div className="event-main">
            <div className="event-badge">☕ 모집 중 — NOW OPEN</div>

            <h3 className="event-title">AI와 소통하는 법</h3>
            <p className="event-title-en">How to Communicate with AI</p>

            <div className="event-details">
              <div className="event-detail">
                <div className="event-detail-icon">📅</div>
                <div className="event-detail-label">Date / 날짜</div>
                <div className="event-detail-value">2026년 3월<br />(일정 조율 중)</div>
              </div>
              <div className="event-detail">
                <div className="event-detail-icon">⏰</div>
                <div className="event-detail-label">Time / 시간</div>
                <div className="event-detail-value">저녁 7:30 PM<br />(약 90분)</div>
              </div>
              <div className="event-detail">
                <div className="event-detail-icon">📍</div>
                <div className="event-detail-label">Location / 장소</div>
                <div className="event-detail-value">서울 시청역<br />인근 카페</div>
              </div>
              <div className="event-detail">
                <div className="event-detail-icon">👥</div>
                <div className="event-detail-label">Capacity / 인원</div>
                <div className="event-detail-value">15-20명<br />소규모</div>
              </div>
            </div>

            <div className="event-description">
              <p>
                <span className="speaker">연사: 사영준</span> (미디어 아트 교수)
              </p>
              <p>
                AI의 행동과 기계와의 소통을 연구해온 미디어 아티스트와 함께,
                인간과 AI가 어떻게 대화하고 관계를 맺을 수 있는지 탐구합니다.
              </p>
              <p className="note">
                오늘은 말하지 않아도 참여한 걸로 충분합니다.
                듣다가 가셔도, 질문만 남기셔도 괜찮습니다.
              </p>
            </div>

            <div className="event-cta">
              <a href="#" className="btn-primary">
                참여 신청하기
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#" className="btn-secondary">자세히 보기</a>
            </div>
          </div>

          <div className="event-sidebar">
            <div className="event-sidebar-title">Event Info</div>

            <div className="event-sidebar-item">
              <div className="event-sidebar-label">Format</div>
              <div className="event-sidebar-value">발제 30분 + 소그룹 대화 60분</div>
            </div>

            <div className="event-sidebar-item">
              <div className="event-sidebar-label">Vibe</div>
              <div className="event-sidebar-value">조용히 듣기만 해도 OK. 강제 아이스브레이커 없음.</div>
            </div>

            <div className="event-sidebar-item">
              <div className="event-sidebar-label">What You Get</div>
              <div className="event-sidebar-value">AI와 인간의 관계에 대한 새로운 시각. 피로 없이 집으로.</div>
            </div>

            <div className="event-sidebar-item">
              <div className="event-sidebar-label">Cities</div>
              <div className="event-sidebar-value">Seoul · San Francisco</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-decoration">
          <span className="footer-dot"></span>
          <span className="footer-dot"></span>
          <span className="footer-dot"></span>
          <span className="footer-dot"></span>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              TINY SOCIAL
              <span className="footer-logo-dot"></span>
            </div>
            <p className="footer-tagline">
              조용히 와서, 생각 하나만 가져가세요.<br />
              Come tired, leave refreshed.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Connect</div>
              <a href="#">Instagram</a>
              <a href="#">Email</a>
              <a href="#">KakaoTalk</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Navigate</div>
              <a href="#about">About</a>
              <a href="#events">Events</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 TINY SOCIAL. SEOUL · SAN FRANCISCO. RECHARGE YOUR MIND.</p>
        </div>
      </footer>
    </>
  )
}

export default App
