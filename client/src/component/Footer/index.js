import s from './styles.module.scss'
// import logo from '../../assets/logoDTM.png'

export default function Footer() {
  return (
    <footer className={s.root}>
      <div className={s.footerContent}>
        {/* <h3>🌳 Dashboard Vacine Covid-19 Vietnam 🌳</h3>
        <img src={logo} alt="DTM" /> */}
        <div className={s.footerBottom}>
          <span>
            copyright &copy;2021{' '}
            <a href="https://www.facebook.com/hp0509/">Nguyễn Hoài Phong - </a>
            <a href="https://www.facebook.com/profile.php?id=100007440557484">
              Nguyễn Tài Danh -
            </a>
            <a href="https://www.facebook.com/profile.php?id=100073950242393">
              Thạch Lê Thái
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
