import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, expect, test, vi } from 'vitest'
import App from './App.jsx'

const DATA = [{ id: '1', judul: 'Ecotourism Asset Management System', kategori: 'Sistem Informasi', teknologi: 'React, Vite, Node.js', tahun: '2025', tautan: 'https://github.com/AfriliaDwiAmnesti/ecotourism-app'}]

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(DATA))))
})

function buka(path) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

test('menampilkan data hasil fetch di halaman koleksi', async () => {
  buka('/koleksi')
  expect(await screen.findByText('Ecotourism Asset Management System')).toBeInTheDocument()
})

test('menampilkan teks mahasiswa pada halaman tentang', async () => {
  buka('/tentang')
  expect(await screen.getByText('Afrilia Dwi Amnesti')).toBeInTheDocument()
})

test('form menolak judul kosong', async () => {
  buka('/tambah')
  await userEvent.click(screen.getByRole('button', { name: 'Simpan' }))
  expect(screen.getByRole('alert')).toHaveTextContent('Judul wajib diisi')
})  

test('rute tidak dikenal menampilkan 404', () => {
  buka('/rute-tidak-dikenal')
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('halaman tentang menampilkan NIM', () => {
  buka('/tentang')
  expect(screen.getByText('123140079')).toBeInTheDocument()
})