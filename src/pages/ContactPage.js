import React from "react";
import ContactForm from "../components/ContactForm";
import styles from "./ContactPage.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className={styles.contact}>
        <div className={styles.contact}>
          <h2>CÁC CÂU HỎI THƯỜNG GẶP VÀ LIÊN HỆ</h2>
          <div className={styles.hr} style={{ height: "25px" }}></div>

          <h3>1. CÁC CÂU HỎI THƯỜNG GẶP</h3>
          <div className={styles.question}>
            <div className={styles.item}>
              <button>Trang trợ giúp </button>
              <p>
                Để biết thông tin và được hỗ trợ với các câu hỏi về Fantasy
                League, vui lòng truy cập ....
              </p>
            </div>
          </div>
          <div className={styles.item}>
            <button>Thắc mắc chung</button>
            <p>
              Vui lòng liên hệ .... nếu có bất kỳ thắc mắc nào liên quan đến sản
              phẩm và chất lượng đến từ công ty cổ phần trang sức DIAMOND
              JEWELRY.{" "}
            </p>
          </div>

          <div className={styles.item}>
            <button>Tôi không thể đăng nhập. Tôi cần làm gì?</button>
            <p>
              Hãy đảm bảo rằng bạn đang sử dụng địa chỉ e-mail đã đăng ký và mật
              khẩu chính xác. Lưu ý rằng mật khẩu có phân biệt chữ hoa và chữ
              thường.
            </p>
            <p>
              Mật khẩu tạm thời sẽ được gửi đến hộp thư của bạn. Vui lòng cập
              nhật mật khẩu của bạn sau khi đăng nhập.
            </p>
            <p>
              Nếu bạn không nhận được lời nhắc mật khẩu, vui lòng kiểm tra thư
              mục Rác trong hộp thư đến của bạn và thêm
              noreply@mailout.users.diamondcity.com vào sổ địa chỉ của bạn.
            </p>
          </div>

          <div className={styles.item}>
            <button>
              Làm cách nào để cập nhật chi tiết tài khoản của tôi?
            </button>
            <p>
              Bạn có thể cập nhật tài khoản của mình bất kỳ lúc nào sau khi bạn
              đã đăng nhập.
            </p>
            <p>
              Chỉ cần truy cập tài khoản của bạn qua tiêu đề trang web hoặc menu
              khi sử dụng thiết bị di động. Từ đây, bạn có thể cập nhật thông
              tin cá nhân của mình, bao gồm địa chỉ email và mật khẩu, cũng như
              bất kỳ tùy chọn nào mà bạn đã chọn trước đó.
            </p>
          </div>
          <div className={styles.hr}></div>

          <h3>2. FORM LIÊN HỆ </h3>
          <ContactForm />
          <div className={styles.hr} style={{ height: "25px" }}></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
