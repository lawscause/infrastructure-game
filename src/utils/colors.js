const colorMap = {
  purple: 'bg-purple-500',
  violet: 'bg-violet-500',
  blue: 'bg-blue-500',
  orange: 'bg-orange-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  teal: 'bg-teal-500',
  cyan: 'bg-cyan-500',
  yellow: 'bg-yellow-600',
  indigo: 'bg-indigo-500',
  pink: 'bg-pink-500',
  gray: 'bg-gray-600',
  rose: 'bg-rose-500',
  amber: 'bg-amber-600',
}

const borderMap = {
  purple: 'border-purple-400',
  violet: 'border-violet-400',
  blue: 'border-blue-400',
  orange: 'border-orange-400',
  green: 'border-green-400',
  red: 'border-red-400',
  teal: 'border-teal-400',
  cyan: 'border-cyan-400',
  yellow: 'border-yellow-500',
  indigo: 'border-indigo-400',
  pink: 'border-pink-400',
  gray: 'border-gray-500',
  rose: 'border-rose-400',
  amber: 'border-amber-500',
}

export const getCardBg = (color) => colorMap[color] || 'bg-gray-500'
export const getCardBorder = (color) => borderMap[color] || 'border-gray-400'
