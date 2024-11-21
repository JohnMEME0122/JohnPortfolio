import '@styles/global/global.css';
import './styles/contact.css';
import NavBar from '@components/NavBar/NavBar';

export default function Contact() {
  return (
    <div>
      <NavBar />
      <div className="background">
        <div className="login-wrapper">
          <form>
            <h2>聯絡方式</h2>
            <div className="input-group">
              <input type="text" id="name" name="name" required />
              <label htmlFor="name">您的姓名</label>
            </div>
            <div className="input-group">
              <input type="email" id="email" name="email" placeholder="a123456@gmail.com" required />
              <label htmlFor="email">您的Email</label>
            </div>
            <div className="input-group">
              <input type="text" id="phone" name="phone" placeholder="0912345678" required />
              <label htmlFor="phone">您的電話</label>
            </div>
            <button type="submit">送出</button>
          </form>
        </div>
      </div>

    </div>
  );
}
