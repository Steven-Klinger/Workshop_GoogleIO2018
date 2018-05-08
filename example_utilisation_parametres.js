'use strict';

const {dialogflow} = require('actions-on-google');
const functions = require('firebase-functions');

const app = dialogflow({debug: true});

app.intent('code', (conv, {pseudo}) => {
    console.log('Pseudo :  ' + JSON.stringify(pseudo));
    let age = '42';
    let pseudos = pseudo;
    switch (pseudos) {
        case `Vorthil`:
          age = '24';
          conv.ask(`L'âge de ${pseudos} ` +  `est de ` + age + " ans");
          break;
        case `Despendo`:
          age = '26';
          conv.ask(`L'âge de ${pseudos} ` +  `est de ` + age + " ans");
          break;
        default:
          conv.ask(`L'utilisateur demandé n'existe pas dans mon système`);
      }
    //conv.close(`You said ${pseudo}`);
    });

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);