import { render, screen } from '@testing-library/react';
import App from './App';
import styled from "styled-components";
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const SimpleButton = styled.button`
color: white;
background-color: green;
`;
const LargeButton = styled(SimpleButton)`
font-size: 50px;
`;
// 일반적인 방법
const ReactButton = (props) => {
console.log("props", props);
return <button
className={props.className}>{props.children}</button>;
};
const ReactLargeButton = styled(ReactButton)`
font-size: 50px;
`;
const App = () => {
return (
<div>
<SimpleButton>Simple</SimpleButton>
<LargeButton>Large</LargeButton>
<ReactButton>React</ReactButton>
<ReactLargeButton>React

Large</ReactLargeButton>
</div>
);
};
export default App;