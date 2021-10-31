import React from 'react'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__left">
                <span>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
                    서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</span>
            </div>
            <div className="footer__right">
                <i className="fab fa-twitter-square  footer__right-icon" style={{color: 'rgb(181, 181, 221)'}} />
                <i className="fab fa-facebook footer__right-icon" style={{color: 'rgb(84, 84, 214)'}} />
                <i className="fab fa-instagram footer__right-icon" style={{color: 'rgb(178, 202, 122)'}} />
            </div>
      </footer>
    )
}
