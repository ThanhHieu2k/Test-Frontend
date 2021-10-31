import React from 'react'

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact__left ">
                <p className="contact__title">What happened</p>
                <span className="contact__text">[공지] 개인 정보 처리 방침 변경 사전 안내 [공지] 29CM 강남 스토어 영업 종료 [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] iOS 10 이하 버전 지원 중단 안내 [공지] 개인 정보 처리 방침 변경 사전 안내</span>
            </div>
            <div className="contact__right grid__row">
                <div className="contact__right-item grid__column-3">
                    <p className="contact__title">about us</p>
                    <span className="contact__text">회사 소개  인재 채용상시 할인 혜택</span>
                </div>
                <div className="contact__right-item grid__column-3">
                    <p className="contact__title">about us</p>
                    <span className="contact__text">내 주문
                    주문 배송
                    취소 / 교환 / 반품 내역
                    상품 리뷰 내역
                    증빙 서류 발급</span>
                </div>
                <div className="contact__right-item grid__column-3">
                    <p className="contact__title">about us</p>
                    <span className="contact__text">회원 정보 수정
                    회원 등급
                    마일리지 현황
                    쿠폰</span>
                </div>
                <div className="contact__right-item grid__column-3">
                    <p className="contact__title">about us</p>
                    <span className="contact__text">1 : 1 상담 내역
                    상품 Q &amp; A 내역
                    공지 사항
                    자주하는 질문
                    고객의 소리</span>
                </div>
            </div>
      </div>
    );
}

