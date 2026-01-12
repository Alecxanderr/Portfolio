import {clsx} from 'clsx'
import { twMerge } from 'tailwind-merge'

// cn means classname
// this allows us to pass multiple classnames like
// flex and all that easily
export const cn = (...inputs) => {
  return twMerge(clsx(inputs))
}