import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
    let post = "테스트 테스트";
    let [title, titleState] = useState(['책 추천', '음식 추천', '영화 추천']);
    let [like, likeState] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그</h4>
            </div>
            <button onClick={() => {
                let copy = [...title];
                copy.sort();
                titleState(copy)
            }}>글 제목 정렬</button>
            <div className="list">
                <h4>{title[0]}
                    <span onClick={() => {likeState(like+1)}}>👍</span>
                    {like}</h4>
                <button onClick={() => {
                    let copy = [...title];
                    copy[0] = '만화 추천'
                    titleState(copy)
                }}>제목 바꾸기</button>
                <p>3월 1일 발행</p>
            </div>
            <div className="list">
                <h4>{title[1]}</h4>
                <p>3월 2일 발행</p>
            </div>
            <div className="list">
                <h4>{title[2]}</h4>
                <p>3월 3일 발행</p>
            </div>
            <Modal></Modal>
        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
