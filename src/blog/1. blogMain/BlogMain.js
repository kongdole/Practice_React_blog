
import { useState } from 'react';
import './blogMain.css';


const BlogMain = () => {
    let subject = 'Kong`s Blog';


    let [array, setArray] = useState(['남자 코트 추천', '쇼트 코트 추천', '롱 코트 추천']);


    let [loveIt, setLoveIt] = useState([0, 0, 0]);


    const OnClickLoveIt = () => {

        setLoveIt(loveIt + 1);
    }

    const onClickArray = () => {
        let click = [...array];
        click[0] = '여자 코트 추천';
        setArray(click);
    }

    let [title, setTitle] = useState(0);


    let [modal, setModal] = useState(false);

    let [onChangeData, setOnChangeData] = useState("");

    let temp = "";

    const [removeNum, setRemoveNum] = useState(0);

    let dt = new Date();

    let nowTime = dt.getFullYear() + "년" + (dt.getMonth() + 1) + "월" + dt.getDate() + "일" +
        dt.getHours() + "시" + dt.getMinutes() + "분" + dt.getSeconds() + "초";

    let [saveTime, setSaveTime] = useState([nowTime, nowTime, nowTime]);

    return (
        <div className="App">
            <div className="blog-nav">
                <h4>{subject}</h4>

            </div>

            {
                array.map(function (a, i) {
                    return (
                        <>
                            <div className='list'>
                                <h4 onClick={() => { setModal(true); setTitle(i) }}>{a}
                                    <span onClick={(e) => {
                                        e.stopPropagation();
                                        let change = { ...loveIt }
                                        change[i] = loveIt[i] + 1
                                        setLoveIt(change);
                                    }}>
                                        💖</span>{loveIt[i]}
                                    <button onClick={(e) => {
                                        e.stopPropagation();
                                        let removedArray = [...array];
                                        removedArray.splice(i,1);
                                        setArray(removedArray);

                                    }}>삭제</button>

                                </h4>

                                <p>{saveTime[i]}</p>
                            </div>
                        </>
                    );
                })
            }
            <p></p>

            <input onChange={(e) => {
                setOnChangeData(e.target.value);
            }} value={onChangeData} />
            {
                onChangeData != "" ? <button onClick={() => {


                    setArray(array => [...array, onChangeData]);
                    setLoveIt(loveIt => [...loveIt, 0]);
                    setSaveTime(saveTime => [...saveTime, nowTime]);
                    setOnChangeData("");

                }}>추가</button> : null
            }

            {
                modal == true ? <Modal titleNum={title} setProps={setArray} color={'yellow'} name={array} /> : null
            }
        </div>
    )
}
function Modal(props) {


    return (
        <div className='modal' style={{ background: props.color }}>
            <h4>{props.name[props.titleNum]}</h4>
            <p>날짜</p>
            <p>상시내용</p>
            <button>글 수정</button>
        </div>
    )
}

export default BlogMain;;