export default function FilterKategori({ daftar, nilai, onUbah }) {
 return (
    <select aria-label="Kategori" value={nilai} onChange={(e) => onUbah(e.target.value)}>
        {daftar.map((k) => (
            <option key={k}>{k}</option>
        ))}
    </select>
  )
}