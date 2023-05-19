// CSSModule.js
import React from 'react';
import styles from './styles/CSSModule.module.css'
const CSSModule = () => {
return (
<div className={styles.wrapper}>
안녕하세요, 저는 <span className="something">CSS Module!</span>
    {/* CSSModule.module.css에서 : global로 클래스 이름을 설정하면
    문자열 형태로 ("something")로 표시 */}
</div>
);
};
export default CSSModule;