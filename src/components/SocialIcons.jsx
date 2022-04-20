import { ReactComponent as GithubIcon } from '../assets/github.svg'
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg'

function SocialIcons() {
  return (
    <div className="flex gap-4">
        <a href="https://github.com/wiew">
            <GithubIcon className='w-6 h-6' />
        </a>
        <a href="https://www.linkedin.com/in/dawid-zapała-334a5b171/">
            <LinkedinIcon className='w-6 h-6' />
        </a>
    </div>
  )
}

export default SocialIcons