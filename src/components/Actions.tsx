
import { Alert, Button, Fade, Grid, Snackbar, Stack } from '@mui/material';
import { styled } from '@mui/system';

export type ActionsProps = {
    downloadOverlay: () => void
    showApiCallPopover: () => void
    hideApiCallPopover: () => void
    showApiCall: boolean
}

export default function ActionsComp(props: ActionsProps) {
    const { downloadOverlay, showApiCallPopover, hideApiCallPopover, showApiCall} = props

    const ButtonList = styled(Grid)({
        '& button:not(:last-child)': {
            marginRight: 16
        }
    })

    const CenteredPopover = styled(Snackbar)({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    })

    return (
        <>
            <CenteredPopover 
              open={showApiCall} 
              autoHideDuration={5000}
              onClose={hideApiCallPopover}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transitionDuration={{ enter: 1000, exit: 3000 }}
              TransitionComponent={Fade}
            >
                <Alert severity="info">Copied web service url to clipboard</Alert>
            </CenteredPopover>

            <Stack direction='row' justifyContent='space-between'>
                <ButtonList>
                    <Button variant="contained" color="primary" onClick={downloadOverlay}>Download</Button>
                    <Button variant="outlined" color="primary" onClick={showApiCallPopover}>Copy API call</Button>
                </ButtonList>
                <ButtonList>
                    <Button variant="text" color="primary" onClick={() => window.open('https://github.com/djroush/sm-overlay')}>UI Source Code</Button>
                    <Button variant="text" color="primary" onClick={() => window.open('https://github.com/djroush/sm-overlay-service')}>API Source Code</Button>
                </ButtonList>
            </Stack>
        </>
    )
}
