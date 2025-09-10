const HARDCODED_USERS = [
  {
    userId: 'user_alex_chen',
    name: 'Alex Chen',
    email: 'alex.chen@techcorp.com',
    organizationId: 'crm-tool-basepoint-org',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user_alex_chen'
  },
  {
    userId: 'user_sarah_johnson',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@innovatelab.com',
    organizationId: 'crm-tool-basepoint-org',
    photoUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user_sarah_johnson'
  }
]

const getCurrentUserIndex = (): number => {
  if (typeof window === 'undefined') return 0
  const storedIndex = localStorage.getItem('velt_current_user_index')
  return storedIndex ? parseInt(storedIndex, 10) : 0
}

const setCurrentUserIndex = (index: number): void => {
  if (typeof window === 'undefined') return
  localStorage.setItem('velt_current_user_index', index.toString())
}

export const getCurrentUser = () => {
  if (typeof window === 'undefined') return null
  
  const currentIndex = getCurrentUserIndex()
  return HARDCODED_USERS[currentIndex]
}

export const getOrCreateUser = () => {
  return getCurrentUser()
}

export const switchUser = () => {
  if (typeof window === 'undefined') return null
  
  const currentIndex = getCurrentUserIndex()
  const newIndex = currentIndex === 0 ? 1 : 0
  setCurrentUserIndex(newIndex)
  
  return HARDCODED_USERS[newIndex]
}

export const getAvailableUsers = () => {
  return HARDCODED_USERS
}