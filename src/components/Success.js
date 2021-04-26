import React, { useState } from 'react';
import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MapIcon from '@material-ui/icons/Map';
import CloseIcon from '@material-ui/icons/Close';
import { FaUber, FaApple, FaGoogle, FaWaze } from 'react-icons/fa';

const churchDestination = '44.47030101037744,26.104910955904465',
      restaurantDestination = '44.465484302605674,26.099108204121507';

const Success = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <h1>Ne bucuram tare mult ca o sa vii!</h1>
                <Button
                    startIcon={< MapIcon />}
                    variant="contained"
                    color="primary"
                    onClick={() => setOpen(true)} 
                >
                    Vezi cum ajungi
                </Button> 
                <Modal 
                    onClose={() => setOpen(false)}
                    aria-labelledby="wdg-modal-title"
                    aria-describedby="wdg-modal-description"
                    className='wdg__modal'
                    open={open}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className='wdg__paper'>
                            
                            <div id="wdg-modal-description">
                                
                                <h4>Inspre Cununie si Biserica</h4>
                                <div className="wdg__container_btn wdg___small_font">
                                    
                                <div>
                                <Button
                                    startIcon={<FaGoogle />}
                                    variant="contained"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://www.google.com/maps/search/?api=1&query="' + churchDestination + '"';
                                        }} 
                                >
                                    Google Maps
                                </Button>
                                <Button
                                    startIcon={<FaApple />}
                                    variant="contained"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='http://maps.apple.com/?ll=' + churchDestination;
                                        }}
                                >
                                    iOS Maps
                                </Button>
                                
                                </div>
                                <div>
                                <Button
                                    startIcon={<FaWaze />}
                                    variant="contained"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='https://waze.com/ul?ll='+ churchDestination +'&navigate=yes&z=10';
                                        }}
                                >
                                    Waze
                                </Button>
                                <Button
                                    startIcon={<FaUber />}
                                    variant="contained"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.location.href='uber://?action=setPickup&client_id=jLp_vAlcYZcEbI8AXu917SzgHrd49saV&pickup=my_location&dropoff[formatted_address]=Biserica%20Sf%C3%A2nta%20Sofia%2C%20Calea%20Floreasca%2C%20Bucharest%2C%20Romania&dropoff[latitude]=44.470167&dropoff[longitude]=26.104925';
                                        }}
                                >
                                    
                                    Uber
                                </Button>
                                </div>
                                </div>
                            </div>

                            <div id="wdg-modal-description">
                                
                                <h4>Inspre Nunta si Petrecere</h4>
                                <div className="wdg__container_btn wdg___small_font">
                                    <div>
                                    <Button
                                        startIcon={<FaGoogle />}
                                        variant="contained"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://www.google.com/maps/search/?api=1&query="' + restaurantDestination + '"';
                                            }} 
                                    >
                                        Google Maps
                                    </Button>
                                    <Button
                                        startIcon={<FaApple />}
                                        variant="contained"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='http://maps.apple.com/?ll=' + restaurantDestination;
                                            }}
                                    >
                                        iOS Maps
                                    </Button>
                                    </div>
                                    <div>
                                    <Button
                                        startIcon={<FaWaze />}
                                        variant="contained"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='https://waze.com/ul?ll='+ restaurantDestination +'&navigate=yes&z=10';
                                            }}
                                    >
                                        Waze
                                    </Button>
                                    <Button
                                        startIcon={<FaUber />}
                                        variant="contained"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.location.href='uber://?action=setPickup&client_id=jLp_vAlcYZcEbI8AXu917SzgHrd49saV&pickup=my_location&dropoff[formatted_address]=Gr%C4%83dina%20Floreasca%2C%20Bulevardul%20Mircea%20Eliade%2C%20Bucharest%2C%20Romania&dropoff[latitude]=44.465392&dropoff[longitude]=26.099096';
                                            }}
                                    >
                                        
                                        Uber
                                    </Button>
                                    </div>
                                </div>
                            </div>

                            <p>Daca nu ai nevoie de directii, ne vedem direct acolo!</p>
                            <div id="wdg-modal-description">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => setOpen(false)}
                                >
                                    < CloseIcon />
                                </Button>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </React.Fragment>
        </MuiThemeProvider>
        )
    }

export default Success;