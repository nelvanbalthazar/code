import libConfig from './lib-config';
import core from './core';
import marketAuction from './pages/market-auction';
import auctionListing from './pages/auction-listing';
import basePrice from './pages/base-price';
import inputMobile from './pages/input-mobile';
import trackCar from './pages/track-car';
import calculationPrice from './pages/calculation-price';
import login from './pages/login';
import sample from './pages/sample';
import blank from './pages/blank';
import app from './vue-config';
import API from './API';
API.init();

var page = $('#app').attr('data-page');
switch(page){
    case "track-car" : 
        trackCar.init();
    break;
    case "market-auction" : 
        marketAuction.init();
    break;
    case "input-mobile" : 
        inputMobile.init();
    break;
    case "auction-listing" : 
        auctionListing.init();
    break;
    case "base-price" : 
        basePrice.init();
    break;
    case "calculation-price" : 
        calculationPrice.init();
    break;
    case "login" : 
        login.init();
    break;
    case "sample" : 
        sample.init();
    break;
    case "blank" : 
        blank.init();
    break;
}

libConfig.init();
core.init();
app;
