"use client"
import { Box,Button, Card, Stack, CardMedia, Grid, Typography, TextField } from "@mui/material";
import { useTheme } from '@mui/material/styles'; //esta va ligada al provider
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import UserCampaignsItemParticipants from "./UserCampaignsItemParticipants";
import { useRouter } from 'next/navigation'


export default function UserCampaignsCard({userCampaignData}){
    const theme = useTheme();
    const router = useRouter();

    const userItemParticipant = [{"username": "Erika",  "campaignName": "Test 1", "ID":"1"}, {"username": "Juan", "campaignName": "Test 2", "ID":"2"}]
    
    const editCampaign = () => {
        console.log("Editando campaña")
        router.push('/CreateCampaigns', { scroll: false }); // Cambia la URL a '/Reviews'
       
    };
    return(

        <Box sx={{ 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 5,
            flexDirection: "column"
        }}>

<Card sx={{ p: 4, backgroundColor: theme.palette.cardBg.main,  width: '100vh'}}>
            <Stack>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Stack direction="row" spacing={2} sx={{  display: "flex",  alignItems: "center", pt: 4, pb: 4}} >
                        <CardMedia sx={{ borderRadius: '50%', width: '50px', height: '50px' }}
                        image="https://as2.ftcdn.net/v2/jpg/04/42/57/73/1000_F_442577398_uetMYujiwcmo5yaZmXCrmvs7YWH7OiC9.jpg"
                        title="Card img">
                        </CardMedia>
                        <Typography color={theme.palette.cardText.main} variant="body" > {userCampaignData.username} </Typography>
                    </Stack>

                    <CardMedia sx={{  width: '365px' ,height: '212px' }}
                        image="https://as2.ftcdn.net/v2/jpg/04/42/57/73/1000_F_442577398_uetMYujiwcmo5yaZmXCrmvs7YWH7OiC9.jpg"
                        title="Card img">
                    </CardMedia>

                    <Typography color="textSecondary" variant="h4" sx={{pt: 4}}> { userCampaignData.campaignName} </Typography>
                    
                    {/* <Button variant="contained" sx={{mb: 4}}>Unirse</Button>
                     */}
                     <Stack  direction="row">
                        <Button variant="contained" sx={{mb: 4}}>Invitar</Button>
                        <TextField 
                        id="outlined-basic" 
                        //label="Outlined" 
                        variant="outlined"
                        InputProps={{
                            style: {
                              borderRadius: "30px",
                              background: theme.palette.inputBackground.main
                            }
                          }} 
                        />
                    </Stack> 
                    <Stack direction="row" spacing={2} sx={{  display: "flex",  alignItems: "center",}} >
                        <CardMedia sx={{ borderRadius: '50%', width: '50px', height: '50px' }}
                        image="https://as2.ftcdn.net/v2/jpg/04/42/57/73/1000_F_442577398_uetMYujiwcmo5yaZmXCrmvs7YWH7OiC9.jpg"
                        title="Card img">
                        </CardMedia>
                        <Typography color={theme.palette.cardText.main} variant="body">Texto pequeño</Typography>
                        <PanoramaFishEyeIcon></PanoramaFishEyeIcon>
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                <Button variant="contained" onClick={editCampaign} sx={{mb: 4}}>Editar campaña</Button>
                <Button variant="contained" sx={{mb: 4}}>Borrar campaña</Button>
                    
                <h2>Palabra</h2>
                <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                 <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                 <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                 <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                 <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                 <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                </Grid>
            </Grid>
            
            <Card sx={{ p: 4, backgroundColor: theme.palette.cardFilterColor.main}}>
            <Box sx={{ 
            pb: 3 
            }}>

            <Typography color={theme.palette.cardText.main} variant="body"  sx={{  pt: 4, pb: 4}}>Participantes</Typography>
            </Box>

            
            {
            userItemParticipant.map((itemParticipant,index) =>( 
                <UserCampaignsItemParticipants key={itemParticipant.ID} userItemParticipant={itemParticipant} ></UserCampaignsItemParticipants>
                
            ))
            }
            </Card>
            </Stack>
        </Card>
        </Box>
        
    )
}