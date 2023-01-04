
import { useDispatch, useSelector } from 'react-redux'
import { createCanvas } from 'canvas';
import { RootState } from '../redux/state/RootState';
import ActionsComp from '../components/Actions';
import { areaValues, avatarsValues, bossesValues, difficultyValues, escapeValues, logoValues, modeValues, morphValues, startValues, themeValues } from '../model/SliderValues';

export default function Actions() {
    const { settings, options, players, actions } = useSelector((state: RootState) => state)
    const {hidePlayers, hideLogo, hideSettings, hideTracker, hideAvatar, hideWins} = options
    const {theme, logo, mode, area, difficulty, start, morph, bosses, escape, avatars} = settings
    const {player1, player2} = players

    const dispatch = useDispatch()

    const emptyAvatars = avatarsValues[avatars] === 'EMPTY'


    const getApiUrl = () => {
        const { hidePlayers, hideLogo, hideSettings, hideWins, hideAvatar, hideTracker } = options
        const modeValue = modeValues[mode].replaceAll(' ', '_')

        const themeValue = themeValues[theme]    

        let apiUrl = `https://sm-overlay-service.vercel.app/api/overlay/${themeValue}`;
        apiUrl += hideLogo ? 
            '?hideLogo=true' : 
            `?logo=${logoValues[logo]}`;

        apiUrl += hideAvatar ? '&hideAvatar=true' : 
            `&avatars=${avatarsValues[avatars]}`

        apiUrl += hideSettings ? 
            '&hideSettings=true' : 
            `&mode=${modeValue}` +
            `&area=${areaValues[area]}` +
            `&difficulty=${difficultyValues[difficulty]}` +
            `&start=${startValues[start]}` +
            `&morph=${morphValues[morph]}` +
            `&bosses=${bossesValues[bosses]}` +
            `&escape=${escapeValues[escape]}`;
    
        apiUrl += hidePlayers ? 
            '&hidePlayers=true' : 
            `&player1=${player1}` +
            `&player2=${player2}`;

        apiUrl += hideTracker ? '&hideTracker=true' : ''
        apiUrl += hideWins ? '&hideWins=true' : ''

        return apiUrl.replaceAll(' ', '+')
    }

    const downloadOverlay = () => {
        const backgroundCanvas = document.getElementById('background');
        const logoCanvas = document.getElementById('logo');
        const streamCanvas = document.getElementById('streams');
        const namesCanvas = document.getElementById('names');
        const timersCanvas = document.getElementById('timers');
        const trackersCanvas = document.getElementById('trackers');
        const avatarsCanvas = document.getElementById('avatars');
        const winsCanvas = document.getElementById('wins');
        const playerAvatarsCanvas = document.getElementById('playerAvatars')
        const playersCanvas = document.getElementById('players');
        const settingsCanvas = document.getElementById('settings');

        const canvas = createCanvas(1280, 720);
        const context = canvas.getContext('2d');
        context.drawImage(backgroundCanvas, 0, 0);
        if (!hideLogo) {
            context.drawImage(logoCanvas, 0, 0);
        }

        context.drawImage(streamCanvas, 0, 0);
        context.drawImage(namesCanvas, 0, 0);
        context.drawImage(timersCanvas, 0, 0);

        if (!hideTracker) {
            context.drawImage(trackersCanvas, 0, 0);
        }
        if (!hideAvatar) {
            context.drawImage(avatarsCanvas, 0, 0);
        }
        if (!hideWins) {
            context.drawImage(winsCanvas, 0, 0);
        }
        if (!hideAvatar && !emptyAvatars) {
            context.drawImage(playerAvatarsCanvas, 0, 0);
        }

        if (!hidePlayers) {
            context.drawImage(playersCanvas, 0, 0);
        }
        if (!hideLogo) {
            context.drawImage(logoCanvas, 0, 0);
        }
        if (!hideSettings) {
            context.drawImage(settingsCanvas, 0, 0);
        }

        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.download = "sm-overlay.png";
        link.href = dataURL.replace("image/png", "image/octet-stream");
        link.click();
        link.remove();
    }

    const showApiCallPopover = () => {
        navigator.clipboard.writeText(getApiUrl())
        dispatch({type:'ACTIONS/change-showApiCall', value: true})
    }
    const hideApiCallPopover = () => {
        dispatch({type:'ACTIONS/change-showApiCall', value: false})
    }

    const { showApiCall } = actions
    const props = { downloadOverlay, showApiCallPopover, hideApiCallPopover, showApiCall }
    return <ActionsComp {...props} />
}
