import '@styles/global/global.css';
import NavBar from '@components/NavBar/NavBar';
import './styles/contact.css';


export default function Contact() {
  return (
    <>
      <NavBar />
      <main className="contact-background">
        <section className="form-wrapper">
          <form>
            <h2>聯絡方式</h2>
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required />
              <label htmlFor="name">您的姓名</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="a123456@gmail.com"
                required
              />
              <label htmlFor="email">您的信箱</label>
            </div>
            <div className="input-group">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="0912345678"
                pattern="09\d{8}"
                title="請輸入有效的台灣手機號碼，如 0912345678"
                required
              />
              <label htmlFor="phone">您的電話</label>
            </div>
            <button type="submit">送出</button>
          </form>
        </section>
      </main>
    </>
  );
}
