import tagIcon from '../../../assets/home'
import './style.scss'

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
                    <img className='home-container-tags-img' src={tag.img} alt='' />
                    {tag.title}
                </span>
            ))}
        </div>
    </div>
)

export default TagsComponents
