import { FC } from "react";
import '../styles/NavBar/NavBar.css';

const NavBar: FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#">關於 John</a></li>
          <li><a href="./contact.html">聯絡方式</a></li>
          <li>
            <a target="_blank" href="./Project/project 1/index.html">圍棋網站</a>
          </li>
          <li>
            <a target="_blank" href="./Project/project 2/index.html"
            >日本旅遊網站</a>
          </li>
          <li>
            <a target="_blank" href="./Project/project 3/index.html">美食網站</a>
          </li>
          <li>
            <a target="_blank" href="./Project/project 4/index.html">GPA計算網站</a>
          </li>
          <li>
            <a target="_blank" href="./Project/project 5/index.html"
            >貪食蛇小遊戲</a>
          </li>
          <li>
            <a target="_blank" href="./Project/project 6/index.html"
            >彈跳球小遊戲</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;