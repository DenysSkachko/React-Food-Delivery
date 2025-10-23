import { GoHome } from 'react-icons/go'
import { TbRosetteDiscount } from 'react-icons/tb'
import { RiDashboardHorizontalFill } from 'react-icons/ri'
import { BiMessageSquare } from 'react-icons/bi'
import { RiNotification4Line } from 'react-icons/ri'
import { IoSettingsOutline } from 'react-icons/io5'

export const menuLinks = [
  { path: '/', icon: GoHome },
  { path: '/discounts', icon: TbRosetteDiscount },
  { path: '/dashboard', icon: RiDashboardHorizontalFill },
  { path: '/messages', icon: BiMessageSquare },
  { path: '/notifications', icon: RiNotification4Line },
  { path: '/settings', icon: IoSettingsOutline },
]
