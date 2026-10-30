import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, teknologi, tahun, tautan } = item
  return (
    <article className="kartu">
      <h3>
        <Link to={`/koleksi/${id}`}>{judul}</Link>
      </h3>
      <p>
        {kategori} · {teknologi} · {tahun}
      </p>
      {tautan && (
        <p>
          <a href={tautan} target="_blank" rel="noopener noreferrer">
            Lihat Proyek
          </a>
        </p>
      )}
    </article>
  )
}