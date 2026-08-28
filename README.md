# Capital Challenge Portal

Act as a Lead UI/UX Designer. Generate a complete, modern, responsive multi-page web application (Total 18 Pages) for "Investment Competition 2026" (A National Capital Market & Stock Investment CBT Examination Portal).
---
### 🎨 1. DESIGN SYSTEM & COLOR PALETTE (ISFO.ID STANDARD)
- Primary Colors:
  * #0E3B43 (Darkest Teal) : Background Hero Banner, Login Left Panel, Navbar Branding.
  * #134E5E (Deep Teal)    : Main Action Buttons (CTA), Card Top Accent Border, Section Headers.
  * #1F6878 (Medium Teal)  : Active Nav State, Category Badges.
- Accent & Highlights:
  * #239B9E (Cyan-Teal)    : Hover States, Focus Borders, Progress Bars.
  * #F39C12 (Amber Gold)   : Trophy Badges, Warning Notifications, Flagged States.
- Functional & CBT Colors:
  * #27AE60 (Emerald Green): Answered Question State (Green), Passed Status.
  * #F1C40F (Yellow)       : Flagged/Ragu-Ragu Question State (Yellow).
  * #C0392B (Crimson Red)  : Live Countdown Timer, Submit Exam Button, Failed Status.
- Neutral & Canvas:
  * #F8FAFC (Slate Canvas) : Global Page Background (Clean, soft, light gray).
  * #FFFFFF (Pure White)   : Card Surfaces, Form Inputs, Dropdown Menus.
  * #E2E8F0 (Border Slate) : 1px Card Borders, Table Dividers.
- Typography:
  * Headings : Plus Jakarta Sans (Bold, 600-800, tight tracking)
  * Body Text: Inter (Regular/Medium, 400-500, clean line-height)
---
### 📑 2. STRUKTUR & KONTEN LENGKAP (TOTAL 18 HALAMAN)
#### A. HALAMAN PUBLIK & INFORMASI (3 Halaman)
1. Landing Page Utama:
   - Hero banner kompetisi, statistik peserta, jadwal tahapan lomba (Pendaftaran, Penyisihan CBT, Semifinal, Grand Final).
   - Kategori peserta (Mahasiswa & Pelajar SMA), total hadiah, dewan juri, sponsor/partner, FAQ, dan tombol CTA "Masuk Portal Ujian".
2. Halaman Silabus & Kisi-Kisi Ujian:
   - Rincian materi ujian pasar modal (Analisis Fundamental, Teknikal, Makroekonomi, Regulasi OJK/BEI, Portofolio Saham).
   - Komposisi soal, bobot nilai, dan tombol download "Buku Panduan Teknis (PDF)".
3. Halaman Berita & Pengumuman:
   - Daftar artikel pengumuman resmi, jadwal Technical Meeting, dan berita terbaru kompetisi.
#### B. AUTENTIKASI & AKUN (2 Halaman)
4. Halaman Login (Split Card 1:1):
   - Kolom Kiri (Deep Teal #0E3B43): Banner resmi, ikon piala 🏆, judul "Investment Competition 2026", subjudul, dan 3 poin fitur (Simulasi Realistis, CBT Terstandar, Skor Otomatis).
   - Kolom Kanan (Pure White #FFFFFF): Form input Nomor Peserta/Email & Password (dengan show/hide password), checkbox Ingat Saya, link Lupa Sandi, tombol CTA "Masuk Sekarang →", dan info notifikasi cookies.
5. Halaman Lupa Password / Reset Akun:
   - Form input email terdaftar, tombol kirim link OTP/reset, dan instruksi verifikasi keamanan.
#### C. PORTAL PESERTA & ENGINE UJIAN CBT (6 Halaman)
6. Dashboard Utama Peserta:
   - Top Navbar putih (Logo brand, 5 link menu, user profile pill).
   - Hero Banner Deep Teal dengan badge "KOMPETISI PASAR MODAL & INVESTASI 2026" dan status gelombang aktif.
   - Grid 4 Kartu Tahapan Utama:
     1) 📋 01. Petunjuk Kompetisi (Tata Tertib & Panduan)
     2) 🎯 02. Simulasi Ujian (Trial Exam 30 Menit - Percobaan Bebas)
     3) 📝 03. Ujian Utama CBT (Ujian Seleksi 90 Menit - 1x Percobaan)
     4) 📈 04. Hasil & Status (Papan Skor & Pengumuman)
