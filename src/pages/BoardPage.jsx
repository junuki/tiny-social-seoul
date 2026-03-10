import React from 'react';
import { Link } from 'react-router-dom';

function BoardPage() {
  return (
    <section className="placeholder-page placeholder-page--board">
      <div className="container">
        <div className="placeholder-card">
          <span className="sticker sticker--sky">Board Ready</span>
          <h1 className="placeholder-title">게시판 페이지 준비 중</h1>
          <p className="placeholder-body">
            공지, 후기, 모임별 토론 글을 수용할 수 있도록 라우트와 공통 레이아웃만 먼저
            구성했습니다. 이후 목록/상세/작성 페이지를 이 경로 하위로 확장하면 됩니다.
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

export default BoardPage;
