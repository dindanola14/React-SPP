import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Beranda from './beranda';
import Siswa from './siswa';
import Kelas from './kelas';
import Petugas from './petugas';
import Spp from './spp';
import Transaksi from './transaksi';
import Histori from './histori';
import Laporan from './laporan';

const Utama = () => (
    <Routes>
        <Route exact path='/' element={<Beranda />} />
        <Route path='/siswa' element={<Siswa />} />
        <Route path='/kelas' element={<Kelas />} />
        <Route path='/petugas' element={<Petugas />} />
        <Route path='/spp' element={<Spp />} />
        <Route path='/transaksi' element={<Transaksi />} />
        <Route path='/histori' element={<Histori />} />
        <Route path='/laporan' element={<Laporan />} />
    </Routes>
)

export default Utama;