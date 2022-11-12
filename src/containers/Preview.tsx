
import { useSelector } from 'react-redux'
import { createCanvas } from 'canvas';
import { RootState } from '../redux/state/RootState';
import PreviewComp from '../components/Preview';


export default function Preview() {
    const { preview } = useSelector((state: RootState) => state)

    const { showWins, showAvatar, showTracker } = useSelector((state: RootState) => state.options)

    const downloadOverlay = () => {
        const backgroundCanvas = document.getElementById('background');
        const streamCanvas = document.getElementById('streams');
        const namesCanvas = document.getElementById('names');
        const timersCanvas = document.getElementById('timers');
        const trackersCanvas = document.getElementById('trackers');
        const avatarsCanvas = document.getElementById('avatars');
        const winsCanvas = document.getElementById('wins');
        const informationCanvas = document.getElementById('information');

        const canvas = createCanvas(1280, 720);
        const context = canvas.getContext('2d');
        context.drawImage(backgroundCanvas, 0, 0);
        context.drawImage(streamCanvas, 0, 0);
        context.drawImage(namesCanvas, 0, 0);
        context.drawImage(timersCanvas, 0, 0);

        if (showTracker) {
            context.drawImage(trackersCanvas, 0, 0);
        }
        if (showAvatar) {
            context.drawImage(avatarsCanvas, 0, 0);
        }
        if (showWins) {
            context.drawImage(winsCanvas, 0, 0);
        }
        context.drawImage(informationCanvas, 0, 0);

        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = "sm-overlay.png";
        link.href = dataURL.replace("image/png", "image/octet-stream");
        link.click();
        link.remove();
    }

    const props = { ...preview, showTracker, showAvatar, showWins, downloadOverlay }
    return <PreviewComp {...props} />
}
