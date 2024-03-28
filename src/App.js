import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
    let post = "테스트 테스트";
    let [title, setTitle] = useState(['책 추천', '음식 추천', '영화 추천']);
    let [like, setLike] = useState(0);
    let [modal, setModal] = useState(false);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그</h4>
            </div>
            <button onClick={() => {
                let copy = [...title];
                copy.sort();
                setTitle(copy)
            }}>글 제목 정렬</button>
            <div className="list">
                <h4 onClick={() => {setModal(!modal)}}>{title[0]}
                    <span onClick={() => {setLike(like+1)}}>👍</span>
                    {like}</h4>
                <button onClick={() => {
                    let copy = [...title];
                    copy[0] = '만화 추천'
                    setTitle(copy)
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
            {
                modal === true ? <Modal color={'skyblue'} title={title}/> : null
            }
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal" style={{background : props.color}}>
            <h4>{props.title[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글 수정</button>
        </div>
    )
}

export default App;