7. Halaman Profil & Kartu Peserta:
   - Data tim/individu, asal institusi/sekolah, nomor peserta, dan tombol cetak "Kartu Ujian Peserta (PDF)".
8. Halaman Petunjuk & Tata Tertib Ujian:
   - Regulasi pengerjaan, toleransi keterlambatan, sanksi kecurangan, dan checklist persetujuan "Saya Menyetujui Tata Tertib" + Tombol lanjut ujian.
9. Halaman Ruang Tunggu Ujian (Lobby / Waiting Room):
   - Countdown mundur sebelum ujian dibuka, indikator kestabilan koneksi internet, dan kolom input Token Ujian dari pengawas.
10. Halaman Lembar Ujian CBT (Exam Engine):
    - Bar Atas: Timer hitung mundur merah (#C0392B `⏳ 01:29:45`), nomor soal aktif ("Soal 15 dari 50"), tombol pengatur ukuran font.
    - Area Soal: Pertanyaan analisis investasi/tabel/grafik saham, opsi pilihan ganda A, B, C, D, E interaktif.
    - Bar Bawah: Tombol "← Soal Sebelumnya", checkbox "Ragu-Ragu" (kuning #F1C40F), dan tombol "Soal Berikutnya →".
    - Panel Kanan (Palet 50 Soal): Grid 50 kotak nomor berkode warna (Hijau = Terjawab, Kuning = Ragu, Abu-abu = Kosong) + Tombol "Selesaikan Ujian (Submit)" dengan modal konfirmasi sisa waktu.
11. Halaman Hasil, Analisis Skor & Sertifikat:
    - Ringkasan nilai akhir per kategori sub-tes, status kelulusan ke babak final, tabel ranking peserta, dan tombol "Unduh E-Sertifikat (PDF)".
#### D. PENGAWAS & PROCTORING LIVE (2 Halaman)
12. Halaman Live Monitoring Ujian (Proctor Room):
    - Grid live status seluruh peserta di ruangan (Sedang Mengerjakan, Idle, Selesai, Terputus).
    - Indikator deteksi fokus layar (peringatan jika peserta beralih jendela/tab).
13. Halaman Log Aktivitas & Pelanggaran:
    - Rekam jejak aktivitas real-time per peserta (waktu login, waktu klik soal, log perpindahan jendela) dan tombol aksi "Force Submit / Diskualifikasi".
#### E. ADMINISTRATOR & PANITIA (5 Halaman)
14. Dashboard Statistik Admin:
    - Metrik kartu: Total Pendaftar, Peserta Ujian Aktif, Selesai Submit, Rata-rata Skor Nasional.
    - Grafik sebaran nilai dan status beban server/database.
15. Halaman Manajemen Bank Soal:
    - Tabel soal investasi, filter kategori materi/tingkat kesulitan, form tambah/edit soal, dan tombol "Import Soal Excel/CSV".
16. Halaman Manajemen Jadwal, Sesi & Token:
    - Pembuatan sesi ujian (Gelombang 1/2), setting durasi menit, waktu buka-tutup ujian, dan generator Token Ujian harian.
17. Halaman Data Peserta & Kontrol Akun:
    - Tabel data peserta, filter status verifikasi, fitur pencarian instan, dan tombol aksi "Reset Sesi Ujian" (untuk kendala teknis).
18. Halaman Rekap Nilai, Ranking & Export Data:
    - Tabel rekapitulasi nilai lengkap dengan kalkulasi ranking otomatis dan tombol "Export Excel (.xlsx)" serta "Export PDF".
---
### 📦 3. OUTPUT FORMAT
- Halaman web modern, bersih, responsif (Desktop, Tablet, Mobile).
- Menggunakan struktur semantic HTML5 & Modern CSS / Tailwind CSS yang modular dan siap diintegrasikan.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2c3e1a16-c803-4703-bfd6-ff7592aa0a5e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
