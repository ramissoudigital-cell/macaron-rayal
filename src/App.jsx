import { Routes, Route, Navigate } from 'react-router-dom'
import MacaronHome from '@/pages/macaron/MacaronHome'
import MacaronMenu from '@/pages/macaron/MacaronMenu'
import MacaronAbout from '@/pages/macaron/MacaronAbout'
import MacaronGallery from '@/pages/macaron/MacaronGallery'
import MacaronReservation from '@/pages/macaron/MacaronReservation'
import MacaronContact from '@/pages/macaron/MacaronContact'
import MacaronPayment from '@/pages/macaron/MacaronPayment'
import MacaronPolitiqueConfidentialite from '@/pages/macaron/MacaronPolitiqueConfidentialite'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/macaron" replace />} />
      <Route path="/macaron" element={<MacaronHome />} />
      <Route path="/macaron/menu" element={<MacaronMenu />} />
      <Route path="/macaron/about" element={<MacaronAbout />} />
      <Route path="/macaron/gallery" element={<MacaronGallery />} />
      <Route path="/macaron/reservation" element={<MacaronReservation />} />
      <Route path="/macaron/contact" element={<MacaronContact />} />
      <Route path="/macaron/payment" element={<MacaronPayment />} />
      <Route path="/macaron/politique-confidentialite" element={<MacaronPolitiqueConfidentialite />} />
    </Routes>
  )
}
