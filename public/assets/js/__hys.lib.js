const __hysLib =
{
    apiClientId: __api_client_id,
    apiClientName: __api_client_name,
    baseURI: __api_base_url,
    defaultCookieExpiry: 86400,
    EndPoints: {
        "token": "token",
        "occasions": "occasions"
    },
    hysCookies: {
        'token': '__hys_lt__',
        'occasions': '__hys_oc__',
        'occasion_details': '__hys__ocd_{}__'
    },

    getToken: async function(callback) {
        let token = __UTILS.Cookie.get(this.hysCookies['token']);
        if(token) return token;

        let url = `${this.baseURI}/${this.EndPoints['token']}?clientId=${this.apiClientId}&clientName=${this.apiClientName}`;
        try {
            let req = await fetch(url);
            let res = await req.json();

            __UTILS.Cookie.set(this.hysCookies['token'], res.accessToken, 300);
            return res.accessToken;

        } catch (error) {
            console.log(error);
        }
    },

    getOccasion: async function(callback) {
        let occasions = __UTILS.Cookie.get(this.hysCookies['occasions']);

        if (occasions)
            return JSON.parse(occasions)

        let url =`${this.baseURI}/${this.EndPoints['occasions']}`;
        let headers = await this.__get_auth_headers();

        try {
            let req = await fetch(url, headers);
            let res = await req.json();

            __UTILS.Cookie.set(this.hysCookies['occasions'], JSON.stringify(res.occasions), this.defaultCookieExpiry); // 1 day expiry
            return res.occasions;

        } catch (error) {
            console.log(error);
        }
    },

    listOccasions: async function() {
        let occasions = await this.getOccasion();

        let source   = $('#occasions-template').html();
        let template = Handlebars.compile(source);
        $('.home-category-icons').html(
            template({'records': occasions}));
    },

    getOccasionCards: async function(oid) {
        let cookie_name = this.hysCookies['occasion_details'].replace('{}', oid);
        let od = __UTILS.Cookie.get(cookie_name);

        if(od) return JSON.parse(od);

        let url = `${this.baseURI}${this.EndPoints['occasions']}/${oid}/cards`;
        let headers = await this.__get_auth_headers();

        let req = await fetch(url, headers);
        let res = await req.json();

        __UTILS.Cookie.set(cookie_name, JSON.stringify(res), this.defaultCookieExpiry); // 1 day expiry
        return res;
    },

    listOccasionCards: async function(oid) {
        let od = await this.getOccasionCards(oid);
        let source   = $('#occasions-details-template').html();
        let template = Handlebars.compile(source);
        $('.occasions-cards-container').html(
            template({'records': od['cards'], 'oid': oid, 'title': od['occasionName']}));
    },

    getCardDetails: async function(oid, cid) {
        let occasions = await this.getOccasionCards(oid)
        let card = false;

        if(!occasions)
            return false;

        for(k in occasions.cards)
            if(occasions.cards[k]['cardId'] == cid) {
                card = occasions.cards[k];
                break;
            }

        return {
            'occasionId': occasions.occasionId,
            'occasionName': occasions.occasionName,
            'card': card
        };
    },

    displayCardDetails: async function(oid, cid) {
        let cd = await this.getCardDetails(oid, cid);

        let source   = $('#card-details-template').html();
        let template = Handlebars.compile(source);
        $('.card-details-container').html(
            template({'record': cd}));
    },

    // helper funcs
    __get_auth_headers: async function() {
        let token = await this.getToken();
        return {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
    },
    __get_time_difference: function (ts) {
        let d = new Date();
        return (ts - d) / 1000;
    }
};

