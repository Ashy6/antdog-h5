import { Avatar } from 'antd-mobile'
import tagIcon from '../../../assets/home'

const tags = [
    {
        title: 'High Rate',
        img: tagIcon.highRate
    },
    {
        title: 'Security',
        img: tagIcon.security
    },
    {
        title: 'Trusted',
        img: tagIcon.trusted
    }
]

const TagsComponents: React.FC = () => (
    <div className='home-container'>
        <div className='home-container-tags'>
            {tags.map((tag, i) => (
                <span key={i}>
                    <Avatar
                        src={tag.img || ''}
                        style={{ '--size': '20rem' }}
                    />
                    {tag.title}
                </span>
            ))}
        </div>
    </div>
)

export default TagsComponents
