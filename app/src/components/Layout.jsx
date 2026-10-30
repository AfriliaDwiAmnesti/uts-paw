import { Outlet } from 'react-router-dom'
import Navigasi from './Navigasi.jsx'
import './Layout.css'

export default function Layout() {
  return (
    <div className="kerangka">
      <header className="kepala">
        <strong>Portofolio Proyek</strong>
        <Navigasi />
      </header>
      <main className="isi">
        <Outlet />
      </main>
      <footer className="kaki">Ujian Tengah Semester Pengembangan Aplikasi Web</footer>
    </div>
  )
}