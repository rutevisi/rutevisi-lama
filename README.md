# PERSONALITIKA - Pahami Karakteristikmu Lebih Dalam
## About Personalitika
Personalitika merupakan sebuah website yang menyediakan berbagai macam tes untuk mengetahui kepribadian seseorang secara mendalam.

## Used Technology
- Nextjs / React.js
- Node.js
- Redux
- MongoDB
- Firebase

## API Endpoints
### Api Soal-Soal
* **/api/soal/nama-tes** - Mengambil soal berdasar nama tes
* **/api/soal/nama-tes/add** - Menambahkan soal

### Api Info Tes
* **/api/tes** - Mengambil macam-macam tes yang tersedia
* **/api/tes/nama-tes** - Mengambil tes tertentu berdasar nama
* **/api/tes/result** - Mengambil seluruh riwayat tes
* **/api/tes/result/{id}** - Mengambil detail tes berdasar testId

### Api User
* **/api/user/add** - User Signup
* **/api/user/auth** - User Login
* **/api/user/{id}**

Private API yang hanya bisa diakses ketika user telah login
* **/api/user/me** - Mengambil semua data user
* **/api/user/me/upload/{id}** - Upload foto profil user ke firestore