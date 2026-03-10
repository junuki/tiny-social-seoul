import React from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <section className="placeholder-page">
      <div className="container">
        <div className="placeholder-card">
          <span className="sticker sticker--coral">Coming Soon</span>
          <h1 className="placeholder-title">회원가입 페이지 준비 중</h1>
          <p className="placeholder-body">
            현재는 랜딩 페이지 중심 구조만 React로 전환했습니다. 이 라우트는 이후 회원가입 폼,
            인증 플로우, 약관 동의 화면을 추가할 수 있도록 먼저 확보해둔 자리입니다.
          </p>
          <div className="placeholder-actions">
            <Link className="btn-primary" to="/">
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
