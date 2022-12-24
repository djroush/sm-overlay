
import { useSelector } from 'react-redux'

import { RootState } from '../redux/state/RootState';
import PreviewComp from '../components/Preview';
import { avatarsValues } from '../model/SliderValues';


export default function Preview() {
    const { settings, options, preview } = useSelector((state: RootState) => state)

    const { avatars } = settings
    const emptyAvatars = avatarsValues[avatars-1] === 'EMPTY'

    const props = { ...preview, ...options, emptyAvatars}
    return <PreviewComp {...props} />
}
