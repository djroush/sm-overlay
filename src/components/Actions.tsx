
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

    return (
        <>
            <Snackbar 
              open={showApiCall} 
              autoHideDuration={4000}
              onClose={hideApiCallPopover}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transitionDuration={{ enter: 1000, exit: 3000 }}
              TransitionComponent={Fade}
            >
                <Alert severity="info">Copied download link to clipboard</Alert>
            </Snackbar>

            <Stack direction='row' justifyContent='space-between'>
                <ButtonList>
                    <Button variant="contained" color="primary" onClick={downloadOverlay}>Download</Button>
                    <Button variant="outlined" color="primary" onClick={showApiCallPopover}>Copy link</Button>
                </ButtonList>
                <ButtonList>
                    <Button variant="text" color="primary" onClick={() => window.open('https://github.com/djroush/sm-overlay')}>UI Source Code</Button>
                    <Button variant="text" color="primary" onClick={() => window.open('https://github.com/djroush/sm-overlay-service')}>WS Source Code</Button>
                </ButtonList>
            </Stack>
        </>
    )
}
