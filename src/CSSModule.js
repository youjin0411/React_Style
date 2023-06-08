// CSSModule.js
import React from 'react';
// import styles from './styles/CSSModule.module.css';
import styles from './CSSModule.module.scss';
import classNames from 'classnames';
classNames('one', 'two'); // = 'one two'
classNames('one', { two: true }); // = 'one two'
classNames('one', { two: false }); // = 'one'
classNames('one', ['two', 'three']); // = 'one two three'
const myClass = 'hello';
classNames('one', myClass, { myCondition: true }); // = 'one hello myCondition'
const CSSModule = () => {
return (
<div className={`${styles.wrapper} ${styles.inverted}`}>
안녕하세요, 저는 <span className="something">CSS Module!</span>
</div>
);
};
export default CSSModule;