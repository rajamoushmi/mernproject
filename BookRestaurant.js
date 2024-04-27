import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const BookRestaurant = () => {
    const navigate = useNavigate();
    
    return (
        <>
            <Stack paddingLeft='0.5cm' paddingBottom='0.5cm'>
                <Grid container spacing={2}>
                   

                    {/* Add other Grid items similarly */}
                    
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://plus.unsplash.com/premium_photo-1670984940113-f3aa1cd1309a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="cascades restaurant"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                     Nicoli
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    If you feel hungry after visiting Sri Kanaka Mahalakshmi Temple, have a meal at this restaurant. Order dishes of Chinese and Indian cuisines at Cascades Restaurant. Try good chicken biryani, paneer and chicken this place offers. The cooks here prepare tasty ice cream and good brownies. It's a must when visiting this spot to taste delicious cordial. Great coffee is the right choice.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='outlined' onClick={() => navigate('goutham-grand')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="cascades restaurant"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    RR Darbar
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    If you feel hungry after visiting Sri Kanaka Mahalakshmi Temple, have a meal at this restaurant. Order dishes of Chinese and Indian cuisines at Cascades Restaurant. Try good chicken biryani, paneer and chicken this place offers. The cooks here prepare tasty ice cream and good brownies. It's a must when visiting this spot to taste delicious cordial. Great coffee is the right choice.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='outlined' onClick={() => navigate('goutham-grand')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1515669097368-22e68427d265?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="cascades restaurant"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Gardenia
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    If you feel hungry after visiting Sri Kanaka Mahalakshmi Temple, have a meal at this restaurant. Order dishes of Chinese and Indian cuisines at Cascades Restaurant. Try good chicken biryani, paneer and chicken this place offers. The cooks here prepare tasty ice cream and good brownies. It's a must when visiting this spot to taste delicious cordial. Great coffee is the right choice.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='outlined' onClick={() => navigate('goutham-grand')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="cascades restaurant"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    The Vault
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    If you feel hungry after visiting Sri Kanaka Mahalakshmi Temple, have a meal at this restaurant. Order dishes of Chinese and Indian cuisines at Cascades Restaurant. Try good chicken biryani, paneer and chicken this place offers. The cooks here prepare tasty ice cream and good brownies. It's a must when visiting this spot to taste delicious cordial. Great coffee is the right choice.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='outlined' onClick={() => navigate('goutham-grand')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjXGF4p2SUvOs59tDHDQtja15OFdAFs5B1A&usqp=CAU"
                                alt="cascades restaurant"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cascades Restaurant
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    If you feel hungry after visiting Sri Kanaka Mahalakshmi Temple, have a meal at this restaurant. Order dishes of Chinese and Indian cuisines at Cascades Restaurant. Try good chicken biryani, paneer and chicken this place offers. The cooks here prepare tasty ice cream and good brownies. It's a must when visiting this spot to taste delicious cordial. Great coffee is the right choice.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='outlined' onClick={() => navigate('goutham-grand')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1567667778211-b19f5a4e1efe?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="cascades restaurant"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Cross Roads
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    If you feel hungry after visiting Sri Kanaka Mahalakshmi Temple, have a meal at this restaurant. Order dishes of Chinese and Indian cuisines at Cascades Restaurant. Try good chicken biryani, paneer and chicken this place offers. The cooks here prepare tasty ice cream and good brownies. It's a must when visiting this spot to taste delicious cordial. Great coffee is the right choice.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='outlined' onClick={() => navigate('goutham-grand')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1570560258879-af7f8e1447ac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="cascades restaurant"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Food Republic
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    If you feel hungry after visiting Sri Kanaka Mahalakshmi Temple, have a meal at this restaurant. Order dishes of Chinese and Indian cuisines at Cascades Restaurant. Try good chicken biryani, paneer and chicken this place offers. The cooks here prepare tasty ice cream and good brownies. It's a must when visiting this spot to taste delicious cordial. Great coffee is the right choice.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='outlined' onClick={() => navigate('goutham-grand')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="cascades restaurant"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Caffealy Restaurant
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    If you feel hungry after visiting Sri Kanaka Mahalakshmi Temple, have a meal at this restaurant. Order dishes of Chinese and Indian cuisines at Cascades Restaurant. Try good chicken biryani, paneer and chicken this place offers. The cooks here prepare tasty ice cream and good brownies. It's a must when visiting this spot to taste delicious cordial. Great coffee is the right choice.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='outlined' onClick={() => navigate('goutham-grand')}>MORE INFO</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/* Add remaining Grid items similarly */}
                </Grid>
            </Stack>
        </>
    );
}
export default BookRestaurant;
