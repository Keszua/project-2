const express = require ('express');
//const { COOKIE_ADDONS, COOKIE_BASES } = require('../data/cookie-data');

class ConfiguratorRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.router = express.Router();
        this.setUpRoutes();
    }
    
    setUpRoutes() {
        this.router.get('/select-base/:baseName', this.selectBase);
        this.router.get('/add-addon/:addonName', this.addAddon);
        this.router.get('/delete-addon/:addonName', this.deleteAddon);
    }

    selectBase = (req, res) => {
        const {baseName} = req.params ;

        if (!this.cmapp.data.COOKIE_BASES[baseName]) {
            //return res.send("nu nu nu!")
            return this.cmapp.showErrorPage(res, `There is no such base as ${baseName}`);
        }

        res
            .cookie('cookieBase', baseName)
            .render('configurtor/base-selected', {
                baseName,
            });
    };

    addAddon = (req, res) => {
        const {addonName} = req.params ;

        // walidacja na dodanie czegoś co nie istnieje (zły link url)
        if (!this.cmapp.data.COOKIE_ADDONS[addonName]) {
            //return res.send("nu nu nu!")
            return this.cmapp.showErrorPage(res, `There is no such addon as ${addonName}`);
        }

        const addons = this.cmapp.getAddonsFromReq(req);

        //walidacja na ponowne dodanie 
        if (addons.includes(addonName)) {
            return this.cmapp.showErrorPage(res, `${addonName} is already on your cookie. You cannot add it twice`);
        }

        addons.push(addonName);

        res
            .cookie('cookieAddons', JSON.stringify(addons))
            .render('configurtor/added', {
                addonName,
            });
    };

    deleteAddon = (req, res) => {
        const {addonName} = req.params ;

        const oldAddons = this.cmapp.getAddonsFromReq(req);

        if(!oldAddons.includes(addonName)) {
            return this.cmapp.showErrorPage(res, `Cannot delete something that isn't alredy added to the cookie, ${addonName} not found on cookie.`);
        }

        const addons = oldAddons.filter( addon => addon !== addonName);

        res
            .cookie('cookieAddons', JSON.stringify(addons))
            .render('configurtor/deleted', {
                addonName,
            });
    };
}

module.exports = {
    ConfiguratorRouter,
}