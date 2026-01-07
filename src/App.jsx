import { Routes, Route, Navigate } from 'react-router-dom'
import MacaronLayout from '@/components/macaron/Layout'
import MacaronHome from '@/pages/macaron/MacaronHome'
import MacaronMenu from '@/pages/macaron/MacaronMenu'
import MacaronAbout from '@/pages/macaron/MacaronAbout'
import MacaronGallery from '@/pages/macaron/MacaronGallery'
import MacaronReservation from '@/pages/macaron/MacaronReservation'
import MacaronContact from '@/pages/macaron/MacaronContact'
import MacaronPayment from '@/pages/macaron/MacaronPayment'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/macaron" replace />} />
      <Route path="/macaron" element={<MacaronLayout currentPageName="Home"><MacaronHome /></MacaronLayout>} />
      <Route path="/macaron/menu" element={<MacaronLayout currentPageName="Menu"><MacaronMenu /></MacaronLayout>} />
      <Route path="/macaron/about" element={<MacaronLayout currentPageName="About"><MacaronAbout /></MacaronLayout>} />
      <Route path="/macaron/gallery" element={<MacaronLayout currentPageName="Gallery"><MacaronGallery /></MacaronLayout>} />
      <Route path="/macaron/reservation" element={<MacaronLayout currentPageName="Reservation"><MacaronReservation /></MacaronLayout>} />
      <Route path="/macaron/contact" element={<MacaronLayout currentPageName="Contact"><MacaronContact /></MacaronLayout>} />
      <Route path="/macaron/payment" element={<MacaronLayout currentPageName="Payment"><MacaronPayment /></MacaronLayout>} />
    </Routes>
  )
}
