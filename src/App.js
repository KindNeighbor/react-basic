import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
    let post = "테스트 테스트";
    let [title, setTitle] = useState(['책 추천', '음식 추천', '영화 추천']);
    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [modalTitle, setModalTitle] = useState(0);

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
            {
                title.map((a, i) => {
                    return (
                        <div className="list">
                            <h4 onClick={() => {setModal(!modal);
                                setModalTitle(i)}}>{title[i]}
                                <span onClick={() => {
                                    let copy = [...like];
                                    copy[i] = copy[i] + 1;
                                    setLike(copy)
                                }}>👍</span>
                                {like[i]}</h4>
                            <button onClick={() => {
                                let copy = [...title];
                                copy[0] = '만화 추천'
                                setTitle(copy)
                            }}>제목 바꾸기
                            </button>
                            <p>2월 17일 발행</p>
                        </div>
                    )
                })
            }
            {
                modal === true ? <Modal modalTitle={modalTitle} color={'skyblue'} title={title}/> : null
            }
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal" style={{background : props.color}}>
            <h4>{props.title[props.modalTitle]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글 수정</button>
        </div>
    )
}

export default App;
