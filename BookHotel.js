import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const BookHotel = () => {
    const navigate = useNavigate();
    return (
        <>
            <Stack paddingLeft='0.5cm' paddingBottom='0.5cm' >
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200" // Adjust height as needed
                                image="https://pix10.agoda.net/hotelImages/686810/-1/c09f923160ee26f8999ca844af194f5d.jpg?ca=0&ce=1&s=1024x768"
                                alt="Goutham Grand Hotel"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Goutham Grand Hotel
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Goutham Grand a unit of Goutham Residency,a premium luxuryfirst class full service hotel in Tenali
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' onClick={() => navigate('/gouthamgrand')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* Add other Grid items similarly */}
                    
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="190" // Adjust height as needed
                                image="https://image.wedmegood.com/resized/800X/uploads/member/1206504/1587128358_Screenshot_from_2020_04_17_18_24_53.png"
                                alt="Novotel Vijayawada Varun"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Novotel Vijayawada Varun
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    AVAILABILITIES: Free Breakfast, Free wifi, superking view Room with city view
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' onClick={() => navigate('/novotel')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                margin-top= "10"s
                                height="220" // Adjust height as needed
                                image="https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1526992900/Hotel/Rajahmundry/00012004/107967699_56eDSh.jpg"
                                alt="green iguana"
                                alt="Novotel Vijayawada Varun"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Akshitha's Grand
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    AVAILABILITIES: Free Breakfast, Free wifi, superking view Room with city view
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' onClick={() => navigate('/novotel')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                margin-top= "10"
                                height="220" // Adjust height as needed
                                image="https://www.holidify.com/images/cmsuploads/compressed/TajHotels1_20191120170231.jpg"
                                alt="green iguana"
                                alt="Hotel momo"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Bloom Hotel
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    AVAILABILITIES: Free Breakfast, Free wifi, superking view Room with city view
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' onClick={() => navigate('/novotel')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                margin-top= "10"
                                height="200" // Adjust height as needed
                                image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="green iguana"
                                alt="Novotel Vijayawada Varun"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lemon Tree Premium
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    AVAILABILITIES: Free Breakfast, Free wifi, superking view Room with city view
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' onClick={() => navigate('/novotel')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                margin-top= "10"
                                height="200" // Adjust height as needed
                                image="https://images.unsplash.com/photo-1590447158019-883d8d5f8bc7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
                                alt="green iguana"
                                alt="Novotel Vijayawada Varun"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Inntel Hotels
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    AVAILABILITIES: Free Breakfast, Free wifi, superking view Room with city view
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' onClick={() => navigate('/novotel')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                margin-top= "10"
                                height="200" // Adjust height as needed
                                image="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="green iguana"
                                alt="Novotel Vijayawada Varun"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Hotel La Rannie
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    AVAILABILITIES: Free Breakfast, Free wifi, superking view Room with city view
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' onClick={() => navigate('/novotel')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                margin-top= "10"
                                height="200" // Adjust height as needed
                                image="https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="green iguana"
                                alt="Novotel Vijayawada Varun"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Crown Hotel
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    AVAILABILITIES: Free Breakfast, Free wifi, superking view Room with city view
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' onClick={() => navigate('/novotel')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                margin-top= "10"
                                height="200" // Adjust height as needed
                                image="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="green iguana"
                                alt="Novotel Vijayawada Varun"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                The Hotel Vrindhavan
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    AVAILABILITIES: Free Breakfast, Free wifi, superking view Room with city view
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' onClick={() => navigate('/novotel')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                margin-top= "10"
                                height="200" // Adjust height as needed
                                image="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="green iguana"
                                alt="Novotel Vijayawada Varun"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Queen Hotel
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    AVAILABILITIES: Free Breakfast, Free wifi, superking view Room with city view
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' onClick={() => navigate('/novotel')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                margin-top= "10"
                                height="200" // Adjust height as needed
                                image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="green iguana"
                                alt="Novotel Vijayawada Varun"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Park Plaza
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    AVAILABILITIES: Free Breakfast, Free wifi, superking view Room with city view
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='contained' onClick={() => navigate('/novotel')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            </Stack>
        </>
    );
}
