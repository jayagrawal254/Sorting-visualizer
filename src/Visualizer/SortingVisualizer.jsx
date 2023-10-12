import { useContext, useEffect, useState } from "react";
import { mergeSort } from "../Algorithams/MergeSort";
import "./SortingVisualizer.css";
import { bubbleSort } from "../Algorithams/bubbleSort";
import { quickSort } from "../Algorithams/quickSort";
import { heapSort } from "../Algorithams/heapSort";
import { GlobalsContext } from "../Context/GlobalContext";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  let temp = array.slice();
  const array2 = array.slice();
  const { speed, len } = useContext(GlobalsContext);

  useEffect(() => {
    resetArray();
  }, [len]);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < len; i++) {
      newArray.push(randomIntFromInterval(10, 450));
    }
    setArray(newArray);
  };
  //   range speed is 1 - 10, when value more high, speed is more fast
  const animation_speed = 10 / speed;
  const MergeSort = () => {
    const [animate, arr] = mergeSort(temp);
    for (let i = 0; i < animate.length; i++) {
      const arrayBar = document.getElementsByClassName("array-bar");
      let x = i % 3;
      if (x === 0 || x === 2) {
        let [barOneIdx, barTwoIdx] = animate[i];
        let barOneColor = arrayBar[barOneIdx].style;
        let barTwoColor = arrayBar[barTwoIdx].style;
        let t = x;
        t = t === 0 ? `#E5FFFB` : `#738C89`;
        setTimeout(() => {
          barOneColor.backgroundColor = t;
          barTwoColor.backgroundColor = t;
        }, i * animation_speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animate[i];
          const barOneStyle = arrayBar[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animation_speed);
      }
    }
  };

  const QuickSort = () => {
    // ...
    const [animate, arr1] = quickSort(temp);
    for (let i = 0; i < animate.length; i++) {
      const arrayBar = document.getElementsByClassName("array-bar");
      let x = i % 4;
      if (x === 0 || x === 3) {
        let [barOneIdx, barTwoIdx] = animate[i];
        let barOneColor = arrayBar[barOneIdx].style;
        let barTwoColor = arrayBar[barTwoIdx].style;
        let t = x;
        if (t === 0) t = `#E5FFFB`;
        else t = `#738C89`;
        setTimeout(() => {
          barOneColor.backgroundColor = t;
          barTwoColor.backgroundColor = t;
        }, i * animation_speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animate[i];
          const barOneStyle = arrayBar[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animation_speed);
      }
    }
  };

  const HeapSort = () => {
    // ...
    const [animate, arr] = heapSort(temp);
    let isColor = false;
    for (let i = 0; i < animate.length; i++) {
      const arrayBar = document.getElementsByClassName("array-bar");
      let x = animate[i];
      if (x.length === 3) {
        let [barOneIdx, barTwoIdx, barThreeIdx] = animate[i];
        let barOneColor, barTwoColor, barThreeColor;
        if (arrayBar[barOneIdx] !== undefined)
          barOneColor = arrayBar[barOneIdx].style;
        if (arrayBar[barTwoIdx] !== undefined)
          barTwoColor = arrayBar[barTwoIdx].style;
        if (arrayBar[barThreeIdx] !== undefined)
          barThreeColor = arrayBar[barThreeIdx].style;
        let t = isColor ? "#738C89" : `#E5FFFB`;
        isColor = !isColor;
        setTimeout(() => {
          if (arrayBar[barOneIdx] !== undefined)
            barOneColor.backgroundColor = t;
          if (arrayBar[barTwoIdx] !== undefined)
            barTwoColor.backgroundColor = t;
          if (arrayBar[barThreeIdx] !== undefined)
            barThreeColor.backgroundColor = t;
        }, i * animation_speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animate[i];
          const barOneStyle = arrayBar[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animation_speed);
      }
    }
  };

  const BubbleSort = () => {
    // ...
    const [x, arr] = bubbleSort(temp);
    for (let i = 0; i < x.length; i++) {
      const arrayBar = document.getElementsByClassName("array-bar");
      if (i % 4 === 0 || i % 4 === 3) {
        const [barOneIdx, barTwoIdx] = x[i];
        let barOneColor, barTwoColor;
        if (arrayBar[barOneIdx] !== undefined)
          barOneColor = arrayBar[barOneIdx].style;
        if (arrayBar[barTwoIdx] !== undefined)
          barTwoColor = arrayBar[barTwoIdx].style;
        let t;
        if (i % 4 === 0) t = `#E5FFFB`;
        else t = `#738C89`;
        setTimeout(() => {
          barOneColor.backgroundColor = t;
          barTwoColor.backgroundColor = t;
        }, i * animation_speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = x[i];
          const barOneStyle = arrayBar[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animation_speed);
      }
    }
  };

  return (
    <div className="wrapper">
      {/*<div className="nav-bar"></div>*/}
      <div className="array-container">
        {array2.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
            }}
          />
        ))}
      </div>
      <div className="button-wrapper">
        <button onClick={resetArray}>Shuffle</button>
        <button onClick={MergeSort}>Merge Sort</button>
        <button onClick={QuickSort}>Quick Sort</button>
        <button onClick={HeapSort}>Heap Sort</button>
        <button onClick={BubbleSort}>Bubble Sort</button>
      </div>
    </div>
  );
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
